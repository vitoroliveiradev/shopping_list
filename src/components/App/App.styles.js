import styled from "styled-components";
import bgBlack from "../../assets/bg-black.jpg";

export const Wrapper = styled.div`
   height: 100vh;
   background-color: #F8F5EC;
   background-image: url(${bgBlack});
   background-size: cover;
   background-position: center center;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Container = styled.div`
   width: 734px;
   height: 574px;
   background-color: #FFF;
   box-shadow: 0px 3px 10px rgba(0, 0, 0, .15);
   border-radius: 20px;
`
