import React, { useEffect, useState } from 'react'
import carlistbg from '../Assets/images/carlist-bg.png'
import renaultsymbol from '../Assets/images/renault symbol.png'
import axios from 'axios'
import { Tooltip as ReactTooltip }  from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css";

const ListOfCar = () => {
   
     const { REACT_APP_SERVER_URL } = process.env;
     const [list, setlist] = useState([])
     const date = new Date();

     useEffect(() => {
    
        getData() 
     }, [])
     console.log(date,'date');
     let Day = String(date.getDate()).padStart(2, '0');
     let Month = String(date.getMonth() + 1).padStart(2, '0');
     let Year = new Date(date).getFullYear();
     let Today = `${Year}-${Month}-${Day}`;
     const timeString = date.toLocaleTimeString([], {hour12: false,hour: '2-digit', minute:'2-digit',second:'2-digit'});
     console.log(Today);
     console.log(timeString);
    
function getNextDate(dateString) {
    const currentDate = new Date(dateString);
    const nextDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000));
    const year = nextDate.getFullYear();
    const month = String(nextDate.getMonth() + 1).padStart(2, '0');
    const day = String(nextDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const currentDate = Today;
const nextDate = getNextDate(currentDate);
console.log(nextDate ,'tomarow');

     const getData=async()=>{
         await axios({
             url:`${REACT_APP_SERVER_URL}/api/item/search-web?from_date=${Today} ${timeString}&to_date=${nextDate} ${timeString}&city_id=1&city_loc_id=2&cur_type=1&vehicle_type=0&brand_type=0`,
             method:"GET"
         }).then((response)=>{
             console.log(response.data.Models,'data');
             setlist(response.data.Models)
         }).catch((error)=>{
             console.log(error);
         })
     }
 
  return (
    <div>
        <section className="list-car-total-col">
    <img src={carlistbg} className="img-fluid carlist-background" alt=""/>
<div className="container">
    <div className="list-car">
    <h5 className="car-list">LIST OF CAR</h5>
    <div className="list-of-cars">
        <div className="row">
            {list.map((car)=>{
                return(
<div className="col-lg-4 mt-2 mb-4" >
                <div className="cars">
                    <img src={REACT_APP_SERVER_URL+car.Model_image} className="img-fluid cars-img w-100" alt=""/>
                    <div className="car-details">
                    <div className="car-name-price">
                    <h6 className="car-name" id={car.Model_Id}>{car.Maker} {car.Model_name}</h6>
                    <ReactTooltip
        anchorId={car.Model_Id}
        place="top"
        content={car.Maker+" "+car.Model_name}
      />
                    <p className="car-price" ><span className="car-price-span">{car.Currency_code} {car.Main_Rate}</span>{car.Currency_code} {car.Offer_Rate} </p>
                </div>
                <div className="car-booking">
                    <a href="" className="car-price-btn">Book Now</a>
                </div>
                </div>
                </div>
            </div>
                )
            })}
            
            {/* <div className="col-lg-4">
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
            </div> */}
            {/* <div className="col-lg-4">
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
            </div> */}

        </div>
    </div>
    {/* <div className="list-of-cars">
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
    </div> */}
    </div>
</div>
{/* <!-- List OF Car End --> */}
  </section>

    </div>
  )
}

export default ListOfCar