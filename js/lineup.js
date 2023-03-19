const field = document.querySelector('.field_lineup');
const btnOur = document.querySelector('#btnOur');
const btnYour = document.querySelector('#btnYour');
const container = document.querySelector(".container_lineup")
const table = document.querySelectorAll(".table");

let teamFlag = 0;

btnOur.addEventListener('click',()=>{
    teamFlag = 0;
})
btnYour.addEventListener('click', ()=>{
    teamFlag = 1;
})
field.addEventListener('click',()=>{
    if (teamFlag==0){
        addItem("blue");
    } else {
        addItem("red");
    }
    
})

function addItem(team){
    let path ;
    if(team == "blue"){
        path = "../img/blue.png";
    } else if (team=="red"){
        path = "../img/red.png";
    }
    
    const item = document.createElement('div');
    item.setAttribute('class', "hit");
    // item.setAttribute('background-image', `url(${path})`);
    const x = event.clientX;
    const y = event.clientY;
    item.style.position = 'absolute';
    item.style.left = `${x-20}px`;
    item.style.top = `${y-15}px`;
    const position = document.createElement('span');
    position.className = "text_position"
    inputPosition = prompt("포지션을 입력해주세요!!");
    position.innerText = inputPosition;
    item.appendChild(position);
    item.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        item.style.visibility = "hidden";
    })
    field.appendChild(item);
        // item.remove();
}


function makeTableRow(size){
    for(let j=0 ; j <table.length; j++){
        for(let i=0 ; i <11 ; ++i){
            let row = `
                <tr>
                    <td><input type="text" size="${size}" style="text-align : center; font-size : 12pt; font-weight : bold; width : 90%; padding : 0.5em; border : none"></td>
                    <td><input type="text" size="${size}" style="text-align : center; font-size : 12pt; font-weight : bold; width : 90%; padding : 0.5em; border : none"></td>
                </tr>
            `
            table[j].innerHTML += row
        }
    }
}

function removeItem(element){
    if(event.currentTarget == element){
        alert('hello');
    }
}

makeTableRow('15');
