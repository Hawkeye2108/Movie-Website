import { useAppContext } from "./Context"
import "./Search.css"
const Search = () => {
  const {search,setSearch,isError} = useAppContext();
  return (
    <div className="search">
      <h2>Search Your Favourite Movie Here</h2>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <input type="text" placeholder='Search here'
      value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <div className="error-text">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}

export default Search