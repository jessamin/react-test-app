import React from 'react'
import { useHistory } from 'react-router-dom'
import useClassAndModuleSet from '../customhooks/useClassAndModuleSet'
import './css/404.css'

function NotFoundPage() {
  const history = useHistory()
  const navigateTo = () => history.push('/', {from: 'Redirected from 404 page'})

  useClassAndModuleSet('404')

  return (
    <div className='area-404 container'>
      <div>Page Not Found</div>
      <img alt='404' src="/img/404.png" width='100%'/>
      <button onClick={navigateTo}>GO BACK TO HOME</button>
    </div>
  )
}

export default NotFoundPage
