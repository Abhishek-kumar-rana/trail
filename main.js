var typed= new Typed(".text",{
    strings:["bachlor student", "frontend Developer", "web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function toggleMenu() {
//     document.getElementById("menu").onclick =
// function(){

// }

    var navbar = document.getElementById("navbar");
    navbar.style.display = (navbar.style.display === "flex") ? "none" : "flex";
    
}

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 11);
})

// console.log(window.scrolly);
// alert(window.scrollY);
// const skillcontainer = document.querySelector("skill-container");
window.addEventListener("scroll",function(){
    if(window.scrollY <=200){
        document.querySelector(".top").style.display="none";
    }else{
        document.querySelector(".top").style.display="block";
    }
})



// ========================== Scroll reveal ==========================
// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading, .skill-head', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img, .tech-skill', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content, .prof-skills, .contactH', { origin: 'right' });

// ScrollReveal().reveal(' .about, .services, .portfolio-content, .contact, .contact-form,')
// ScrollReveal().reveal('.btn-box, .about-btn, .read', { origin: 'top' });
// ScrollReveal().reveal('.progress-line span', { origin: 'right' });

// ScrollReveal().reveal('.btn-box,.read', { origin: 'top' });

const sr = ScrollReveal({
    distance: '45px',
    duration: 2000,
    reset: true
})
sr.reveal('.btn-box ,.academics',{delay:350,origin:'bottom'})
sr.reveal('.about-img,.row2',{delay:350,origin:'left'})
sr.reveal('.about-img',{delay:350,origin:'left'})
sr.reveal('.row1',{delay:350,origin:'right'})

// sr.reveal('.about-img,.ctr1, .row2',{delay:350,origin:'left'})
// sr.reveal('.ctr2, .row1',{delay:350,origin:'right'})
// sr.reveal('.',{delay:350,origin:'top'})
