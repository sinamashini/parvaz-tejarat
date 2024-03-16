import { fetchArticles } from "src/lib/api/artiles";


const BlogPage = async ({ searchParams, params, children, lang }) => {

  console.log(searchParams, params, children);
  const articles = await getBlog(paa);

  return (
 
  );
};

export default BlogPage;
