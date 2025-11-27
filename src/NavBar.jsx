// src/components/NavBar.jsx
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const LINKS = [
  { label: "About", path: "/about" },
  { label: "Community", path: "/community" },
  { label: "Blog", path: "/blog" },
];

export default function NavBar({ onNavigate }) {
  const navigate = useNavigate();

  const navLinkClass = `flex flex-1 justify-center items-center p-3 text-center transition-all duration-300 text-white`;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navBgRef = useRef(null);
  const expanderRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const tlRef = useRef(null);

  const handleClick = (e, path) => {
    e?.preventDefault?.();
    if (onNavigate) onNavigate();
    setTimeout(() => navigate(path), 1000);
  };

  // compute space for expander
  const computeTargetHeight = () => {
    const navBgRect = navBgRef.current?.getBoundingClientRect();
    if (!navBgRect) return 0;
    const margin = 12;
    const availableSpace = Math.max(0, window.innerHeight - navBgRect.bottom - margin);
    const listScroll = listRef.current ? listRef.current.scrollHeight : 0;
    return Math.max(0, Math.min(listScroll, availableSpace));
  };

  // init styles
  useEffect(() => {
    if (expanderRef.current) {
      expanderRef.current.style.height = "0px";
      expanderRef.current.style.overflow = "hidden";
    }
    if (listRef.current) {
      gsap.set(itemRefs.current.filter(Boolean), { y: 10, autoAlpha: 0 });
      listRef.current.style.pointerEvents = "none";
      listRef.current.style.opacity = "0";
    }

    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, []);

  // lock/unlock body scroll with padding compensation
  const lockBodyScroll = () => {
    const doc = document.documentElement;
    const body = document.body;
    const scrollBarWidth = window.innerWidth - doc.clientWidth;
    body.dataset.prevPaddingRight = body.style.paddingRight || "";
    if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;
    body.dataset.prevOverflow = body.style.overflow || "";
    body.style.overflow = "hidden";
  };
  const unlockBodyScroll = () => {
    const body = document.body;
    if (body.dataset.prevPaddingRight !== undefined) {
      body.style.paddingRight = body.dataset.prevPaddingRight;
      delete body.dataset.prevPaddingRight;
    } else {
      body.style.paddingRight = "";
    }
    if (body.dataset.prevOverflow !== undefined) {
      body.style.overflow = body.dataset.prevOverflow;
      delete body.dataset.prevOverflow;
    } else {
      body.style.overflow = "";
    }
  };

  // open/close animations (height-based)
  useEffect(() => {
    const exp = expanderRef.current;
    const listEl = listRef.current;
    const items = itemRefs.current.filter(Boolean);
    if (!exp || !listEl) return;

    if (mobileOpen) {
      const targetH = computeTargetHeight();
      listEl.style.pointerEvents = "none";
      gsap.set(items, { y: 10, autoAlpha: 0 });
      tlRef.current?.kill();

      const tl = gsap.timeline();
      tl.to(exp, { height: targetH, duration: 0.42, ease: "power2.out" }, 0)
        .to(listEl, { autoAlpha: 1, duration: 0.12, pointerEvents: "auto" }, "-=0.18")
        .to(items, { y: 0, autoAlpha: 1, stagger: 0.07, duration: 0.36, ease: "power3.out" }, "-=0.08");

      tlRef.current = tl;
      lockBodyScroll();
    } else {
      tlRef.current?.kill();
      const closeTl = gsap.timeline();
      const itemsOut = [...items].reverse();
      closeTl
        .to(itemsOut, { y: 8, autoAlpha: 0, stagger: 0.06, duration: 0.25, ease: "power3.in" }, 0)
        .to(exp, { height: 0, duration: 0.36, ease: "power2.in" }, "-=0.1")
        .to(listEl, { autoAlpha: 0, duration: 0.05, pointerEvents: "none" }, "-=0.08");

      tlRef.current = closeTl;

      const t = setTimeout(() => {
        unlockBodyScroll();
      }, 380);

      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileOpen]);

  // outside click => collapse if open
  useEffect(() => {
    const onPointerDown = (ev) => {
      if (!mobileOpen) return;
      const node = navBgRef.current;
      if (!node) return;
      const target = ev.target;
      if (!node.contains(target)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true });
    document.addEventListener("touchstart", onPointerDown, { passive: true, capture: true });

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, { capture: true });
      document.removeEventListener("touchstart", onPointerDown, { passive: true, capture: true });
    };
  }, [mobileOpen]);

  // collapse on beforeunload (attempt to close before reload/navigation)
  useEffect(() => {
    const onBeforeUnload = () => {
      if (mobileOpen) {
        setMobileOpen(false);
        unlockBodyScroll();
      }
      // no preventDefault — just try to reset UI before unload
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [mobileOpen]);

  // breakpoint-change detection + reload (keeps previous behavior)
  useEffect(() => {
    const mdQuery = "(min-width: 768px)";
    const mql = window.matchMedia(mdQuery);
    let isDesktop = mql.matches;
    let debounceTimer = null;
    const debouncedReload = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setMobileOpen(false);
        unlockBodyScroll();
        setTimeout(() => window.location.reload(), 80);
      }, 150);
    };
    const onMqlChange = (e) => {
      if (e.matches === isDesktop) return;
      isDesktop = e.matches;
      debouncedReload();
    };
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onMqlChange);
    } else {
      mql.addListener(onMqlChange);
    }
    const onOrientationChange = () => {
      const nowDesktop = window.innerWidth >= 768;
      if (nowDesktop !== isDesktop) {
        isDesktop = nowDesktop;
        debouncedReload();
      }
    };
    window.addEventListener("orientationchange", onOrientationChange);
    const onResize = () => {
      const nowDesktop = window.innerWidth >= 768;
      if (nowDesktop !== isDesktop) {
        isDesktop = nowDesktop;
        debouncedReload();
      }
    };
    window.addEventListener("resize", onResize);

    // polling fallback
    let pollCount = 0;
    const pollMax = 10;
    const pollInterval = setInterval(() => {
      pollCount++;
      const nowDesktop = window.innerWidth >= 768;
      if (nowDesktop !== isDesktop) {
        isDesktop = nowDesktop;
        debouncedReload();
      }
      if (pollCount >= pollMax) clearInterval(pollInterval);
    }, 200);

    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", onMqlChange);
      } else {
        mql.removeListener(onMqlChange);
      }
      window.removeEventListener("orientationchange", onOrientationChange);
      window.removeEventListener("resize", onResize);
      clearInterval(pollInterval);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  return (
    <>
      {/* Desktop (unchanged) */}
      <div className="hidden md:block left-1/2 z-50 fixed mt-10 w-[90vw] -translate-x-1/2">
        <div className="flex justify-between items-center w-full">
          <button className="flex justify-center items-center p-3" onClick={(e) => handleClick(e, "/")}>
            <div className="bg-orange-600 rounded-lg w-10 h-10 logoBox" />
          </button>

          <div className="flex flex-nowrap items-center gap-2 px-2 py-1 rounded-lg whitespace-nowrap nav-bg">
            <button className={`${navLinkClass} whitespace-nowrap`} onClick={(e) => handleClick(e, "/about")}>
              About
            </button>

            <button className={`${navLinkClass} whitespace-nowrap`} onClick={(e) => handleClick(e, "/community")}>
              Community
            </button>

            <button className={`${navLinkClass} whitespace-nowrap`} onClick={(e) => handleClick(e, "/blog")}>
              Blog
            </button>

            <button
              className="flex justify-center items-center bg-[#ef4c23] px-4 py-3 rounded-lg text-white text-sm whitespace-nowrap"
              onClick={(e) => handleClick(e, "/scedule")}
            >
              Schedule a call
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: fixed logo at left-top so it's always visible */}
      <div className="md:hidden top-4 left-4 z-50 fixed pointer-events-auto">
        <button
          onClick={(e) => handleClick(e, "/")}
          className="flex justify-center items-center w-10 h-10"
          aria-label="Home"
        >
          <div className="bg-orange-600 rounded-lg w-10 h-10 logoBox" />
        </button>
      </div>

      {/* Mobile: SINGLE nav-bg that contains top row + expander (height-animating) */}
      <div className="md:hidden top-4 right-4 z-50 fixed pointer-events-auto">
        <div
          ref={navBgRef}
          className="flex flex-col shadow-md backdrop-blur-sm px-3 py-2 rounded-lg overflow-visible origin-top-right nav-bg"
          style={{ transformOrigin: "top right" }}
        >
          {/* Top row visible always */}
          <div className="flex justify-between items-center w-full">
            <button
              onClick={(e) => handleClick(e, "/scedule")}
              className="bg-[#ef4c23] px-4 py-2 rounded-lg text-md text-white whitespace-nowrap"
            >
              Schedule a demo
            </button>

            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="p-2 rounded focus:outline-none"
            >
              {!mobileOpen ? (
                <div className="flex flex-col gap-[5px]">
                  <span className="block bg-white w-6 h-[2px]" />
                  <span className="block bg-white w-6 h-[2px]" />
                  <span className="block bg-white w-6 h-[2px]" />
                </div>
              ) : (
                <div className="text-white text-2xl leading-none">✕</div>
              )}
            </button>
          </div>

          {/* Expander (animates height from 0 -> target) */}
          <div
            ref={expanderRef}
            className="w-full"
            style={{ height: 0, overflow: "hidden", willChange: "height, transform" }}
          >
            <ul
              ref={listRef}
              className="flex flex-col gap-2 mt-2 px-0 py-0 w-full"
              style={{ boxSizing: "border-box" }}
            >
              {LINKS.map((l, i) => (
                <li key={l.path}>
                  <button
                    ref={(el) => (itemRefs.current[i] = el)}
                    onClick={(e) => {
                      setMobileOpen(false);
                      handleClick(e, l.path);
                    }}
                    className="bg-white/6 px-3 py-2 rounded-xl w-full text-white text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
