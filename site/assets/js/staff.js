const listEl = document.getElementById('staff-list');
const qEl = document.getElementById('q');
let staff = [];
function render(){
  const q = (qEl.value||'').toLowerCase().trim();
  listEl.innerHTML='';
  staff.filter(p=>{
    const hay = (p.name+' '+p.role+' '+(p.tags||[]).join(' ')+' '+(p.bio||'')).toLowerCase();
    return hay.includes(q);
  }).forEach(p=>{
    const el = document.createElement('article');
    el.className='card';
    el.innerHTML = `
      <h3>${p.name}</h3>
      <div class="meta">${p.role}${p.degree? ', '+p.degree:''}</div>
      <p>${p.bio||''}</p>
      ${p.email? `<p><a href="mailto:${p.email}">${p.email}</a></p>`:''}
      ${p.scholar? `<p><a target="_blank" rel="noopener" href="${p.scholar}">Google Scholar</a></p>`:''}
      ${p.tags?.length? `<div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join(' ')}</div>`:''}
    `;
    listEl.appendChild(el);
  });
}
fetch('../content/staff.json').then(r=>r.json()).then(rows=>{ staff=rows; render(); });
qEl?.addEventListener('input', render);