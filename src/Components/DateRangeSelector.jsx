<section>
<div className="content_listing">
  <div className="container">
    <div className="row">

      <div className="search-edit">
        <div className="city_edit">              
          <input type="text" name="" placeholder="Enter City"/>               
        </div>
        <div className="date_time">
        {/* <input type="date" placeholder={fromDate}  name="dateInput"  onChange={handleFromDateChange} min={today}  required></input>       */}
        {/* <DatePicker selected={startDate} onChange={handleFromDateChange} minDate={new Date()}selectsStart/> */}
        <DatePicker

  id="from-date"
  selected={startDate}
  onChange={handleFromDateChange}
  minDate={new Date()}
  startDate={startDate}
  selectsStart
  dateFormat="dd/MM/yyyy"
  className='form-control'
/>
{/* selected={fromDate}
  onChange={handleFromDateChange}
  minDate={new Date()}
  startDate={fromDate}
  selectsStart */}
          
          <select name="ddlpickTime" id="ddlpickTime" className="time-box"  onChange={handleFromTime} value={fromTime}>

            
              <option value="00:00:00">00:00</option>
              <option value="00:30:00">00:30</option>
              <option value="01:00:00">01:00</option>
              <option value="01:30:00">01:30</option>
              <option value="02:00:00">02:00</option>
              <option value="02:30:00">02:30</option>
              <option value="03:00:00">03:00</option>
              <option value="03:30:00">03:30</option>
              <option value="04:00:00">04:00</option>
              <option value="04:30:00">04:30</option>
              <option value="05:00:00">05:00</option>
              <option value="05:30:00">05:30</option>
              <option value="06:00:00">06:00</option>
              <option value="06:30:00">06:30</option>
              <option value="07:00:00">07:00</option>
              <option value="07:30:00">07:30</option>
              <option value="08:00:00">08:00</option>
              <option value="08:30:00">08:30</option>
              <option value="09:00:00">09:00</option>
              <option value="09:30:00">09:30</option>
              <option value="10:00:00">10:00</option>
              <option value="10:30:00">10:30</option>
              <option value="11:00:00">11:00</option>
              <option value="11:30:00">11:30</option>
              <option value="12:00:00">12:00</option>
              <option value="12:30:00">12:30</option>
              <option value="13:00:00">13:00</option>
              <option value="13:30:00">13:30</option>
              <option value="14:00:00">14:00</option>
              <option value="14:30:00">14:30</option>
              <option value="15:00:00">15:00</option>
              <option value="15:30:00">15:30</option>
              <option value="16:00:00">16:00</option>
              <option value="16:30:00">16:30</option>
              <option value="17:00:00">17:00</option>
              <option value="17:30:00">17:30</option>
              <option value="18:00:00">18:00</option>
              <option value="18:30:00">18:30</option>
              <option value="19:00:00">19:00</option>
              <option value="19:30:00">19:30</option>
              <option value="20:00:00">20:00</option>
              <option value="20:30:00">20:30</option>
              <option value="21:00:00">21:00</option>
              <option value="21:30:00">21:30</option>
              <option value="22:00:00">22:00</option>
              <option value="22:30:00">22:30</option>
              <option value="23:00:00">23:00</option>
              <option value="23:30:00">23:30</option>
          </select>
        </div>
        <div className="date_time">
          {/* <input type="date" placeholder={toDate}  name="dateInput"  onChange={handleToDateChange} min={tomorrow}  required/> */}
          <DatePicker selected={endDate} onChange={handleToDateChange} minDate={tomorrow}
  startDate={tomorrow}
  selectsEnd
  disabled={!tomorrow} />
          <select name="ddlpickTime" id="ddlpickTime" className="time-box" value={toTime} onChange={handleToTime}>
          <option value="00:00:00">00:00</option>
              <option value="00:30:00">00:30</option>
              <option value="01:00:00">01:00</option>
              <option value="01:30:00">01:30</option>
              <option value="02:00:00">02:00</option>
              <option value="02:30:00">02:30</option>
              <option value="03:00:00">03:00</option>
              <option value="03:30:00">03:30</option>
              <option value="04:00:00">04:00</option>
              <option value="04:30:00">04:30</option>
              <option value="05:00:00">05:00</option>
              <option value="05:30:00">05:30</option>
              <option value="06:00:00">06:00</option>
              <option value="06:30:00">06:30</option>
              <option value="07:00:00">07:00</option>
              <option value="07:30:00">07:30</option>
              <option value="08:00:00">08:00</option>
              <option value="08:30:00">08:30</option>
              <option value="09:00:00">09:00</option>
              <option value="09:30:00">09:30</option>
              <option value="10:00:00">10:00</option>
              <option value="10:30:00">10:30</option>
              <option value="11:00:00">11:00</option>
              <option value="11:30:00">11:30</option>
              <option value="12:00:00">12:00</option>
              <option value="12:30:00">12:30</option>
              <option value="13:00:00">13:00</option>
              <option value="13:30:00">13:30</option>
              <option value="14:00:00">14:00</option>
              <option value="14:30:00">14:30</option>
              <option value="15:00:00">15:00</option>
              <option value="15:30:00">15:30</option>
              <option value="16:00:00">16:00</option>
              <option value="16:30:00">16:30</option>
              <option value="17:00:00">17:00</option>
              <option value="17:30:00">17:30</option>
              <option value="18:00:00">18:00</option>
              <option value="18:30:00">18:30</option>
              <option value="19:00:00">19:00</option>
              <option value="19:30:00">19:30</option>
              <option value="20:00:00">20:00</option>
              <option value="20:30:00">20:30</option>
              <option value="21:00:00">21:00</option>
              <option value="21:30:00">21:30</option>
              <option value="22:00:00">22:00</option>
              <option value="22:30:00">22:30</option>
              <option value="23:00:00">23:00</option>
              <option value="23:30:00">23:30</option>
          </select>
        </div>
        <button onClick={getData}>Search</button>
      </div>
    </div>
  </div>
  <div className="container" >
    <div className="row">
      <div className="col-lg-3  col-md-3 col-sm-12 Listing_sidebar">
        <h3>Filters</h3>
        <div className="filter_block">
          <h4>Brand</h4>
          <ul>
            {maker.map((mak)=>{
              return(

            <li key={mak.maker_id}>
              <label>
                <input type="checkbox" name="" value={mak.maker_id}/>
                {mak.maker_name}
              </label>
            </li>
              )
            })}
            
          </ul>
          <span className="filter_more">More <i className="fas fa-arrow-right service-arrow"></i></span>
        </div>
        <div className="filter_block">
          <h4>Car type</h4>
          <ul>
            {category.map((cat)=>{
              return(
            <li key={cat.model_cat_id}>
              <label>
                <input type="checkbox" name="" value={cat.model_cat_id}/>
                {cat.model_cat_name}
              </label>
            </li>

              )
            })}
            
          </ul>
        </div>
      </div>
      <div className="col-lg-9  col-md-9 col-sm-12 Listing_block">
        <div className="sort-box">
          <div className="filter-phone">
            Filter
          </div>
          <div className="search_edit_edit">
            <i className="fas fa-search"></i>
          </div>
          
            <a  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            
          <button>Sort By <i className="fas fa-sort-amount-down"></i></button>
            </a>
            <div className="dropdown-menu" >
              <a className="dropdown-item" onClick={() => {setSortByLowToHigh(true); setSortByHighToLow(false)}}>Price: Low to High</a>
              <a className="dropdown-item" onClick={() => {setSortByHighToLow(true); setSortByLowToHigh(false)}}>Price: High to Low</a>
            </div>
         
        </div>
        <div className="listing_flex">
          {sortedProducts.map((car)=>{
            return(
           
          <div className="single_block">
            <div className="image_block">
              <img src={REACT_APP_SERVER_URL+car.Model_image}/>
            </div>
            <div className="detail_block">
              <h2 id={car.Model_Id}>{car.Maker} {car.Model_name}</h2>
              <div className="specification">
                <ul>
                  <li>
                    <img src={ac}/>
                    <span>Air Conditioner</span>
                  </li>
                  <li>
                    <img src={seat}/>
                    <span>Infotainment System</span>
                  </li>
                  <li>
                    <img src={seat}/>
                    <span>4 Seat</span>
                  </li>
                  <li>
                    <img src={manual}/>
                    <span>Manual</span>
                  </li>
                </ul>
              </div>
              <div className="rate_details">
                <div>
                  <span className="offer_p">{car.Currency_code} {car.Offer_Rate}</span>
                  <span className="orig_p">{car.Currency_code} {car.Main_Rate}</span>
                  <p><b>{car.Rate_per_day}</b> / Day</p>
                  </div>
                  <div>
                    <button>Pay Now</button>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
              
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </section>