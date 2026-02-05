# Valentines Day Website

Example: <https://ja1rman.github.io/valentines_day/>

## Contents

- Русский
- English
- Español
- Français
- 中文
- العربية

## Русский

Милый одностраничный сайт‑поздравление ко Дню святого Валентина. Слайды с плавными переходами, 6 языков, мини‑игра и финальная анимация рисования сердца на координатной плоскости.

**Запуск локально**

1. `npm install`
2. `npm run dev`
3. Открыть адрес из консоли (обычно `http://localhost:5173`).

**Сборка продакшн версии**

1. `npm run build`
2. `npm run preview`

**Тексты и переводы**

- `src/content.js` — основной контент, `slides[].title` и `slides[].body` для 6 языков.
- `ui.catLetterText` — фраза, которую печатает котик.
- `gamePhrases` — случайные фразы при клике по сердечкам.

**Картинки**

- Файлы в `src/assets`.
- Импорт и подключение в `src/content.js` через `images`.

**Ссылка на последней кнопке**

- `slides[final].cta.href` — ссылка.
- `ui.ctaHint` — подсказка над кнопкой (можно оставить пустой строкой).

**4‑я страница (котик печатает письмо)**

- Слайд с `visual: 'cat-letter'`.
- Компонент анимации: `src/components/CatTypingLetter.jsx`.

**GitHub Pages (GitHub Actions)**

- `.github/workflows/deploy.yml` собирает и деплоит сайт при пуше в `main`.
- Если репозиторий отдаётся не из корня, поменяй `base` в `vite.config.js` (сейчас `./`).

---

## English

A cute single‑page Valentine’s site. Slides with smooth transitions, 6 languages, a mini‑game, and a final heart‑drawing animation on a coordinate plane.

**Run locally**

1. `npm install`
2. `npm run dev`
3. Open the URL from the console (usually `http://localhost:5173`).

**Production build**

1. `npm run build`
2. `npm run preview`

**Text and translations**

- `src/content.js` — main content, `slides[].title` and `slides[].body` for 6 languages.
- `ui.catLetterText` — the phrase typed by the cat.
- `gamePhrases` — random phrases shown when clicking hearts.

**Images**

- Put files in `src/assets`.
- Import and attach in `src/content.js` via `images`.

**Final button link**

- `slides[final].cta.href` — the link.
- `ui.ctaHint` — hint above the button (can be an empty string).

**Slide 4 (cat typing a letter)**

- Slide with `visual: 'cat-letter'`.
- Animation component: `src/components/CatTypingLetter.jsx`.

**GitHub Pages (GitHub Actions)**

- `.github/workflows/deploy.yml` builds and deploys on push to `main`.
- If the repo is not served from root, change `base` in `vite.config.js` (now `./`).

---

## Español

Un sitio de una sola página y muy tierno para San Valentín. Diapositivas con transiciones suaves, 6 idiomas, un mini‑juego y una animación final que dibuja un corazón en un plano de coordenadas.

**Ejecutar localmente**

1. `npm install`
2. `npm run dev`
3. Abre la URL de la consola (normalmente `http://localhost:5173`).

**Compilación de producción**

1. `npm run build`
2. `npm run preview`

**Textos y traducciones**

- `src/content.js` — contenido principal, `slides[].title` y `slides[].body` para 6 idiomas.
- `ui.catLetterText` — la frase que escribe el gatito.
- `gamePhrases` — frases aleatorias al hacer clic en los corazones.

**Imágenes**

- Coloca archivos en `src/assets`.
- Importa y agrega en `src/content.js` mediante `images`.

**Enlace del botón final**

- `slides[final].cta.href` — el enlace.
- `ui.ctaHint` — texto sobre el botón (puede ser una cadena vacía).

**Diapositiva 4 (gatito escribiendo una carta)**

- Diapositiva con `visual: 'cat-letter'`.
- Componente de animación: `src/components/CatTypingLetter.jsx`.

**GitHub Pages (GitHub Actions)**

- `.github/workflows/deploy.yml` compila y despliega al hacer push a `main`.
- Si el repositorio no se sirve desde la raíz, cambia `base` en `vite.config.js` (ahora `./`).

---

## Français

