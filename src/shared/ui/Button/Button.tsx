import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
