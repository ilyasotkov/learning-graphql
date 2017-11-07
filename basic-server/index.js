const { graphql } = require('graphql');
const readline = require('readline');

const mySchema = require('./schema/main');

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rli.question('Client request: ', inputQuery => {
  graphql(mySchema, inputQuery).then(result => {
    console.log('Server has responded: ', result.data);
  });
  rli.close();
});
