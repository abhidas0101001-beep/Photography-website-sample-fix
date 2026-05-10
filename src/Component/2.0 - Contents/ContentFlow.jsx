import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContentFlow.module.css";

gsap.registerPlugin(ScrollTrigger);

const ContentFlow = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const textRefs = useRef([]);

  const dialogues = [
    {
      title: "The Artistry",
      content: "Photography: A dance of light, shadow, and emotion.",
    },
    {
      title: "The Union",
      content: "Weddings: Capturing the vow, the dance, and the forever.",
    },
    {
      title: "The Persona",
      content: "Lifestyle: Real moments, authentic lives, beautifully told.",
    },
    {
      title: "The Beginning",
      content: "Newborns: Tiny wonders, new beginnings, eternal memories.",
    },
  ];

  const imageData = [
    "/src/Assets/art1.jpg",
    "/src/Assets/art2.jpg",
    "/src/Assets/art3.png",
    "/src/Assets/art4.jpg",
    "/src/Assets/art5.jpg",
    "/src/Assets/art6.jpg",
    "/src/Assets/wed1.jpg",
    "/src/Assets/wed2.jpg",
    "/src/Assets/wed3.jpg",
    "/src/Assets/wed4.jpg",
    "/src/Assets/wed5.jpg",
    "/src/Assets/wed6.jpg",
    "/src/Assets/wed7.jpg",
    "/src/Assets/wed8.jpg",
    "/src/Assets/wed9.jpg",
    "/src/Assets/wed10.jpg",
    "/src/Assets/wed11.jpg",
    "/src/Assets/lfstyl1.jpg",
    "/src/Assets/lfstyl2.jpg",
    "/src/Assets/lfstyl3.jpg",
    "/src/Assets/lfstyl4.jpg",
    "/src/Assets/lfstyl5.jpg",
    "/src/Assets/lfstyl6.jpg",
    "/src/Assets/lfstyl7.jpg",
    "/src/Assets/lfstyl8.jpg",
    "/src/Assets/lfstyl9.jpg",
    "/src/Assets/lfstyl10.jpg",
    "/src/Assets/lfstyl11.jpg",
    "/src/Assets/newbie.jpg",
  ];

  const positions = [
    { x: -0.8, y: -0.6 },
    { x: 0.7, y: 0.4 },
    { x: -0.5, y: 0.7 },
    { x: 0.6, y: -0.5 },
    { x: -0.8, y: 0.2 },
    { x: 0.8, y: -0.3 },
    { x: -0.6, y: -0.8 },
    { x: 0.4, y: 0.6 },
    { x: -0.7, y: 0.5 },
    { x: 0.5, y: -0.7 },
    { x: -0.4, y: -0.4 },
    { x: 0.3, y: 0.8 },
    { x: -0.8, y: 0.3 },
    { x: 0.6, y: 0.2 },
    { x: -0.2, y: -0.7 },
    { x: 0.7, y: -0.6 },
    { x: -0.5, y: 0.4 },
    { x: 0.4, y: -0.4 },
    { x: -0.6, y: 0.6 },
    { x: 0.8, y: 0.5 },
    { x: -0.3, y: -0.5 },
    { x: 0.5, y: 0.3 },
    { x: -0.7, y: -0.2 },
    { x: 0.2, y: 0.7 },
    { x: -0.4, y: 0.8 },
    { x: 0.6, y: -0.8 },
    { x: -0.8, y: 0.1 },
    { x: 0.8, y: -0.1 },
    { x: -0.2, y: 0.5 },
    { x: 0, y: 0 },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 800;
      const spread = isMobile ? 1.5 : 0.8;

      const initPos = imageData.map(() => ({ x: 0, y: 0, z: -1500, scale: 0 }));

      const finalPos = imageData.map((_, index) => {
        const isLast = index === imageData.length - 1;
        return {
          x: isLast ? 0 : positions[index].x * screenWidth * spread,
          y: isLast ? 0 : positions[index].y * screenHeight * spread,
          z: isLast ? 0 : 2500,
          scale: 1,
        };
      });

      // Initial Image Set
      imagesRef.current.forEach((el, i) => {
        if (el) gsap.set(el, initPos[i]);
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${screenHeight * 12}px`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            imagesRef.current.forEach((el, index) => {
              if (!el) return;
              const imgDelay = index * 0.025;
              const imgProgress = Math.max(0, (progress - imgDelay) * 4);

              const start = initPos[index];
              const end = finalPos[index];

              let x = gsap.utils.interpolate(start.x, end.x, imgProgress);
              let y = gsap.utils.interpolate(start.y, end.y, imgProgress);
              let z = gsap.utils.interpolate(start.z, end.z, imgProgress);
              let scale = gsap.utils.interpolate(
                start.scale,
                end.scale,
                imgProgress,
              );

              gsap.set(el, { x, y, z, scale });
            });
          },
        },
      });

      textRefs.current.forEach((text, i) => {
        if (i === 0) {
          tl.fromTo(text, { opacity: 1 }, { opacity: 0, duration: 0.1 }, 0.15);
        } else {
          const startTime = i * 0.25;
          tl.fromTo(
            text,
            { opacity: 0 },
            { opacity: 1, duration: 0.1 },
            startTime,
          );

          if (i < textRefs.current.length - 1) {
            tl.to(text, { opacity: 0, duration: 0.1 }, startTime + 0.15);
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.flow} id="contentFlow">
      <div className={styles.sectionText}>
        {dialogues.map((item, i) => (
          <div
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className={styles.dialogue}
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <div className={styles.flowImages}>
        {imageData.map((url, index) => (
          <div
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            className={`${styles.img} ${index === imageData.length - 1 ? styles.cover : ""}`}
          >
            <img src={url} alt="photography work" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentFlow;
