import React from 'react'
import { Link } from 'react-router-dom'



const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
        <Link to="/">
            <img
              src={props.img}
              className='w-full group-hover:scale-105 transition-all group-hover:rotate-1'
              alt="banner"
            />
        </Link>
          </div>
  )
}


export default BannerBox