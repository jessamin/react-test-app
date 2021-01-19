import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../redux/actions";
import { menuList } from "../variables/variables";

function ControlsMenu() {
  const dispatch = useDispatch()
  const filterQuery = useSelector(state => state.filter.query)
  let selected = filterQuery.filter || 'All'

  const filterHandle = (e) => {
    e.preventDefault()
    let filterValue = e.target.text
    if(e.target.text === 'All') {
      filterValue = false
    }
    dispatch(filterAction({...filterQuery, filter: filterValue}))
  }

  const calculateClass = link => {
    return (selected === link.name) ? 'active' : ''
  }

  return (
    <nav id="main-menu">
      {menuList.map(link => (
        <a key={link.id}
           onClick={filterHandle}
           className={calculateClass(link)} >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default ControlsMenu
