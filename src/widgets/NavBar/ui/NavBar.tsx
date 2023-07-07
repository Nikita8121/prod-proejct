import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useState, useCallback } from 'react'
import { LoginModal } from 'features/AuthByUsername'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onOpenModal}
        theme={ThemeButton.CLEAR}
        className={cls.links}
      >
        {t('login')}
      </Button>
      {/* <Button theme={ThemeButton.OUTLINE} className={cls.links}>
        {t('login')}
      </Button> */}
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
