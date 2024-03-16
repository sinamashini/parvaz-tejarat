import { gql } from "@apollo/client";

export const PageInfoFragment = gql`
  fragment PageInfoFragment on WPPageInfo {
    hasNextPage
    endCursor
    hasPreviousPage
    startCursor
  }
`;
