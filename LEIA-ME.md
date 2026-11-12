# App PIPQ

Arquivos: `index.html` (o app), `data/` (Bíblia ARA, NAA e Novo Cântico), `icons/`, `manifest.webmanifest` e `sw.js` (modo offline).

## 1. Editar dados da igreja
No `index.html`, procure `EDITE AQUI` e troque WhatsApp, chave PIX, endereço e horários.

## 2. Testar no computador
Os JSONs não carregam abrindo o arquivo direto (file://). Na pasta do projeto rode:
`python3 -m http.server 8000` e abra http://localhost:8000

## 3. Publicar (necessário HTTPS para o offline)
Suba a pasta inteira em um hospedeiro gratuito: GitHub Pages, Netlify (arrastar a pasta) ou Cloudflare Pages.

## 4. Instalar e usar offline
- Android (Chrome): abra o site, aguarde "Pronto para usar offline" e toque em "Instalar no celular" (aba Igreja).
- iPhone (Safari): Compartilhar > Adicionar à Tela de Início.

## 5. Atualizar depois de mudar algo
Altere o número em `sw.js` (`pipq-v1` para `pipq-v2`) e publique de novo. Os celulares atualizam sozinhos.

## 6. App nas lojas (opcional, com Capacitor)
1. `npm init -y && npm i @capacitor/core @capacitor/cli @capacitor/android`
2. `npx cap init PIPQ br.org.pipq --web-dir=www`
3. Copie index.html, data, icons, manifest.webmanifest e sw.js para uma pasta `www`
4. `npx cap add android && npx cap sync && npx cap open android` (gera o APK/AAB no Android Studio)
Para iOS use `@capacitor/ios` num Mac com Xcode. Este passo não foi testado aqui.
