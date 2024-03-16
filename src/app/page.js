import { redirect, useRouter } from "next/navigation";
import { getLanguage } from "src/utils/helpers";
import "./globals.css";
import ClientLayout from "src/components/core/layout/index";
import Home from "src/components/pages/home";
import qs from "qs";

export default async function HomePage(ctx) {
  const lang = getLanguage();

  if (lang === "en") {
    redirect("/en");
  }

  return (
    <ClientLayout>
      <Home lang={lang} />
    </ClientLayout>
  );
}
