import React from "react"
import styled from "styled-components"
import TopMenuController from "./TopMenuController"
import { StaticImage } from "gatsby-plugin-image"
//Hotel_Biography_Logo-4stars.png

const MenuBar = () => {
  return (
    <Wrapper>
      <div id="menuBar">
				<div className="mainContainer flexed full_height">
					
          <div className="menuController isButton show"
            id="topMenuController"
            data-disabled="true"
            data-hover-blend="overlay"
            data-hover-color="#FFFFF4"
          >
            <TopMenuController />
            {/* <div class="lines" id="topLines">
              <div class="line _1 has_transition_1000_inout"></div>
              <div class="line _2 d100 has_transition_1000_inout"></div>
            </div> */}
            <div>
              <div>
                <span className="label cWhite">МЕНЮ</span>
              </div>
            </div>
					</div>
					
          <StaticImage
            src="../assets/images/Hotel_Biography_Logo-4stars.png"
            alt="portfolio"
            placeholder="blurred"
            className="lego"
					/>
					
					<TopMenuController />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .lego {
    z-index: 3;
  }
  #menuBar {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 35px;
    /* background: #fff; */
  }
  .mainContainer {
    height: 100%;
    width: calc(100% - 5vw);
    margin: auto;
  }
  .isButton:hover .label {
    letter-spacing: 6px;
  }
  .flexed {
    display: flex;
    justify-content: space-between;
  }
  .full_height {
    height: 100%;
    /* width: auto; */
  }
  .menuController {
    display: flex;
    align-items: center;
    width: 240px;
    margin-right: 15px;
    cursor: pointer;
  }
  .isButton {
    cursor: pointer;
  }
  /* .lines {
    margin-right: 15px;
  }
  .line {
    width: 57px;
    height: 1px;
    background: #fffff4;
  }
  .line._2 {
    margin-top: 8px;
  } */
  .d100 {
    transition-delay: 100ms !important;
  }
  .has_transition_1000_inout {
    -webkit-transition: -webkit-transform 1000ms
        cubic-bezier(0.575, 0.005, 0.285, 1.005),
      opacity 1000ms cubic-bezier(0.575, 0.005, 0.285, 1.005);
    transition: transform 1000ms cubic-bezier(0.575, 0.005, 0.285, 1.005),
      opacity 1000ms cubic-bezier(0.575, 0.005, 0.285, 1.005);
  }
  .mask_left {
    transform: translateX(50%);
    display: block;
  }
  .no_overflow {
    overflow: hidden;
  }
  .t_container {
    transform: translateX(0);
    height: 100%;
  }
  .cWhite {
    color: #fffff4 !important;
  }
  .label {
    /* font-family: Geometria;
    font-size: 13px; */
    letter-spacing: 3px;
    font-weight: 400;
    -webkit-transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .has_transition_1500 {
    -webkit-transition: -webkit-transform 1500ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1000ms cubic-bezier(0.19, 1, 0.22, 1);
    transition: transform 1500ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`
export default MenuBar
