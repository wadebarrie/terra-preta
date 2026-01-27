# Wistia Video Integration Guide

Your site now supports **Wistia video hosting** with full CMS control! 🎥

## ✅ What's Been Set Up

### 1. Wistia Video Component
**Location:** `client/src/components/WistiaVideo.tsx`

Features:
- ✅ Responsive video embedding
- ✅ Autoplay control
- ✅ Loop control
- ✅ Show/hide controls
- ✅ Mute control
- ✅ Automatic URL parsing
- ✅ Optimized loading

### 2. CMS Integration
**Location:** `client/public/admin/config.yml`

The CMS now has a "Hero Video" section with these controls:
- **Wistia Video URL or ID** - Text field for video link
- **Autoplay** - Toggle (default: true)
- **Loop** - Toggle (default: true)
- **Show Controls** - Toggle (default: false)
- **Muted** - Toggle (default: true)
- **Gradient Overlay** - Collapsible section with:
  - **Top Opacity** - Number slider (0-100%, default: 60)
  - **Bottom Opacity** - Number slider (0-100%, default: 90)
  - **Direction** - Dropdown (to-b, to-t, to-br, to-bl, to-tr, to-tl)

### 3. Home Page Integration
**Location:** `client/src/pages/Home.tsx`

The hero section now automatically uses Wistia videos from CMS.

---

## 🎬 How to Use

### Step 1: Upload Video to Wistia

