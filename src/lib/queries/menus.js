import { gql } from "@apollo/client";

export const MenuDetail = gql`
  fragment MenuDetail on MenuItem {
    description
    url
    label
    childItems {
      nodes {
        description
        url
        label
      }
    }
  }
`;

// menuLocation
export const GET_MENUS = gql`
  ${MenuDetail}
  query getMenus(
    $where: RootQueryToMenuConnectionWhereArgs
    $last: Int
    $first: Int
    $after: String
    $before: String
  ) {
    menus(
      where: $where
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      nodes {
        menuItems {
          nodes {
            ...MenuDetail
          }
        }
      }
    }
  }
`;

// menuLocation footer header
export const GET_MENU = gql`
  ${MenuDetail}
  query getMenu($id: ID!, $idType: MenuNodeIdTypeEnum = LOCATION) {
    menu(id: $id, idType: $idType) {
      menuItems {
        nodes {
          ...MenuDetail
        }
      }
    }
  }
`;
