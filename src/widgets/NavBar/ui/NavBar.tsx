import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { useState, useCallback } from 'react'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ThemeButton.CLEAR} className={cls.links}>
        {t('login')}
      </Button>
      {/* <Button theme={ThemeButton.OUTLINE} className={cls.links}>
        {t('login')}
      </Button> */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>addads</Modal>
    </div>
  )
}
