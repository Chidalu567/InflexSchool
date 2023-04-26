import React from "react";
import { Table } from "antd";
import styled from "styled-components";

// UI components
const Container = styled.main``;

/**
 * This component is to be rendered during tab switching. It contains the table where each student information would be displayed.
 * If the tab is switched the data is switched to display all student present in that specific class.
 */

export const DataTable = (param) => {
  // Table columns
  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  // Default Table Row
  return <Container>{`Table for year ${param.itemKey}`}</Container>;
};
