// @ts-check

import {DogImage} from './DogImage'
import { useState } from 'react'
export const Description = () => {
  const [dogUrl, setDogUrl] = useState('http://images.dog.ceo/breeds/vizsla/n02100583_264.jpg')

  const handleClick = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      setDogUrl(data.message)
      console.log(data.message)

      return data
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <DogImage imageUrl={dogUrl} />
      <button type="button" onClick={handleClick}>
        change
      </button>
    </div>
  )
}

