document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.nav');
  if(toggle){toggle.addEventListener('click',()=>{
    const visible = nav.style.display === 'flex';
    nav.style.display = visible ? 'none' : 'flex';
  })}

  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })

  // simple contact form handler
  const form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thanks! Your message has been noted (demo).');
    form.reset();
  })}
})
