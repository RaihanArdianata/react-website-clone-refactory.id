import {addDecorator} from '@storybook/react'
import { BrowserRouter } from 'react-router-dom';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((story) => {
  return (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  )
})
