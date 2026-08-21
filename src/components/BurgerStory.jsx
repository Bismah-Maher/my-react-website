import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 224;

function getFramePath(index) {
  const number = String(index + 1).padStart(3, "0");
 return `${process.env.PUBLIC_URL}/images/burger-sequence/ezgif-frame-${number}.jpg`;
}

function BurgerStory() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");

    let images = [];
    let currentFrame = 0;
    let destroyed = false;

    /*
      --------------------------------
      CANVAS SIZE
      --------------------------------
    */

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = 1280 * dpr;
      canvas.height = 720 * dpr;

      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawFrame(currentFrame);
    };

    /*
      --------------------------------
      DRAW FRAME
      --------------------------------
    */

    function drawFrame(frame) {
      if (!images[frame]) return;

      const image = images[frame];

      const canvasWidth = 1280;
      const canvasHeight = 720;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const imageRatio = image.width / image.height;
      const canvasRatio = canvasWidth / canvasHeight;

      let width;
      let height;
      let x;
      let y;

      if (imageRatio > canvasRatio) {
        width = canvasWidth;
        height = width / imageRatio;
        x = 0;
        y = (canvasHeight - height) / 2;
      } else {
        height = canvasHeight;
        width = height * imageRatio;
        x = (canvasWidth - width) / 2;
        y = 0;
      }

      ctx.drawImage(image, x, y, width, height);
    }

    /*
      --------------------------------
      PRELOAD IMAGES
      --------------------------------
    */

    const preloadImages = async () => {
      const loadedImages = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const image = new Image();

        image.src = getFramePath(i);

        await new Promise((resolve) => {
          image.onload = resolve;
          image.onerror = resolve;
        });

        loadedImages.push(image);

        if (destroyed) return;
      }

      images = loadedImages;

      drawFrame(0);

      /*
        --------------------------------
        GSAP SCROLL ANIMATION
        --------------------------------
      */

      const animation = {
        frame: 0,
      };

      gsap.to(animation, {
        frame: TOTAL_FRAMES - 1,

        ease: "none",

        snap: "frame",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: "+=5000",

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },

        onUpdate: () => {
          currentFrame = Math.round(animation.frame);

          drawFrame(currentFrame);
        },
      });

      /*
        --------------------------------
        SIDE TEXT ANIMATION
        --------------------------------
      */

      gsap.to(".burger-story-left", {
        opacity: 0,
        x: -100,

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1200",
          scrub: true,
        },
      });

      gsap.to(".burger-story-right", {
        opacity: 0,
        x: 100,

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1200",
          scrub: true,
        },
      });

      /*
        --------------------------------
        CENTER LABEL
        --------------------------------
      */

      gsap.to(".burger-story-label", {
        opacity: 0,
        y: -30,

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=900",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    };

    setCanvasSize();

    preloadImages();

    window.addEventListener("resize", setCanvasSize);

    return () => {
      destroyed = true;

      window.removeEventListener("resize", setCanvasSize);

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });

      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="burger-story"
      id="burger-story"
    >

      {/* --------------------------------
          TOP BRAND
      -------------------------------- */}

      <div className="burger-story-label">
        <span>TASTE N</span>
        <strong>HEALTH</strong>
      </div>

      {/* --------------------------------
          LEFT STORY
      -------------------------------- */}

      <div className="burger-story-left">


        <h2>
          Crafted
          <br />
          with care.
        </h2>

        <p className="story-description">
          Every layer begins with fresh ingredients,
          carefully prepared and brought together
          for one unforgettable bite.
        </p>

      </div>

      {/* --------------------------------
          BURGER CANVAS
      -------------------------------- */}

      <div className="burger-canvas-wrapper">

        <canvas
          ref={canvasRef}
          className="burger-canvas"
        />

        <div className="burger-glow" />

      </div>

      {/* --------------------------------
          RIGHT STORY
      -------------------------------- */}

      <div className="burger-story-right">

  

        <h2>
          Built for
          <br />
          cravings.
        </h2>

        <p className="story-description">
          Juicy layers, melted cheese and
          freshly prepared toppings come together
          in our signature burger.
        </p>

      </div>

      {/* --------------------------------
          BOTTOM SCROLL
      -------------------------------- */}

      <div className="burger-scroll">

        <span>SCROLL TO DISCOVER</span>

        <div className="burger-scroll-line">
          <span />
        </div>

      </div>

    </section>
  );
}

export default BurgerStory;