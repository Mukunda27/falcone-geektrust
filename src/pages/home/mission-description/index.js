import React from "react";

import { VerFlexContainer } from "../../../styles/Utils";
import styled from "styled-components";
import stylesConfig from "../../../styles/config";
import Button from "../../../components/button";

const missionItems = [
  {
    id: "1",
    text: "We are in the planet of Lengaburu in the distant galaxy of Tara B. After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years",
  },
  {
    id: "2",
    text: "Queen Al Falcone is now in hiding. But if King Shan can find her before the years are up, she will be exiled for another 15 years",
  },
  {
    id: "3",
    text: "King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these planets",
  },
];

function MissionDescription() {
  const missionListItems = missionItems.map((item) => (
    <li key={item.id}> {item.text} </li>
  ));

  return (
    <Wrapper>
      <MissionTitle>
        Help King Shan to find the hiding place of Queen Al Falcone
      </MissionTitle>
      <span> Mission: </span>
      <ul>{missionListItems}</ul>
      <Button to="mission"> Start Mission </Button>
    </Wrapper>
  );
}

const MissionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: var(--font-weight-bold);
`;

const Wrapper = styled(VerFlexContainer)`
  flex-basis: 100%;
  color: var(--color-text);
  padding: 2rem;
  max-width: 650px;
  gap: 1rem;

  span {
    color: var(--color-secondary);
    font-size: 1rem;
    text-align: left;
  }

  ul {
    padding: 1rem 1.5rem;
    background-color: var(--color-blurred-background);
    border-radius: var(--border-radius);
    list-style: none;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 3px;
      background-color: var(--color-primary);
      height: 100%;
      left: 0;
      top: 0;
    }
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
  }

  @media screen and (min-width: ${stylesConfig.breakpoint.lg}px) {
    flex-basis: 50%;
    padding: 2rem 4rem;
    max-width: initial;
  }
`;

export default MissionDescription;
