import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;

  @media screen and (max-width: 768px){
    margin-top: 50px;
    width: inherit;
  }
`

export const SearchInput = styled.input`
  border-radius: 5px 0 0 5px;
  font-size: 18px;
  border: 1px solid #aeaeae;
  padding: 10px;
  width: inherit;
  /* outline: 1px solid #E48800; */

  &:focus{
    outline: none;
    border: 1px solid #E48800;
  }
`

export const SearchButton = styled.button`
  border-radius: 0 5px  5px 0;
  border: 1px solid #aeaeae;
  padding: 10px 15px;
  cursor: pointer;

  &:hover{
    background: #aeaeae;
  }
`