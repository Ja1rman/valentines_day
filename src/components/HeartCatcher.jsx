import { useEffect, useMemo, useRef, useState } from 'react';

const HEART_COUNT = 9;
const POPUP_DURATION = 1200;

const createHearts = () =>
  Array.from({ length: HEART_COUNT }, (_, index) => ({
    id: index + 1,
    x: 8 + Math.random() * 84,
    y: 8 + Math.random() * 64,
    size: 26 + Math.random() * 28,
    found: false
  }));

export default function HeartCatcher({ foundLabel, resetLabel, phrases = [] }) {
  const [hearts, setHearts] = useState(() => createHearts());
  const [popup, setPopup] = useState(null);
  const timeoutRef = useRef(null);
  const lastPhraseRef = useRef(null);
  const clickedIdsRef = useRef(new Set());

  const foundCount = useMemo(
    () => hearts.filter((heart) => heart.found).length,
    [hearts]
  );

  const allFound = foundCount === HEART_COUNT;
  const burstHearts = useMemo(() => {
    if (!allFound) return [];
    return Array.from({ length: 28 }, (_, index) => ({
      id: index + 1,
      x: (Math.random() * 2 - 1) * 240,
      y: (Math.random() * 2 - 1) * 170,
      size: 22 + Math.random() * 26,
      delay: Math.random() * 0.4,
      rotate: (Math.random() * 2 - 1) * 40
    }));
  }, [allFound]);

  const pushPopup = (heart) => {
    if (!phrases.length) return;
    let text = phrases[Math.floor(Math.random() * phrases.length)];
    if (phrases.length > 1) {
      let guard = 0;
      while (text === lastPhraseRef.current && guard < 5) {
        text = phrases[Math.floor(Math.random() * phrases.length)];
        guard += 1;
      }
    }
    lastPhraseRef.current = text;
    const popup = {
      id: `${Date.now()}-${Math.random()}`,
      x: heart.x,
      y: heart.y,
      text,
      rotate: (Math.random() * 2 - 1) * 10,
      scale: 0.9 + Math.random() * 0.35
    };
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setPopup(popup);
    timeoutRef.current = setTimeout(() => {
      setPopup(null);
      timeoutRef.current = null;
    }, POPUP_DURATION);
  };

  const handleHeartClick = (heartData) => {
    if (clickedIdsRef.current.has(heartData.id)) return;
    clickedIdsRef.current.add(heartData.id);
    pushPopup(heartData);
    setHearts((prev) =>
      prev.map((heart) =>
        heart.id === heartData.id ? { ...heart, found: true } : heart
      )
    );
  };

  const reset = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setPopup(null);
    clickedIdsRef.current.clear();
    setHearts(createHearts());
  };

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      clickedIdsRef.current.clear();
    },
    []
  );

  return (
    <div className="game">
      <div className="game-area" role="application" aria-label="Heart game">
        {hearts.map((heart) =>
          heart.found ? null : (
          <button
            key={heart.id}
            type="button"
            className={`game-heart ${heart.found ? 'found' : ''}`}
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`
            }}
            onClick={() => handleHeartClick(heart)}
            aria-label="Heart"
          />
          )
        )}
        {popup && (
          <span
            key={popup.id}
            className="game-pop"
            style={{
              left: `${popup.x}%`,
              top: `${popup.y}%`,
              '--r': `${popup.rotate}deg`,
              '--s': popup.scale
            }}
          >
            {popup.text}
          </span>
        )}
        {allFound && (
          <div className="burst" aria-hidden="true">
            {burstHearts.map((heart) => (
              <span
                key={heart.id}
                className="burst-heart"
                style={{
                  '--x': `${heart.x}px`,
                  '--y': `${heart.y}px`,
                  '--size': `${heart.size}px`,
                  '--delay': `${heart.delay}s`,
                  '--r': `${heart.rotate}deg`
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="game-footer">
        <div className="game-score">
          {foundLabel}: {foundCount}/{HEART_COUNT}
        </div>
        <button type="button" className="btn ghost" onClick={reset}>
          {resetLabel}
        </button>
        {allFound && <div className="game-win" aria-hidden="true" />}
      </div>
    </div>
  );
}
