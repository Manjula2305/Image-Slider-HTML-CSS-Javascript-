const container=document.querySelector('.container');
const bnts=document.querySelectorAll('.btn')
const imageItem=["img1","img2","img3","img4","img5"]

let index=0;
bnts.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
          index--;
          if(index<0){
            index=imageItem.length-1
          }
          container.style.background = `url("${imageItem[index]}.jpg") center/cover`;
        }
          else{
          index++;
          if(index===imageItem.length){
            index=0
          }
          container.style.background = `url("${imageItem[index]}.jpg") center/cover`;
        }
    }); 
});
