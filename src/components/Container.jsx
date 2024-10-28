/* eslint-disable react/prop-types */


function Container(props) {
  return (
    <div className={`w-10/12 m-auto ${props.className}`}>{props.children}</div>
  )
}

export default Container
