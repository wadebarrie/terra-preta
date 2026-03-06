/**
 * Google Analytics 4 Event Tracking
 * 
 * This module provides comprehensive tracking for:
 * - Qualified leads (email, form, phone)
 * - User engagement (calculators, CTAs, documents)
 * - Content engagement (scroll depth, page views)
 * - Lead intent signals (journey tracking)
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a qualified lead event in Google Analytics
 * @param method - The method used to qualify the lead ('email', 'form', 'phone')
 * @param additionalData - Optional additional event parameters
 */
export function trackQualifiedLead(
  method: 'email' | 'form' | 'phone',
  additionalData?: Record<string, any>
) {
  // Check if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'qualified_lead', {
      event_category: 'engagement',
      event_label: method,
      method: method,
      value: 100, // Assign value for conversion tracking
      ...additionalData,
    });
    
    console.log(`✅ GA4 Event: qualified_lead (${method})`, additionalData);
  } else {
    console.warn('⚠️ Google Analytics (gtag) not available');
  }
}

/**
 * Track email link click
 * @param emailAddress - The email address that was clicked
 */
export function trackEmailClick(emailAddress: string) {
  trackQualifiedLead('email', {
    email_address: emailAddress,
    link_url: `mailto:${emailAddress}`,
  });
}

/**
 * Track phone link click
 * @param phoneNumber - The phone number that was clicked
 */
export function trackPhoneClick(phoneNumber: string) {
  trackQualifiedLead('phone', {
    phone_number: phoneNumber,
    link_url: `tel:${phoneNumber}`,
  });
}

/**
 * Track contact form submission
 * @param formData - Optional form data to include in the event
 */
export function trackFormSubmission(formData?: {
  role?: string;
  company?: string;
  siteSize?: string;
  timeline?: string;
}) {
  trackQualifiedLead('form', {
    form_name: 'contact_form',
    ...formData,
  });
}

/**
 * Track calculator usage - strong buying intent signal
 * @param calculatorName - Name of the calculator used
 * @param results - Results/inputs from the calculator
 */
export function trackCalculatorUsage(
  calculatorName: 'pellet_selector' | 'cost_payback',
  results: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calculator_completed', {
      event_category: 'engagement',
      event_label: calculatorName,
      calculator_name: calculatorName,
      value: 50, // High intent signal
      ...results,
    });
    
    console.log(`✅ GA4 Event: calculator_completed (${calculatorName})`, results);
  }
}

/**
 * Track CTA button clicks
 * @param buttonText - Text of the CTA button
 * @param destination - Where the button leads (URL or action)
 * @param location - Where on the page/site the button is located
 */
export function trackCTAClick(
  buttonText: string,
  destination: string,
  location?: string
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: buttonText,
      button_text: buttonText,
      destination: destination,
      location: location || window.location.pathname,
      value: 25, // Medium intent signal
    });
    
    console.log(`✅ GA4 Event: cta_click (${buttonText})`, { destination, location });
  }
}

/**
 * Track document downloads (SDS, TDS, PDFs)
 * @param documentName - Name of the document
 * @param documentType - Type (SDS, TDS, case_study, etc.)
 */
export function trackDocumentDownload(
  documentName: string,
  documentType: string
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'document_download', {
      event_category: 'engagement',
      event_label: documentType,
      document_name: documentName,
      document_type: documentType,
      value: 30, // Technical interest signal
    });
    
    console.log(`✅ GA4 Event: document_download (${documentType})`, documentName);
  }
}

/**
 * Track scroll depth - measures content engagement
 * Automatically tracks when user scrolls to 25%, 50%, 75%, 90% of page
 */
