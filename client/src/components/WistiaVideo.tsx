import { useEffect, useRef } from 'react';

interface WistiaVideoProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  muted?: boolean;
  className?: string;
}

/**
 * Wistia Video Player Component
 * 
 * @param videoId - The Wistia video ID (e.g., "abc123xyz")
 * @param autoplay - Whether to autoplay the video (default: false)
 * @param loop - Whether to loop the video (default: false)
 * @param controls - Whether to show player controls (default: true)
 * @param muted - Whether to mute the video (default: false, recommended true for autoplay)
 * @param className - Additional CSS classes
 */
export function WistiaVideo({
  videoId,
  autoplay = false,
  loop = false,
  controls = true,
  muted = false,
  className = '',
}: WistiaVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Wistia script is already loaded
    if (!document.getElementById('wistia-script')) {
      const script = document.createElement('script');
      script.id = 'wistia-script';
      script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {};
  }, [videoId]);

  // Build options string for Wistia
  const options = [
    autoplay && 'autoPlay=true',
    !controls && 'controlsVisibleOnLoad=false',
    muted && 'muted=true',
    loop && 'endVideoBehavior=loop',
    !controls && 'playbar=false',
    !controls && 'playButton=false',
    !controls && 'settingsControl=false',
    !controls && 'volumeControl=false',
    !controls && 'fullscreenButton=false',
    'fitStrategy=cover',
  ]
    .filter(Boolean)
    .join('&');

  return (
    <div
      ref={containerRef}
      className={`wistia_responsive_wrapper ${className}`}
      style={{ height: '100%', width: '100%', position: 'relative' }}
    >
      <div
        className={`wistia_embed wistia_async_${videoId} ${options ? `${options}` : ''}`}
        style={{ height: '100%', position: 'relative', width: '100%' }}
      >
        <div
          className="wistia_swatch"
          style={{
            height: '100%',
            left: 0,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            transition: 'opacity 200ms',
            width: '100%',
          }}
        >
          <img
            src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
            style={{ filter: 'blur(5px)', height: '100%', objectFit: 'cover', width: '100%' }}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Simple Wistia Video Background Component
 * Useful for hero sections with video backgrounds
 */
export function WistiaVideoBackground({
  videoId,
  className = '',
}: {
  videoId: string;
  className?: string;
}) {
  return (
    <WistiaVideo
      videoId={videoId}
      autoplay={true}
      loop={true}
      controls={false}
      muted={true}
      className={className}
    />
  );
}

/**
 * Extract Wistia video ID from various URL formats
 * 
 * Supports:
 * - https://home.wistia.com/medias/abc123xyz
 * - https://growdoug.wistia.com/medias/abc123xyz (with subdomain)
 * - https://fast.wistia.net/embed/iframe/abc123xyz
 * - Just the ID: abc123xyz
 */
export function extractWistiaId(url: string): string {
  // If it's already just an ID (no slashes or dots except wistia.com/net)
  if (!url.includes('/') || url.length < 15) {
    return url;
  }

  // Extract from common Wistia URL patterns (with subdomain support)
  const patterns = [
    /wistia\.com\/medias\/([a-z0-9]+)/i,      // Matches any.wistia.com/medias/ID
    /wistia\.net\/embed\/iframe\/([a-z0-9]+)/i,
    /wistia\.net\/embed\/medias\/([a-z0-9]+)/i,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  // If no pattern matches, assume it's already an ID
  return url;
}
