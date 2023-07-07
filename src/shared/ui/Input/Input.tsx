import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
  memo,
  type InputHTMLAttributes,
  type ChangeEvent,
  useState,
  useEffect,
  useRef
} from 'react'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    placeholder,
    autoFocus = false,
    type = 'text',
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>()
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [caretPosition, setCaretPosition] = useState<number>(0)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
      console.log(e.target.value.length)
      setCaretPosition(e.target.value.length)
    }

    const onBlur = () => {
      setIsFocused(false)
    }

    const onFocus = () => {
      setIsFocused(true)
    }

    const onSelect = (e: any) => {
      setCaretPosition(e.target.selectionStart || 0)
    }

    useEffect(() => {
      if (autoFocus) {
        ref.current?.focus()
      }
    }, [autoFocus])

    return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={cls.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={cls.caretWrapper}>
          <input
            ref={ref}
            className={cls.input}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            onChange={onChangeHandler}
            type={type}
            value={value}
            {...otherProps}
          />
          {isFocused && (
            <span
              className={cls.caret}
              style={{ left: `${caretPosition * 9}px` }}
            ></span>
          )}
        </div>
      </div>
    )
  }
)
