import styled from 'styled-components'
import AutosizeTextarea from 'react-textarea-autosize'
import commonStyles from './commonStyles'

const Textarea = styled(AutosizeTextarea)`
  ${commonStyles}

  width: 100%;
  border: 0;

  color: ${props => props.color};
  line-height: 32px;

  resize: none;
  outline: none;
`


export default Textarea
