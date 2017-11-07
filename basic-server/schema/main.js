const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

// this is a 'type'
const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'howdy! 😃 '
    },
    tellTime: {
      type: GraphQLString,
      resolve: () => ("⏰⏰⏰")
    },
    diceRoll: {
      type: new GraphQLList(GraphQLInt),
      args: {
        count: {
          type: GraphQLInt,
          defaultValue: 2
        }
      },
      resolve: (_, args) => {
        let rolls = [];
        for (let i = 0; i < args.count; i++) {
          rolls.push(roll());
        }
        return rolls;
      }
    },
    randomInt: {
      type: GraphQLInt,
      resolve: () => getRandomInt(0, 100)
    }
  }
});

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const roll = () => Math.floor(6 * Math.random() + 1);

const mySchema = new GraphQLSchema({
  // root query and root mutation definitions
  query: queryType
});

module.exports = mySchema;
