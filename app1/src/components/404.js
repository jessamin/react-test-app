import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import './css/404.css'

function NotFound() {
  const history = useHistory()
  const navigateTo = () => history.push('/')

  useEffect(() => {
    document.body.classList = ['page-404']
  }, [])

  return (
    <div className='area-404 container'>
      <div>Page Not Found</div>
      <img alt='404' src="/img/404.png" width='100%'/>
      <button onClick={navigateTo}>GO BACK TO HOME</button>
    </div>
  )
}

export default NotFound
