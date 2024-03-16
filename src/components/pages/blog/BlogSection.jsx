"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "src/plugins";
import Link from "next/link.js";
import Image from "next/image.js";
import { formatDate } from "src/utils/helpers";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = ({ articleSection, language }) => {
  const { articles, title, subDescription } = articleSection;
  console.log(subDescription);
  console.log(title);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item-3");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item-3", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item-3",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__area-3 blog-v3 blog__animation">
        <div className="container line">
          <div className="line-3"></div>
          <div className="row ">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim pt-130">
                <h2>{title}</h2>
                <h3 className="sec-title title-anim"></h3>
                <p>{subDescription}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {articles.map((item) => (
              <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6">
                <article className="blog__item-3">
                  <div className="blog__img-wrapper-3">
                    <Link href="/blog-details">
                      <div className="img-box">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          className="image-box__item"
                          src={item?.featuredImage?.node?.sourceUrl}
                          alt="Blog Thumbnail"
                          width={330}
                          height={430}
                        />
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          className="image-box__item"
                          src={item.featuredImage?.node?.sourceUrl}
                          alt="Blog Thumbnail"
                          width={330}
                          height={430}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="blog__info-3">
                    <h2 className="blog__meta">
                      {formatDate(item.date, language)}
                    </h2>
                    <h5>
                      <Link
                        href={`/article/${item.slug}`}
                        className="blog__title-3"
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: item.excerpt }}
                        />
                      </Link>
                    </h5>
                    <Link href="/blog-details" className="blog__btn">
                      {language === "en" ? "Read More" : "ادامه مطلب"}
                      <span>
                        <i
                          className={`fa-solid ${
                            language === "en"
                              ? "fa-arrow-right"
                              : "fa-arrow-left"
                          }`}
                        ></i>
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
