import React, { useState, useEffect } from "react";

import styled from "styled-components/macro";

function SvgWrapper({ config }) {
  const [Svg, setSvg] = useState("");

  useEffect(() => {
    loadSvgDynamically();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function used to dynamically load SVG using dynamic imports
  const loadSvgDynamically = async () => {
    const svgPath = (await import(`./svg/${config.name}.svg`)).default;
    setSvg(svgPath);
  };

  let svgElement;
  if (Svg) {
    svgElement = <img src={Svg} alt="svg" />;
  }

  return <Wrapper {...config}> {svgElement} </Wrapper>;
}

const Wrapper = styled.div`
  width: ${(props) => props.width}%;
  height: auto;
  transform: ${(props) => props.translate};
  z-index: ${(props) => props.zIndex};
  position: relative;

  svg {
    width: 100%;
  }
`;

export default SvgWrapper;
