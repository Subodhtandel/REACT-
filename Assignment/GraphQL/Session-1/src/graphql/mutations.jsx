import { gql } from "@apollo/client";

export const CREATE_PLAYLIST = gql`
  mutation {
    createPlaylist(
      input: {
        name: "My Favorites"
        description: "Songs I listen to every day"
      }
    ) {
      id
      name
      description
    }
  }
`;