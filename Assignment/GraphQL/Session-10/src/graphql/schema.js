const { gql } = require("apollo-server-micro")

const typeDefs = gql`

type Post{

id:ID!

title:String

content:String

author:String

createdAt:String

}

type Query{

posts:[Post]

}

`

module.exports=typeDefs