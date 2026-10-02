import useReveal from '../hooks/useReveal'

/**
 * Wrapper that fades/slides its children into view on scroll.
 * `delay` maps to the --d CSS variable used for stagger.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      className={`rv${className ? ` ${className}` : ''}`}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
