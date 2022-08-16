import { Wrapper } from "./AppContainer.styles";

export const AppContainer = ({ left, middle, right }) => {
   return (
      <Wrapper>
         <div>{left}</div>
         <div>{middle}</div>
         <div>{right}</div>
      </Wrapper>
   )
}