import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Animate text
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 1,
    duration: 2,
    scale: 0,
    ease: "back",
  })
}

export const containerOpen = elem => {
	gsap.to(elem, {
		duration: 1,
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		ease: "power3.out"
  })
}

export const heroOpen = elem => {
	gsap.to(elem, {
		duration: 2,
		delay: 1,
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		ease: "power3.out"
  })
}