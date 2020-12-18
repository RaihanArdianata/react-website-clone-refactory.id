import React from 'react'
import {
  SearchButton,
  SearchContainer,
  SearchInput
} from './search.elements'
import {FaSearch} from 'react-icons/fa'

function Search({placeholder}) {
  return (
    <SearchContainer>
      <SearchInput placeholder={placeholder}></SearchInput>
      <SearchButton>
        <FaSearch size={18}/>
      </SearchButton>
    </SearchContainer>
  )
}

export default Search
