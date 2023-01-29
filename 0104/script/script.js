let big_img = document.querySelector('big_img');
let s_img = document.querySelectorAll('s_img');

for(let i=0;i<s_img.length;i++) {
  console.log(s_img[i]);
  s_img[i].addEventListener('click', imgChange);
}

function imgChange() { 
  let url = this.src;
  console.log(url);
  let big_url = './images/movie_01.jpg';
  url = url.replace(big_url, url);
  document.getElementById('photo').src=url;

  for(let j=0;j<s_img.length;j++) {
    s_img[j].style.border='none';
    this.style.border='1px solid #f24443';
  }
}