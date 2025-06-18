var Email =document.getElementById("Email")
var url =document.getElementById("URL")
var sites=[]
if(localStorage.getItem("sites")!==null){
  sites=  JSON.parse(localStorage.getItem("sites"))
     display()
}
function addSite(){
    var site={
        emailAdress:Email.value, 
        siteURl:url.value, 
    }
    sites.push(site)
    console.log(sites)
    localStorage.setItem("sites",JSON.stringify(sites))
    clear()
    display()
}
function display(){
var box=""
for(var i=0;i<sites.length;i++){
    box+=`
    <tr class=" border-bottom">
    <td class="py-2">${i + 1}</td>
    <td class="py-2">${sites[i].emailAdress}</td>
    <td class="py-2"><button class="btn btn-success"> <a href="https://${sites[i].siteURl}" target="_blank"><i class="fa-solid fa-eye me-2"></i>Visit</a></button></td>
    <td class="py-2"><button onclick="deleteItem(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
    </tr>   `
}
document.getElementById("tbody").innerHTML = box
}
function clear(){
    Email.value=""
    url.value=""
}

function deleteItem(index){
sites.splice(index,1)
localStorage.setItem("sites",JSON.stringify(sites))
display()
}

function validte(){
    var regex=/^[a-zA-z0-9]{3,}$/
    var my=Email.value
    if(regex.test(my)){
console.log("mohamed")
    }
}