import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFav } from '../redux/slice/wishSlice'

const Wish = () => {
    const favorite=useSelector(state=>state.fav.favorit)

    const dispatch=useDispatch()


  return (
    <section>
      <div className="container crudpage">
        <div className="cards">
            {
                favorite && favorite.map((elem,i)=>{
                    return(
                        <div key={i} className="card">
                        <div className="image">
                          <img src={elem.image} alt="" />
                        </div>
                        <h2>{elem.title}</h2>
                        <h4>$ {elem.price}</h4>
                        <button onClick={()=>dispatch(addFav(elem))}>delete</button>
                      </div>
                    )
                })
            }

        </div>
      </div>
    </section>
  )
}

export default Wish