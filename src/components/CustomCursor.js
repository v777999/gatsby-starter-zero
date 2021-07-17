import React, { useState, useEffect } from "react"
import styled from "styled-components"
import classNames from "classnames"

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const CustomCursor = () => {
	// if (typeof navigator !== 'undefined' && isMobile()) return null;
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a.target").forEach(el => {
      el.addEventListener("mouseover", () => setHidden(true))
      el.addEventListener("mouseout", () => setHidden(false))
		})
		document.querySelectorAll("a.notTarget").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
    document.querySelectorAll("button").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const cursorClasses = classNames("cursor", {
    "cursor--expand": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  })

  return (
    <Wrapper>
      <div
        className={cursorClasses}
        style={{
          left: `+${position.x - 7.5}px`,
          top: `+${position.y - 7.5}px`,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .cursor {
    width: 15px;
    height: 15px;
    background: rgb(198, 212, 196);
    //border: 1px solid white;
    border-radius: 50%;
    position: fixed;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: normal;
  }
  .cursor--hidden {
    opacity: 0;
  }
  .cursor--clicked {
    transform: translate(50%, 50%) scale(1.5);
    background-color: #fefefe;
  }
  .cursor--link-hovered {
    transform: scale(4);
    /* background-color: #fefefe; */
    mix-blend-mode: difference;
  }
  @keyframes cursorAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(3);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  .cursor--expand {
    animation: cursorAnimation 0.5s forwards;
    border: 1px solid red;
  }
`

export default CustomCursor
