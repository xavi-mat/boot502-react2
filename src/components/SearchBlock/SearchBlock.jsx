import search from '../../assets/search.svg'
import micro from '../../assets/micro.svg'

function SearchBlock() {
  return (
    <div className="inputContainer">
      <img src={search} alt="search" className="search-icon" />
      <input type="text" className="input-search" />
      <img src={micro} alt="Micro" className="micro-icon" />
    </div>
  )
}

export default SearchBlock