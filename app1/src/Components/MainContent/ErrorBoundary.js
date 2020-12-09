import React from 'react'
import image from '../../img/default-img.png';

function ErrorBoundary(props) {

  const defImg = image;

  return <>{props.image ? props.image : defImg}</>
}

export default ErrorBoundary