import React from "react";
import styled from "styled-components";
import { Modal, Button } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Restrict_Action } from "@/Redux/Reducers/Restrict";

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
  margin-left: 40px;
`;

const ModalText = styled.h4``;
const ModalContainer = styled.div`
  background: var(
    --created-blue,
    linear-gradient(0deg, #0029ff 0%, #0029ff 100%),
    #fff
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-size: 20px;
  font-family: Inter;
  word-spacing: 8em;
  padding: 20px;
`;

const ModalIcon = styled.div``;
const RestrictModalText = styled.h4``;
const RestrictModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Application component
const PageFooter = () => {
  // Check redux state if the action is restricted
  const { freedom } = useSelector((state) => state.restrict);
  console.log(`${freedom} displayed from footer`);

  const dispatch = useDispatch();

  // state to handle modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStaffgrantOpen, setIsStaffgrantOpen] = useState(false);

  // Function to handle signout action
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showGrantModal = () => {
    setIsModalOpen(false);
    setIsStaffgrantOpen(true);
  };

  const closeStaffGrantModal = () => {
    dispatch(Restrict_Action("ALLOWED"));
    setIsStaffgrantOpen(false);
    setIsModalOpen(true);
  };
  // Function to handle save action
  return (
    <Footer>
      <Copyright>COPYRIGHT © 2023</Copyright>
      <div>
        <Signout onClick={() => showModal()}>SIGNOUT</Signout>
        <Save>SAVE</Save>
      </div>
      {freedom === "ALLOWED" ? (
        <Modal
          title="Signout"
          open={isModalOpen}
          centered={true}
          onCancel={() => closeModal()}
          onOk={() => closeModal()}
          width={497}
        >
          <ModalContainer>
            <ModalText>Name: Fortune</ModalText>
            <ModalText>Class: year12</ModalText>
            <ModalText>SignedIn: -------</ModalText>
            <ModalText>SignedOut: -------</ModalText>
          </ModalContainer>
        </Modal>
      ) : isStaffgrantOpen === false ? (
        <Modal
          title="Signout Restrict"
          open={isModalOpen}
          centered={true}
          onCancel={() => closeModal()}
          onOk={() => closeModal()}
          width={497}
          footer={[
            <Button key="grant access" onClick={() => showGrantModal()}>
              STAFF GRANT
            </Button>,
          ]}
        >
          <RestrictModalContainer>
            <ModalIcon>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                style={{ paddingLeft: "206px" }}
              />
            </ModalIcon>
            <RestrictModalText>
              Admin has restricted Signout access, please see staff for access.
            </RestrictModalText>
          </RestrictModalContainer>
        </Modal>
      ) : (
        <Modal
          title="StaffGrant"
          open={isStaffgrantOpen}
          centered={true}
          onCancel={() => closeStaffGrantModal()}
          onOk={() => closeStaffGrantModal()}
          width={497}
        >
          <RestrictModalContainer>
            <ModalIcon>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                style={{ paddingLeft: "206px" }}
              />
            </ModalIcon>
            <RestrictModalText>
              Please, place your fingerprint to grant access to the student.
            </RestrictModalText>
            <RestrictModalText>Scan your Fingerprint</RestrictModalText>
          </RestrictModalContainer>
        </Modal>
      )}
    </Footer>
  );
};

export default PageFooter;
