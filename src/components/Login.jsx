import React, { useContext } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Appcontext } from "../App";
export default function Login({
  setSignupOpen,
  validate,
  hint,
  setUserToken,
  userToken,
}) {
  return (
    <div
      className="login-wrapper d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h3>log in first</h3>
      <p>{hint}</p>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={validate}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            type="email"
            onChange={(e) =>
              setUserToken({ ...userToken, email: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) =>
              setUserToken({ ...userToken, password: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p
        style={{
          textAlign: "center",
          borderBottom: "1px solid red",
          paddingBottom: "13px",
          width: "50px",
          margin: 5,
        }}
      >
        or
      </p>
      <p onClick={() => setSignupOpen(true)} style={{ cursor: "pointer" }}>
        sign up
      </p>
    </div>
  );
}
