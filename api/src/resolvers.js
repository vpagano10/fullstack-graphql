/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, {input}, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, {input}, ctx) {
      return ctx.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, {input}, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet
    }
  },
  Pet: {
    owner(_, __, ctx) {
      // ctx.models.User.findById(pet.user) -> this would be real world example
      return ctx.models.User.findOne()
    },
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  User: {
    pets(_, __, ctx) {
      // return ctx.models.Pet.findMany({user: user.id}) -> real world example
      return ctx.models.Pet.findMany()
    }
  }
}
