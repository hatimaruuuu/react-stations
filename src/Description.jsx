// @ts-check

import {DogImage} from './DogImage';
import { useState } from 'react';

export const Description = () => {
const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/vizsla/n02100583_264.jpg');
const initialUrl = 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg';

const handleClick = async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
     setDogUrl(data.message); // 更新
  } catch (err) {
    console.log(err);
     setDogUrl(initialUrl); // Fallback to initial URL on error
  }
};

return (
  <div>
    <DogImage imageUrl={dogUrl} />
    <button type="button" onClick={handleClick}>
      更新
    </button>
  </div>
);
};
