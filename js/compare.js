// checar os checkboxes selecionados
let checkboxes = document.querySelectorAll('.checkbox');
let selected = document.getElementsByName('selected[]');
let checkeds = 0;
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
          carArr.push(carClass);
          checkeds++
        } else {
            checkeds--
        }

    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        console.log("entrei");
        carArr = [];
        disableCheckbox(checkboxes);
        return;
    } if (carArr.length >= 3) {
        alert("Precisa marcar apenas 2 carros para apresentar a comparação");
        console.log("entrei 2");
        disableCheckbox(checkboxes);
        carArr = [];
        return;
    } else {
        for (let i = 0; i < carArr.length; i++) {
            UpdateCompareTableLeft();
            UpdateCompareTableRight();
            document.getElementById("compare").style.display = "block";
            carArr = [];
        }
    }
}

function UpdateCompareTableLeft(){
    for (let i = 0; i < carArr.length; i++) {
        document.querySelector('#image_0').src = carArr[0].image;
        document.querySelector('#compare_modelo_0').innerHTML = carArr[0].nome;
        document.querySelector('#compare_alturacacamba_0').innerHTML = carArr[0].alturaCacamba;
        document.querySelector('#compare_alturaveiculo_0').innerHTML = carArr[0].alturaVeiculo;
        document.querySelector('#compare_alturasolo_0').innerHTML = carArr[0].alturaSolo;
        document.querySelector('#compare_capacidadecarga_0').innerHTML = carArr[0].capacidadeCarga;
        document.querySelector('#compare_motor_0').innerHTML = carArr[0].motor;
        document.querySelector('#compare_potencia_0').innerHTML = carArr[0].potencia;
        document.querySelector('#compare_volumecacamba_0').innerHTML = carArr[0].volumeCacamba;
        document.querySelector('#compare_roda_0').innerHTML = carArr[0].roda;
        document.querySelector('#compare_preco_0').innerHTML = carArr[0].preco;    
    }
}

function UpdateCompareTableRight(){
    for (let i = 0; i < carArr.length; i++) {
        document.querySelector('#image_1').src = carArr[1].image;
        document.querySelector('#compare_modelo_1').innerHTML = carArr[1].nome;
        document.querySelector('#compare_alturacacamba_1').innerHTML = carArr[1].alturaCacamba;
        document.querySelector('#compare_alturaveiculo_1').innerHTML = carArr[1].alturaVeiculo;
        document.querySelector('#compare_alturasolo_1').innerHTML = carArr[1].alturaSolo;
        document.querySelector('#compare_capacidadecarga_1').innerHTML = carArr[1].capacidadeCarga;
        document.querySelector('#compare_motor_1').innerHTML = carArr[1].motor;
        document.querySelector('#compare_potencia_1').innerHTML = carArr[1].potencia;
        document.querySelector('#compare_volumecacamba_1').innerHTML = carArr[1].volumeCacamba;
        document.querySelector('#compare_roda_1').innerHTML = carArr[1].roda;
        document.querySelector('#compare_preco_1').innerHTML = carArr[1].preco;   
    }
}

function disableCheckbox(el) {
    console.log(checkeds);
    console.log(selected);
    let ele = document.getElementsByName('selected[]');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox'){
            ele[i].checked=false; 
            console.log('desabilitei');
        }
    }   
    
}

function HideCompare(){
    disableCheckbox(checkboxes);
    document.getElementById("compare").style.display = "none"; 
}