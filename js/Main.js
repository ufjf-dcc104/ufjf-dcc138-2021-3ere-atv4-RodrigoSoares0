import Cena from "./Cena.js";
import Sprite from "./Sprites.js";
console.log("Hello, World");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//console.log(canvas); 
const cena1 = new Cena(canvas);
cena1.desenhar();

const pc = new Sprite({});
const en1 = new Sprite({x:140, y:100, w:30, h:30, color:"red"});

pc.desenhar(ctx);
en1.desenhar(ctx);