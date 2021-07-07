import React from "react"
import styled from "styled-components"

const MyHeader = () => {
  return (
    <div id="header" className="blue show">
      <div id="headerBack" className="has_transition_1500 mobileOnly"></div>
      <a href="/" className="urlManager">
        
      </a>
      <div id="barMenuController" className="menuController halfMargin">
        <div className="transition_all line _1 has_transition_1000_inout no_width color_transform"></div>
        <div className="transition_all line _2 has_transition_1000_inout d100 no_width color_transform"></div>
        <div className="transition_all line _3 no_width has_transition_1000_inout d200 color_transform"></div>
      </div>
      <div id="bookNowButton" className="button halfMargin">
        <div
          id="bookButtonBack"
          className="mobileOnly no_height has_transition_1500 bGrey"
        ></div>
        <div className="no_overflow">
          <span className="transition_all block label top_hidden has_transition_1500 color_transform">
            PRENOTA ORA
          </span>
        </div>
      </div>
      {/* <div id="headerLangs" className="mobileOnly">
        <div className="langsContainer top_low has_transition_2000">
          <ul className="langs">
            <li className="lang-item lang-item-3 lang-item-it current-lang lang-item-first">
              <a
                lang="it-IT"
                hreflang="it-IT"
                href="https://www.sanmontano.com/"
              >
                Ita
              </a>
            </li>
            <li className="lang-item lang-item-6 lang-item-en">
              <a
                lang="en-GB"
                hreflang="en-GB"
                href="https://www.sanmontano.com/en/san-montano-resort-spa-official/"
              >
                Eng
              </a>
            </li>
          </ul>
        </div>
        <a className="phone no_overflow" href="tel:+39081994033"></a>
      </div> */}
    </div>
  )
}

export default MyHeader