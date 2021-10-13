import React, { useContext } from "react";
import { Table, Tag, Space } from "antd";
import { Appcontext } from "../App";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "role",
    dataIndex: "role",
    key: "role",
  },
];

export default function Table1() {
  const user = useContext(Appcontext);
  console.log(user);
  const data = [
    {
      /* key: user.data.id,
      name: user.data.name,
      phone: user.data.phone,
      email: user.data.email,
      role: user.data.role, */
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
