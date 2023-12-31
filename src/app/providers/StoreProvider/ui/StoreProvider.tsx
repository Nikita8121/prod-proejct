import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import createReduxStore from '../config/store'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: StateSchema
}
export const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = createReduxStore()

  return <Provider store={store}>{children}</Provider>
}
