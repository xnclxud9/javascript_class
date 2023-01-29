

let n = 1; //초기값
const img_list = document.querySelectorAll('.lnb > li');
const left_btn = document.querySelector('i.fa-angle-left');
const right_btn = document.querySelector('i.fa-angle-right');

document.getElementById('page').innerHTML=n + ' / 16';

img_list.forEach((el, index) => {
  el.onclick=()=>{
    console.log(index);
    n = index+1; //인덱스번호에 1을 더하여 1부터 숫자가 나오게...
    img_change();    
  }
});

function img_change(){
  for(let j=0;j<img_list.length;j++){
    img_list[j].style.border='none';
  }
    document.getElementById('page').innerHTML=n + ' / 16';
    document.getElementById('photo').src='./images/movie_image'+n+'.jpg';
    img_list[n-1].style.border='3px solid #f00';
}

left_btn.addEventListener('click', function(){
  if(n == 1){
    n=16;
  }else{
    n--;
  }
  console.log(n); //확인한다.
  img_change();
});

right_btn.addEventListener('click', function(){
  if(n == 16){
    n=1;
  }else{
    n++;
  }
  console.log(n); //확인한다.
  img_change();
});