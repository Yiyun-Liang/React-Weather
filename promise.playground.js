// run 'node promise.playground.js'
// success 18
// error City not found
function getTempCallback(location, callback){
  callback(undefined, '18');
  callback('City not found');
}

getTempCallback('Waterloo', function(err, data){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', data);
  }
});

/*
promise success 19
*/
function getTempPromise(location){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(19);
      reject('Wrong appid');
    }, 1000);
  });
}

getTempPromise('Beijing').then(function(data){
  console.log('promise success', data);
}, function(err){
  console.log('promise error', err);
});

// challenge
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('Cannot add them');
    }
  });
}

addPromise(2, 3).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});

addPromise(2, 'Isa').then(function(sum){
  console.log('This should not show up!!!');
}, function(err){
  console.log('This should appear!!!', err);
});
