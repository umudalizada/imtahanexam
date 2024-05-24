import React from 'react'
import { useDispatch } from 'react-redux'
import { AtoZ, Hig, Low, ZtoA } from '../redux/slice/productsSlice'

const SortButtons = () => {
    const dispatch=useDispatch()
  return (
    <div><button onClick={()=>dispatch(AtoZ())}>Az</button> / / <button onClick={()=>dispatch(ZtoA())}>Z-a</button> / / <button  onClick={()=>dispatch(Hig())}>Hig</button> / / <button   onClick={()=>dispatch(Low())}>Low</button></div>
  )
}

export default SortButtons