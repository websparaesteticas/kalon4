function toggleNav(){document.getElementById('navLinks').classList.toggle('open');}

const servicesData={
  depilacion:{
    num:'01',
    title:'Depilación',
    desc:'Dos caminos, según lo que busques. La cera de miel resuelve el momento y la hacemos en cuerpo completo, para cualquier persona. La definitiva es un tratamiento por sesiones con equipo ADSS: en la primera evaluamos tu tipo de piel y de vello y te decimos cuántas sesiones vas a necesitar. En general son entre 10 y 12.',
    items:['Cera de miel · cuerpo completo, unisex','Depilación definitiva con equipo ADSS · por sesiones','Evaluación de piel y vello en la primera sesión'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para depilación.'
  },
  manicuria:{
    num:'02',
    title:'Manicuría y belleza de pies',
    desc:'Manos y pies, con todas las técnicas: desde la manicuría básica hasta semipermanente, kapping y soft gel. También hacemos el retiro.',
    items:['Manicuría básica','Semipermanente','Kapping','Soft gel','Retiro','Belleza de manos','Belleza de pies'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para manicuría.'
  },
  faciales:{
    num:'03',
    title:'Faciales',
    desc:'Tratamientos faciales según lo que necesite tu piel. Trabajamos con peeling químico, dermaplaning y exosomas. En la primera consulta vemos tu piel y definimos cuál corresponde.',
    items:['Peeling químico','Dermaplaning','Exosomas'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para un facial.'
  },
  pestanas:{
    num:'04',
    title:'Pestañas',
    desc:'Dos técnicas, según la forma de tus ojos y el efecto que busques: lifting, que trabaja sobre tu propia pestaña, o pelo por pelo, que suma extensiones de a una.',
    items:['Lifting de pestañas','Pelo por pelo'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para pestañas.'
  },
  masajes:{
    num:'05',
    title:'Masajes',
    desc:'Sesiones de masaje descontracturante o relajante, este último combinado con técnica de Reiki. Se trabaja sobre la tensión muscular, sin apuro y sin superponer turnos.',
    items:['Descontracturante','Relajante, combinado con técnica de Reiki'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para un masaje.'
  },
  reiki:{
    num:'06',
    title:'Reiki y liberación',
    desc:'Sesiones de Reiki y liberación emocional, de dos horas. Es un espacio de acompañamiento: no reemplaza ninguna consulta médica ni psicológica.',
    items:['Reiki','Liberación emocional','Duración: 2 hs'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para una sesión de Reiki.'
  },
  podologia:{
    num:'07',
    title:'Podología clínica',
    desc:'Atención podológica clínica: durezas, callos, uñas encarnadas y otras afecciones del pie. Con protocolos de higiene y esterilización del instrumental.',
    items:['Evaluación podológica','Durezas y callos','Uñas encarnadas'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para podología.'
  },
  corporales:{
    num:'08',
    title:'Tratamientos corporales',
    desc:'Tratamientos corporales con equipo Hifu. En la primera consulta evaluamos la zona, te explicamos en qué consiste y cuántas sesiones lleva.',
    items:['Hifu corporal'],
    wa:'Hola! Vi la web de KALON. Quería precio y turno para un tratamiento corporal.'
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
