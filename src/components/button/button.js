import styled from 'styled-components'
import propTypes from 'prop-types'

const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  background: gray;
  color: #fff;
  border: none;
`

Button.propTypes = {
  /**
   * The look of the button
   */
  variant: propTypes.string,
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button;