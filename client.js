const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: PML');
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 1000);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 2000);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 3000);
   

    // conn.write('Move: left');

  })
  conn.on('data', (data) => {
    console.log('Incoming: ', data);
  
  });
  
  // })

  return conn;

  
};

module.exports = {connect};