var elemc = document.querySelector('#elem-container');
var fixed = document.querySelector('#fixed-image');
elemc.addEventListener('mouseenter', function(){
    fixed.style.display = "block"
})
elemc.addEventListener('mouseleave', function(){
    fixed.style.display = "none"
})
var elems = document.querySelectorAll('.elem')
elems.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        var image = e.getAttribute('data-image')
        fixed.style.backgroundImage = `url(${image})`
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
  });
var para = document.querySelector('#para');
var heading1 = document.querySelector('#h1');
var heading2 = document.querySelector('#h2');
var heading3 = document.querySelector('#h3');
heading1.addEventListener('click', function(){
    para.innerHTML = 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.'
    heading1.style.color = 'white'
    heading3.style.color = 'rgba(96, 94, 94, 0.779)'
    heading2.style.color = 'rgba(96, 94, 94, 0.779)'
    heading1.style.fontSize = '4vw'
    heading2.style.fontSize = '3vw'
    heading3.style.fontSize = '3vw'
    heading1.style.padding = '0vw 0.2vw'
    heading2.style.padding = '0vw 2vw'
    heading3.style.padding = '0vw 2vw'
})
heading2.addEventListener('click', function(){
    para.innerHTML = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.'
    heading2.style.color = 'white'
    heading1.style.color = 'rgba(96, 94, 94, 0.779)'
    heading3.style.color = 'rgba(96, 94, 94, 0.779)'
    heading1.style.fontSize = '3vw'
    heading2.style.fontSize = '4vw'
    heading3.style.fontSize = '3vw'
    heading1.style.padding = '0vw 2vw'
    heading2.style.padding = '0vw 0.2vw'
    heading3.style.padding = '0vw 2vw'
})
heading3.addEventListener('click', function(){
    para.innerHTML = 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.'
    heading3.style.color = 'white'
    heading2.style.color = 'rgba(96, 94, 94, 0.779)'
    heading1.style.color = 'rgba(96, 94, 94, 0.779)'
    heading1.style.fontSize = '3vw'
    heading2.style.fontSize = '3vw'
    heading3.style.fontSize = '4vw'
    heading1.style.padding = '0vw 2vw'
    heading2.style.padding = '0vw 2vw'
    heading3.style.padding = '0vw 0.2vw'
})
