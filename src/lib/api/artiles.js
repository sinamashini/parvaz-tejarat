import { langEnum } from "src/shared/constants";
import { GET_POSTS } from "../queries/posts";

export const fetchArticles = async ({ last, first, where, after, before }) => {
  const articles = await client.query({
    query: GET_POSTS,
    variables: {
      last: query.data.landingPage.articles.section.articleNumber,
      where: {
        language: langEnum[lang],
        status: statusEnum.publish,
        last,
        first,
        where,
        after,
        before,
      },
    },
  });

const getBlog = async({searchParams, lang, endCursor}) => {
  const { } = 
  let params = {
    last: 20,
    after: endCursor.
    where: { language: lang},
    
  }
}

  return articles;
};
