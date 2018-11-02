import PropTypes from 'prop-types'
import styled from 'styled-components'

const SIZE_MAP = {
  '1': '100%',
  '1/2': '50%',
  '1/3': '33%',
  '1/4': '25%',
  '1/6': '16.666667%',
}

const GridItem = styled.div`
  flex-basis: ${props => SIZE_MAP[props.size]};
  padding: 8px;
  /* background-color: red; */
`

GridItem.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf[Object.keys(SIZE_MAP)],
}

GridItem.defaultProps = {
  children: undefined,
  size: '1',
}

export default GridItem
