
const pays = [
    "Haïti",
    "Bresil",
    "Canada",
    "Bolivie",
    "Italie",
    "Allemagne",
    "Espagne"
    ];
    
    
function loopFor(){
    debugger;
    for(let i = 0; i < pays.length; i++){
        console.log(pays[i]);
    }
}

loopFor();

// for of

function loopForOf(){
    debugger;
    for(let value of pays){
        console.log(value);
    }
}
loopForOf();

// forEach

function loopForEach(){
    debugger;
    pays.forEach(pay => console.log(pay));
}
loopForEach();

// map

function loopMap(){
    debugger;
    pays.map((pay, i) =>{
        console.log(`${i} - ${pay}`)
    });
}
loopMap();

// while

function loopWhile(){
    debugger;
    let i = 0;
    while(i < pays.length){
        console.log(pays[i]);
        i++;
    }
}
loopWhile();