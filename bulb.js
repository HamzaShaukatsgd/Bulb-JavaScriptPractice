
let bulb=document.querySelector('.bulb');
// console.log(bulb);
let btnbulb1=document.querySelector('#btnbulb');
// console.log(btnbulb1);
let flag=0;

btnbulb1.addEventListener('click',function(){
  if(flag==0)
  {
    bulb.style.backgroundColor="yellow"
    btnbulb1.innerHTML="ON";
    flag=1;
  }
  else{
    bulb.style.backgroundColor="transparent"
    btnbulb1.innerHTML="OFF";
    flag=0;
  }

})