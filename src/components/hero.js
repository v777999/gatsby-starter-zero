import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import TopMenuController from "./TopMenuController"
import MenuBar from "./MenuBar"

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/Hero-Slider-1.jpg"
        layout="fullWidth"
        placeholder="BLURRED"
        className="img"
        alt="color palette"
      />
      <MenuBar />
      <div className="info">
        <article>
          <h3 className="animate_in_left animated">
            If you can dream it, we can create it
          </h3>
					<h1>let your home be inique and stylish</h1>
					{/* <a href="/projects">Projects</a> */}
          <Link to="/projects" className="target">Projects</Link>
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
            <a href="portfolio" className="uppercase notTarget">
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
  .img {
    height: 100%;
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
