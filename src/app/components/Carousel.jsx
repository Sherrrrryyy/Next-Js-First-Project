import React from 'react'

const Carousel = () => {
  return (
    <div>
        <section id="image-carousel" className="splide" aria-label="Beautiful Images">
  <div className="splide__track">
		<ul className="splide__list">
			<li className="splide__slide">
				<img src="globe.svg" width={100} height={200} alt="" />
			</li>
			<li className="splide__slide">
				<img src="image02.jpg" alt="" />
			</li>
			<li className="splide__slide">
				<img src="image03.jpg" alt="" />
			</li>
		</ul>
  </div>
</section>
    </div>
  )
}

export default Carousel