
var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Smart Devices for sale</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Laptops</li>"
            +"<li>Mobile Phones</li>"
            +"<li>Hololgraphic Devices</li>"
            +"<li>Samrt Watches</li>"
            +"<li>Gaming Consoles</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Contoso </h1>"
            +"<hr/>"
            +"<h3>MultiNational Company With 12 Office's All Over The world</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: anubhav </li>"
            +"<li>Director: pinky </li>"
            +"<li></li>"
            + "</ol>"
    );
});



var server=app.listen(9000);
console.log("contoso running on port 9000");