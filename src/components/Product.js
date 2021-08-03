import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Title>qereqrg</Title>
      <Price>123</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src={`https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg`} />

      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  max-height: 400px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;

const Rating = styled.div``;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a77734;
  border-radius: 2px;
`;
const ActionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin--top: 12px;
`;
