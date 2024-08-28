import { gql, useQuery } from '@apollo/client'
import type { Product } from '@prisma/client'
import {AwesomeLink} from "@/components/AwesomeLink";

const AllProductsQuery = gql`
    query allProductsQuery($first: Int, $after: String) {
        products(first: $first, after: $after) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                cursor
                node {
                    id
                    imageAlt
                    href
                    imageSrc
                    name
                }
            }
        }
    }
`;

export default function Product() {
    const { data, loading, error, fetchMore } = useQuery(AllProductsQuery, {
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

    const { endCursor, hasNextPage } = data.products.pageInfo;

    return (
        <div className="container mx-auto max-w-5xl my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data?.products.edges.map(({ node }: { node: Product }) => (
                    <div key={node.id}>
                        <AwesomeLink imageUrl={node.imageSrc} url={node.href} title={node.name} category={node.imageAlt} description={node.imageAlt} id={node.id} />
                    </div>
                ))}
            </div>
            {hasNextPage ? (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded my-10"
                    onClick={() => {
                        fetchMore({
                            variables: {after: endCursor},
                            updateQuery: (prevResult, {fetchMoreResult}) => {
                                fetchMoreResult.products.edges = [
                                    ...prevResult.products.edges,
                                    ...fetchMoreResult.products.edges,
                                ];
                                return fetchMoreResult;
                            },
                        }).then(r => console.warn(r));
                     }}
                >
                    More
                </button>
            ) : (
                <p className="my-10 text-center font-medium">{"You've reached the end!"+" "}</p>
            )}
        </div>
    );
}