"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "src/plugins";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const AboutSection = (props) => {
  const { aboutSection } = props;
  const { title, description, image, textOnImage, button } = aboutSection;

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.to(".about__img-2 img", {
          scale: 1.15,
          duration: 1,
          scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
          },
        });
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="about__area-2">
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">{title}</h2>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p>{description}</p>
                </div>
                <div className="sec-btn btn_wrapper">
                  <Link
                    className="wc-btn-pink btn-hover btn-item"
                    href="/about"
                  >
                    {button.title}
                    <span></span> <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {image ? (
          <div className="about__img-2 pb-130">
            <Image
              priority
              width={1720}
              height={800}
              style={{ height: "auto" }}
              src={image.sourceUrl}
              alt="About Image"
              data-speed="0.2"
            />
            <div
              style={{
                position: "absolute",
                top: "40%", // Center vertically
                left: "50%", // Center horizontally
                transform: "translate(-50%, -50%)", // Adjust to exactly center
                color: "black", // Text color
                textAlign: "center", // Center text
                zIndex: "9999", //
              }}
            >
              <h4>{textOnImage}</h4>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default AboutSection;
