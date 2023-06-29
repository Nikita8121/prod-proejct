import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
