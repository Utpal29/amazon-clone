import React from "react";
import styled from "styled-components";

function CartTotal({ getTotalPrice, getCount }) {
  return (
    <Container>
      <Subtotal>
        Subtotal ({getCount()} items): ${getTotalPrice()}{" "}
      </Subtotal>
      <CheckoutButton>Proceed to checkout</CheckoutButton>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  flex: 0.4;
  padding: 20px;
  background-color: white;
`;
const Subtotal = styled.h2`
  margin-bottom: 16px;
`;

const CheckoutButton = styled.button`
  background-color: #f0c14d;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  :hover {
    background-color: #ddd347;
  }
`;
