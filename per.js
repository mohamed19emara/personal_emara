let myName = "my name is mohamed emara i am front end developer";

index = 1;

function write(){
    document.querySelector("h2").textContent = myName.slice(0,index);
    index++
    if(index > myName.length ){
        index =0
    }
}

setInterval(function(){
    write();
} ,200)