import React from 'react'
import "./search.css"
import Button from '../Component/Common/Button'
function Search() {
  return (
    <div className='main-search-bar'>
      <div className='search-bar'>
        <input type='search' placeholder='search you favourite content frim here....'/>
        <Button>Search</Button>
      </div>
    </div>
  )
}

export default Search