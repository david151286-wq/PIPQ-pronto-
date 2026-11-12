// Aumente o número da versão sempre que mudar dados, ícones ou arquivos.
const V="pipq-v1",FILES=["./","index.html","manifest.webmanifest","icons/logo-mark.png","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","icons/favicon.png","data/biblia-ara.json","data/biblia-naa.json","data/novo-cantico.json"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;
  if(u.pathname.includes("/data/")){e.respondWith(caches.match(r).then(m=>m||fetch(r)));return}  // dados: cache primeiro
  e.respondWith(caches.open(V).then(async c=>{const m=await c.match(r,{ignoreSearch:true});
    const n=fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}).catch(()=>null);  // resto: atualiza em segundo plano
    return m||(await n)||(r.mode==="navigate"?c.match("index.html"):Response.error())}))});
