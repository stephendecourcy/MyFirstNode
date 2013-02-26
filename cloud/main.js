exports.myFunction = function(params, callback) {
  var num = params.num;
  if(num < 10){
    return callback({err: 'Num too large'}, {result: num});
  }
  callback(undefined, {result: num});
};

exports.redFunction = function(params, callback) {
  var num = params.num;
  if(num != 33){
    return callback({err: 'Not 33'}, {result: num});
  }
  callback(undefined, {result: num});
};
exports.greenFunction = function(params, callback) {
  var num = params.num;
  if(num == 33){
    return callback({err: 'not 33'}, {result: num});
  }
  callback(undefined, {result: num});
};
