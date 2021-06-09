import { useQuery } from "@apollo/client";
import ggl from "graphql-tag";
import styled from "styled-components";
import Product from "./Product";

const ALL_PRODUCTS_QUERY = ggl`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProductListStyles>
        {data.allProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ProductListStyles>
    </div>
  );
}

/*
clip-path: polygon(22% 0%, 100% 0, 104% 95%, 84% 92%, 54% 90%, 26% 90%, 0 94%, 0 38%, 0% 0%);
*/
