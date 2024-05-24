import React, { useEffect } from "react";
import { getAllData } from "../../service/requests";
import { BaseUrl } from "../../service/api";
import { useDispatch, useSelector } from "react-redux";
import { addAllData } from "../../redux/slice/productsSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addBasket } from "../../redux/slice/basketSlice";
import { Link } from "react-router-dom";
import { addFav } from "../../redux/slice/wishSlice";


const CrudPage = () => {
  const alldata = useSelector((state) => state.data.products);
  const favorite=useSelector(state=>state.fav.favorit)

  const dispatch = useDispatch();

  useEffect(() => {
    getAllData(BaseUrl).then((res) => {
      dispatch(addAllData(res));
    });
  }, []);
  const hadnleRed=(id)=>{
    return favorite.find(el=>el._id==id)
  }
  return (
    <section>
      <div className="container crudpage">
        <h2>
          Awesome <span>Shop</span>
        </h2>

        <div className="next">
          <h4>Next </h4>
          <span>|</span>
          <h4>Previos</h4>
        </div>

        <div className="cards">
          {alldata &&
            alldata.map((elem, i) => {
              return (
                <div key={i} className="card">
                  <div className="image">
                    <img src={elem.image} alt="" />
                  </div>
                  <h2>{elem.title}</h2>
                  <h4>$ {elem.price}</h4>

                  <div className="icons">
                  <FontAwesomeIcon onClick={()=>dispatch(addBasket(elem))} icon={faBasketShopping} />
                  <FontAwesomeIcon icon={faHeart} style={{color:hadnleRed(elem._id) ? "red" : "black"}} onClick={()=>dispatch(addFav(elem))}/>
                  <Link to={`/detail/${elem._id}`} >Detail</Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CrudPage;
