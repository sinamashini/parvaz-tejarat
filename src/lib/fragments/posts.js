import { gql } from "@apollo/client";
import { ImageDetail } from "./media";

export const PostDetail = gql`
  ${ImageDetail}
  fragment PostDetail on Post {
    title
    excerpt
    date
    id
    databaseId
    featuredImage {
      node {
        ...ImageDetail
      }
    }
    categories {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;

export const PostWithStylesAndScripts = gql`
  fragment PostWithStylesAndScripts on Post {
    content(format: RENDERED)
    Scripts: enqueuedScripts {
      nodes {
        handle
        src
        handle
        extra
        id
      }
    }
    Styles: enqueuedStylesheets {
      nodes {
        handle
        id
        src
        extra
      }
    }
  }
`;
