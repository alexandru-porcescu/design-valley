import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import { postEmail } from "../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1001px) {
    align-items: center;
  }

  > h2 {
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.primary[900]};
  }
  > p {
    margin: 0;
    margin-bottom: 1rem;
    color: #666;
    color: ${props => props.theme.colors.primary[500]};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 400px;

  & > button {
    background-color: ${props => props.theme.colors.primary[500]};
  }

  @media (max-width: 1001px) {
    width: 100%;
  }
`;

const Input = styled.input`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  font-family: inherit;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary[500]};
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none !important;
  background-color: #fff;
  border: 1px solid #fff;
  transition: border-color 0.35s, color 0.35s, background-color 0.35s;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 12px 21px;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary[500]};
  }
`;

const CallToAction = ({}) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const subscibeUser = e => {
    e.preventDefault();
    postEmail(email)
      .then(res => setSuccess(true))
      .catch(err => setError(true));
  };

  return (
    <Container>
      <h2>Keep me in the loop</h2>
      <p>All the juice news about DesignValley in your inbox! No spam.</p>
      <Form onSubmit={subscibeUser}>
        <Input
          onChange={event => setEmail(event.target.value)}
          value={email}
          placeholder="jim@design.valley"
          type="email"
        />
        <Button
          variant="primary"
          style={{
            right: "8px",
            top: "8px",
            padding: "11px 25px",
            fontSize: "12px",
            margin: 0,
            height: "auto",
            position: "absolute",
            color: "#fff"
          }}
          onClick={subscibeUser}
        >
          Subscribe
        </Button>
      </Form>
      {success && (
        <p style={{ marginTop: "0.5rem" }}>
          👍 You've subscribed successfully!
        </p>
      )}
      {error && (
        <p style={{ marginTop: "0.5rem" }}>
          👎 Something went wrong! Please try again in a while.
        </p>
      )}
    </Container>
  );
};

export default CallToAction;
