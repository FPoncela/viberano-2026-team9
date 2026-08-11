const VARIANT_CLASSES = {
  primary: 'bg-primary text-on-primary shadow-sm active:scale-98',
  secondary: 'bg-transparent text-text-primary border border-border active:scale-98',
}

function Button({ variant = 'primary', className = '', ...props }) {
  return (
    <button
      type="button"
      className={`h-12 min-h-12 rounded-btn px-md text-body font-medium transition-transform ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  )
}

export default Button
