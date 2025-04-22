/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function NewArrivals(){

  return(
 
        <>
        <section className="section-3">
        <article className="container-3">
          <article className="new-arrivals">
            <div className="title-new-arrivals">
              <h2>NEW ARRIVALS</h2>
            </div>
            <article className="products new">
              <Link href="/products">
              <article className="product-1">
                <div className="clothes-card">
                  <img
                    src="./assets/one-life-shirt-front.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>One-Life Graphic T-shirt </p>
                </div>
                <div className="product-rating">
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/half-star.svg" alt="" />
                  <span className="rating-score">4/5</span>
                </div>
                <div className="product-sale">
                  <div className="product-price">
                    <p>$220</p>
                  </div>
                  <div className="product-discount">$260</div>
                  <div className="discount-tag">-40%</div>
                </div>
              </article>
              </Link>
            
              <article className="product-2">
                <div className="clothes-card">
                  <img
                    src="./assets/new-arrivals-2.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>Skinny Fit Jeans</p>
                </div>
                <div className="product-rating">
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/half-star.svg" alt="" />
                  <span className="rating-score">3.5/5</span>
                </div>
                <div className="product-sale">
                  <div className="product-price">
                    <p>$240</p>
                  </div>
                  <div className="product-discount">$260</div>
                  <div className="discount-tag">-20%</div>
                </div>
              </article>
              <article className="product-3">
                <div className="clothes-card">
                  <img
                    src="./assets/new-arrivals-3.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>Checkered Shirt</p>
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
                  <p>$180</p>
                </div>
              </article>
              <article className="product-4">
                <div className="clothes-card">
                  <img
                    src="./assets/new-arrivals-4.png"
                    alt="t-shirt"
                    className="clothes-img"
                  />
                </div>
                <div className="product-name">
                  <p>Sleeve Striped T-shirt</p>
                </div>
                <div className="product-rating">
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/full-star.svg" alt="" />
                  <img src="/assets/half-star.svg" alt="" />
                  <span className="rating-score">4.5/5</span>
                </div>
                <div className="product-sale">
                  <div className="product-price">
                    <p>$130</p>
                  </div>
                  <div className="product-discount">$160</div>
                  <div className="discount-tag">-20%</div>
                </div>
              </article>
            </article>
            <button className="view-all-btn">View All</button>
          </article>
        </article>
        </section>

        </>

    );
}

export default NewArrivals;