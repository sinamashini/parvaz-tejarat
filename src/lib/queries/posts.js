import gql from "graphql-tag";
import { PostDetail } from "../fragments/posts";
import { AncestorsWithChildren, RegularCategory } from "../fragments/category";
import { PageInfoFragment } from "../fragments/general";

export const GET_POSTS = gql`
  ${PostDetail}
  ${RegularCategory}
  ${AncestorsWithChildren}
  ${PageInfoFragment}
  query GetAllPosts(
    $last: Int!
    $where: RootQueryToPostConnectionWhereArgs
    $after: String
    $before: String
  ) {
    posts(first: $last, where: $where, after: $after, before: $before) {
      edges {
        node {
          ...PostDetail
          categories {
            edges {
              node {
                ...RegularCategory
                ...AncestorsWithChildren
              }
            }
          }
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;
