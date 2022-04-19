const btn = document.getElementById('signOutBtn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
});

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if(darkFlag === false){
        darkFlag = true;
    }else{
        darkFlag = false;
    }
    darkModeFontColor(darkFlag);
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = "red";
 }

 function scrollToTop() {
    window.scrollTo(0, 0);
}