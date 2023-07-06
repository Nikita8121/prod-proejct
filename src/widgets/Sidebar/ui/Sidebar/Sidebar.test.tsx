import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderComponent } from 'shared/lib/tests/componentRender/ComponentRender'

describe('Sidebar', () => {
  test('with only first param', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    screen.debug()
  })
})
