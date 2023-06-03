console.log("This is image slider");
let slideIndex=0;
// handle prev and next items
const handleSlides=(index)=>{
    showSlides(slideIndex+=index);
}
const currentSlides=(index)=>{
    showSlides(slideIndex=index);
}

const showSlides=(index)=>{
    
    
    let slides=document.getElementsByClassName("image__Container");
    let dot=document.getElementsByClassName("dot");   
   
    for (let ele of slides){
        
       ele.style.display="none"
    }
    for (let i=0; i<dot.length; i++){
        dot[i].className=dot[i].className.replace(" active","")
    }
    if (slideIndex>=slides.length){
        slideIndex=slides.length-1;
        
    }
    if (slideIndex<0){
        slideIndex=0;
    }
   
    slides[slideIndex].style.display="block"; 
    dot[slideIndex].className+=" active";
}
showSlides(slideIndex);