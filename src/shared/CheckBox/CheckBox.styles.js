import styled from "styled-components";

export const Wrapper = styled.div`
   height: 32px;
   display: flex;
   align-items: center;
   cursor: pointer;
   user-select: none;
`

export const Indicator = styled.div`
   height: 14px;
   width: 14px;
   border-radius: 50%;
   ${props => props.value ? "background-color: #000;" : ""};
   border: 2px solid #000;
   margin-right: 8px;
   cursor: pointer;
`