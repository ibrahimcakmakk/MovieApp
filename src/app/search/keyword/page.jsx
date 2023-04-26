import React from 'react'
import Movies from './component/Movies';

const Page = ({params}) => {
    const keyword = params.keyword

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c13729521831ff867be930c747b6348d&query=${keyword}&language=en-US&include_adult=false`)

    const data = await res.json()
    console.log(keyword, "keyword")
  return (
    <div>
        {
            !data?.results ? 
            <div>Aranılan sayfa bulunamadı</div>
            :
            <div className='flex items-center flex-wrap gap-3'>
                {
             data?.results?.map((dt,i)=>{
          return(
            <Movies key={i} dt={dt}  />
          )
        })}
        </div>
      }
    </div>
  )
}

export default Page