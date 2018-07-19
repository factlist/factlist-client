import styled from 'styled-components'

const Container = styled.div`
  border-radius: 2px;
  overflow: hidden;
  background-color: #FFF;
  z-index: 5;

  // Center
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

export default Container
