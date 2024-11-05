function createQR() {
    let txt = document.getElementById('qr-text').value;
    document.getElementById('img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}';
}


let modeBtn = document.querySelector('#btn1');
let currentmode = 'light';

modeBtn = addEventListener('click' , () => {
   if (currentmode === 'light'){
    currentmode = 'dark';
    document.querySelector('body').style.backgroundColor = 'black';
   }else{
    currentmode = 'light'
    document.querySelector('body').style.backgroundColor = 'white' ;
   }

   console.log(currentmode)
})