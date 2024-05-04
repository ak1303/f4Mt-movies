import {useState } from 'react';
import MovieList from './MovieList';



const GenreFilter = ({movies}) => {

  const[data,setData] = useState(movies);
  const handleGenres = (genre) =>{
    if(genre==='all'){
      setData(movies);
      return;
    }
    console.log(genre);
    const filteredData = movies.filter((m)=>m.genre === genre);
    setData(filteredData);
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-[#f0f0f0] p-4 rounded-lg' >
        <h1 className='p-2 text-xl'>Filter by Genre</h1>
        <div  className='flex flex-wrap p-2 gap-1 justify-between'>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Drama')}>Drama</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Crime')}>Crime</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Action')}>Action</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Fantasy')}>Fantasy</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Western')}>Western</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Science Fiction')}>Science Fiction</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Thriller')}>Thriller</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('War')}>War</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('Animation')}>Animation</div>
          <div className='bg-[#d6d6d6] py-1 px-2 rounded-lg text-lg cursor-pointer' onClick={()=>handleGenres('all')}>All</div>
        </div>
      </div>
      <div>
        <MovieList movies={data}/>
      </div>
    </div>
  )
}

export default GenreFilter