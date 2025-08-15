function renderNewsCard(n){
  const el = document.createElement('article');
  el.className='card';
  const img = n.image ? `<img alt="" src="${n.image}" style="width:100%;height:auto;border-radius:12px;margin-bottom:8px">` : '';
  el.innerHTML = `${img}
    <h3>${n.title}</h3>
    <div class="meta">${n.date} · источник: ${n.source}</div>
    <p>${n.summary}</p>
    <a class="btn btn-link" href="${n.url}" target="_blank" rel="noopener">Читать оригинал →</a>`;
  return el;
}
fetch('../content/news.json').then(r=>r.json()).then(items=>{
  items.sort((a,b)=> (a.date<b.date?1:-1));
  const list = document.getElementById('news-list');
  if(!list) return;
  items.forEach(n=> list.appendChild(renderNewsCard(n)));
});