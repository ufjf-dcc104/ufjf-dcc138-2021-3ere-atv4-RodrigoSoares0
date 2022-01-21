import Cena from "./Cena.js";
import Sprite from "./Sprites.js";
console.log("Hello, World");
const canvas = document.querySelector("canvas");
//const ctx = canvas.getContext("2d");
//console.log(canvas); 
const cena1 = new Cena(canvas);


const pc = new Sprite({});
const en1 = new Sprite({x:140, y:100, w:30, h:30, color:"red"});

cena1.adicionar(pc);
cena1.adicionar(en1);

cena1.desenhar();

