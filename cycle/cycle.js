const menuList = document.getElementById('menuList');

menuList.style.maxHeight = '0px';

function togglemenu(){
  if(menuList.style.maxHeight == '0px')
  {
    menuList.style.maxHeight = '210px';
  }
  else
  {
    menuList.style.maxHeight = '0px';

  }
}
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
})