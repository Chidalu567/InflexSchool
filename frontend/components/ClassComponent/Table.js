import React, { useState } from "react";
import { Table, Tag } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";

// UI components
const Container = styled.main`
  margin: 10px;
`;

/**
 * This component is to be rendered during tab switching. It contains the table where each student information would be displayed.
 * If the tab is switched the data is switched to display all student present in that specific class.
 */

export const DataTable = (param) => {
  // redux state
  const { freedom } = useSelector((state) => state.restrict);
  console.log(freedom);

  //state to hold the class year.
  const [classYear, setClassYear] = useState(param);

  const tableColumns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "CLASS",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "SIGNED-IN",
      dataIndex: "signedIn",
      key: "signedIn",
    },
    {
      title: "SIGNED-OUT",
      dataIndex: "signedOut",
      key: "signedOut",
    },
    {
      title: "TAG",
      dataIndex: "tag",
      key: "tag",
      render: (_, { tag }) => (
        <>
          {tag.map((studentTag) => {
            let color = "red";
            if (studentTag == "ALLOWED") {
              color = "green";
            } else {
              color = "red";
            }
            return (
              <Tag color={color} key={studentTag}>
                {studentTag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const tableDatas = [];

  for (var i = 0; i < 100; i++) {
    if (classYear.itemKey == 7) {
      tableDatas.push({
        key: `${i}`,
        name: "Ebuka Okechukwu",
        class: "YEAR 12",
        signedIn: "10AM 17/02/2023",
        signedOut: "3PM 17/02/2023",
        tag: [freedom],
      });
    } else if (classYear.itemKey == 8) {
      tableDatas.push({
        key: `${i}`,
        name: "Justice Okechukwu",
        class: "YEAR 12",
        signedIn: "10AM 17/02/2023",
        signedOut: "3PM 17/02/2023",
        tag: [freedom],
      });
    } else {
      tableDatas.push({
        key: `${i}`,
        name: "Chidalu Okechukwu",
        class: "YEAR 12",
        signedIn: "10AM 17/02/2023",
        signedOut: "3PM 17/02/2023",
        tag: [freedom],
      });
    }
  }

  // Default Table Row
  return (
    <Container>
      <Table columns={tableColumns} dataSource={tableDatas} />
    </Container>
  );
};
