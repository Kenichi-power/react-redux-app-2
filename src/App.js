import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
  flex-direction: column;
`;
const Row = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? "center" : "start")};
  margin: 2rem 0;
`;
const WrapButton = styled.button`
  box-shadow: 5px 7px 10px 4px #ececec;
  border: 1px;
  border-radius: 15px;
  width: 100px;
  height: 50px;
`;

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };

  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id });
  };

  return (
    <Wrapper>
      <Row style={{ fontSize: "3rem" }}>Balance: {cash}</Row>

      <Row>
        <WrapButton onClick={() => addCash(Number(prompt()))}>Add</WrapButton>
        <WrapButton onClick={() => getCash(Number(prompt()))}>
          Delete
        </WrapButton>
      </Row>
      <Row>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div>No customers</div>
        )}
      </Row>
      <Row>
        <WrapButton onClick={() => addCustomer(prompt())}>
          Add customer
        </WrapButton>
        <WrapButton onClick={() => getCash(Number(prompt()))}>
          Delete customer
        </WrapButton>
      </Row>
    </Wrapper>
  );
};

export default App;
