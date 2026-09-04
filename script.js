function toggleNav(){document.getElementById('navLinks').classList.toggle('open');}

const servicesData={
  faciales:{
    num:'01',
    title:'Faciales',
    desc:'Tratamientos faciales pensados para cada tipo de piel, combinando exfoliación profesional y tecnología de regeneración celular para una piel más luminosa.',
    items:['Pilling químico','DermaPlaning','Exosomas'],
    wa:'Hola! Quiero reservar un turno de Faciales en KALON Multiespacio Estético'
  },
  manicuria:{
    num:'02',
    title:'Manicuría y Belleza de Pies',
    desc:'Cuidado completo de manos y pies, con técnica prolija y productos de calidad para un resultado impecable y duradero.',
    items:['Manicuría básica','Semipermanente','Kapping','Soft gel','Retiro','Belleza de manos','Belleza de pies'],
    wa:'Hola! Quiero reservar un turno de Manicuría y Belleza de Pies en KALON Multiespacio Estético'
  },
  depilacion:{
    num:'03',
    title:'Depilación',
    desc:'Elegí el método que mejor se adapte a vos: cera de miel para resultados inmediatos en cuerpo completo (unisex), o depilación definitiva para eliminar el vello de manera permanente, mejorar la textura de la piel y atenuar manchas en las zonas más pigmentadas.',
    items:['Depilación tradicional con cera de miel · cuerpo completo, unisex','Depilación definitiva (equipo ADSS) · de 10 a 12 sesiones aprox.'],
    wa:'Hola! Quiero reservar un turno de Depilación en KALON Multiespacio Estético'
  },
  masajes:{
    num:'04',
    title:'Masajes',
    desc:'Un momento de pausa real: masajes pensados para liberar tensión muscular y devolverte la calma, combinados con técnica de Reiki.',
    items:['Descontracturante','Relajante (combinado con técnica de Reiki)'],
    wa:'Hola! Quiero reservar un turno de Masajes en KALON Multiespacio Estético'
  },
  podologia:{
    num:'05',
    title:'Podología Clínica',
    desc:'Atención podológica clínica para tratar durezas, uñas encarnadas y otras afecciones, con higiene y protocolos profesionales.',
    items:['Evaluación podológica','Tratamiento de durezas y callos','Uñas encarnadas'],
    wa:'Hola! Quiero reservar un turno de Podología Clínica en KALON Multiespacio Estético'
  },
  reiki:{
    num:'06',
    title:'Reiki y Liberación',
    desc:'Sesiones de reiki y liberación emocional para acompañar tu bienestar integral, en un espacio de calma y contención. Duración de la sesión: 2 horas.',
    items:['Reiki','Liberación emocional','Duración: 2 hs'],
    wa:'Hola! Quiero reservar un turno de Reiki y Liberación en KALON Multiespacio Estético'
  },
  pestanas:{
    num:'07',
    title:'Pestañas',
    desc:'Realzamos tu mirada con técnicas de lifting o extensiones pelo por pelo, adaptadas a la forma de tus ojos.',
    items:['Lifting de pestañas','Pelo por pelo'],
    wa:'Hola! Quiero reservar un turno de Pestañas en KALON Multiespacio Estético'
  },
  corporales:{
    num:'08',
    title:'Tratamientos Corporales',
    desc:'Tratamientos corporales con tecnología de última generación para tonificar, reafirmar y cuidar tu piel de la cabeza a los pies.',
    items:['Hifu corporal'],
    wa:'Hola! Quiero reservar un turno de Tratamientos Corporales en KALON Multiespacio Estético'
  }
};

const serviceModal=document.getElementById('serviceModal');
if(serviceModal){
  const modalNum=document.getElementById('modalNum');
  const modalTitle=document.getElementById('modalTitle');
  const modalDesc=document.getElementById('modalDesc');
  const modalItems=document.getElementById('modalItems');
  const modalCta=document.getElementById('modalCta');
  const modalClose=document.getElementById('modalClose');
  const modalImg=document.getElementById('modalImg');
  let lastFocused=null;

  function openModal(id,card){
    const s=servicesData[id];
    if(!s)return;
    const img=card?card.querySelector('.card-img img'):null;
    if(img){modalImg.src=img.src.replace('w=600','w=900');modalImg.alt=img.alt;}
    modalNum.textContent=s.num;
    modalTitle.textContent=s.title;
    modalDesc.textContent=s.desc;
    modalItems.innerHTML='';
    s.items.forEach(i=>{
      const li=document.createElement('li');
      li.textContent=i;
      modalItems.appendChild(li);
    });
    modalCta.href='https://wa.me/5493513975114?text='+encodeURIComponent(s.wa);
    lastFocused=document.activeElement;
    serviceModal.classList.add('active');
    serviceModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    modalClose.focus();
  }

  function closeModal(){
    serviceModal.classList.remove('active');
    serviceModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    if(lastFocused)lastFocused.focus();
  }

  document.querySelectorAll('.service-card').forEach(card=>{
    card.addEventListener('click',()=>openModal(card.dataset.service,card));
    card.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        openModal(card.dataset.service,card);
      }
    });
  });

  modalClose.addEventListener('click',closeModal);
  serviceModal.addEventListener('click',e=>{
    if(e.target===serviceModal)closeModal();
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&serviceModal.classList.contains('active'))closeModal();
  });
}

document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.parentElement;
    const ans=item.querySelector('.faq-a');
    const open=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null;});
    if(!open){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}
  });
});
