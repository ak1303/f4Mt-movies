const MovieList = ({movies}) => {
  return (
    <>
        <table className='w-full border-2 '>
          <thead className='bg-[#f6f6f6]'>
            <tr>
              <th className='border-2 w-3/6'>Title</th>
              <th className='border-2 w-2/6'>Genre</th>
              <th className='border-2 w-1/6'>Year</th>
            </tr>
          </thead>
          <tbody>
            {
              movies.map((movie) => {
                return (
                  <tr key={movie.title} className='border-2'>
                    <td className='border-2 p-1'>{movie.title}</td>
                    <td className='border-2 p-1'>{movie.genre}</td>
                    <td className='border-2 p-1'>{movie.year}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </>
  )
}

export default MovieList