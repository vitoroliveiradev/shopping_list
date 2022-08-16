import { useState } from "react";
import { LineChart } from "../../shared/LineChart/LineChart";
import { ShoppingList } from "../../shared/ShoppingList/ShoppingList";
import { AppContainer } from "../AppContainer/AppContainer";
import { AppHeader } from "../AppHeader/AppHeader";
import { Container, Wrapper } from "./App.styles";
import productsMock from "../../mocks/products.json";
import extractPercentage from "../../utils/extractPercentage";
import { useEffect } from "react";

export const App = () => {
  const colors = ["gray", "#000", "gainsboro", "#343333", "#302d2d"];
  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Pegando os produtos que estão com o checked = true;
    const newSelectedProducts = products.filter((product) => product.checked);

    setSelectedProducts(newSelectedProducts);
  }, [products]);

  useEffect(() => {
    const total = selectedProducts
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);

    setTotalPrice(total);
  }, [selectedProducts]);

  const handleToggle = (id) => {
    const newProducts =
      products &&
      products.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      );
    setProducts(newProducts);
  };

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList
              title="Produtos disponíveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList
              title="Sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
            />
          }
          right={
            <div>
              Estatísticas
              <LineChart
                color={colors[0]}
                title="Saudável"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("healthy")
                  ).length
                )}
              />
              <LineChart
                color={colors[1]}
                title="Não tão saudável"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("junk")
                  ).length
                )}
              />
              <LineChart
                color={colors[2]}
                title="Limpeza"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("cleaning")
                  ).length
                )}
              />
              <LineChart
                color={colors[3]}
                title="Outros"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("others")
                  ).length
                )}
              />
              <div style={{ marginTop: 12 }}>
                <h2 style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                  Previsão de gastos:
                </h2>
                <div style={{ fontSize: 24 }}>
                  {totalPrice.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
};
