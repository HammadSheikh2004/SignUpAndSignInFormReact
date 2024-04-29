const TextField = ({ name, classes, onchange, value, type, ...props }) => {
  return (
    <>
      <div className="container">
        <input type={type} name={name} className={classes} value={value} onChange={(e) => {
          onchange(e)
        }}
          {...props}
        />
      </div>
    </>
  )
}

export default TextField