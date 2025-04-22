function Banner () {
  return (
    <>
        <section className="section-2">
        <article className="container-2">
        <div className="text-content">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
            </p>
            </div>
            <button className="shop-btn">Shop Now</button>
            <div className="top-info">
            <div className="info-text">
                <ul>
              <li>
                <h3>200+</h3>
                <p>International Brands</p>
              </li>
              <li className="middle-info">
                <h3>2,000+</h3>
                <p>High Quality Products</p>
              </li>
              <li>
                <h3>30,000+</h3>
                <p>Happy Clients</p>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div className="stars">
        <div className="small-star">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="big-star">
          <svg
            width="104"
            height="104"
            viewBox="0 0 104 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="stars-mobile">
        <div className="small-star-mobile">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 0C22.7469 11.8271 32.1728 21.2531 44 22C32.1728 22.7469 22.7469 32.1728 22 44C21.2531 32.1728 11.8271 22.7469 0 22C11.8271 21.2531 21.2531 11.8271 22 0Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="big-star-mobile">
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 0C39.2901 20.4286 55.5712 36.71 76 38C55.5712 39.2901 39.2901 55.5712 38 76C36.71 55.5712 20.4286 39.2901 0 38C20.4286 36.71 36.71 20.4286 38 0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Banner;