let symbArray = [];
let randomSymbolInt = 0;
let menuDiv = window.document.getElementById('menuDiv');
let clickablez = [];


export function populateMenu(numOfSk){
    
    for(let i = 0; i< numOfSk; i++){
        let line = document.createElement('div');
        randomSymbolInt = Math.floor(Math.random() * 10);
        
        if(symbArray.includes(randomSymbolInt))
            randomSymbolInt = Math.floor(Math.random() * 10);
        
        line.innerHTML = `&#973${randomSymbolInt}`;
        line.id = `sk0${i+1}`;
        line.className = "meni";
        menuDiv.append(line);
        symbArray.push(randomSymbolInt);
        clickablez.push(line);
    }
    return clickablez;
}

