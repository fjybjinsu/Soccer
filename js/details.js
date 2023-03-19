const table = document.querySelector(".table");
const length = document.getElementById("details_tr").childElementCount;

function appendRow(){
    const trEle = document.createElement('tr');
    for(let j=0; j<length; j++){
        const tdEle = document.createElement('td');
        const inputEle = document.createElement('input');
        inputEle.setAttribute('type', 'text');
        inputEle.style.textAlign = 'center';
        inputEle.style.border = 'none';
        inputEle.style.width = '50px';
        trEle.appendChild(tdEle);
        if(j+1 != length){
            tdEle.appendChild(inputEle);
        } else{
            const btnRemove = document.createElement('input')
            btnRemove.setAttribute('type', 'checkbox');
            btnRemove.setAttribute('onClick', 'deleteRow()');
            btnRemove.setAttribute('name', 'checkboxObj');
            tdEle.appendChild(btnRemove);
        }
    }
    table.appendChild(trEle);
}

function deleteRow() {
    let checkboxArray = document.getElementsByName('checkboxObj');
    
    for (var i = checkboxArray.length-1; i>=0; i--) {
       var check = checkboxArray[i].checked;
       
       if (check) {
          table.deleteRow(i);
       }
    }
 }

appendRow();