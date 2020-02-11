/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const user = {
  id: 1,
  email: 'email@email.com',
  avatar: 'http://yoda.png',
  shoes: []
}

const shoes = [
  { brand: 'NIKE', size: 11, sport: 'basketball', user: 1 },
  { brand: 'TIMBERLAND', size: 11, hasGrip: true, user: 1 },
]

module.exports = {
  Query: {
    pets(_, {input}, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, {input}, ctx) {
      return ctx.models.Pet.findOne(input)
    },
    shoes(_, {input}, ctx) {
      return shoes
    },
    me() {
      return {
        email: 'email@email.com',
        avatar: 'http://yoda.png',
        friends: []
    }
    }    
  },
  Mutation: {
    newShoe(_, {input}) {
      return input
    },
    newPet(_, {input}, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet
    }
  },
  User: {
    shoes() {
      return shoes
    }
  },
  Shoe: {
    __resolveType(shoe) {
      if (shoe.sport) {
        return 'Sneaker'
      } else {
        return 'Boot'
      }
    },
  },
  Sneaker: {
    user(shoe) {
      return user
    }
  },
  Boot: {
    user(shoe) {
      return user
    }
  }
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
