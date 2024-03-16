import { gql } from "@apollo/client";
import { LandingPageDetail } from "../fragments/landingPage";

export const GET_LANDING_PAGE = gql`
  ${LandingPageDetail}
  query GetLandingPage($id: ID!, $idType: LandingPageIdType = DATABASE_ID) {
    landingPage(id: $id, idType: $idType) {
      ...LandingPageDetail
    }
  }
`;
