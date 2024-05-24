import React from 'react'

const BestSeller = () => {
  return (
    <section>
    <div className="container crudpage crudpagealt">
      <h2>
        Best Sellers <span>Shop</span>
      </h2>
      <div className="next">
        <h4>Next </h4>
        <span>|</span>
        <h4>Previos</h4>
      </div>

      <div className="cards">
              <div  className="card">
                <div className="image">
                  <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png" alt="" />
                </div>
                <h2>Quartz Belt Watch</h2>
                <h4>$ 150</h4>
              </div>
              <div  className="card">
                <div className="image">
                  <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_2.png" alt="" />
                </div>
                <h2>Quartz Belt Watch</h2>
                <h4>$ 150</h4>
              </div>
              <div  className="card">
                <div className="image">
                  <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png" alt="" />
                </div>
                <h2>Quartz Belt Watch</h2>
                <h4>$ 150</h4>
              </div>
              <div  className="card">
                <div className="image">
                  <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" alt="" />
                </div>
                <h2>Quartz Belt Watch</h2>
                <h4>$ 150</h4>
              </div>
      </div>
    </div>
  </section>
  )
}

export default BestSeller