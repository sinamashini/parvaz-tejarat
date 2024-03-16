import { redirect } from "next/navigation";
import { getLanguage } from "src/utils/helpers";
import "./globals.css";
import Home from "src/components/pages/home";
import ClientLayout from "src/components/core/layout";

export default async function HomePageEn(ctx) {
  const lang = getLanguage();

  if (lang === "fa") {
    redirect("/");
  }

  return (
    <ClientLayout>
      <Home lang={lang} />
    </ClientLayout>
  );
}
