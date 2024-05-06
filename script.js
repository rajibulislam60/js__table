// let cname = document.getElementById('cname')
// let pname = document.getElementById('pname')
// let date = document.getElementById('date')

// let appliedForm = document.getElementById('applied-form')
// let appliedList = document.getElementById('applied-list')



// appliedForm.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     let tr = document.createElement('tr')

//     let td = document.createElement('td')
//     let cnamevalue = cname.value;
//     td.innerHTML = cnamevalue;
//     tr.appendChild(td)

//     let ntd = document.createElement('td')
//     let pnamevalue = pname.value;
//     ntd.innerHTML = pnamevalue;
//     tr.appendChild(ntd)
//     let nntd = document.createElement('td')
//     let datevalue = date.value;
//     nntd.innerHTML = datevalue;
//     tr.appendChild(nntd)

//     appliedList.appendChild(tr)
// })



// let type = document.querySelector('.type');
// let typetext = type.innerHTML;

// let typearray = typetext.split('')

// let count = 0;
// type.innerHTML = '';
// function typejs(){
//     if (typetext.length > count) { 
//        type.innerHTML += typetext.charAt(count++) 
//        typearray = typetext.split('')
//     }else{
//         typearray.pop();
//         type.innerHTML = typearray.join('');
       
//        if(typearray.length == 0){
//         count = 0;
//        }
//     }
    
    
// }

// setInterval(()=>{
//   typejs()  
// }, 200)






let cname = document.getElementById('cname');
let pname = document.getElementById('pname');
let date = document.getElementById('date');
let appliedForm = document.getElementById('applied-form');
let appliedList = document.getElementById('applied-list');



appliedForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let cnamevalue = cname.value;
    let pnamevalue = pname.value;
    let datevalue = date.value;

    let tr = document.createElement('tr');

    let td = document.createElement('td');
    let ntd = document.createElement('td');
    let nntd = document.createElement('td');

    td.innerHTML = cnamevalue;
    ntd.innerHTML = pnamevalue;
    nntd.innerHTML = datevalue;

    tr.appendChild(td);
    tr.appendChild(ntd);
    tr.appendChild(nntd);



    appliedList.appendChild(tr);
    
})



let type = document.querySelector('.type');
let typetext = type.innerHTML;


let typearray = typetext.split('');

count = 0;
type.innerHTML = '';
function work(){
  if (typetext.length > count) {
    type.innerHTML += typetext.charAt(count++);
    typearray = typetext.split('');
  }else{
    typearray.pop('')
    type.innerHTML = typearray.join('');
    if (typearray.length == 0) {
      count = 0;
    }
  }
}
setInterval(()=>{
  work()
},150)






