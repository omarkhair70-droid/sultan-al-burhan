const SHARE_TEXT='السلطان والبرهان — ما سلطانك؟ قراءة قرآنية ومنطقية في السلطة المعرفية والمنظومات المغلقة.';
const SITE='https://sultan-al-burhan.vercel.app/';
function shareUrl(type){
  const u=encodeURIComponent(SITE), t=encodeURIComponent(SHARE_TEXT), title=encodeURIComponent('السلطان والبرهان — ما سلطانك؟');
  return {x:`https://x.com/intent/tweet?text=${t}%0A${u}`,whatsapp:`https://wa.me/?text=${t}%0A${u}`,telegram:`https://t.me/share/url?url=${u}&text=${t}`,reddit:`https://www.reddit.com/submit?url=${u}&title=${title}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${u}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}[type];
}
document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{
 const type=btn.dataset.share;
 if(type==='native' && navigator.share){await navigator.share({title:'السلطان والبرهان',text:SHARE_TEXT,url:SITE});return;}
 if(type==='copy'){try{await navigator.clipboard.writeText(SITE)}catch{window.prompt('انسخ الرابط:',SITE)};const x=document.getElementById('copied');if(x){x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1600)};return;}
 const target=shareUrl(type); if(target) window.open(target,'_blank','noopener,noreferrer');
}));
const progress=document.querySelector('.progress');
if(progress){addEventListener('scroll',()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;progress.style.width=(max?scrollY/max*100:0)+'%'},{passive:true});}
