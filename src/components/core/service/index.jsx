"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "src/plugins";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ServiceSection = ({ services }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(
          ".animation_service_7 .service__item-7",
        );
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-7 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <h1>خدمات ما</h1>
              <hr />
            </div>
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                {services.map((item) => (
                  <div key={item.div} className="service__item-7">
                    <Link href={`/service/${item.slug}`}>
                      <h3 className="service__title-7">
                        <span>{item.name}</span>
                      </h3>
                    </Link>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
