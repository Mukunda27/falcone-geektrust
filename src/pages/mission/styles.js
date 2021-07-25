import styled, { keyframes } from "styled-components";
import { HorFlexContainer, VerFlexContainer } from "../../styles/Utils";
import { ReactComponent as Ufo } from "../../assets/ufo-hover.svg";

const FlexIndicator = styled(VerFlexContainer)`
  flex-grow: 1;
  width: 100%;
  place-items: center;
`;

const float = keyframes`
  from {
    transform: translate(-250%, 0);
  }

  to {
    transform: translate(250%, 0);
  }
`;

export const MissionTitle = styled.h1`
  font-size: 1.25rem;
  margin: 2rem;
  color: var(--color-text);
  font-weight: var(--font-weight-bold);
`;

export const ButtonGroup = styled(HorFlexContainer)`
  padding: 2rem;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  color: var(--color-text);
  position: relative;
  border-radius: calc(var(--border-radius) / 2);
  padding: 1rem 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    border: none;
    outline: none;
  }

  &::after {
    background-color: var(--color-secondary);
    transition: transform 0.25s ease-in;
    content: "";
    position: absolute;
    border-radius: calc(var(--border-radius) / 2);

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  &:hover::after {
    transform: scale(1.02);
  }
`;

export const LoadingIndicator = styled(FlexIndicator)`
  svg {
    width: 10%;
    height: auto;
    animation: ${float} 2s linear infinite alternate;
  }
`;

export const MessageIndicator = styled(FlexIndicator)`
  h2 {
    color: var(--color-text);
    font-size: 1.25rem;
    font-weight: var(--font-weight-bold);
  }
`;

export function createLoadingIndicator() {
  const loader = (
    <LoadingIndicator>
      <Ufo />
    </LoadingIndicator>
  );

  return loader;
}

export function createErrorIndicator() {
  const error = (
    <MessageIndicator>
      <h2> Oops !! Something is wrong. Please try after some time </h2>
    </MessageIndicator>
  );

  return error;
}

export function createFailureIndicator() {
  const failure = (
    <MessageIndicator>
      <h2> Failed Mission 😔. You were not able to find Queen Al Falcone </h2>
    </MessageIndicator>
  );

  return failure;
}

export function createSuccessIndicator() {
  const success = (
    <MessageIndicator>
      <h2>
        Success ✨. You were successful in finding the hiding place of Queen Al
        Falcone
      </h2>
    </MessageIndicator>
  );

  return success;
}
