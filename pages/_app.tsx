import Layout from '../components/Layout'
import '../style/globals.css'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../libs/apollo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp