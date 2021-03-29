import React, { useEffect, useRef, useState } from "react"
import { IoArrowForward, IoArrowBack } from "react-icons/io5"
import { Link } from 'gatsby'

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }
    timeout.current = setTimeout(nextSlide, 10000)

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current >= length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current <= 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    // <div className="container">
    <section className="hero-section">
      <div className="hero-wrapper">
        {slides.map((slide, index) => {
          return (
            <div className="hero-slide" key={index}>
              {index === current && (
                <div className="hero-slider">
                       <h1 className="slide-title">{slide.title}</h1>
               
                    <Link className="slide-button" to={slide.path}><h2>{slide.label}</h2></Link>

                  <img
                    className="banner-img"
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
              )}
            </div>
          )
        })}
        <div className="banner-buttons">
          <IoArrowBack onClick={prevSlide} />
          <IoArrowForward onClick={nextSlide} />
        </div>
      </div>
    </section>
    // </div>
  )
}

export default Banner
