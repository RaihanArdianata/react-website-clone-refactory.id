import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  min-height: 100vh;
`

export const BlogImage = styled.img`
  width: 100%;
`

export const BlogSubTitle = styled.div`
  color: #E48800;
  padding: 10px 0;
`
export const BlogTitle = styled.div`
  padding: 10px 0;
  color: #0B162B;
  font-family: "Raleway", Sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1.3px;
`
export const BlogCreatorWraper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 50%;
  color: #666666;
  fill: #666666;
  -webkit-text-fill-color: initial;
  font-family: "Montserrat", Sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`
export const CreatorName = styled.div`

`
export const DateCreate = styled.div`

`
export const BlogPost = styled.p`
  padding: 10px 0;
  color: #666666;
    font-family: "Montserrat", Sans-serif;
`