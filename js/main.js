var Email =document.getElementById("Email")
var url =document.getElementById("URL")
var check = document.getElementById("check")
var warining =document.getElementById("warining")
var checkEmail = document.getElementById("checkEmail")
var wariningEmail =document.getElementById("wariningEmail")

var sites=[]
if(localStorage.getItem("sites")!==null){
  sites=  JSON.parse(localStorage.getItem("sites"))
     display()
}
function addSite(){
     var emailRegex = /^[a-zA-Z0-9]{3,}$/;
    var urlRegex = /^[a-zA-Z0-9]{1,}\.[a-zA-Z0-9]{2,}$/;

    var emailValid = emailRegex.test(Email.value);
    var urlValid = urlRegex.test(url.value);

    if (!emailValid || !urlValid) {
        alert("Please enter valid email and URL.");
        validteEmail();
        validteSite();
        return; 
    }
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
function clearValid(){
     check.classList.add("d-none")
       warining.classList.add("d-none")
       Email.classList.remove("boxShadowGreen")
}
function validteEmail(){
    var regex=/^[a-zA-z0-9]{3,}$/
    var TestEmail=Email.value
    if(regex.test(TestEmail)===true){
       check.classList.remove("d-none")
       warining.classList.add("d-none")
       Email.classList.add("boxShadowGreen")
       Email.classList.remove("boxShadowRed")

        }else{
        check.classList.add("d-none")
        warining.classList.remove("d-none")
        Email.classList.remove("boxShadowGreen")
       Email.classList.add("boxShadowRed")
    }
   
}

function validteSite(){
    var regex=/^[a-zA-z0-9]{1,}\.[a-zA-z0-9]{2,}$/
    var testURl=url.value
    if(regex.test(testURl)===true){
       checkEmail.classList.remove("d-none")
       wariningEmail.classList.add("d-none")
            url.classList.add("boxShadowGreen")
       url.classList.remove("boxShadowRed")

        }else{
        checkEmail.classList.add("d-none")
        wariningEmail.classList.remove("d-none")
        url.classList.remove("boxShadowGreen")
       url.classList.add("boxShadowRed")
    }

}