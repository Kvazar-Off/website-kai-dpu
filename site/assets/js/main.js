(async function(){
  // inject header/footer
  const header = await fetch('../partials/header.html').then(r=>r.text());
  const footer = await fetch('../partials/footer.html').then(r=>r.text());
  document.getElementById('header').innerHTML = header;
  document.getElementById('footer').innerHTML = footer;

  // mark active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.getAttribute('href')===path){
      a.setAttribute('aria-current','page');
    }
  });
})();