import React from 'react'
import Movies from './component/Movies';

const Page = async ({searchParams}) => {

  const res = await fetch(`
  https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=c13729521831ff867be930c747b6348d&language=en-US&page=1`,{next: {revalidate: 1000}});

  const data = await res.json();
  
  console.log(data,"data")
  return (
    
    <div className='flex items-center flex-wrap gap-3'>
    
      {
        data?.results?.map((dt,i)=>{
          return(
            <Movies key={i} dt={dt}  />
          )
        })
      }
    </div>
  )
}

export default Page