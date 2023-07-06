import { type DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTests'

export interface renderWithRouterOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function renderComponent (
  component: ReactNode,
  options?: renderWithRouterOptions
) {
  const { route = '/', initialState = {} } = options
  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
