import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px 0;
  width: 500px;
  height: 100%;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`
export const CardTitle = styled.div`
  color: #6B6D7C;
  padding-bottom: 22px;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  line-height: 28px;
`
export const CardInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: inherit;
  padding: 20px;
`
export const CardInputLabel = styled.div`
  text-align: left;
  display: flex;
  align-items: flex-start;
`
export const CardInput = styled.input`
  width: 70%;
  padding: 8px;
  border-radius: 10px;
  margin-top: 10px;
  height: 25px;
  border: 1px solid #6B6D7C;

  &:focus{
    outline: none;
    border: 1px solid #E48800;
  }


`