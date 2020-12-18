import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 320px;
  border-radius: 10px;
  box-shadow: 0px 1px #f6e6d3;
  border: 1px solid #f6e6d3;
  color: #74BDEB;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover{
    color: #E48800;
    border: 1px solid #E48800;
  }
`

export const CardWrapper = styled.div`

`

export const CardContent = styled.div`

`
export const CardImgWrapper = styled.div`
  width: -webkit-fill-available;
`

export const CardImg = styled.img`
  max-width: 320px;
  border-radius: 10px 10px 0 0;
`

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export const CardDesc = styled.div`
  font-weight: 200;
  font-size: 14px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`

export const Creator = styled.div`
  color: #000;
  font-size: 16px;
  margin-left: 10px;
`

export const Avatar = styled.img`
  border-radius: 50%;

`