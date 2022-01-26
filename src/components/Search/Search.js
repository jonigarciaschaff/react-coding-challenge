import { debounce } from 'lodash';
import React from 'react';

const DELAY_TIMEOUT = 150

const Search = (props) => {
  const {id='search', placeholder='Search', onChange} = props

  const handleChange = debounce((event) => {
    onChange(event.target.value)
  }, DELAY_TIMEOUT)

  return (
      <input id={id} placeholder={placeholder} onChange={handleChange} autoFocus className="w-full m-4 h-5 leading-6 text-lg rounded-full py-5 px-4" />
  );
}

export default Search;

