import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation()

  const toggle = async () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button onClick={toggle}>{t('lang')}</Button>
    </div>
  )
}
