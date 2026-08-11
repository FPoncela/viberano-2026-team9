function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-card bg-surface p-md shadow-[0_2px_12px_rgba(43,39,48,0.06)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
