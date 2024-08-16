/* eslint-disable react/prop-types */

const Button = ({
    title="button",
    type ="text",
    disabled = false,
    onClick ,
    classname,
    icon,
}) => {
  return (
      <button
      type={type}
      disabled={disabled}
      className={classname}
      onClick={onClick}
      >
          {title}{icon}
      </button>
  )
}

export default Button