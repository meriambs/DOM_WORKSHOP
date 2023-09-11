var btntext= document.querySelector(".innertext");
var btnhtml = document.querySelector(".innerhtml");
var content = document.querySelector(".content");

console.log(content);
console.log(btntext);
console.log(btnhtml);

let mystring = `lorem ipsum dolor sit amet, consectetur adipiscing elit.
<p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<img src="https://picsum.photos/200/300" alt="random image">`

btntext.addEventListener('click',()=>{
    content.innerText = mystring;
})


btnhtml.addEventListener('click',()=>{
    content.innerHTML = mystring;
})

// const collection = document.querySelector(".example");
// collection.style.backgroundColor = "red";

// console.log('collection',collection);

// ici our le cas ou nous voulons juste la 1ere ligne de la collection

// const collection = document.querySelector(".example");
// collection.style.backgroundColor = "red";


const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}
console.log('nodeList',nodeList);
