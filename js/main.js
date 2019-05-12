document.querySelector('.absolute-left').addEventListener('click' , ()=>{
    document.querySelector('body').classList.toggle('shownBox');
});


document.querySelector('.bookSquare').addEventListener('click' , ()=>{
    document.querySelector('.alertedOnClick').style.display="block";
});


document.querySelector('.absolute-right').addEventListener('click' , ()=>{
    document.querySelector('body').classList.toggle('shownTwo');
});



