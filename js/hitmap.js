const field = document.querySelector('.field');
const btnOur = document.getElementById('btnOur');
const btnYour = document.getElementById('btnYour');
const container = document.querySelector('#container');

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
    const item = document.createElement('img');
    item.setAttribute('class', "hit");
    item.setAttribute('src', path);
    item.style.position = 'absolute';
    const x = event.clientX;
    const y = event.clientY;
    item.style.left = `${x-20}px`;
    item.style.top = `${y-15}px`;
    item.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        item.style.visibility = "hidden";
    })
    field.appendChild(item);
    // item.add
}
