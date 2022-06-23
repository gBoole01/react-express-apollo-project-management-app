import Header from './components/Header';
import Clients from './components/Clients';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(_existing, incoming) {
                        return incoming
                    }
                },
                projectts: {
                    merge(_existing, incoming) {
                        return incoming
                    }
                }
            }
        }
    }
});

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
})

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Header />
                <div className="container">
                    <Clients />
                </div>
            </ApolloProvider>
        </>
    );
}

export default App;
