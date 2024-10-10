import React from 'react'
import {Listingdb} from '../Databases/db'
import PropertyCard from '../components/resusables/PropertyCard'

const GridListingRight = () => {
  return (
    <div className=''>
    <div className=' grid sm:grid-cols-2 gap-8 min-h-[100vh]'>
  { Listingdb && Listingdb.length > 0 && Listingdb.map((property)=>{
    return(
      <div className=""key={property._id}>
        <PropertyCard {...property} key={property._id}/>
      </div>
    )

  })

  }
    
</div>
</div>
  )
}

export default GridListingRight