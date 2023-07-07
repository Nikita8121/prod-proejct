import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useEffect, type ReactNode, useCallback, useState } from 'react'
import { Portal } from '../Portal/Portal'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose: () => void
  lazy?: boolean
}

export const Modal = ({ className, children, isOpen, onClose, lazy = false }: ModalProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

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

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div className={cls.content} onClick={onContentCick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
