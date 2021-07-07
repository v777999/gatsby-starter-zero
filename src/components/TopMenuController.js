import React from "react"
import styled from "styled-components"

const TopMenuController = () => {
  return (
    <Wrapper>
      <div id="topMenuController" className="barLines show">
        <div className="line _1 has_transition_1000_inout"></div>
        <div className="line _2 has_transition_1000_inout d100"></div>
        <div className="line _3 has_transition_1000_inout d200"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* #topMenuController {
    position: absolute;
    top: 20vw;
    left: 10vw;
    height: 10vw;
    width: 10vw;
    z-index: 3;
  } */

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

  .show .barLines:hover .line,
  .show.barLines:hover .line {
    -webkit-transition: -webkit-transform 800ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1e3ms cubic-bezier(0.19, 1, 0.22, 1);
    transition: transform 800ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1e3ms cubic-bezier(0.19, 1, 0.22, 1);
    transform: scale(0.6, 1);
  }

  .barLines:hover .line._2 {
    transition-delay: 50ms;
  }

  .barLines:hover .line._3 {
    transition-delay: 100ms;
  }

  #topMenuController .line {
    width: 57px;
    max-width: 70px;
		margin-right: 15px;
  }

  #topMenuController.hidden .line {
    transform: scale(0, 1);
  }

  .line._1 {
    margin-top: 0;
  }

`

export default TopMenuController
