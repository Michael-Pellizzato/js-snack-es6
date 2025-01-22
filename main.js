/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/
const bici = [
    {
      nome: "Bici da Corsa",
      peso: 7
    },
    {
      nome: "Mountain Bike",
      peso: 9
    },
    {
      nome: "Bici Elettrica",
      peso: 15
    },
    {
      nome: "Bici da Passeggio",
      peso: 12
    },
    {
      nome: "Bici BMX",
      peso: 10
    },
    {
      nome: "Bici Pieghevole",
      peso: 8.5
    }
  ];


let biciLeggera = bici[0]

bici.forEach(bici => {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
});

console.log(`La bicicletta più leggera è: ${biciLeggera.nome}, con un peso di ${biciLeggera.peso}.`);



/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const squadre = [
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 },
  { nome: "Roma", punti: 0, falliSubiti: 0 }
];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

squadre.forEach(squadra => {
  squadra.punti = getRandomNumber(0, 50);
  squadra.falliSubiti = getRandomNumber(0, 15);
});

const squadreFalli = squadre.map(squadra => ({
  nome: squadra.nome,
  falliSubiti: squadra.falliSubiti
}));

console.log("Squadre complete:", squadre);
console.log("Squadre con nomi e falli subiti:", squadreFalli);




/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).*/

let citta = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara']
let nomi = []

function myFunction (michael, a, b){
   for (let i = 0; i < citta.length; i++){
    if( i > a && i < b ){
    michael.push(citta[i])
   }
   }

   console.log(nomi)
}
   
myFunction(nomi, 2, 4)
   

  
  

   











