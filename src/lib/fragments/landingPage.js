import { gql } from "@apollo/client";
import { ImageDetail } from "./media";

export const LandingPageDetail = gql`
  ${ImageDetail}
  fragment LandingPageDetail on LandingPage {
    title
    date
    aboutUsSection {
      aboutUsSection {
        text
        description
        button {
          url
          title
          target
        }
        textOnImage
        optionalimage {
          node {
            ...ImageDetail
          }
        }
      }
    }
    ctaSection {
      heroSection {
        title
        description
        image {
          node {
            ...ImageDetail
          }
        }
      }
    }
    articles {
      section {
        articleNumber
        title
        subDescription
      }
    }

    contactSection {
      sectionFieldsContact {
        description
        text
        button {
          url
          title
        }
        social {
          socialApp {
            url
            title
          }
        }
      }
    }

    servicesSection {
      services {
        nodes {
          name
          slug
          description
          id
          databaseId
          ... on Category {
            serviceFields {
              imageOrIcon {
                node {
                  ...ImageDetail
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ActiveFreagment = gql`
  fragment ActiveFreagment on Activity {
    activeFa {
      selectedLanding {
        node {
          databaseId
          id
          slug
          uri
        }
      }
    }
    activeEn {
      selectedLanding {
        node {
          databaseId
          id
          slug
          uri
        }
      }
    }
  }
`;
