import { useEffect, useMemo, useState } from 'react';
import { gamePhrases, languages, slides, ui } from './content.js';
import HeartCatcher from './components/HeartCatcher.jsx';
import HeartSketch from './components/HeartSketch.jsx';
import CatTypingLetter from './components/CatTypingLetter.jsx';

const getLocalized = (value, lang) => {
  if (!value) return '';
  return value[lang] ?? value.ru ?? '';
};

const backgroundHearts = [
  { x: '6%', y: '18%', size: '22px', delay: '0s', duration: '9s' },
  { x: '18%', y: '70%', size: '16px', delay: '1s', duration: '10s' },
  { x: '32%', y: '35%', size: '26px', delay: '2s', duration: '11s' },
  { x: '44%', y: '80%', size: '14px', delay: '0.5s', duration: '8s' },
  { x: '58%', y: '20%', size: '20px', delay: '1.4s', duration: '12s' },
  { x: '72%', y: '65%', size: '18px', delay: '0.8s', duration: '9s' },
  { x: '86%', y: '30%', size: '24px', delay: '1.9s', duration: '10s' }
];

export default function App() {
  const [lang, setLang] = useState('ru');
  const [index, setIndex] = useState(0);

  const currentSlide = slides[index];
  const langMeta = useMemo(
    () => languages.find((item) => item.code === lang) || languages[0],
    [lang]
  );

  useEffect(() => {
    document.documentElement.lang = langMeta.code;
    document.documentElement.dir = langMeta.dir;
  }, [langMeta]);

  const goNext = () => setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  const goPrev = () => setIndex((prev) => Math.max(prev - 1, 0));

  const nextLabel = getLocalized(ui.next, lang);
  const prevLabel = getLocalized(ui.prev, lang);
  const editHint = getLocalized(ui.editHint, lang);
  const catLetterText = getLocalized(ui.catLetterText, lang);
  const bodyLines = currentSlide.body?.[lang] ?? currentSlide.body?.ru ?? [];

  const isFinal = currentSlide?.type === 'final';
  const phrases = gamePhrases[lang] ?? gamePhrases.ru;

  return (
    <div className={`app lang-${lang}`} dir={langMeta.dir}>
      <div className="bg-hearts" aria-hidden="true">
        {backgroundHearts.map((heart, i) => (
          <span
            key={i}
            className="bg-heart"
            style={{
              left: heart.x,
              top: heart.y,
              width: heart.size,
              height: heart.size,
              animationDelay: heart.delay,
              animationDuration: heart.duration
            }}
          />
        ))}
      </div>

      <main className="card">
        <header className="top-bar">
          <div className="logo">Valentine</div>
          <div className="lang-switch" role="tablist" aria-label="Language">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={`pill ${lang === item.code ? 'active' : ''}`}
                onClick={() => setLang(item.code)}
                aria-pressed={lang === item.code}
              >
                {item.label}
              </button>
            ))}
          </div>
        </header>

        <section
          key={currentSlide.id}
          className={`slide transition-${currentSlide.transition}`}
        >
          <div className="text">
            <h1>{getLocalized(currentSlide.title, lang)}</h1>
            <div className="body">
              {bodyLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="edit-hint">{editHint}</div>

            {currentSlide.type === 'game' && (
              <HeartCatcher
                foundLabel={getLocalized(ui.heartsFound, lang)}
                resetLabel={getLocalized(ui.resetGame, lang)}
                phrases={phrases}
              />
            )}

            {currentSlide.type === 'final' && (
              <div className="final-block">
                <HeartSketch isActive={isFinal} />
                <div className="cta">
                  <a
                    className="btn"
                    href={currentSlide.cta?.href || '#'}
                    data-hint={getLocalized(currentSlide.cta?.hint, lang)}
                  >
                    {getLocalized(currentSlide.cta?.label, lang)}
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="visuals" aria-hidden="true">
            {currentSlide.visual === 'cat-letter' ? (
              <CatTypingLetter
                isActive={currentSlide.visual === 'cat-letter'}
                text={catLetterText}
              />
            ) : (
              currentSlide.images?.map((img, i) => (
                <img
                  key={`${currentSlide.id}-${i}`}
                  src={img.src}
                  alt={getLocalized(img.alt, lang)}
                  className={`floating ${img.className || ''}`}
                  style={img.style}
                />
              ))
            )}
          </div>
        </section>

        <footer className="nav">
          <button
            type="button"
            className="btn ghost"
            onClick={goPrev}
            disabled={index === 0}
          >
            {prevLabel}
          </button>

          <div className="dots" role="tablist" aria-label="Slides">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                aria-pressed={i === index}
              />
            ))}
          </div>

          <button
            type="button"
            className="btn"
            onClick={goNext}
            disabled={index === slides.length - 1}
          >
            {nextLabel}
          </button>
        </footer>
      </main>
    </div>
  );
}
