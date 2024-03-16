import { gql } from "@apollo/client";
import { ActiveFreagment } from "../fragments/landingPage";

export const GET_ACTIVE_LANDING = gql`
  ${ActiveFreagment}
  query GetActiveLanding {
    activity {
      ...ActiveFreagment
    }
  }
`;
