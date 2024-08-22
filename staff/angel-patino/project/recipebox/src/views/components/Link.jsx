export default ({ onClick, children, to = "" }) => (
  <a href={to} onClick={onClick}>
    {children}
  </a>
)
