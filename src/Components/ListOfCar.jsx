import React from 'react'
import carlistbg from '../Assets/images/carlist-bg.png'
import renaultsymbol from '../Assets/images/renault symbol.png'

const ListOfCar = () => {
  return (
    <div>
        <section className="list-car-total-col">
    <img src={carlistbg} className="img-fluid carlist-background" alt=""/>
<div className="container">
    <div className="list-car">
    <h5 className="car-list">LIST OF CAR</h5>
    <div className="list-of-cars">
        <div className="row">
            <div className="col-lg-4">
                <div className="cars">
                    <img src={renaultsymbol} className="img-fluid cars-img w-100" alt=""/>
                    <div className="car-details">
                    <div className="car-name-price">
                    <h6 className="car-name">Renault Symbol</h6>
                    <p className="car-price"><span className="car-price-span">QAR 385.00</span>QAR 320.00 </p>
                </div>
                <div className="car-booking">
                    <a href="" className="car-price-btn">Book Now</a>
                </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cars">
                    <img src={renaultsymbol} className="img-fluid cars-img w-100 " alt=""/>
                    <div className="car-details">
                    <div className="car-name-price">
                    <h6 className="car-name">Renault Symbol</h6>
                    <p className="car-price">QAR 385.00</p>
                </div>
                <div className="car-booking">
                    <a href="" className="car-price-btn">Book Now</a>
                </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cars">
                    <img src={renaultsymbol} className="img-fluid cars-img w-100" alt=""/>
                    <div className="car-details">
                    <div className="car-name-price">
                    <h6 className="car-name">Renault Symbol</h6>
                    <p className="car-price">QAR 385.00</p>
                </div>
                <div className="car-booking">
                    <a href="" className="car-price-btn">Book Now</a>
                </div>
                </div>
                </div>
            </div>

        </div>
    </div>
    <div className="list-of-cars">
        <div className="row">
            <div className="col-lg-4">
                <div className="cars">
                    <img src={renaultsymbol} className="img-fluid cars-img w-100" alt=""/>
                    <div className="car-details">
                    <div className="car-name-price">
                    <h6 className="car-name">Renault Symbol</h6>
                    <p className="car-price">QAR 385.00</p>
                </div>
                <div className="car-booking">
                    <a href="" className="car-price-btn">Book Now</a>
                </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cars">
                    <img src={renaultsymbol} className="img-fluid cars-img w-100" alt=""/>
                    <div className="car-details">
                    <div className="car-name-price">
                    <h6 className="car-name">Renault Symbol</h6>
                    <p className="car-price"><span className="car-price-span">QAR 385.00</span>QAR 320.00 </p>
                </div>
                <div className="car-booking">
                    <a href="" className="car-price-btn">Book Now</a>
                </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cars">
                    <img src={renaultsymbol} className="img-fluid cars-img w-100" alt=""/>
                    <div className="car-details">
                    <div className="car-name-price">
                    <h6 className="car-name">Renault Symbol</h6>
                    <p className="car-price"><span className="car-price-span">QAR 385.00</span>QAR 320.00 </p>
                </div>
                <div className="car-booking">
                    <a href="" className="car-price-btn">Book Now</a>
                </div>
                </div>
                </div>
            </div>

        </div>
    </div>
    </div>
</div>
{/* <!-- List OF Car End --> */}
  </section>

    </div>
  )
}

export default ListOfCar