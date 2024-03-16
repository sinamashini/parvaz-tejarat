import { gql } from "@apollo/client";

export const AncestorsWithChildren = gql`
  fragment AncestorsWithChildren on Category {
    ancestors {
      nodes {
        name
        id
        slug
        uri
        children {
          nodes {
            name
            id
            slug
            uri
          }
        }
      }
    }
    children {
      nodes {
        name
        id
        slug
        uri
      }
    }
  }
`;

export const RegularCategory = gql`
  fragment RegularCategory on Category {
    databaseId
    id
    slug
    name
    description
    uri
    link
  }
`;

export const CategoryWithChildren = gql`
  fragment CategoryWithChildren on Category {
    children {
      nodes {
        name
        id
        slug
        uri
      }
    }
  }
`;

export const CategoryWithAnccestors = gql`
  fragment CategoryWithAnccestors on Category {
    ancestors {
      nodes {
        name
        id
        slug
        uri
      }
    }
  }
`;
