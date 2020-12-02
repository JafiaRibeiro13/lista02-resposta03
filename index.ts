// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Questão 03</h1>`;

function dizer_dia (data) {
  let dia : Date = data.getDate();
  return dia;
  

}
let dt = new Date ();

let hoje = dizer_dia(dt);
document.write ('a data de hoje é: ' + hoje )

