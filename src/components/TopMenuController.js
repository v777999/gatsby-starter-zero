import React from "react"
import styled from "styled-components"

const TopMenuController = () => {
  return (
    <Wrapper>
      <div id="topMenuController" className="menuController show">
        <div class="line _1 has_transition_1000_inout"></div>
        <div class="line _2 has_transition_1000_inout d100"></div>
        <div class="line _3 has_transition_1000_inout d200"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  #topMenuController {
    position: absolute;
    top: 20vw;
    left: 10vw;
    height: 10vw;
    width: 10vw;
    z-index: 3;
  }

  .menuController {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }

  .line {
    width: 100%;
    height: 1px;
    background: #fff;
    margin-top: 5px;
  }

  .show .menuController:hover .line,
  .show.menuController:hover .line {
    -webkit-transition: -webkit-transform 800ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1e3ms cubic-bezier(0.19, 1, 0.22, 1);
    transition: transform 800ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1e3ms cubic-bezier(0.19, 1, 0.22, 1);
    transform: scale(0.6, 1);
  }

  .menuController:hover .line._2 {
    transition-delay: 50ms;
  }

  .menuController:hover .line._3 {
    transition-delay: 100ms;
  }

  #topMenuController .line {
    width: 3vw;
    max-width: 70px;
  }

  #topMenuController.hidden .line {
    transform: scale(0, 1);
  }

  .line._1 {
    margin-top: 0;
  }

  .show .d100 {
    transition-delay: 100ms;
  }
  .show .d200 {
    transition-delay: 200ms;
  }
  .has_transition_1000_inout {
    -webkit-transition: -webkit-transform 1e3ms
        cubic-bezier(0.575, 0.005, 0.285, 1.005),
      opacity 1e3ms cubic-bezier(0.575, 0.005, 0.285, 1.005);
    transition: transform 1e3ms cubic-bezier(0.575, 0.005, 0.285, 1.005),
      opacity 1e3ms cubic-bezier(0.575, 0.005, 0.285, 1.005);
  }
`

export default TopMenuController
