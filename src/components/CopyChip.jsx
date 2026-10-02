import Icon from './Icon'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import useScrollFlags from '../hooks/useScrollFlags'
import { profile } from '../data/content'

export default function CopyChip() {
  const { copied, copy } = useCopyToClipboard()
  const { pastHero } = useScrollFlags(24)

  return (
    <button
      type="button"
      className={`chip${pastHero ? ' show' : ''}`}
      aria-label="Copy email address"
      onClick={() => copy(profile.email)}
    >
      <Icon name={copied ? 'check' : 'copy'} strokeWidth={copied ? 2.4 : 2} />
      {copied ? 'Copied' : 'Copy email'}
    </button>
  )
}
