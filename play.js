// const connect = require('./client');

const {connect} = require('./client');



const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};

const handleUserInput = function(char) {
  if (char === 'x') {
    process.exit();
  };

};


setupInput();
console.log('Connecting ...');
connect();