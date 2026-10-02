import { useEffect, useRef, useState } from 'react'

const API_SRC = 'https://www.youtube.com/iframe_api'

let apiPromise = null

function loadYouTubeApi() {
  if (apiPromise) return apiPromise

  apiPromise = new Promise((resolve, reject) => {
    if (window.YT?.PlayerFactory) {
      resolve(window.YT)
      return
    }

    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve(window.YT)
    }

    const tag = document.createElement('script')
    tag.src = API_SRC
    tag.async = true
    tag.onerror = () => reject(new Error('YouTube IFrame API failed to load'))
    document.head.appendChild(tag)
  })

  return apiPromise
}

/**
 * Muted, looping, controls-free YouTube video as a decorative hero backdrop.
 * Renders nothing when the embed fails or the visitor prefers reduced motion,
 * so the hero always falls back to the flat background.
 */
export default function HeroVideo({ id, title }) {
  const hostRef = useRef(null)
  const playerRef = useRef(null)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let cancelled = false

    const start = (target) => {
      try {
        target.mute()
        target.playVideo()
      } catch {
        /* player not ready yet */
      }
    }

    // Browsers routinely refuse to autoplay a third-party iframe. If the
    // player is still idle once the user does anything, start it then.
    const gestures = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll']
    const onGesture = () => {
      const target = playerRef.current
      if (target?.getPlayerState && target.getPlayerState() === 1) return
      if (target?.mute && target?.playVideo) {
        start(target)
      }
    }
    gestures.forEach((event) =>
      window.addEventListener(event, onGesture, { passive: true }),
    )

    const retry = setTimeout(() => {
      const target = playerRef.current
      if (target?.getPlayerState && target.getPlayerState() !== 1) start(target)
    }, 1500)

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled || !hostRef.current) return

        playerRef.current = new YT.Player(hostRef.current, {
          videoId: id,
          host: 'https://www.youtube-nocookie.com',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            // required for loop to apply to a single video
            playlist: id,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            iv_load_policy: 3,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => start(event.target),
            onError: () => setUnavailable(true),
          },
        })
      })
      .catch(() => setUnavailable(true))

    return () => {
      cancelled = true
      clearTimeout(retry)
      gestures.forEach((event) => window.removeEventListener(event, onGesture))
      try {
        playerRef.current?.destroy()
      } catch {
        /* player already torn down */
      }
    }
  }, [id])

  if (unavailable) return null

  return (
    <div className="hero-video" aria-hidden="true">
      <div className="hero-video-frame" ref={hostRef} title={title} />
      <div className="hero-video-scrim" />
    </div>
  )
}
