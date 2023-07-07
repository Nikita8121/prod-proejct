import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export function createReduxStore (initialState?: StateSchema) {
  const rootReucers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }
  return configureStore<StateSchema>({
    reducer: rootReucers,
    devTools: __IS_DEV__
  })
}

export default createReduxStore
