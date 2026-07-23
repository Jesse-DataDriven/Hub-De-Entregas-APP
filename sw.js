const CACHE = 'portal-shell-v2';
// Só o essencial fica em cache "duro" (funciona offline / carrega rápido).
const SHELL = ['./manifest.json', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// index.html e data.js: SEMPRE busca a versão mais nova na rede primeiro.
// Só usa o cache como fallback se estiver offline. Isso evita ficar
// preso numa versão antiga depois que você atualiza o repositório.
const NETWORK_FIRST = ['/index.html', '/data.js', '/'];

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // conteúdo externo: não mexe

  const isNetworkFirst = NETWORK_FIRST.some((p) => url.pathname === p || url.pathname.endsWith(p));

  if (isNetworkFirst) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
  }
});
