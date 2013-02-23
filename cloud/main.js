exports.myFunction = function(params, callback) {
  var num = params.num;
  if(num > 10){
    return callback({err: 'Num too large'}, {result: num});
  }
  callback(null, {result: num});
};


exports.redFunction = function(params, callback) {
  callback({err: 'Red Error'});
};


exports.greenFunction = function(params, callback) { 
  callback(null, {result: "Green Sucess"});
};