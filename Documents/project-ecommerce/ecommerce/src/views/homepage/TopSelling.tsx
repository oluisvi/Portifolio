/* eslint-disable @next/next/no-img-element */

function TopSelling
(){
    return (
        <div>
            <section className="section-4">
        <div className="container-4">
          <div className="top-selling">
            <div className="title-top-selling">
              <h2>TOP SELLING</h2>
            </div>
            <div className="products">
              <article className="product-1">
                <div className="clothes-card">
                  <img
                    src="./assets/top-selling-1.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>Vertical Striped Shirt</p>
                </div>
                <div className="product-rating">
                <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <span className="rating-score">5/5</span>
                </div>
                <div className="product-sale">
                  <div className="product-price">
                    <p>$212</p>
                  </div>
                  <div className="product-discount">$232</div>
                  <div className="discount-tag">-20%</div>
                </div>
              </article>
              <div className="product-2">
                <div className="clothes-card">
                  <img
                    src="./assets/top-selling-2.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>Courage Graphic T-shirt</p>
                </div>
                <div className="product-rating">
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <span className="rating-score">4/5</span>
                </div>
                <div className="product-sale">
                  <div className="product-price">
                    <p>$240</p>
                  </div>
                </div>
              </div>
              <article className="product-3-top">
                <div className="clothes-card-top">
                  <img
                    src="./assets/top-selling-3.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>Loose Fit Bermuda Shorts</p>
                </div>
                <div className="product-rating">
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <span className="rating-score">3/5</span>
                </div>
                <div className="product-price">
                  <p>$80</p>
                </div>
              </article>
              <div className="product-4-top">
                <div className="clothes-card-top">
                  <img
                    src="./assets/top-selling-4.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>Faded Skinny Jeans</p>
                </div>
                <div className="product-rating">
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/half-star.svg" alt="" />
                  <span className="rating-score">4.5/5</span>
                </div>
                <div className="product-price">
                  <p>$210</p>
                </div>
              </div>
            </div>
            <button className="view-all-btn">View All</button>
          </div>
        </div>
        </section>
        </div>
    )
}

export default TopSelling;