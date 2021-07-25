import React from "react";

import { svgConfig } from "./graphicsConfig";

import styled from "styled-components";
import stylesConfig from "../../../styles/config";
import SvgWrapper from "./SvgWrapper";

const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: ${stylesConfig.breakpoint.lg}px) {
    flex-basis: auto;
    display: block;
    height: 100%;
    width: 50%;
    overflow: hidden;
  }
`;

function MissionGraphics() {
  const svgElements = svgConfig.map((item) => (
    <SvgWrapper key={item.id} config={item} />
  ));

  return <Wrapper> {svgElements} </Wrapper>;
}

export default MissionGraphics;
