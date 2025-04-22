/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

function CustomerRatings() {
  useEffect(() => {
    const carousel = document.querySelector(".custumer-ratings") as HTMLElement;
    const leftArrow = document.querySelector(".left-arrow") as HTMLElement;
    const rightArrow = document.querySelector(".right-arrow") as HTMLElement;
  
    let activeIndex = 0;
    const items: HTMLElement[] = Array.from(carousel.children) as HTMLElement[];
  
    function updateBlurEffect(): void {
      if (window.innerWidth > 390) { // Aplica blur apenas em telas maiores
        requestAnimationFrame(() => {
          const items = carousel.children as HTMLCollectionOf<HTMLElement>;
          Array.from(items).forEach((item) => {
            // Aqui, fazemos a asserção de tipo para garantir que 'item' é um HTMLElement
            (item as HTMLElement).style.filter = "none";
          });
          if (items.length > 1) {
            (items[0] as HTMLElement).style.filter = "blur(3px)";
            (items[items.length - 1] as HTMLElement).style.filter = "blur(3px)";
          }
        });
      } else {
        Array.from(carousel.children).forEach((item) => {
          // Novamente, asserção de tipo
          (item as HTMLElement).style.filter = "none";
        });
      }
    }
    
  
    function updateVisibility(): void {
      if (window.innerWidth <= 390) {
        items.forEach((item, index) => {
          if (index === activeIndex) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      } else {
        updateBlurEffect();
      }
    }
  
    function moveRight(): void {
      activeIndex = (activeIndex + 1) % items.length;
      carousel.appendChild(carousel.firstElementChild as HTMLElement);
      updateVisibility();
      updateBlurEffect();
    }
  
    function moveLeft(): void {
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      carousel.insertBefore(carousel.lastElementChild as HTMLElement, carousel.firstElementChild);
      updateVisibility();
      updateBlurEffect();
    }
  
    rightArrow.addEventListener("click", moveRight);
    leftArrow.addEventListener("click", moveLeft);
  
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;
  
    carousel.addEventListener("touchstart", (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener("touchend", () => {
      isDragging = false;
    });
  
    carousel.addEventListener("touchmove", (e: TouchEvent) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });
  
    updateVisibility();
  });
  
    return (
        
        <>
        <section className="section-6">
        <article className="container-6">
          <article className="section-6-title">
            <h1>OUR HAPPY CUSTOMERS</h1>
            <div className="change-arrows">
            <div className="left-arrow">
              <img src="/assets/left-arrow.svg" alt="" />
            </div>
            <div className="right-arrow">
            <img src="/assets/right-arrow.svg" alt="" />
            </div>
          </div>
          </article>
          
          <article className="custumer-ratings ">
            <article className="customer-1">
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <div className="customer-name">
                <h3>John R.</h3>
                <img src="/assets/verify.svg" alt="" />
              </div>
              <div className="customer-avaliation">
                <p>
                  &quot;Choosing outfits that match my unique style was difficult until I found Shop.co. Their selection is incredible, offering choices for different preferences and events.&quot;                </p>
              </div>
            </article>
            <article className="customer-2 active">
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <div className="customer-name">
                <h3>Sarah M.</h3>
                <img src="/assets/verify.svg" alt="" />
              </div>
              <div className="customer-avaliation">
                <p>
                  &quot;I&apos;m blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I&apos;ve bought has exceeded my expectations.”
                </p>
              </div>
            </article>
            <article className="customer-3">
            <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <div className="customer-name">
                <h3>Alex K.</h3>
                <img src="/assets/verify.svg" alt="" />
              </div>
              <div className="customer-avaliation">
                <p>
                  &quot;Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </article>
            <article className="customer-4">
            <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <div className="customer-name">
                <h3>James L.</h3>
                <img src="/assets/verify.svg" alt="" />
              </div>
              <div className="customer-avaliation">
                <p>
                  &quot;As someone who&apos;s always on the lookout for unique fashion
                  pieces, I&apos;m thrilled to have stumbled upon Shop.co. The
                  selection of clothes is not only diverse but also on-point
                  with the latest trends.”
                </p>
              </div>
            </article>
            <article className="customer-5">
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <img src="/assets/full-star.svg" alt="" />
              <div className="customer-name">
                <h3>Mooen</h3>
                <img src="/assets/verify.svg" alt="" />
              </div>
              <div className="customer-avaliation">
                <p>
                  &quot;As someone who&apos;s always on the lookout for unique fashion
                  pieces, I&apos;m thrilled to have stumbled upon Shop.co. The
                  selection of clothes is not only diverse but also on-point
                  with the latest trends.”
                </p>
              </div>
            </article>
          </article>
        </article>
        </section>
        </>

    )
}

export default CustomerRatings;
