import { gql } from 'graphql-request'

export const CreateExpoToken = gql`
  mutation createToken($input: String!) {
    createExpoToken(input: { data: { token: $input }}) {
      expoToken {
        token
      }
    }
  }
`
