let MoRegBtn = document.getElementById("btn-reg");
let MoLoginBtn = document.getElementById("btn-login");
let MoRO = document.getElementById("modal-con");
let MoDCbgReg = document.getElementById("modal-bg");
let sReg = document.getElementById("s-reg");
let Moreg = document.getElementById("modal-reg")
let Mologin = document.getElementById("modal-login")
let myMenu = document.getElementById("nav-ul")

MoRegBtn.addEventListener('click', () =>{
    
    MoRO.style.display='flex';
    Moreg.style.display='flex';
    Mologin.style.display='none';
})

MoLoginBtn.addEventListener('click',()=>{

    MoRO.style.display='flex';
    Moreg.style.display='none';
    Mologin.style.display='flex';   
})
    
MoDCbgReg.addEventListener('click',()=>{
    MoRO.style.display='none';
})

function CloseModal(){
    MoRO.style.display='none';
}

sReg.addEventListener('click',()=>{
    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: 'Somthing went wrong!'+
        'Please complete the information'
       })

})

function toggleHam(x) {
    x.classList.toggle("change");

    if(myMenu.className === 'nav-ul'){
        myMenu.className += 'nav-ul-active'
    }
    else{
        myMenu.className = 'nav-ul';
  }


}




  




       
    
    

