const express = require("express");
let MongoClient = require('mongodb').MongoClient;
const app =  express();
const https = require("https");
const mongoose = require("mongoose");
let url="mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net/";
mongoose.connect("mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net/__CONCOX__");
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});


MongoClient.connect(url, function(err, client)
{

   var db = client.db('__CONCOX__');
    var cursor_device = db.collection('devices').find();
     // console.log(cursor.devices._id);
     var id=[];
     cursor_device.sort({createdAt:-1});
     let cnt=30;
    cursor_device.forEach(function(item){
      if(cnt>0){
        id.push(item.id);
       console.log(item);
     }

      cnt--;
    });
    console.log(id);
    //var cursor_status = db.collection('status').find();


}
)


/*const uri = "mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net"
MongoClient.connect(uri , function(err,client)
{
  var db = client.db('__CONCOX__');
  var cursor = db.collection('devices').find();
  cursor.forEach(console.dir);
})*/
app.get("/" , function(req,res){
  Status.find(function(err,results){
    if(err)
    console.log(err);
    else
    console.log(results);
  });
  // console.log((mongoose.find());
});
app.listen(3000,function(){
  console.log("server started");
});
