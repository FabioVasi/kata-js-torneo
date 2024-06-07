/*
Il torneo Boolkaichi è alle porte e in tanti sono giunti per mettersi alla prova in questo speciale evento.
I combattenti che sono riusciti a registrarsi sono stati valutati e accanto al loro nome è stato segnato anche il loro livello di potenza. 

Il torneo si svolgerà in 5 fasi:

- Scelta dell'arma
- Allenamento
- Qualificazione
- Combattimento
- Premiazione

Utilizzando i metodi degli array (map, filter, sort, slice/splice, push) definire l'algoritmo delle 5 fasi e stampare in console il risultato di ognuna di esse.



**Milestone 1 - Scelta dell’arma:**

ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.



**Milestone 2 - Allenamento:**

ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.



**Milestone 3 - Qualificazione:**

escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.



**Milestone 4 - Combattimento:**

i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 

In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

**NB:**
bisogna assicurarsi che l'elenco contenga un numero pari di combattenti, altrimenti l'ultimo non avrebbe un avversario. Potrebbe essere necessario aggiungere un combattente "Robot" con potenza "4000" all'ultimo minuto.



**Milestone 5 - Premiazione:**

tra tutti i vincitori degli scontri, saliranno sul podio i 3 combattenti con la potenza più alta, in ordine decrescente.



**Bonus:**

Il torneo non finisce qui! Dopo il primo girone di scontri, non passiamo subito alla premiazione, ma facciamo in modo che i vincitori si scontrino ancora e ancora, finchè non ne resterà solo uno!

⚠️ L'elenco dei combattenti è rappresentato dall'array **fighters,** quello delle armi dall’array **weapons**. Questi array non vanno modificati!



# Suggerimenti

- Questo esercizio si svolge interamente nella **console del browser**. Assicurati di stampare il risultato di ogni operazione e di strutturare i messaggi in modo chiaro, esplicitando sempre cosa stai andando a stampare. Dovrebbe essere possibile seguire tutto il flusso dell’applicazione leggendo il **log**.

- *Alcuni **metodi degli array** restituiscono un nuovo array, altri modificano quello originale*. Assicurati di **controllare la documentazione** per evitare sorprese.

- Fai attenzione quando tenti di creare una copia indipendente di un array. L’operatore `=` applicato agli array non trasferisce i valori da una variabile all’altra, ma un effettivo riferimento all’array originale, quindi modificandone uno, si modifica anche l’altro (dal momento che sono in effetti lo stesso array).
*/

const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];
  
  const weapons = [
    { 
        name: "Ventaglio della Musa", 
        power: 15 
    },
    { 
        name: "Scouter", 
        power: 30 
    },
    { 
        name: "Bastone Roshi", 
        power: 60 
    },
    { 
        name: "Fagioli Magici", 
        power: 70 
    },
    { 
        name: "Katana di Yajirobei", 
        power: 85 
    },
    { 
        name: "Spada del Dragone Azzurro", 
        power: 115 
    },
    { 
        name: "Armatura Saiyan", 
        power: 145 
    },
    { 
        name: "Cannone da braccio", 
        power: 170 
    },
    { 
        name: "Nuvola d'oro", 
        power: 200 
    },
    { 
        name: "Bastone Nyoi", 
        power: 220
    },
    { 
        name: "Spada Z", 
        power: 235 
    },
    { 
        name: "Orecchini Potara", 
        power: 250 
    }
];

// Stampo in console tutti i combattenti presenti nell'array con il relativo potere
console.table(fighters);

// Stampo in console tutte le armi presenti nell'array con il relativo potere
console.table(weapons);

// Funzione per ottenere un index casuale
function getRandomWeapon() {
    
    return Math.floor(Math.random() * 12);

}

// Funzione per mescolare un array
function randomWeaponArray(weapons) {
    
    for (let i = weapons.length - 1; i > 0; i--) {
        
        const weapon = getRandomWeapon(i + 1);
        
        [weapons[i], weapons[weapon]] = [weapons[weapon], weapons[i]];
    }
}

// Mescola l'array delle armi
randomWeaponArray(weapons);

// Assegna un'arma casuale a ciascun combattente
fighters.forEach(fighter => {
    // Arma casuale dall'array delle armi
    const randomWeapon = weapons.pop();
    // Assegna l'arma al combattente
    fighter.weapon = randomWeapon;
    
    console.log(`${fighter.name} ha scelto l'arma ${randomWeapon.name}`);
});

// Ora l'array delle armi contiene solo le armi rimanenti non assegnate
console.log("Armi rimanenti:", weapons);

// Allenamento per ogni combattente
fighters.forEach(fighter => {
    // Genera un numero casuale tra 1 e 100 per ogni combattente
    const fighterTraining = Math.floor(Math.random() * 100) + 1;
    
    // Incrementa la potenza del combattente
    fighter.power *= fighterTraining;
    
    console.log(`${fighter.name} si è allenato e la sua potenza è ora di: ${fighter.power}`);
});

// Qualificazione valida per chi ha raggiunto almeno 2000 di potenza
let qualifiedFighters = fighters.filter(fighter => fighter.power >= 2000);

// Combattenti qualificati al torneo
console.log("Combattenti qualificati:");

qualifiedFighters.forEach(fighter => {

    console.log(`${fighter.name} con una potenza di ${fighter.power}`);

});

// Combattenti squalificati dal torneo
const disqualifiedFighters = fighters.filter(fighter => fighter.power < 2000);

console.log("Combattenti non qualificati:");

disqualifiedFighters.forEach(fighter => {

    console.log(`${fighter.name} con una potenza di: ${fighter.power}`);

});

// L'elenco dei combattenti qualificati deve essere pari altrimenti aggiungo un robot come partecipante
if (qualifiedFighters.length % 2 !== 0) {
    
    qualifiedFighters.push({ name: 'Robot', power: 4000 });

};

// Combattimento tra i partecipanti
console.log("Risultati dei combattimenti:");

const winners = [];

for (let i = 0; i < qualifiedFighters.length; i++) {
   
    if (i % 2 === 0 && i + 1 < qualifiedFighters.length) {
        
        const fighter1 = qualifiedFighters[i];
        
        const fighter2 = qualifiedFighters[i + 1];

        if (fighter1.power > fighter2.power) {

            console.log(`${fighter1.name} vince contro ${fighter2.name}`);

            winners.push(fighter1);

        } else if (fighter1.power < fighter2.power) {

            console.log(`${fighter2.name} vince contro ${fighter1.name}`);

            winners.push(fighter2);

        } else {

            console.log(`${fighter1.name} vince contro ${fighter2.name} (parità, gioca in casa)`);

            winners.push(fighter1);
            
        }
    }
};

// Ordinare i vincitori in base alla potenza in ordine decrescente
winners.sort(function(a, b) {
    
    return b.power - a.power;

});

// Selezionare i primi tre per il podio
const podium = winners.slice(0, 3);

// Stampare i vincitori del podio
console.log("Podio:");

podium.forEach(function(winner, index) {

    console.log((index + 1) + "° posto: " + winner.name + " con una potenza di " + winner.power);

});