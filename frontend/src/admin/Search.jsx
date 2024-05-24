import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/slice/productsSlice'

const Search = () => {
    const dispatch=useDispatch()
    const inpVal=useRef()
  return (
    <div>
    <input type="text" ref={inpVal}/> <button onClick={()=>dispatch(search(inpVal.current.value))}>search</button>
    </div>
  )
}

export default Search