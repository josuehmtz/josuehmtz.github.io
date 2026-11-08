import { useCallback } from 'react'
import { App } from 'antd'

/** Copia texto al portapapeles y muestra un aviso con el resultado. */
export const useCopyToClipboard = () => {
  const { message } = App.useApp()

  return useCallback(
    async (text, successMsg = 'Copiado') => {
      try {
        await navigator.clipboard.writeText(text)
        message.success(successMsg)
      } catch {
        message.error('No se pudo copiar')
      }
    },
    [message]
  )
}
