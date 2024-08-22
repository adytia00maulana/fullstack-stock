import {builder} from "@/graphql/builder";

export const typeDefs =`
  type Link {
    id: ID
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Query {
    links: [Link]!
  }
 `

export const schema = builder.toSchema()