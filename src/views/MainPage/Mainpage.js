import React, { useState, useEffect } from 'react'
import Banner1 from './Banner1/Banner1'
import Banner2 from './Banner2/Banner2'
import Banner3 from './Banner3/Banner3'
import Banner4 from './Banner4/Banner4'
import Banner5 from './Banner5/Banner5'
import Banner6 from './Banner6/Banner6'
import Banner7 from './Banner7/Banner7'
import Banner8 from './Banner8/Banner8'
import Loading from "../../Loading/Loading"

const Mainpage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : null}
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Banner6 />
      <Banner7 />
      <Banner8 />
    </div>
  )
}

export default Mainpage
