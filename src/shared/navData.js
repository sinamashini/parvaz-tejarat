const allNavData = {
  en: [
    {
      nav_name: "Home",
      link: "/en/",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "About US",
      link: "/en/about",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "Services",
      link: "/en/services",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "Blog",
      link: "/en/blog",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "Contact",
      link: "/en/contact",
      type: "",
      sub_nav: [],
    },
  ],
  fa: [
    {
      nav_name: "خانه",
      link: "/",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "درباره ما",
      link: "/about",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "خدمات",
      link: "/services",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "وبلاگ",
      link: "/blog",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "تماس",
      link: "/contact",
      type: "",
      sub_nav: [],
    },
  ],
};

export default allNavData;

export const menuMaker = (menuItems) =>
  menuItems.map((item) => ({
    nav_name: item.label,
    link: new URL(item.url).pathname,
    type: "",
    sub_nav: [],
  }));
