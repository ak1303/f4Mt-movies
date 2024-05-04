import GenreFilter from "./components/GenreFilter"
import { movies } from "./data"

function App() {
  return (
    <div className=" w-[70%] m-auto">
      <div className="text-2xl text-center font-bold m-[2%]">Top 15 Movies of All Time</div>
      <GenreFilter movies = {movies}/>
    </div>
  )
}

export default App
