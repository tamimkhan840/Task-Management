/* eslint-disable react/prop-types */


function Button(props) {
  return (
    <div>
        <button className="{` ${props.className}`}">{props.children}</button>
    </div>
  )
}

export default Button
