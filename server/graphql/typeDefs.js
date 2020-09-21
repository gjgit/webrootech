const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    role: String
    packages: [String]
    transactions: [Transaction]!
  }
  type Transaction {
    id: ID!
    amount: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    role: String
    packages: [String]
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getCurrentUserDetailsForUpdation(username: String!): User
    getAllUsers: [User]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    getCurrentUserDetailsForUpdationWhenUpdateCicked(username: String!): User
  }
  type Subscription {
    newPost: Post!
  }
`;
