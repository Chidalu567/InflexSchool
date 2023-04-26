import React from "react";
import { Tabs } from "antd";
import { DataTable } from "@/components/ClassComponent/Table";
import styled from "styled-components";

// UI Components
const Container = styled.div``;

// Application Components
const HomePage = () => {
  const TabItem = [
    {
      key: "6",
      label: "Year 6",
      children: <DataTable itemKey={6} />,
    },
    {
      key: "7",
      label: "Year 7",
      children: <DataTable itemKey={7} />,
    },
  ];

  return (
    <Container>
      <Tabs
        items={TabItem}
        defaultActiveKey="6"
        tabBarStyle={{
          background: "#E5E1E1",
          margin: "30px",
          textAlign: "center",
          paddingLeft: "10px",
          fontFamily: "Inter",
          filter:
            "drop-shadow(-1px -1px 4px rgba(0, 0, 0, 0.25))drop-shadow(-3px -3px 7px rgba(255, 255, 255, 0.25))drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))drop-shadow(8px 8px 7px rgba(0, 0, 0, 0.4))",
        }}
      />
    </Container>
  );
};

export default HomePage; // Export the homepage
