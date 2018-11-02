import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
`

Grid.propTypes = {
  children: PropTypes.node,
}

Grid.defaultProps = {
  children: undefined,
}

export default Grid