1. Log into your [Wistia account](https://wistia.com/)
2. Upload your video
3. Copy the video URL or ID

### Step 2: Add to CMS

1. Go to your site's `/admin`
2. Click **Pages** → **Home Page**
3. Scroll to **Hero Video** section
4. Fill in the fields:

```
Wistia Video URL or ID: https://home.wistia.com/medias/abc123xyz
                         (or just: abc123xyz)
Autoplay: ☑ Yes
Loop: ☑ Yes
Show Controls: ☐ No
Muted: ☑ Yes (recommended for autoplay)

Gradient Overlay (optional):
  Top Opacity: 60 (lighter at top)
  Bottom Opacity: 90 (darker at bottom)
  Direction: to-b (top to bottom)
```

5. Click **Publish**

### Step 3: Done! 🎉

Your video will appear on the home page hero section with the settings you chose.

---

## 📝 Supported URL Formats

The component automatically extracts the video ID from these formats:

✅ **Full URLs:**
- `https://home.wistia.com/medias/abc123xyz`
- `https://fast.wistia.net/embed/iframe/abc123xyz`
- `https://fast.wistia.net/embed/medias/abc123xyz`

✅ **Just the ID:**
- `abc123xyz`

All formats work the same way!

---

## 🎛️ Video Settings Explained

### Autoplay
- **On (✓)**: Video starts playing when page loads
- **Off ( )**: User must click play button
- **Recommendation**: ON for background videos, OFF for content videos

### Loop
- **On (✓)**: Video repeats continuously
- **Off ( )**: Video stops at the end
- **Recommendation**: ON for background videos, OFF for content videos

### Show Controls
- **On (✓)**: Shows play/pause, volume, fullscreen buttons
- **Off ( )**: Minimal player, no visible controls
- **Recommendation**: OFF for background videos, ON for content videos

### Muted
- **On (✓)**: Video has no sound
- **Off ( )**: Video plays with sound
- **Recommendation**: ON for autoplay (browsers require it)
- **Note**: Browsers block autoplay with sound!

### Gradient Overlay

Control the dark overlay on top of the video to ensure text is readable:

#### Top Opacity (0-100%)
- **Lower values (20-40)**: Video is more visible at the top
- **Medium values (50-70)**: Balanced visibility
- **Higher values (80-100)**: Video is barely visible at the top
- **Recommendation**: 60 for a good balance

#### Bottom Opacity (0-100%)
- **Lower values (20-40)**: Video is more visible at the bottom
- **Medium values (50-70)**: Balanced visibility
- **Higher values (80-100)**: Video is barely visible at the bottom
- **Recommendation**: 90 to darken the bottom for better text readability

#### Direction
- **to-b**: Top to bottom (most common for hero sections)
- **to-t**: Bottom to top (reverse gradient)
- **to-br**: Top-left to bottom-right (diagonal)
- **to-bl**: Top-right to bottom-left (diagonal)
- **to-tr**: Bottom-left to top-right (diagonal)
- **to-tl**: Bottom-right to top-left (diagonal)
- **Recommendation**: `to-b` for standard hero sections

**Example Settings:**
- Light overlay (more video visible): Top: 30, Bottom: 60
- Standard overlay (balanced): Top: 60, Bottom: 90
- Dark overlay (text-focused): Top: 80, Bottom: 100

---

## 🎨 Common Configurations

### Background Video (Hero Section)
```
Autoplay: ✓ Yes
Loop: ✓ Yes
Show Controls: ☐ No
Muted: ✓ Yes
Gradient:
  Top Opacity: 60
  Bottom Opacity: 90
  Direction: to-b
```
**Result:** Video plays automatically, loops forever, no controls, silent, with balanced gradient overlay

### Content Video (Inline)
```
Autoplay: ☐ No
Loop: ☐ No
Show Controls: ✓ Yes
Muted: ☐ No
```
**Result:** User clicks to play, plays once, full controls, with sound

### Silent Looping Feature
```
Autoplay: ✓ Yes
Loop: ✓ Yes
Show Controls: ✓ Yes
Muted: ✓ Yes
```
**Result:** Plays automatically, loops, user can control if needed, silent

---

## 💡 Using WistiaVideo Component Elsewhere

You can use the Wistia component on any page:

### Basic Usage

```typescript
import { WistiaVideo } from "@/components/WistiaVideo";

<WistiaVideo 
  videoId="abc123xyz"
  autoplay={true}
  loop={true}
  controls={false}
  muted={true}
/>
```

### Background Video (Simplified)

```typescript
import { WistiaVideoBackground } from "@/components/WistiaVideo";

<WistiaVideoBackground videoId="abc123xyz" />
```

This automatically sets: autoplay=true, loop=true, controls=false, muted=true

### With URL Parsing

```typescript
import { WistiaVideo, extractWistiaId } from "@/components/WistiaVideo";

const url = "https://home.wistia.com/medias/abc123xyz";
const videoId = extractWistiaId(url);

<WistiaVideo videoId={videoId} autoplay={true} />
```

---

## 🔧 Advanced: Add Video to Other Pages

### Example: Product Page Video

**1. Update CMS config** (`client/public/admin/config.yml`):

```yaml
- label: "Product - Terra Revive"
  name: "terra-revive"
  file: "content/pages/terra-revive.json"
  fields:
    - { label: "Product Name", name: "productName", widget: "string" }
    - label: "Demo Video"
      name: "demoVideo"
      widget: "object"
      required: false
      fields:
        - { label: "Wistia Video ID", name: "wistiaId", widget: "string" }
        - { label: "Autoplay", name: "autoplay", widget: "boolean", default: false }
        - { label: "Show Controls", name: "controls", widget: "boolean", default: true }
```

**2. Update content file** (`content/pages/terra-revive.json`):

```json
{
  "productName": "Terra Revive",
  "demoVideo": {
    "wistiaId": "abc123xyz",
    "autoplay": false,
    "controls": true
  }
}
```

**3. Use in component** (`client/src/pages/product/TerraRevive.tsx`):

```typescript
import terraReviveContent from "../../../../content/pages/terra-revive.json";
import { WistiaVideo } from "@/components/WistiaVideo";

{terraReviveContent.demoVideo?.wistiaId && (
  <WistiaVideo
    videoId={terraReviveContent.demoVideo.wistiaId}
    autoplay={terraReviveContent.demoVideo.autoplay}
    controls={terraReviveContent.demoVideo.controls}
  />
)}
```

---

## 🎯 Benefits of Wistia

### vs Self-Hosting:
- ✅ **No storage costs** - Videos don't bloat your repo
- ✅ **Fast CDN delivery** - Optimized streaming
- ✅ **Adaptive bitrate** - Adjusts to user's connection
- ✅ **Analytics** - View counts, engagement, heatmaps
- ✅ **Easy management** - Update videos without deploying
- ✅ **Professional player** - Looks great, works everywhere

### vs YouTube:
- ✅ **No branding** - No YouTube logo or suggestions
- ✅ **Full control** - Complete customization
- ✅ **Privacy** - No tracking by Google
- ✅ **Professional** - Better for business sites
- ✅ **Lead generation** - Email gates, CTAs

---

## 📊 Wistia Features

### Free Plan Includes:
- **3 videos** (or 200 MB)
- **Unlimited views**
- **Analytics**
- **Customizable player**
- **Email capture**
- **Chapter markers**

### Plus Plan ($19/month):
- **10 videos**
- **HD quality**
- **Remove Wistia branding**
- **Advanced analytics**
- **A/B testing**

---

## 🧪 Testing

### Local Development:
```bash
pnpm dev
# Add a Wistia video ID in CMS
# Video should load and play!
```

### Production:
1. Deploy to Netlify
2. Go to `/admin`
3. Edit Home Page
4. Add Wistia video
5. Save and view live site

---

## 📱 Responsive Design

The Wistia component is **fully responsive**:
- ✅ 16:9 aspect ratio maintained
- ✅ Works on mobile, tablet, desktop
- ✅ Touch controls on mobile
- ✅ Fullscreen support
- ✅ Retina-ready thumbnails

---

## 🚨 Important Notes

### Autoplay Limitations
⚠️ **Browsers block autoplay with sound!**

To autoplay videos, you **must** set `muted: true`. This is a browser security feature, not a bug.

**Solution:**
- For background videos: Always mute
- For content videos: Don't autoplay, let user click

### Performance
- ✅ Wistia script loads asynchronously (no blocking)
- ✅ Videos lazy-load (don't slow down page)
- ✅ Thumbnails show while loading
- ✅ Optimized for SEO

---

## 🎨 Styling

The video player is fully responsive. To customize the container:

```typescript
<WistiaVideo
  videoId="abc123"
  className="rounded-lg shadow-xl"
/>
```

Or wrap it:

```typescript
<div className="max-w-4xl mx-auto p-4">
  <WistiaVideo videoId="abc123" />
</div>
```

---

## 🔍 SEO Considerations

Wistia videos are **SEO-friendly**:
- ✅ Video sitemaps supported
- ✅ Schema.org markup (add manually if needed)
- ✅ Thumbnail images indexed
- ✅ Transcripts can be added
- ✅ Faster than self-hosting

---

## 📚 Resources

- [Wistia Documentation](https://wistia.com/support)
- [Wistia Embed API](https://wistia.com/support/developers/player-api)
- [Video SEO Best Practices](https://wistia.com/learn/marketing/video-seo)

---

## ✅ Summary

You now have:
- ✅ **Wistia video component** - Reusable across site
- ✅ **CMS controls** - Edit videos without code
- ✅ **Home page integration** - Already working
- ✅ **Full customization** - Autoplay, loop, controls, mute
- ✅ **URL flexibility** - Accept any Wistia format
- ✅ **Production ready** - Tested and optimized

**Upload your video to Wistia and add it via the CMS!** 🎬
