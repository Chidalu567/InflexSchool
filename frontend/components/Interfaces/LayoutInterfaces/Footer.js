import React from "react";
import styled from "styled-components";

const PageFooter = () => {
  return (
    <Footer>
      <Copyright>COPYRIGHT © 2023</Copyright>
      <Signout>SIGNOUT</Signout>
      <Save>SAVE</Save>
    </Footer>
  );
};

export default PageFooter;

// Footer UI components
const Footer = styled.div`
  background-color: #342f2f;
  height: 111.7px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  color: white;
  line-height: 30px;
  margin-left: 40px;
`;
const Signout = styled.button`
  width: 197px;
  height: 43.1px;
  background-color: #00dc4b;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    -2px -2px 8px rgba(255, 255, 255, 0.25), 2px 2px 2px rgba(0, 0, 0, 0.25),
    4px 4px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;
  border-radius: 10px;
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 30px;
  color: white;
  margin-right: -1200px;
`;

const Save = styled.button`
  width: 197px;
  height: 43.1px;
  background: linear-gradient(
      0deg,
      rgba(0, 41, 255, 0.5),
      rgba(0, 41, 255, 0.5)
    ),
    #ffffff;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    -2px -2px 8px rgba(255, 255, 255, 0.25), 2px 2px 2px rgba(0, 0, 0, 0.25),
    4px 4px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;
  border-radius: 10px;
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 30px;
  color: white;
  margin-right: 40px;
`;
