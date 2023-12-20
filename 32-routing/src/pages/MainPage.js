import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode')); // Dark or null
  // / => null
  // /?mode=Dark => Dark

  // join()의 경우 null은 포함하지 않음
  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>MainPage</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
