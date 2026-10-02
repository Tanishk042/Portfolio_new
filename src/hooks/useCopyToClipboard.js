import { useCallback, useRef, useState } from 'react'

async function writeToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text)
  }
  return new Promise((resolve, reject) => {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      resolve()
    } catch (err) {
      reject(err)
    }
    document.body.removeChild(ta)
  })
}

/**
 * Copies `text` and flips `copied` to true for 1.9s so the UI can confirm.
 */
export default function useCopyToClipboard(timeout = 1900) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copy = useCallback(
    async (text) => {
      try {
        await writeToClipboard(text)
      } catch {
        return false
      }
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), timeout)
      return true
    },
    [timeout],
  )

  return { copied, copy }
}
