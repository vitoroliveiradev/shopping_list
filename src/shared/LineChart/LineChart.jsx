import { ProgressBar, Wrapper } from "./LineChart.styles"

export const LineChart = ({ title, color, percentage }) => {
   return (
      <Wrapper>
         <span>
            {title}
         </span>
         <ProgressBar 
            color={color}
            percentage={percentage} 
         />
      </Wrapper>
   )
}