Un site d’une seule page, tout mignon, pour la Saint‑Valentin. Des slides avec des transitions fluides, 6 langues, un mini‑jeu et une animation finale qui dessine un cœur sur un plan de coordonnées.

**Lancer en local**

1. `npm install`
2. `npm run dev`
3. Ouvrir l’URL affichée dans la console (souvent `http://localhost:5173`).

**Build de production**

1. `npm run build`
2. `npm run preview`

**Textes et traductions**

- `src/content.js` — contenu principal, `slides[].title` et `slides[].body` pour 6 langues.
- `ui.catLetterText` — la phrase tapée par le chat.
- `gamePhrases` — phrases aléatoires lors des clics sur les cœurs.

**Images**

- Placer les fichiers dans `src/assets`.
- Importer et utiliser dans `src/content.js` via `images`.

**Lien du bouton final**

- `slides[final].cta.href` — le lien.
- `ui.ctaHint` — texte au‑dessus du bouton (peut être vide).

**Slide 4 (chat qui tape une lettre)**

- Slide avec `visual: 'cat-letter'`.
- Composant d’animation : `src/components/CatTypingLetter.jsx`.

**GitHub Pages (GitHub Actions)**

- `.github/workflows/deploy.yml` build et déploie à chaque push sur `main`.
- Si le dépôt n’est pas servi depuis la racine, change `base` dans `vite.config.js` (actuellement `./`).

---

## 中文

可爱的单页情人节网站。包含平滑过渡的幻灯片、6 种语言、迷你游戏，以及在坐标平面上绘制心形的最终动画。

**本地运行**

1. `npm install`
2. `npm run dev`
3. 打开控制台显示的地址（通常是 `http://localhost:5173`）。

**生产构建**

1. `npm run build`
2. `npm run preview`

**文本与翻译**

- `src/content.js` — 主内容，`slides[].title` 和 `slides[].body`（6 种语言）。
- `ui.catLetterText` — 小猫打字的句子。
- `gamePhrases` — 点击爱心时随机显示的句子。

**图片**

- 文件放在 `src/assets`。
- 在 `src/content.js` 中通过 `images` 导入并使用。

**最后按钮链接**

- `slides[final].cta.href` — 按钮链接。
- `ui.ctaHint` — 按钮上方提示（可为空字符串）。

**第 4 页（小猫打字）**

- 使用 `visual: 'cat-letter'`。
- 动画组件：`src/components/CatTypingLetter.jsx`。

**GitHub Pages（GitHub Actions）**

- `.github/workflows/deploy.yml` 在推送到 `main` 时构建并部署。
- 如果不是从根目录提供，修改 `vite.config.js` 中的 `base`（当前为 `./`）。

---

## العربية

موقع لطيف من صفحة واحدة لعيد الحب. شرائح بانتقالات سلسة، 6 لغات، لعبة صغيرة، وأنيميشن نهائي يرسم قلبًا على مستوى إحداثيات.

**التشغيل محليًا**

1. `npm install`
2. `npm run dev`
3. افتح الرابط الظاهر في الطرفية (عادة `http://localhost:5173`).

**بناء النسخة النهائية**

1. `npm run build`
2. `npm run preview`

**النصوص والترجمات**

- `src/content.js` — المحتوى الرئيسي، و`slides[].title` و`slides[].body` لكل اللغات.
- `ui.catLetterText` — الجملة التي يكتبها القط.
- `gamePhrases` — عبارات عشوائية تظهر عند النقر على القلوب.

**الصور**

- ضع الملفات في `src/assets`.
- استوردها واربطها في `src/content.js` عبر `images`.

**رابط الزر الأخير**

- `slides[final].cta.href` — رابط الزر.
- `ui.ctaHint` — نص فوق الزر (يمكن تركه فارغًا).

**الصفحة الرابعة (قط يكتب رسالة)**

- الشريحة تستخدم `visual: 'cat-letter'`.
- مكوّن الأنيميشن: `src/components/CatTypingLetter.jsx`.

**GitHub Pages (GitHub Actions)**

- `.github/workflows/deploy.yml` يقوم بالبناء والنشر عند الدفع إلى `main`.
- إذا كان المستودع لا يُخدم من الجذر، غيّر `base` في `vite.config.js` (حاليًا `./`).
