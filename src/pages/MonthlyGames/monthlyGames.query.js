import { gql } from 'graphql-request'

export const MonthGames = gql`
  {
    monthGames(sort: "published_at:desc", limit: 1) {
      published_at
      release
      title
      link
      announcement
      games {
        id
        name
        description
        platform
        image {
          url
        }
      }
    }
  }
`