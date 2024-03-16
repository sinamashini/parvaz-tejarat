import { langEnum, statusEnum } from "src/shared/constants";
import { standAloneClient } from "../apolloClient";
import { GET_ACTIVE_LANDING } from "../queries/activity";
import { GET_LANDING_PAGE } from "../queries/landing";
import { GET_POSTS } from "../queries/posts";

export const getLanding = async (databaseId, lang) => {
  const client = standAloneClient();
  const query = await client.query({
    query: GET_LANDING_PAGE,
    variables: { id: databaseId },
  });

  const articles = await client.query({
    query: GET_POSTS,
    variables: {
      last: query.data.landingPage.articles.section.articleNumber,
      where: { language: langEnum[lang], status: statusEnum.publish },
    },
  });

  return manageLandingData(query.data, articles.data);
};

export const getActiveLang = async (activeLang = "fa") => {
  const client = standAloneClient();
  const query = await client.query({ query: GET_ACTIVE_LANDING });
  const { activeEn, activeFa } = query.data.activity;

  return activeLang === "fa" ? activeFa : activeEn;
};

export const getLandingPage = async (lang = "fa") => {
  const activeLang = await getActiveLang(lang);
  const landingPage = await getLanding(
    activeLang.selectedLanding.node.databaseId,
    lang,
  );

  return landingPage;
};

const manageLandingData = (data, articles) => {
  const { landingPage } = data;
  const {
    ctaSection,
    aboutUsSection,
    servicesSection,
    contactSection,
    articles: articleSection,
  } = landingPage;

  return {
    ctaSection: {
      title: ctaSection.heroSection.title,
      description: ctaSection.heroSection.description,
      image: ctaSection.heroSection.image.node,
    },
    aboutUsSection: {
      title: aboutUsSection.aboutUsSection.text,
      description: aboutUsSection.aboutUsSection.description,
      image: aboutUsSection.aboutUsSection.optionalimage?.node,
      textOnImage: aboutUsSection.aboutUsSection?.textOnImage,
      button: aboutUsSection.aboutUsSection.button,
    },
    contactSection: {
      title: contactSection.sectionFieldsContact.text,
      description: contactSection.sectionFieldsContact.description,
      button: contactSection.sectionFieldsContact.button,
      socials: contactSection.sectionFieldsContact.social,
    },
    services: servicesSection.services.nodes,
    articleSection: {
      articles: articles.posts.edges.map((item) => item.node),
      title: articleSection.section.title,
      subDescription: articleSection.section.subDescription,
    },
  };
};
