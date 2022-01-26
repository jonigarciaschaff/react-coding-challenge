import React, { useMemo, useState } from 'react';

import RatingFilter, { rangeValues } from 'components/RatingFilter/RatingFilter';
import Search from 'components/Search/Search';
import { useDiscoverMovieQuery } from 'queries/discoverMovie.query.js';
import { useSearchMovieQuery } from 'queries/searchMovie.query';

const Home = () => {
  const [searchValue, setSearchValue] = useState(null)
  const [ratingValue, setRatingValue] = useState(0)
  console.log('ratingValue', ratingValue)
  const searchParams = useMemo(() => {
    return {
      query: searchValue
    }
  }, [searchValue])

  const { data: searchData } = useSearchMovieQuery(searchParams, {enabled: !!searchValue})
  const { data: discoverData } = useDiscoverMovieQuery({}, {enabled: !searchValue})

  const items = useMemo(() => {
    let data = !!searchValue ? searchData : discoverData
    const range = rangeValues[ratingValue]
    return data?.results?.filter((item) => item.vote_average >= range[0] && item.vote_average <= range[1])
  }, [searchValue, searchData, discoverData, ratingValue])

  return (
    <>
      <div className="container min-w-full min-h-screen bg-slate-700">
        <div className="flex justify-center">
          <Search onChange={setSearchValue}/>
        </div>
        <div className="flex justify-center mb-3">
          <RatingFilter onChange={setRatingValue} />
        </div>
        <div className="grid gap-2 justify-center homeContainer ">
          {items?.map(item => {
            const url = `${process.env.REACT_APP_API_IMAGE_URL}${item.poster_path}`
            return (<img key={item.id} src={url} className="cursor-pointer hover:scale-105" />)
          })}
        </div>
      </div>
    </>
  );
}

export default Home;