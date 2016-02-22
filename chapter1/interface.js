/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection('movies').insert(doc, function(error, result) {
      if (error) {
          callback(error);
      } else {
          callback(null);
      }
  })
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  db.collection('movies').find({director: director}).toArray(function(error, docs) {
      if (error) {
          callback(error, []);
      } else {
          docs.sort(function(a, b) {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              // a must be equal to b
              return 0;
          });
          callback(null, docs);
      }
  })
};
