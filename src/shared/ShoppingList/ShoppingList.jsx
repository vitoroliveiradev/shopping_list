import { CheckBox } from "../CheckBox/Checkbox"
import { Array, Title, Wrapper } from "./ShoppingList.styles"

export const ShoppingList = ({ title, products, onToggle }) => {

   return (
      <Wrapper>
         <Title>
            {title}:
         </Title>
         <Array>
            {products && products.map(product => (
               <CheckBox 
                  key={product.id}
                  value={product.checked} 
                  title={product.name}
                  onClick={() => onToggle(product.id)} 
               />
            ))}
         </Array>
      </Wrapper>
   )  
}

