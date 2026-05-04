import { createElement, useEffect } from 'react';

/** 16:9 — matches Wistia default embed `aspect` for this project’s hero. */
const DEFAULT_ASPECT = '1.7777777777777777';

interface WistiaVideoProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  muted?: boolean;
  className?: string;
  /** Aurora `aspect` attribute (width/height ratio). Ignored when `layout` is `cover`. */
  aspect?: string;
  /**
   * `cover` — scale a 16:9 player to fill the parent (clips overflow). Use for hero backgrounds.
   * `inline` — default responsive embed behavior.
   */
  layout?: 'inline' | 'cover';
}

/**
 * Wistia Aurora player (`wistia-player` web component).
 * @see https://docs.wistia.com/docs/player-quick-start
 */
export function WistiaVideo({
  videoId,
  autoplay = false,
  loop = false,
  controls = true,
  muted = false,
  className = '',
  aspect = DEFAULT_ASPECT,
  layout = 'inline',
}: WistiaVideoProps) {
  useEffect(() => {
    if (!document.getElementById('wistia-aurora-player-js')) {
      const playerScript = document.createElement('script');
      playerScript.id = 'wistia-aurora-player-js';
      playerScript.src = 'https://fast.wistia.com/player.js';
      playerScript.async = true;
      document.head.appendChild(playerScript);
    }

    const embedId = `wistia-aurora-embed-${videoId}`;
    if (!document.getElementById(embedId)) {
      const embedScript = document.createElement('script');
      embedScript.id = embedId;
      embedScript.src = `https://fast.wistia.com/embed/${videoId}.js`;
      embedScript.async = true;
      embedScript.type = 'module';
      document.head.appendChild(embedScript);
    }

    const styleId = `wistia-aurora-swatch-${videoId}`;
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent =
        `wistia-player[media-id='${videoId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch'); display: block; filter: blur(5px); padding-top: 56.25%; }`;
      document.head.appendChild(style);
    }
  }, [videoId]);

  const playerBase = {
    ...(autoplay ? { autoplay: true } : {}),
    ...(muted ? { muted: true } : {}),
    ...(loop ? { 'end-video-behavior': 'loop' } : {}),
    ...(!controls ? { 'controls-visible-on-load': 'false' } : {}),
  };

  const fillStyle = {
    width: '100%',
    height: '100%',
    display: 'block' as const,
  };

  if (layout === 'cover') {
    const playerProps = {
      ...playerBase,
      className: 'h-full w-full max-w-none',
      style: fillStyle,
      'media-id': videoId,
    };

    return (
      <div
        className={`h-full w-full min-h-0 overflow-hidden ${className}`.trim()}
        style={{
          containerType: 'size',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100cqw, calc(100cqh * 16 / 9))',
            aspectRatio: '16 / 9',
            maxWidth: 'none',
          }}
        >
          {createElement('wistia-player', playerProps)}
        </div>
      </div>
    );
  }

  const playerProps = {
    ...playerBase,
    className: `${className} w-full min-w-full h-full min-h-full max-w-none`.trim(),
    style: {
      ...fillStyle,
      minWidth: '100%',
      minHeight: '100%',
    } as const,
    'media-id': videoId,
    aspect,
  };

  return (
    <div
      className="w-full min-w-full h-full min-h-0 overflow-hidden"
      style={{ position: 'relative' }}
    >
      {createElement('wistia-player', playerProps)}
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
  layout = 'cover',
}: {
  videoId: string;
  className?: string;
  layout?: 'inline' | 'cover';
}) {
  return (
    <WistiaVideo
      videoId={videoId}
      autoplay={true}
      loop={true}
      controls={false}
      muted={true}
      className={className}
      layout={layout}
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
    /wistia\.com\/medias\/([a-z0-9]+)/i,
    /wistia\.com\/embed\/([a-z0-9]+)\.js/i,
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
