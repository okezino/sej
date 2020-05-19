var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SEJ:$Simon4life$@cluster0-vdm9w.mongodb.net/test?retryWrites=true&w=majority";


module.exports = class Database{

    static Postdata(myobj, cb){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("REGISTRATION");
            dbo.collection("KIDS").insertOne(myobj, function(err, res) {
              if (err){
                  cb({sucess : false, message : err.message})
              } else{
                  cb({sucess : true, message : "added"})
              };
              db.close();
            });
          });
      
    }
    static Postnews(myobj, cb){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("REGISTRATION");
            dbo.collection("newsletter").insertOne(myobj, function(err, res) {
              if (err){
                  cb({sucess : false, message : err.message})
              } else{
                  cb({sucess : true, message : "added"})
              };
              db.close();
            });
          });
      
    }
}