export function attachScrollDepthTracking() {
  if (typeof window === 'undefined') return;

  const thresholds = [25, 50, 75, 90];
  const triggered = new Set<number>();

  const checkScrollDepth = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / scrollHeight) * 100;

    thresholds.forEach(threshold => {
      if (percentScrolled >= threshold && !triggered.has(threshold)) {
        triggered.add(threshold);
        
        if (window.gtag) {
          window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${threshold}%`,
            percent_scrolled: threshold,
            page_path: window.location.pathname,
          });
          
          console.log(`✅ GA4 Event: scroll_depth (${threshold}%)`, window.location.pathname);
        }
      }
    });
  };

  // Throttle scroll events
  let scrollTimeout: NodeJS.Timeout;
  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScrollDepth, 300);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Track page views with enhanced data
 * @param pagePath - Path of the page
 * @param pageTitle - Title of the page
 * @param pageCategory - Category (solution, product, calculator, evidence)
 */
export function trackPageView(
  pagePath: string,
  pageTitle: string,
  pageCategory?: string
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_category: pageCategory,
    });
    
    // Also track as custom dimension for better segmentation
    window.gtag('set', 'user_properties', {
      last_page_category: pageCategory,
    });
    
    console.log(`✅ GA4 Event: page_view`, { pagePath, pageTitle, pageCategory });
  }
}

/**
 * Track user journey - navigation patterns
 * Stores visited pages in session storage to understand user flow
 */
export function trackUserJourney() {
  if (typeof window === 'undefined') return;

  const journey = JSON.parse(sessionStorage.getItem('user_journey') || '[]');
  const currentPage = {
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
    title: document.title,
  };

  journey.push(currentPage);
  
  // Keep last 20 pages
  if (journey.length > 20) journey.shift();
  
  sessionStorage.setItem('user_journey', JSON.stringify(journey));

  // Track journey patterns (e.g., product → calculator → contact)
  if (journey.length >= 3) {
    const lastThree = journey.slice(-3).map((p: any) => p.path);
    const pattern = lastThree.join(' → ');
    
    // Track high-intent patterns
    if (pattern.includes('/product') && pattern.includes('/calculator') && pattern.includes('/contact')) {
      if (window.gtag) {
        window.gtag('event', 'high_intent_journey', {
          event_category: 'engagement',
          event_label: 'product_calculator_contact',
          journey_pattern: pattern,
          value: 75, // Very high intent
        });
        
        console.log(`✅ GA4 Event: high_intent_journey`, pattern);
      }
    }
  }
}

/**
 * Set user properties for segmentation
 * @param properties - User properties to set
 */
export function setUserProperties(properties: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
    console.log(`✅ GA4 User Properties Set`, properties);
  }
}

/**
 * Track time on page (called when user leaves page)
 */
export function trackTimeOnPage() {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();

  const trackTime = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // seconds
    
    if (window.gtag && timeSpent > 10) { // Only track if more than 10 seconds
      window.gtag('event', 'time_on_page', {
        event_category: 'engagement',
        event_label: window.location.pathname,
        time_seconds: timeSpent,
        page_path: window.location.pathname,
      });
      
      console.log(`✅ GA4 Event: time_on_page (${timeSpent}s)`, window.location.pathname);
    }
  };

  // Track on page unload
  window.addEventListener('beforeunload', trackTime);
  window.addEventListener('pagehide', trackTime);
}

/**
 * Attach email click tracking to all mailto: links on the page
 * Call this once when your app mounts
 */
export function attachEmailTracking() {
  if (typeof document === 'undefined') return;

  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a[href^="mailto:"]');
    if (target) {
      const href = target.getAttribute('href');
      if (href) {
        const email = href.replace('mailto:', '');
        trackEmailClick(email);
      }
    }
  });
}

/**
 * Attach phone click tracking to all tel: links on the page
 * Call this once when your app mounts
 */
export function attachPhoneTracking() {
  if (typeof document === 'undefined') return;

  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a[href^="tel:"]');
    if (target) {
      const href = target.getAttribute('href');
      if (href) {
        const phone = href.replace('tel:', '');
        trackPhoneClick(phone);
      }
    }
  });
}

/**
 * Attach CTA button tracking
 * Automatically tracks buttons with common CTA text
 */
export function attachCTATracking() {
  if (typeof document === 'undefined') return;

  const ctaKeywords = [
    'get a quote',
    'contact us',
    'get started',
    'request',
    'start a pilot',
    'add to quote',
    'calculate',
    'download',
    'learn more',
  ];

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const button = target.closest('button, a[role="button"], .btn');
    
    if (button) {
      const buttonText = button.textContent?.toLowerCase().trim() || '';
      const href = button.getAttribute('href') || '';
      
      // Check if it matches CTA keywords
      if (ctaKeywords.some(keyword => buttonText.includes(keyword))) {
        trackCTAClick(button.textContent?.trim() || '', href);
      }
    }
  });
}

/**
 * Initialize all automatic tracking
 * Call this once in your main App component
 */
export function initializeTracking() {
  attachEmailTracking();
  attachPhoneTracking();
  attachCTATracking();
  attachScrollDepthTracking();
  trackUserJourney();
  trackTimeOnPage();
  
  // Track page views on route changes
  if (typeof window !== 'undefined') {
    // Store original pushState and replaceState
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    // Override pushState to track navigation
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      trackUserJourney();
    };

    // Override replaceState to track navigation
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args);
      trackUserJourney();
    };

    // Track on popstate (back/forward buttons)
    window.addEventListener('popstate', () => {
      trackUserJourney();
    });
  }
  
  console.log('📊 Google Analytics comprehensive tracking initialized');
}
