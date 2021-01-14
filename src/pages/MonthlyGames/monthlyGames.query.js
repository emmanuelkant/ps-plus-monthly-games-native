import { gql } from 'graphql-request'

export const MonthGames = gql`
  {
    monthGames {
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