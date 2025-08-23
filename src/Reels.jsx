import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";


const DEMO_REELS = [
  {
    id: "my1",
    src: "/public/videos/car video 1.mp4",
    caption: "Vintage Car🚘",
    likes: 100001,
    author: {
      name: "devil_with_curls",
      avatar: "../src/assets/profile pic 1.jpg"
    },
  },
  {
    id: "my2",
    src: "/public/videos/dog video 2.mp4",
    caption: "Playing with Dog✌️",
    likes: 90000,
    author: { name: "vampire_gwrl", avatar: "../src/assets/sowmi.JPG" },
  },

  {
    id: "my3",
    src: "/public/videos/dog video3.mp4",
    caption: "Pratice my Dog🐶",
    likes: 15000,
    author: { name: "Zadaya", avatar: "../src/assets/lady.jpeg" },
  },

  {
    id: "my4",
    src: "/public/videos/vintage bike 4.mp4",
    caption: "Harley Davidson🪞",
    likes: 170000,
    author: { name: "shiek", avatar: "../src/assets/v3_man.jpg" },
  },

  {
    id: "my5",
    src: "/public/videos/space 5.mp4",
    caption: "Beautiful Space🌌",
    likes: 300000,
    author: { name: "black_parrel", avatar: "../src/assets/blackparrel.jpeg" },
  },
  {
    id: "my6",
    src: "/public/videos/DNA 6.mp4",
    caption: "WOW😍",
    likes: 12000,
    author: { name: "aadi", avatar: "../src/assets/aadi.jpeg" },
  },

  {
    id: "my7",
    src: "/public/videos/moon7.mp4",
    caption: "Beautiful Moon🌔",
    likes: 18000,
    author: { name: "Priceless Moon", avatar: "../src/assets/dio_payan.jpeg" },
  },

  {
    id: "my8",
    src: "/public/videos/nature8.mp4",
    caption: "Beautiful View🌄",
    likes: 210000,
    author: { name: "Visnu_prasanth", avatar: "../src/assets/visnu.jpeg" },
  },

  {
    id: "my9",
    src: "/public/videos/water9.mp4",
    caption: "amazing view🌊",
    likes: 280000,
    author: { name: "Loki", avatar: "../src/assets/Loki.png" },
  },

  {
    id: "my10",
    src: "/public/videos/clouds10.mp4",
    caption: "amazing Clouds🌫️",
    likes: 410000,
    author: { name: "monica_belluchi", avatar: "../src/assets/explorepage/monika29.jpeg" },
  },
];

function useActiveIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);
  const entriesRef = useRef({});

  const attach = useCallback((node) => {
    if (!node) return;

    const options = { root: null, threshold: Array.from({ length: 21 }, (_, i) => i / 20) };

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entriesRef.current[entry.target.dataset.index] = entry.intersectionRatio;
        });
        const best = Object.entries(entriesRef.current)
          .map(([k, v]) => ({ k: Number(k), v }))
          .sort((a, b) => b.v - a.v)[0];
        if (best && best.v > 0.6) setActiveIndex(best.k);
      }, options);
    }
    observerRef.current.observe(node);
  }, []);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return { activeIndex, attach };
}

function formatLikes(n) {
  if (n < 1000) return String(n);
  if (n < 1_000_000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
}

function ReelActions({ liked, likes, onLike, muted, onToggleMute, onShare }) {
  return (
    <div className="actionsCol">
      <button className="iconBtn" onClick={onLike}>
        <span className={`icon ${liked ? "liked" : ""}`}>❤</span>
        <span className="iconLabel">{formatLikes(likes)}</span>
      </button>

      <button className="iconBtn" onClick={onShare}>
        <span className="icon">↗</span>
        <span className="iconLabel">Share</span>
      </button>

      <button className="iconBtn" onClick={onToggleMute}>
        <span className="icon">{muted ? "🔇" : "🔊"}</span>
        <span className="iconLabel">{muted ? "Muted" : "Sound"}</span>
      </button>
    </div>
  );
}

function Reel({ index, data, active, onAskScrollNext }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likes || 0);

  // Play/pause smoothly without warning
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let mounted = true;

    const playVideo = async () => {
      try {
        await video.play();
        if (mounted) setPaused(false);
      } catch (err) {
        console.warn("Autoplay prevented or interrupted:", err.message);
        setPaused(true);
      }
    };

    if (active) playVideo();
    else video.pause();

    return () => { mounted = false; };
  }, [active]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setPaused(true));
    else video.pause();
    setPaused(!video.paused);
  };

  const copyShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href + "#reel-" + data.id);
      alert("Link copied to clipboard");
    } catch {
      alert("Could not copy link");
    }
  };

  return (
    <section data-index={index} id={`reel-${data.id}`} className="reel">
      <video
        ref={videoRef}
        muted={muted}
        playsInline
        loop={false}
        onEnded={onAskScrollNext}
        className="video"
        onClick={togglePlay}
      >
        <source src={data.src} type="video/mp4" />
        Your browser does not support video.
      </video>

      <div className="bottomShade" />
      <div className="captionArea">
        <div className="authorRow">
          <img src={data.author?.avatar} alt={data.author?.name} className="avatar" />
          <span className="authorName">@{data.author?.name || "user"}</span>
        </div>
        <p className="caption">{data.caption}</p>
        <div className="hints">Tap to {paused ? "play" : "pause"} • Double-tap to like</div>
      </div>

      <ReelActions
        liked={liked}
        likes={likeCount}
        onLike={() => {
          setLiked((p) => { const n = !p; setLikeCount(c => c + (n ? 1 : -1)); return n; });
        }}
        muted={muted}
        onToggleMute={() => setMuted(m => !m)}
        onShare={copyShare}
      />
    </section>
  );
}

export default function Reels({ reels = DEMO_REELS }) {
  const { activeIndex, attach } = useActiveIndex();
  const containerRef = useRef(null);

  const scrollToIndex = useCallback((idx) => {
    const el = containerRef.current?.children[idx];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onAskScrollNext = useCallback(() => {
    if (activeIndex < reels.length - 1) scrollToIndex(activeIndex + 1);
  }, [activeIndex, reels.length, scrollToIndex]);

  const list = useMemo(() => reels || [], [reels]);

  return (
    <div className="wrapper">
      <div className="scroller" ref={containerRef}>
        {list.map((item, i) => (
          <div key={item.id} ref={attach} data-index={i} className="snapItem">
            <Reel index={i} data={item} active={i === activeIndex} onAskScrollNext={onAskScrollNext} />
          </div>
        ))}
      </div>

      <div className="hud">
        <div className="hudBadge">Reels</div>
        <div className="hudIndex">{activeIndex + 1}/{list.length}</div>
      </div>
    </div>
  );
}
