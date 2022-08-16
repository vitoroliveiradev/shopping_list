import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Title = styled.h2`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  text-transform: lowercase;
  height: 32px;
`;

export const Array = styled.div`
  height: 424px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 20px;
    border: 3px solid #000;
  }
`;
