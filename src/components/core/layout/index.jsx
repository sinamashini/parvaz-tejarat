"use client";

import { useEffect, useRef, useState } from "react";
import CommonAnimation from "../common/CommonAnimation";
import ScrollSmootherComponents from "../common/ScrollSmootherComponents";
import Preloader from "../preloader";
import CursorAnimation from "../common/CursorAnimation";
import ScrollTop from "../common/ScrollTop";
import Header from "../header";
import Footer from "../footer";
import allNavData from "src/shared/navData";
import { ApolloProvider, useQuery } from "@apollo/client";
import { GET_MENUS } from "src/lib/queries/menus";
import { menuLocation } from "src/shared/constants";
import { getLanguage } from "src/utils/helpers";
import apolloClient from "src/lib/apolloClient";

const menuGetter = (language) =>
  ({
    en: { header: menuLocation.primaryEN, footer: menuLocation.footerEN },
    fa: { header: menuLocation.primary, footer: menuLocation.footer },
  }[language]);

export default function ClientLayout({ children }) {
  const language = getLanguage();

  const [mode, setMode] = useState("light");

  const cursor1 = useRef();
  const cursor2 = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode == "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [mode]);

  return (
    <ApolloProvider client={apolloClient}>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        <div className="cursor" id="team_cursor">
          Drag
        </div>
        <Preloader />
        <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
        {/* <Switcher
          setMode={setMode}
          mode={mode}
          cursor1={cursor1}
          cursor2={cursor2}
        /> */}
        <ScrollTop />
        <Header language={language} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer language={language} />
          </div>
        </div>
      </CommonAnimation>
    </ApolloProvider>
  );
}
