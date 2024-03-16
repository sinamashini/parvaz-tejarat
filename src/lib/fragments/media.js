import { gql } from "@apollo/client";

export const ImageDetail = gql`
  fragment ImageDetail on MediaItem {
    altText
    uri
    slug
    sizes
    srcSet
    sourceUrl
    fileSize
    mediaItemUrl
    mediaDetails {
      height
      sizes {
        height
        width
        mimeType
        name
      }
      width
    }
  }
`;
