import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import Hero from "../components/hero"
import Footer from "../components/footer"
import MenuController from "../components/MenuController"
import ComplexTitle from "../components/ComplexTitle"
import { graphql } from 'gatsby'
import SbEditable from 'storyblok-react'

import "../assets/css/main.css"
import CustomCursor from "../components/CustomCursor"
// import "../assets/css/style.css"

const IndexPage = ({ data }) => {
	let story = data.storyblokEntry
	story.content = JSON.parse(story.content)
	
	const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
	})
	
	return (
	<Layout pageInfo={{ pageName: "index" }}>
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
		<ComplexTitle title="Main Title" />
		<Footer />
	</Layout >
	)
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`