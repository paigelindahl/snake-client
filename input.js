let connection; 

const setupInput = function(conn) {
  connection = conn;
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
  } 
  if (char === 'w') {
    connection.write('Move: up');
  } 
  if (char === 'a') {
    connection.write('Move: left');
  }
  if (char === 's') {
    connection.write('Move: down');
  }
  if (char === 'd') {
    connection.write('Move: right');
  }
  if (char === 'p') {
    connection.write('Say: hey');
  }
};


module.exports = {setupInput};
