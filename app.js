const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


var user = document.querySelector('#user');
user.addEventListener('keyup',function(){
  if(user.value != '19.56.DAY'){
    user.style.color='red';
    pass.style.color='red';
    return false;
  }else{
    user.style.color='green';
  }
})

var pass = document.querySelector('#pass');
pass.addEventListener('keyup',function(){
  if(pass.value != 'day_56.19.cse'){
    pass.style.color='red';
    user.style.color='red';
    return false;
  }else if(user.value == '19.56.DAY' && pass.value == 'day_56.19.cse'){
    pass.style.color='green';
    user.style.color='green';
  }
})


var log = 0;
function conf(){
  var user = document.querySelector('#user');
  var pass = document.querySelector('#pass');
  if(user.value == '19.56.DAY' && pass.value == 'day_56.19.cse'){
    log=1;
  }else{
    log=0;
    alert('Type valid username and password!');
  }
}

setInterval(()=>{
  if(log==1)location.replace('home.html');
})
