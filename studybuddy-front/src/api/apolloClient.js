import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const AUTH_TOKEN = '1f04ddbc20c58b339714e44f2fc5fa';

const httpLink = createHttpLink({
    uri: 'https://graphql.datocms.com',
});

const authLink = setContext((_, { headers}) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${AUTH_TOKEN}`
        }
    }
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});



