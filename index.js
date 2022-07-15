console.log(document.getElementsByTagName("body")[0]);
let body=document.getElementsByTagName("body")[0];
let form=document.createElement("form");
form.setAttribute("id","form");
form.classList.add("reg");
body.appendChild(form);
console.log(body);


let fnamel=document.createTextNode("First Name:");
form.appendChild(fnamel);
let brc=document.createElement("br");
form.appendChild(brc);
let fname=document.createElement("input");
fname.setAttribute("type","text");
fname.setAttribute("placeholder","First Name");
fname.classList.add("firstname");
form.appendChild(fname);
let br2=document.createElement("br");
form.appendChild(br2);
let brx=document.createElement("br");
form.appendChild(brx);


let snamel=document.createTextNode("Second Name:");
form.appendChild(snamel);
let brt=document.createElement("br");
form.appendChild(brt); 
let sname=document.createElement("input");
sname.setAttribute("type","text");
sname.setAttribute("placeholder","Second Name");
sname.classList.add("secondname");
form.appendChild(sname);
let br=document.createElement("br");
form.appendChild(br);
let br4=document.createElement("br");
form.appendChild(br4);



let passwordl=document.createTextNode("Password:");
form.appendChild(passwordl);
let bru=document.createElement("br");
form.appendChild(bru);
let password=document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("placeholder","password");
password.classList.add("password");
form.appendChild(password);
console.log(password);
let br1=document.createElement("br");
form.appendChild(br1);
let br0=document.createElement("br");
form.appendChild(br0);

let emaill=document.createTextNode("Email:");
form.appendChild(emaill);
let brl=document.createElement("br");
form.appendChild(brl);
let email=document.createElement("input");
email.setAttribute("type","email");
email.setAttribute("placeholder","ndaniel4040@gmail.com");
email.classList.add("secodname");
form.appendChild(email);
let brz=document.createElement("br");
form.appendChild(brz);
let bry=document.createElement("br");
form.appendChild(bry);


let button=document.createElement("button");
button.classList.add("button");
form.appendChild(button);



