import React from 'react'
import DropDownMenu from './DropDownMenu'
import { useSelector } from 'react-redux'

const Browse = () => {

    const isSideBarEnabled = useSelector((store)=>store.user.isSlideBarActive)
  
    
    if(!isSideBarEnabled) return null

  return (
    <div>
        <DropDownMenu/>
    </div>
  )
}

export default Browse