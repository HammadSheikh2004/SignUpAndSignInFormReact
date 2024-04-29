import '../css/style.css'
const Button = ({buttonText, onchange}) => {
  return (
    <>
    <div className="container">
        <button className="btn btn-primary button" onClick={onchange}>{buttonText}</button>
    </div>
    </>
  )
}

export default Button