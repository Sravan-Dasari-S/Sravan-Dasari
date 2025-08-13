
const root=document.documentElement;
const saved=localStorage.getItem('theme'); if(saved==='light'){root.classList.add('light');}
document.addEventListener('click',(e)=>{const t=e.target.closest('[data-toggle-theme]');if(!t)return;root.classList.toggle('light');localStorage.setItem('theme',root.classList.contains('light')?'light':'dark')});
function typeText(el,txt,s=30){el.textContent='';let i=0;const tm=setInterval(()=>{el.textContent=txt.slice(0,++i);if(i>=txt.length)clearInterval(tm)},s)}
window.addEventListener('load',()=>{const tg=document.querySelector('.tagline'); if(tg) typeText(tg,'Java · Angular · Spring Boot · Microservices · Tableau',26);});
function exportPDF(){window.print();}
