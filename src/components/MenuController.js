import React from "react"
import styled from "styled-components"

const MenuController = () => {
  return (
    <Wrapper>
      <div>
        <div className="line _1 has_transition_1000_inout"></div>
        <div className="line _2 has_transition_1000_inout d100"></div>
        <div className="line _3 has_transition_1000_inout d200"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: absolute;
top: 20vw;
left: 10vw;
height: 10vw;
width: 10vw;`

export default MenuController
