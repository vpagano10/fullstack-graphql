const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    enum ShoeType {
        JORDAN
        NIKE
        ADIDDAS
        TIMBERLAND
    }

    type User {
        id: ID!
        email: String!
        avatar: String!
        shoes: [Shoe]!
    }

    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        image: String
    }

    interface Shoe {
        brand: ShoeType!
        size: Int!
        user: User!
    }

    type Sneaker implements Shoe {
        brand: ShoeType!
        size: Int!
        user: User!
        sport: String!
    }

    type Boot implements Shoe {
        brand: ShoeType!
        size: Int!
        user: User!
        hasGrip: Boolean!
    }

    input ShoeInput {
        brand: ShoeType
        size: Int
    }

    input NewShoeInput {
        brand: ShoeType!
        size: Int!
    }

    input PetInput {
        name: String
        type: String
    }
    
    input NewPetInput {
        name: String!
        type: String!
    }

    type Query {
        me: User!
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
        shoes(input: ShoeInput): [Shoe]!
    }

    type Mutation {
        newPet(input: NewPetInput!): Pet!
        newShoe(input: NewShoeInput!): Shoe!
    }
`;

module.exports = typeDefs
