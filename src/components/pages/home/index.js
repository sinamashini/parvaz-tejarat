import { redirect } from "next/navigation";
import AboutSection from "src/components/core/about";
import HeroSection from "src/components/core/hero";
import { getLandingPage } from "src/lib/api/landingPage";
import { getLanguage } from "src/utils/helpers";

import ServiceSection from "src/components/core/service";
import BlogSection from "src/components/pages/blog/BlogSection";
import ClientLayout from "src/components/core/layout/index";
import ContactSection from "src/components/core/contact";

export default async function Home({ lang }) {
  const sections = await getLandingPage("fa");

  return (
    <main>
      <HeroSection ctaSection={sections.ctaSection} />
      <AboutSection aboutSection={sections.aboutUsSection} />
      <ServiceSection services={sections.services} language={lang} />
      <BlogSection articleSection={sections.articleSection} language={lang} />
      <ContactSection section={sections.contactSection} />
    </main>
  );
}
