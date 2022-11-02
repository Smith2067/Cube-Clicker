var cubes = 0;
console.log(cubes);
var count = 1;
var price = 25;
var priceup = 75;
var upgray = 1;
var upgamount = 1;
console.log(cubes);

function clicky(){
    cubes = cubes + count;
    console.log(cubes)
    document.getElementById('counter').textContent = ("Cube count: " + cubes);
}
function upgrade(){
if(cubes >= price){
    count = count + upgamount;
    cubes = cubes - price;
    price = price*2;
    document.getElementById('counter').textContent = ("Cube count: " + cubes);
    document.getElementById('upprice').textContent = ("Price: " + price + " cubes");
}
else{
    alert("not enough cubes!");
}
}

function upgradeup(){
    if(cubes >= priceup){
    cubes = cubes-priceup;
    upgamount = upgamount*2;
    priceup = priceup*3;
    document.getElementById('counter').textContent = ("Cube count: " + cubes);
    document.getElementById('uppriceup').textContent = ("Price: " + priceup + " cubes");
    }
    else{
        alert("not enough cubes!");
    }
}

function inf(){
    var check = prompt("What is the code?");
    if (check == "frog") {
        cubes = 999999999999999;
        //upgray = 1000000000000000000000000000000000;
        //upgamount = 1000000000000000000000000000000000;
        //count = 1000000000000000000000000000000000;
        console.log("you have " + cubes + " cubes.")
        document.getElementById('counter').textContent = ("Cube count: " + cubes);
    }
    else{
        alert("invalid.")
    }
}

function ran(){
    var fifty = Math.floor(Math.random()*2+1);
    console.log(fifty);
    if(fifty == 2){
        cubes = cubes/2;
        cubes=Math.floor(cubes)
        document.getElementById('counter').textContent = ("Cube count: " + cubes);
        
    }
    else if(fifty == 1){
        cubes = cubes*2;
        document.getElementById('counter').textContent = ("Cube count: " + cubes);
    }
    else{
        alert("error");
    }
}

var part = 0;
var awar = 0;
var star = 0;
function tropy(){
    if(part = 0){
        alert("Awards Appear after you have earned a certain amount of cubes.  Click this button again when you have 50 cubes.");
        part = 1;
    }
    else if(part = 1){
        if(cubes >= 50){
        part = 5;
        document.getElementById('participate').style.opacity = "100%";
        alert("you have unclocked: participation trophy!");
        }
        else{
            alert("You need 50 cubes for next award!")
        }
    }
    else{
        alert("in progress")
    }
}