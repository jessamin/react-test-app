import React from 'react'
import {filterAction} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function ControlsMenu() {
  const dispatch = useDispatch()
  const filterQuery = useSelector(state => state.filter.query)
  let selected = filterQuery.filter

  const filterHandle = (e) => {
    e.preventDefault()
    let filterValue = e.target.text
    if(e.target.text === 'All') {
      filterValue = false
    }
    dispatch(filterAction({...filterQuery, filter: filterValue}))
  }

  const menuList = [
    {name: 'All'},
    {name: 'Documentary'},
    {name: 'Horror'},
    {name: 'Crime'}
  ]

  const calculateClass = link => {
    if(!selected) {
      selected = 'All'
    }
    return (selected === link.name) ? 'active' : ''
  }

  return (
    <nav id="main-menu">
      {menuList.map(link => (
        <a key={link.name}
           onClick={filterHandle}
           className={calculateClass(link)} >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default ControlsMenu
