document.querySelectorAll('.small').forEach(function (images) {
  images.onclick = () => {
   document.querySelector('.first').src = images.getAttribute('src');
  };
 });

let btn = document.querySelector('#btn');
let cardBox = document.querySelector('.info');
btn.onclick=()=>{
  cardBox.classList.toggle('active');
}
document.querySelector('#close').onclick =()=>{
  document.querySelector('.info').classList.remove('active');
 };
