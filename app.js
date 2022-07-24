
let items = ["Wake up at 4" , "Go Run" ,"Do Yoga"];
let workItems =[];
const express = require("express");
const bodyparser = require("body-parser");
const Date = require(__dirname +"/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static('public'));
// public folder and all it's directories now will be acessed by express folder.


app.get("/", function(req, res) {


// here to put date..

let day = Date.getDate();

  res.render("list", {
    ListTitleName: day ,
    newListItemSName : items
  });

});



app.post("/" ,function(req,res){
let item =req.body.newItem;
console.log(req.body.List);

if( req.body.List === "Work" )
{
  workItems.push(item);
  res.redirect("/work");
}
else{

  items.push(item);

  res.redirect("/");

}




});

app.get("/about" ,function(req,res){

res.render("about");

});

app.get("/work" , function(req,res){

res.render("list",{
ListTitleName : "Work",
newListItemSName : workItems

} );

});

app.post("/work" ,function(req,res){

});





app.listen(3000, function() {

  console.log("Server started on port 3000");
})
