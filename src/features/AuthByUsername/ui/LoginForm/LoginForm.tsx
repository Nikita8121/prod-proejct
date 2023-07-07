import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autoFocus placeholder={t('enter-username')} className={cls.input} type="text" />
      <Input placeholder={t('enter-password')} className={cls.input} type="text" />
      <Button theme={ThemeButton.BACKGROUND_INVERTED} className={cls.loginBtn}>{t('login')}</Button>
    </div>
  )
}
