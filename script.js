window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navBar").style.backgroundColor = "black";
        document.getElementById("skillLink").style.color = "white";
        document.getElementById("aboutLink").style.color = "white";
        document.getElementById("projectLink").style.color = "white";
        document.getElementById("contactsLink").style.color = "white";
    } else {
        document.getElementById("navBar").style.backgroundColor = "rgb(242,243,247)";
        document.getElementById("skillLink").style.color = "black";
        document.getElementById("aboutLink").style.color = "black";
        document.getElementById("projectLink").style.color = "black";
        document.getElementById("contactsLink").style.color = "black";
    }
}

function dropDown() {
    var x = document.getElementById("myLinks");
    if (x.style.flexDirection === "column") {
        x.style.display = "none";
        x.style.flexDirection = "unset";
    } 
    else {
        x.style.flexDirection = "column";
        x.style.display = "block";
    }
}

document.getElementById('btnSwitch').addEventListener('click',()=>{
    
    
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})

function setActive(element){
    // element.classList.add("active");
    var nav = document.getElementsByClassName('nav-link');
    for (var i = 0; i < nav.length; i++){
        if(i == element){
            nav[i].classList.add("active");
        }
        else{
            nav[i].classList.remove("active");
        }
    }
    console.log(nav);
}