var a;
var Date;
var time;

setInterval(() =>{
a = new Date ();
  date = a.toLocaleDateString();
  time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  document.getElementById("time").innerHTML = time + "On"   + date;


}, 1000 );
