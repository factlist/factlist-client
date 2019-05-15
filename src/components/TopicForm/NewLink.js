import React, {useContext, useRef} from 'react'
import {Flex} from '@rebass/grid'
import TopicFormContext from './TopicFormContext'
import cm from './newLink.module.css'


const PASTE_DETECT_THRESHOLD = 10;

const NewLink = () => {
  const { addLink } = useContext(TopicFormContext)
  const inputEl = useRef(null);

  const checkAndAddLink = (link) => {
   if (link === '') { return; }
   addLink(link);
   inputEl.current.value = "";
  }

  const handleOnBlur = (e) => {
    checkAndAddLink(e.target.value);
  }

  const handleOnChange = (e, currVal, prevVal) => {
    const prevLen = (prevVal || '').length
    const currLen = (currVal || '').length
    if (currLen - prevLen > PASTE_DETECT_THRESHOLD) {
      checkAndAddLink(e.target.value);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAndAddLink(e.target.value);
    }
  }

  return <Flex className={cm.container}>
    <AddIcon />

    <input
      className={cm.input}
      onBlur={handleOnBlur}
      onKeyPress={handleKeyPress}
      onChange={handleOnChange}
      ref={inputEl}
      id="link"
      name="link"
      placeholder="Add a link to your topic"
    />
  </Flex>
}

export default NewLink

const AddIcon = () =>
  <div className={cm.addIcon}>
    <svg width="14px" height="12px" viewBox="0 0 12 14"  >
      <path
        d="M6.59285714,7.40716181 L11.6571429,7.40716181 C11.984574,7.40716181 12.25,7.67258771 12.25,8.00001886 C12.25,8.32745001 11.984574,8.5928759 11.6571429,8.5928759 L6.59285714,8.5928759 L6.59285714,13.657143 C6.59285714,13.9845741 6.32743117,14.25 6,14.25 C5.67256883,14.25 5.40714286,13.9845741 5.40714286,13.657143 L5.40714286,8.5928759 L0.342857143,8.5928759 C0.0154259714,8.5928759 -0.25,8.32745001 -0.25,8.00001886 C-0.25,7.67258771 0.0154259714,7.40716181 0.342857143,7.40716181 L5.40714286,7.40716181 L5.40714286,2.34285704 C5.40714286,2.01543905 5.67257282,1.75 6,1.75 C6.32742718,1.75 6.59285714,2.01543905 6.59285714,2.34285704 L6.59285714,7.40716181 Z"
        fill="#ACACAC"
        fillRule="evenodd"
      />
    </svg>
  </div>
