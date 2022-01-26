import React, { useState } from 'react';

export const rangeValues = {
  0: [0, 10],
  1: [0, 2],
  2: [2, 4],
  3: [4, 6],
  4: [6, 8],
  5: [8, 10],
}

const StarIcon = (props) => {
  const {selected, onClick} = props

  return(
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16" className={`m-1 cursor-pointer ${selected && 'text-yellow-500'}`}>
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  )
}

const RatingFilter = (props) => {
  const {onChange} = props
  const [value, setValue] = useState(null)
  const handleClick = (newValue) => {
    const result = newValue === value ? 0 : newValue
    setValue(result)
    onChange(result)
  }

  return (
    <div className="flex m-3">
      <StarIcon selected={value >= 1} onClick={() => handleClick(1)} />
      <StarIcon selected={value >= 2} onClick={() => handleClick(2)} />
      <StarIcon selected={value >= 3} onClick={() => handleClick(3)}/>
      <StarIcon selected={value >= 4} onClick={() => handleClick(4)}/>
      <StarIcon selected={value >= 5} onClick={() => handleClick(5)} />
    </div>
  );
}

export default RatingFilter;

