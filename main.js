let json = require('./img');

console.log(json);

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  for (var i = 0; i < 25; i++) {
    $('#photos').append('<div><img src=`${}`></div>');
  }