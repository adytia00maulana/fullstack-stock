import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import type { Link } from '@prisma/client'
import {AwesomeLink} from "@/components/AwesomeLink";

const AllLinksQuery = gql`
    query allLinksQuery($first: Int, $after: String) {
        links(first: $first, after: $after) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                cursor
                node {
                    imageUrl
                    url
                    title
                    category
                    description
                    id
                }
            }
        }
    }
`;


function Home() {
    const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
        variables: { first: 2 },
    });

    if (loading) {
        return <div className="w-full gap-x-2 flex justify-center items-center">
            <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full"></div>
            <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full"></div>
            <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full"></div>
        </div>
    }
    if (error) return <p>Oh no... {error.message}</p>;

    const { endCursor, hasNextPage } = data.links.pageInfo;

    return (
        <div>
            <Head>
                <title>Stock</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto max-w-5xl my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data?.links.edges.map(({ node }: { node: Link }) => (
                        <AwesomeLink
                            title={node.title}
                            category={node.category}
                            url={node.url}
                            id={node.id}
                            description={node.description}
                            imageUrl={node.imageUrl}
                        />
                    ))}
                </div>
                {hasNextPage ? (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded my-10"
                        onClick={() => {
                            fetchMore({
                                variables: {after: endCursor},
                                updateQuery: (prevResult, {fetchMoreResult}) => {
                                    fetchMoreResult.links.edges = [
                                        ...prevResult.links.edges,
                                        ...fetchMoreResult.links.edges,
                                    ];
                                    return fetchMoreResult;
                                },
                            }).then(r => console.error(r));
                         }}
                    >
                        more
                    </button>
                ) : (
                    <p className="my-10 text-center font-medium">
                        You've reached the end!{" "}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Home;