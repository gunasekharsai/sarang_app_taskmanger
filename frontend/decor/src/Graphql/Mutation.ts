import {gql} from '@apollo/client'

export const CREATE_USER_MUTATION = gql `
   
   mutation createtask(
    $title: String!
   ) {
    createtask(
        title: $title
    ) {
        id
    }
   }


`

export const DELETE_TASK =gql`
  mutation deletetask(
    $id: Float!
  ){
    deletetask(
        id:$id
    )
  }

`

export const EDIT_TASK = gql`
  mutation EditTask(
    $id : Float!,
    $title: String!
  ){
    EditTask(
      id : $id,
      title: $title
    ){
      id
    }
  }
`
