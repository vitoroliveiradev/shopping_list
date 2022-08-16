import { Indicator, Wrapper } from "./CheckBox.styles"

export const CheckBox = ({ value, title, onClick }) => {
   return (
      <Wrapper onClick={onClick}>
         <Indicator value={value} />
         {title}
      </Wrapper>
   )
}