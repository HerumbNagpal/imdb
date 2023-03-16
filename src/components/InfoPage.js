
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Styles.css'

import loading from './projecter.gif'

export const InfoPage = () => {
  let { info } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    handleOutput();
  }, [info])

  const [details, setDetails] = useState();

  const handleOutput =async  () => {
    setIsLoading(true);
    await axios.get(`https://www.omdbapi.com/?i=${info}&apikey=72bdb388`)
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      })
    setIsLoading(false);

  }


  return (<div className='deets' >
    <div className='load' >
      {isLoading && <img src={loading} alt="Loading" style={{height: 250 ,width : 250 }}/>}
    </div>
    <div className='details' >
      <img src={details && details.Poster} alt="" />
      <h1>
        {details && details.Title}
      </h1>
      <p> Rating : {details && details.imdbRating} </p>
      <p> {details && details.Plot} </p>
    </div>
  </div>
  )
}
