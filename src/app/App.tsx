import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

export const App = () => {
  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [])}>
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}
