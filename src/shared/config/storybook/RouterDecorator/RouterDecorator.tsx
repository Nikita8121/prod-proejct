import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: () => JSX.Element) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)
