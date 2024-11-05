// let changemode = document.getElementById(btn1);
// let currentmode = 'light';

// changemode.addEventListener('click' , () => {
//     if (currentmode === 'light'){
//         currentmode = 'dark';
//     } else{
//         currentmode = 'light'
//     }
//     console.log(currentmode);
// })

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

// MouseOver

function mouse(){
    document.getElementById('mouseover').style.color = 'red'
}


// img

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }


  function keyup(){
    let input = document.getElementById('firstname').value 
    document.getElementById('sp').innerHTMl = input
  }


  let user = document.getElementById('username')
  user.addEventListener('click' , () =>{
    console.log('entering the username')
  })

  let passwd = document.getElementById('password')
  passwd.addEventListener('focus' , () =>{
    console.log('user has gone')
    passwd.style.border = '3px solid red'
  })