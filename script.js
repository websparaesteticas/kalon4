function toggleNav(){document.getElementById('navLinks').classList.toggle('open');}

document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.parentElement;
    const ans=item.querySelector('.faq-a');
    const open=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null;});
    if(!open){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}
  });
});
