 console.log("Hello Pakistan");
// let name="yaho baba";
// alert("Sorry");
// document.writeln(`This is your Problem ${name}`);

// console.warn("Warned");
// console.error("This is your own mistake!")


// var a="hamza";
// function pakistan() {
 
//     let b=5;
//     return b;
// }
// let c=pakistan();
// console.log(c);


// let b="KArch LAhoee";
// let c=7;
// console.log(`Hamza KEsa Hua M akia kah raha hu tum mi=uja ${c} hu gya sir`)


// let a =[{
//     name:"Hamza",
//     Class:"7th",
//     section:"b"
// },
// {
//     name:"umar",
//     Class:"6th",
//     section:"b"
// }]
// console.log(a);

// let first_name="M HAmza";
// let last_name="Shaukat";

// function fullname(params) {
//     return(`${first_name} ${last_name}`);
// }
// let fuled_named=`hello ${fullname()}`;
//  console.log(fuled_named);

// let b={
//     Name:"SAqib",
//     class:"5th",
//     subjects:["Englisgh","Urdu","Math","Social"],
//     rohail:{
//         class:"8th",
//         position:"north"
//     }
// }
// b.rohail.class="9th";
// console.log(b);

// let a=10;
// (a==10)?console.log("true"):console.log("false");

// switch (true) {
//     case (a==5 || a==8):console.log("True");
        
//         break;
//         case(a!=4 || a==7): console.log("Good");
//         break;

//     default:console.log("koi bi nahi");
//         break;
// }


// var a = confirm("Do you like Website ");
// if(a){
//     alert("Thanks");
// }
// else{
//     alert("Sorry");
// }
// let c=prompt("Enter your percentage");
// if(c=="Hamza" || c=="shaukat")
// {
//     console.log("Correct")
// }
// else{
//     console.log("False");
// }

// function display(name,claass) {
//     console.log(`Name:${name} Class:${claass}`);
    
// }
// display("Hamza","th9");
// Events----------------------
// let h1=document.getElementById("abc12");
// let b1=document.getElementById("body1");

// function changecolor() {
//     h1.style.fontSize="4rem";
//     h1.style.color="blue";
//     b1.style.backgroundColor="orange"
//     b1.style.alignItems="start";
// }

// console.log(h1);
// console.log(b1);

// let a=17;
// a=undefined;
// a=18;
// a=null;
// console.log("A"+a);

// let p1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quo quasi quidem laudantium molestias provident soluta rem aliquam, eius inventore asperiores maiores praesentium sit laboriosam quas quia reiciendis nisi porro labore voluptatibus cum iste est! Nihil quae cumque facere optio suscipit porro libero eligendi, quos aliquam labore consectetur alias temporibus saepe iusto molestiae at architecto omnis dolor laboriosam. Eligendi, amet."
// const p2= document.createElement('p');
// // p2.classList.add('')
// p2.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quo quasi quidem laudantium molestias provident soluta rem aliquam, eius inventore asperiores maiores praesentium sit laboriosam quas quia reiciendis nisi porro labore voluptatibus cum iste est! Nihil quae cumque facere optio suscipit porro libero eligendi, quos aliquam labore consectetur alias temporibus saepe iusto molestiae at architecto omnis dolor laboriosam. Eligendi, amet."

// p2.style.color="blue";
// let arr =[
//     ["a","b","C","d"],
//     ["E","F","G","H"],
//     ["I","J","K","L"],
//     ["M","N","N","O"],
//     ["P","Q","R","S"]
// ]
// document.write("<br>");
// document.write("<table border='1px'>");
// for(let i=0;i<5;i++)
// {
//     document.write("<tr>");
//     for(let b=0;b<4;b++)
//     {
//         document.write("<td>");
//         document.write(arr[i][b]+" ");
//         document.write("</td>");
//     }
//     document.write("<br>");
//     document.write("</tr>");
// }
// document.write("</table>");
// document.write("<br>");
// document.write(p2);
// console.log(p2.style.color);



