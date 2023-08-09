import PropType from 'prop-types'

function Button({children, version, type, isDisable}) {
  return (
    <button type="type" disabled={isDisable} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisable: false,
}

Button.propTypes = {
    children: PropType.node.isRequired,
    version: PropType.string,
    type: PropType.string,
    isDisable: PropType.bool
}

export default Button