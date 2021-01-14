import { gql } from 'graphql-request'

export const MonthGames = gql`
  {
    monthGames(sort: "published_at:desc", limit: 1) {
      id
      Release
      Title
      Link
      games {
        Name
      }
    }
  }
`