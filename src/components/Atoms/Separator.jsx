import styled from 'styled-components'
import PropTypes from 'prop-types'

const Separator = styled.span`
  display: block;
  height: ${(props) =>
    props.exact ? `${props.size}px` : `${props.size * 8}px`};
`
Separator.propTypes = {
  exact: PropTypes.bool,
  size: PropTypes.number,
}
Separator.defaultProps = {
  exact: false,
  size: 0,
}
export default Separator
