import BlogSection from "./blog/BlogSection";
import BlogPage from "./blog/page";
import Home from "./home";

export const PageSelector = (props) => {
  const { children, params } = props;
  const { slug } = params;

  const page =
    {
      en: <Home>{children}</Home>,
      blog: <BlogPage {...props} />,
      //   contact: ContactPage,
    }[slug] ?? Home;

  page.en();

  return page;
};
