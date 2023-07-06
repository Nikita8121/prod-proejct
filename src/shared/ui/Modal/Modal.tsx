import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useEffect, type ReactNode, useCallback } from 'react'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose: () => void
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const { theme } = useTheme()
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onContentCick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
    }

    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen, onKeydown])

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div className={cls.content} onClick={onContentCick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
