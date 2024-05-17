import {gql} from '@apollo/client';

export const  LOAD_USERS = gql`
    query{
        tasks {
            id,
            title,
            completed
        }
    }
`