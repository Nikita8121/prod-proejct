import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme = ThemeButton.CLEAR,
  square,
  size = ButtonSize.M,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.Button, { [cls.square]: square }, [
        cls[theme],
        className,
        cls[size]
      ])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
