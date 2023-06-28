import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { UnRestrict_Action, Restrict_Action } from "@/Redux/Reducers/Restrict";

// ---------------------------------------------- Header  UI components --------------------------
const PageNav = styled.nav`
  background-color: #342f2f;
  width: 100%;
  height: 111.7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ClassButton = styled.button`
  width: 197px;
  height: 43.1px;
  background: linear-gradient(
      0deg,
      rgba(0, 41, 255, 0.6),
      rgba(0, 41, 255, 0.6)
    ),
    #ffffff;
  border-radius: 10px;
  border: 1px solid transparent;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  color: white;
  margin-left: 50px;
  filter: drop-shadow(-1px -1px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(-3px -3px 7px rgba(255, 255, 255, 0.25))
    drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(8px 8px 7px rgba(0, 0, 0, 0.4));
`;

const PageTitle = styled.h1`
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(0, 41, 255, 0) 38.54%,
      rgba(0, 41, 255, 0.6) 68.75%,
      rgba(0, 41, 255, 0.513295) 92.19%
    ),
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Inter;
  line-height: 48px;
  font-style: normal;
  text-align: center;
  margin-left: 200px;
`;

const Date = styled.h5`
  color: white;
`;

const Settings = styled.div`
  margin-right: 50px;
  filter: drop-shadow(-1px -1px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(-3px -3px 7px rgba(255, 255, 255, 0.25))
    drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(8px 8px 7px rgba(0, 0, 0, 0.4));
`;

// ---------------------------------------Application component-------------------------------------

const PageHeader = () => {
  // redux dispatch for dispatching action
  const dispatch = useDispatch();

  // Available classes
  const ClassItems = [
    {
      label: "Year 6",
      key: "6",
    },
    {
      label: "Year 7",
      key: "7",
    },
  ];

  // Available Settings Items
  const SettingItems = [
    {
      label: "HOME",
      key: "1",
    },
    {
      label: "RESTRICT",
      key: "2",
    },
    {
      label: "DOWNLOAD RECORDS",
      key: "3",
    },
    {
      label: "REGISTRATION",
      key: "4",
    },
    {
      label: "UNRESTRICT",
      key: "5",
    },
    {
      label: "ABOUT",
      key: "6",
    },
  ];

  // Function to handle click event on header settings menu items
  const onClickMenuItems = ({ key }) => {
    if (key == 2) {
      dispatch(Restrict_Action("RESTRICTED"));
    }

    if (key == 5) {
      dispatch(UnRestrict_Action("ALLOWED"));
    }
  };

  return (
    <PageNav>
      {/* DropDown for classes */}
      <Dropdown menu={{ items: ClassItems }}>
        <ClassButton>CLASSES</ClassButton>
      </Dropdown>

      <PageTitle>INFLEX SCHOOL</PageTitle>

      <Date>18/04/2023</Date>

      {/* Dropdown for settings */}
      <Dropdown menu={{ items: SettingItems, onClick: onClickMenuItems }}>
        <Settings>
          <FontAwesomeIcon
            icon={faGear}
            style={{ color: "white", width: "53px", height: "52.66px" }}
          />
        </Settings>
      </Dropdown>
    </PageNav>
  );
};

export default PageHeader;