// let a=["A","D","C","B","E","F","C"];
// let b=["L","O","P","Q","R"];
//  a.sort();
// a.reverse();
// a.pop();
// a.push("G");
// a.shift();
// a.unshift("O");
// let c=a.concat(b);
// document.write(c+"");
//  let c=a.join(":");

// let c= a.slice(1,3);
// let c=a.slice(2,4);
// a.splice(2,0,"Hamza");
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]=="C")
//     {
//         console.log(i);
//     }
    
// }
// a.splice(5,-3);
// document.write(a);
// let d="HEllo";
// let c=Array.isArray(a);
// let c= a.indexOf("C",0);
// let c= a.lastIndexOf("E",5);
// let c= a.includes("M");
// let c= a.some(CheckValue);
// let c= a.every(CheckValue);
// let c=a.findIndex(CheckValue)
// let c=a.filter(CheckValue);
// function CheckValue(value1){
//     return value1=="C";

// }
// let c=a.toString();
// console.log(typeof c);
// console.log(a.valueOf());
// a.forEach(function(vakue,ind)
// {
//     console.log(ind+":"+vakue);
// })

// const myArr=["Fan","Camer",34,null,true];
// const myArr1=myArr.unshift("D");
// console.log(myArr);
// console.log(myArr1);
// let g=new Array(5);
// g[2]=7;
// g[4]=1;
// console.log(g);


// let c="HEllo How are you";
// console.log(c.replace("How","Why"));
// let f={
//         name:"Hmza",
//         value:3
//     };
    

// for (const key in f) {
//     document.write("<br>"+key+":"+f[key]+"<br>");
// }

// let g="Hello kesy hal ha"

// console.log(g.split(","));
// let r=[1,2,3,4,5];
// let m= r.map((value)=>{
//       return value*2;
// })
// console.log(m);
// console.log(g.replace('kisy',"Kasa"));
// console.log("Trim="+g.trim());
// let h= g.trim();
// console.log("Trim:"+h);

// console.log(g.repeat(3));
// let h111=document.getElementsByClassName('abc13');
// console.log(h111);
// console.log(h111[0].innerHTML);
// h111[0].classList.add('headings1');
// console.log(h111);
// console.log(h111[0].innerText);

// let tagname=document.getElementsByTagName('h1');
// console.log(tagname);

// let iddd=document.getElementById("abc12");
// console.log("ID="+iddd);
// iddd.style.color="purple";
// let maindived=document.getElementsByClassName('maindiv');
// abc=document.createElement('p');
// abc.innerText="why are you laughing to seeing this thing";

// maindived.appendChild(abc);
// console.log(abc.innerHtml);
// console.log(maindived);
// maindived[0].appendChild(abc);
// let abcd=document.querySelectorAll('.maindiv');
// console.log(abcd);
// console.log(abcd.innerHtml);
// let created_div=document.createElement('div');
// let created_element=document.createElement('p');
// created_element.innerHtml="hello how are you ,you are responsible for new jobs 2023";
// created_div.appendChild(created_element);
// maindiv.appendChild(created_div);
// console.log("HEllo");

// let button1 =document.querySelector('#bt1');
let button1=document.getElementById('bt1');
// console.log(button1);
let maindiv1=document.querySelector('.maindiv');
// console.log(maindiv1);
let heading1=document.querySelector('#abc12');

let create_ele=document.createElement('p');
create_ele.innerHTML="How I can help you ?"
maindiv1.appendChild(create_ele);
button1.addEventListener('click',function(){
    maindiv1.style.backgroundColor="yellow";
    heading1.innerHTML="Hello Hamza";
    heading1.style.color="black"
})
// window.onload=function(){
//     console.warn("The document was loaded");
// }



ChandHAnding=()=>{
let ele1=create_ele('h1').innerHTML="Asslam-O-Allaikum";
      
}