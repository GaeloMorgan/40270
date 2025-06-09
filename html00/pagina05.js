// a continuacion voy  ausar el appi done de java Scrpt
console.log("imprime este mensaje")
const x = document.getElementById("app")

console.log(x)

// x.innerHTML = xy(1) + xy(2) + xy(3)
//for (let i = 1; i < 10; i++) {
// x.innerHTML = x.innerHTML + xy(i)



function imagen(id) {
    const c = '<figure>'+
    '<img src="https://picsum.photos/id/'+id+'/200/200/" alt="John">'+
    '<figcaption>John</figcaption>'+
    '</figure>' 
    return c
}


//funcion anónima asignada a la constante Picture
// const Picture = function (){return "hola"};
// funcion anonima de tipo arrow function asignada la constante Picture
const Picture = (id) => {
return `<figure>
<img src="https://picsum.photos/id/${id}/200/200/" alt="John">
<figcaption>John</figcaption> 
</figure>`
};
//cuidar que Picture ya esté inicializada
x.innerHTML  = Picture(1) + Picture(2) + Picture(3)