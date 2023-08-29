interface Bottle{
    size:number,
    type:string
}

let mybottle:Bottle={
    size:15,
    type:"Coke"
}
console.log(mybottle);
function Drink(mybottle:Bottle){
    return (`I want ${mybottle.size} litre ${mybottle.type}`)
}
let mydrink= Drink(mybottle)
console.log(mydrink);

interface Can{
    size:number
};
let mycan:Can={
size:1,
}
mycan=mybottle

interface pet{
    canfly: boolean,
    canswim: boolean
}
let duck:pet={
    canfly: true,
    canswim: true
};
let dog:pet={
    canfly: false,
    canswim: true,

}
if (duck.canfly && duck.canswim){
console.log("I wanna buy it")
}else {
    console.log("i dont wana buy it");
    
}
if (dog.canfly && dog.canswim){
    console.log("I wanna buy it")
    }else {
        console.log("i dont wana buy it");
        
    }






