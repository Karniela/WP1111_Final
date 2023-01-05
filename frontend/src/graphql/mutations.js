import {gql} from "@apollo/client";

export const USERSIGNUP_MUTATION = gql`
    mutation userSignup($input: SignUpInfo!){
        userSignup(input:$input){
            message
            token
        }
    }
`;

export const USERLOGIN_MUTATION = gql`
    mutation userLogin($email: String!, $pwd: String!){
        userLogin(email: $email, pwd: $pwd){
            message
            token
        }
    }
`;