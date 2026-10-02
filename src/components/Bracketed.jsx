export default function Bracketed({ children }) {
  return (
    <span className="eyebrow">
      <span className="br">[</span> {children} <span className="br">]</span>
    </span>
  )
}
