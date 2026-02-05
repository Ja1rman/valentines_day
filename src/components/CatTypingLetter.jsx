import { useEffect, useState } from 'react';
import cat from '../assets/cat.svg';

const TYPING_SPEED = 90;
const START_DELAY = 300;

export default function CatTypingLetter({ isActive, text }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplay('');
      return undefined;
    }

    let index = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplay(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, TYPING_SPEED);
    }, START_DELAY);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive, text]);

  return (
    <div className="cat-letter" aria-hidden="true">
      <img src={cat} alt="" className="cat-letter__cat" />
      <div className="cat-letter__laptop">
        <div className="cat-letter__screen">
          <span className="cat-letter__text">
            {display}
            <span className="cat-letter__cursor" />
          </span>
        </div>
        <div className="cat-letter__keyboard" />
      </div>
    </div>
  );
}
