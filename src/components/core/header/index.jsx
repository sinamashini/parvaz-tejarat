"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "../canvas/Canvas";
import Image from "next/image";
import NavItem from "../nav/NavItem";
import { menuMaker } from "src/shared/navData";

import useLayoutDataHandler from "src/app/hooks/useLayoutEnum";

export default function Header({ language }) {
  const {
    loading,
    data: navItems,
    error,
  } = useLayoutDataHandler({
    language: language,
    location: "header",
  });

  const [topScroll, setTopScroll] = useState(0);

  const ofCanvasArea = useRef();
  const headerArea = useRef();

  const handleTopScroll = () => {
    const position = window.pageYOffset;
    setTopScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);
  if (typeof window !== "undefined") {
    let header_bg_2 = headerArea.current;
    if (header_bg_2) {
      if (topScroll > 20) {
        header_bg_2.style.background = "#121212";
        header_bg_2.classList.add("sticky-2");
      } else {
        header_bg_2.style.background = "transparent";
        header_bg_2.classList.remove("sticky-2");
      }
    }
  }

  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
  };

  if (loading || error || navItems?.length === 0) {
    return <></>;
  }

  return (
    <>
      {navItems?.length && (
        <>
          <header className="header__area-2" ref={headerArea}>
            <div className="header__inner-2">
              <Image
                src="/assets/imgs/logo/logo_main.png"
                width={70}
                height={70}
                alt="logo"
              />
              {navItems && navItems.length && (
                <NavItem language={language} nav={menuMaker(navItems)} />
              )}
              <div className="header__nav-icon-2">
                {/* <button onClick={openCanvas}>
                  <Image
                    priority
                    width={22}
                    height={22}
                    src={MenuWhite}
                    alt="Menubar Icon"
                  />
                </button> */}
              </div>
            </div>
          </header>
        </>
      )}
      <Canvas ofCanvasArea={ofCanvasArea} />
    </>
  );
}
