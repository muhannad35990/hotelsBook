import React from "react";
import hotel1 from "../../img/hotel-1.jpg";
import hotel2 from "../../img/hotel-2.jpg";
import hotel3 from "../../img/hotel-3.jpg";
import user1 from "../../img/user-1.jpg";
import user2 from "../../img/user-2.jpg";
import user3 from "../../img/user-3.jpg";
import user4 from "../../img/user-4.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
function MainContent() {
  return (
    <main className="mainContent">
      <div className="gallery">
        <img src={hotel1} alt="" className="gallery__img" />
        <img src={hotel2} alt="" className="gallery__img" />
        <img src={hotel3} alt="" className="gallery__img" />
      </div>
      {/* banner */}
      <div className="banner">
        <h1 className="banner__title">hotel las palmas</h1>
        <div className="banner__rating">
          <LocationOnIcon className="banner__location__icon" />
          <a href="#" className="banner__location">
            Albufeira, Portugal
          </a>
          <div className="banner__votes">
            <h1 className="banner__votes__number">8.6</h1>
            <span className="banner__votes__total">429 votes</span>
          </div>
        </div>
      </div>
      {/* the main content   */}
      <div className="mainpageContent">
        <div className="mainpageContent--row">
          <div className="mainpageContent__left">
            <p className="mainpageContent__left__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium velit fugit, placeat debitis eaque ducimus laboriosam
              perspiciatis iste doloremque quam, aspernatur quas accusamus quia
              illum illo doloribus et eum reprehenderit? Lorem, ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <p className="mainpageContent__left__paragraph">
              Nemo sunt ratione eius aut nostrum unde magnam accusamus corrupti,
              facilis deserunt pariatur quae libero maxime? Cum minus
              accusantium alias sed fugiat.
            </p>
            <div className="list">
              <ul className="list__items">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>
            </div>

            {/* the user images list */}
            <div className="recommend">
              <p>Lucy and 3 other friends recommend this hotel.</p>
              <div className="recommend__List">
                <img src={user1} alt="" className="recommend__List__img" />
                <img src={user2} alt="" className="recommend__List__img" />
                <img src={user3} alt="" className="recommend__List__img" />
                <img src={user4} alt="" className="recommend__List__img" />
              </div>
            </div>
          </div>
          <div className="mainpageContent__right">
            {/* first review */}
            <div className="review">
              <p className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </p>
              <div className="review__ratingRow">
                <img src={user1} alt="user1" className="review__img" />
                <div>
                  <h3 className="review__name">Nick smith</h3>
                  <h5 className="review__date">Feb 23rd,2021</h5>
                </div>
                <h1 className="review__rate">7.8</h1>
              </div>
            </div>
            {/* second review */}
            <div className="review">
              <p className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </p>
              <div className="review__ratingRow">
                <img src={user2} alt="user2" className="review__img" />
                <div>
                  <h3 className="review__name">Jenny esber</h3>
                  <h5 className="review__date">Jan 23rd,2021</h5>
                </div>
                <h1 className="review__rate">9.2</h1>
              </div>
            </div>
            {/* show all button */}
            <a href="#" className="showallbtn">
              Show all <span className="btnArrow">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="footer">
          <p className="footer__text">
            good news! we have 4 free rooms for your selected dates!
          </p>
          <a href="#" className="bookbtn">
            <span className="bookbtn--visible">Book now</span>
            <span className="bookbtn--invisible">Only 4rooms left</span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
