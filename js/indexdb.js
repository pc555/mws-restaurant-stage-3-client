let dbPromise = idb.open('review', 1, function(upgradeDb) {
  let store = upgradeDb.createObjectStore('restaurants', {
    keyPath: 'id'
  });
});

// read "hello" in "keyval"
dbPromise.then(function(db) {
  var tx = db.transaction('keyval');
  var keyValStore = tx.objectStore('keyval');
  return keyValStore.get('hello');
}).then(function(val) {
  console.log('The value of "hello" is:', val);
});
