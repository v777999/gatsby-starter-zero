import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Footer from "../components/footer"
import MenuController from "../components/menu-controller"
import ComplexTitle from "../components/ComplexTitle"

import "../assets/css/main.css"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Hero />
      {/* <h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<StaticImage
				src="../assets/images/gatsby-astronaut.png"
				width={300}
				quality={95}
				formats={["AUTO", "WEBP", "AVIF"]}
				alt="A Gatsby astronaut"
				style={{ marginBottom: `1.45rem` }}
			/>
			<p>
				<Link to="/page-2/">Go to page 2</Link> <br />
				<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
			</p> */}
			<ComplexTitle title="Main Title"/>
			<Footer />
    </>
  )
}

export default IndexPage
