import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { textIntro, containerOpen, heroOpen } from "./animate"
import "../assets/css/main.css"
import MenuBar from "./MenuBar"
import { useRef, useEffect } from "react"
import HeroImg from "../assets/images/Hero-Slider-1.jpg"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  //using useRef hook to access the textIntro DOM
  let intro = useRef(null)
	let container = useRef(null)
	let heroOpenImg = useRef(null)

  useEffect(() => {
    textIntro(intro)
  }, [])

  useEffect(() => {
    containerOpen(container)
	}, [])

	useEffect(() => {
		heroOpen(heroOpenImg)
	})
	

  return (
    <Wrapper>
			<div className="container" ref={le => (container = le)}>
				<img src={HeroImg} className="img heroOpenImg" ref={le => (heroOpenImg = le)} alt="Hotel Biography photo"></img>
        {/* <StaticImage
          src="../assets/images/Hero-Slider-1.jpg"
          layout="fullWidth"
          placeholder="none"
          className="img"
          alt="color palette"
          ref={el => (container = el)}
        /> */}
      </div>
      <MenuBar />
      <div className="info">
        <article>
          <h3 className="intro" ref={el => (intro = el)}>
            If you can dream it, we can create it
          </h3>
          <h1>let your home be inique and stylish</h1>
          {/* <a href="/projects">Projects</a> */}
          <Link to="/projects" className="target">
            Projects
          </Link>
        </article>
        <div className="flex justify-between mb-5">
          <div>
            <a href="about" className="uppercase notTarget">
              about
            </a>
          </div>
          <div>
            <a href="contact" className="uppercase notTarget">
              contact us
            </a>
          </div>
          <div>
            <a href="contact" className="uppercase notTarget">
              portfolio
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  // margin-top: -5rem;
  position: relative;
  /* body:hover .container {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	} */

  .container {
    height: 100vh;
    background: lightblue;
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: clip-path 0.3s;
  }
  .img {
    height: 100vh;
    width: 100%;
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
		object-fit: cover;
    opacity: 1;
		z-index: 999;
  }
  .sidebar {
    opacity: 0;
    transition: all 0.3s linear;
    transform: translateX(-100%);
  }
  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  .animate_in_left {
    transform: translateX(-100%);
    transition: 1200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-property: transform;
    overflow: hidden;
    position: relative;
  }
  .animate_in_left.animated {
    transform: translateX(0);
  }
  // }  .line {
  //     width: 3vw;
  //     max-width: 70px;
  //     height: 1px;
  //     background-color: #fff;
  //     margin: 6px 0;
  //     transition: 0.4s;
  //   }
  //   ._1 {
  //     margin-top: 0;
  //   }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    z-index: 1;
  }
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
      font-family: "Caveat", cursive;
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    /* a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    } */
    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
`

export default Hero
