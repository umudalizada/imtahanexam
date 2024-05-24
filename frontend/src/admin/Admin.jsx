import React, { useEffect } from 'react'
import { deleteById, getAllData } from '../service/requests'
import { BaseUrl } from '../service/api'
import { useDispatch, useSelector } from 'react-redux'
import { addAllData, delDataBy } from '../redux/slice/productsSlice'
import "./Admin.scss"
import Post from './Post'
import Search from './Search'
import SortButtons from './SortButtons'

const Admin = () => {
    const dispatch=useDispatch()
    const alldata=useSelector(state=>state.data.products)
    useEffect(()=>{
        getAllData(BaseUrl).then((res)=>{
            dispatch(addAllData(res))
        })
    },[])

    const handleDel=(id)=>{
        deleteById(BaseUrl,id)
        dispatch(delDataBy(id))
    }

  return (
<>

  {/* component */}
  <div className="flex min-h-screen items-center justify-center">
  <Post/>
    <div className="overflow-x-auto">
        <Search/>
        <SortButtons/>
      <table className="min-w-full bg-white shadow-md rounded-xl">
        <thead>
          <tr className="bg-blue-gray-100 text-gray-700">
            <th className="py-3 px-4 text-left">Id</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-blue-gray-900">
            {
                alldata && alldata.map((elem,i)=>{
                    return(
                        
          <tr key={i} className="border-b border-blue-gray-200">
          <td className="py-3 px-4">{elem._id}</td>
          <td className="py-3 px-4">{elem.title}</td>
          <td className="py-3 px-4">${elem.price}</td>
          <td className="py-3 px-4">
            <button onClick={()=>handleDel(elem._id)}>delete</button>
          </td>
        </tr>

                    )
                })
            }


        </tbody>
      </table>
      <div className="w-full pt-5 px-4 mb-8 mx-auto ">
        <div className="text-sm text-gray-700 py-1 text-center">
          Made with{" "}
          <a
            className="text-gray-700 font-semibold"
            href="https://www.material-tailwind.com/docs/html/table/?ref=tailwindcomponents"
            target="_blank"
          >
            Material Tailwind
          </a>{" "}
          by{" "}
          <a
            href="https://www.creative-tim.com?ref=tailwindcomponents"
            className="text-gray-700 font-semibold"
            target="_blank"
          >
            {" "}
            Creative Tim
          </a>
          .
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Admin