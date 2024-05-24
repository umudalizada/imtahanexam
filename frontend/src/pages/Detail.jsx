import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id}=useParams()
    const alldata=useSelector(state=>state.data.products)

    let control =alldata.find(el=>el._id==id)
    
  return (
<>
  {/* component */}
  <div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
    <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
      <img
        className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
        src={control.image}
        alt=""
      />
      <div className="text-center mt-2 text-3xl font-medium">A{control.title}</div>
      <div className="text-center mt-2 font-light text-sm"></div>
      <div className="text-center font-normal text-lg">{control.price} $</div>
      <div className="px-6 text-center mt-2 font-light text-sm">
 
      </div>
      <hr className="mt-8" />
      <div className="flex p-4">
      </div>
    </div>
  </div>
</>



  )
}

export default Detail