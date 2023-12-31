import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })}
    >
      <Button
        className={cls.collapseBtn}
        data-testid="sidebar-toggle"
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>

          <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <MainIcon className={cls.icon} />
            <span className={cls.link}>{t('main-link')}</span>
          </AppLink>

          <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>{t('about-link')}</span>
          </AppLink>

      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
}
