import React from 'react';
import {
  Form, Input, Upload, Button,
} from 'antd';
import axios from 'axios';

export default function Orders() {
  const [form] = Form.useForm();

  const onFinish = async () => {
    const respone = await axios.post('/api', form.getFieldsValue());
    if (respone.status === 201) {
      form.resetFields();
      window.location = '/';
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="title" label="Название" style={{ marginTop: '20px' }}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Описание">
        <Input />
      </Form.Item>
      <Form.Item name="img" label="Фотография">
        <Input placeholder="Вставьте ссылку с интернета" />
      </Form.Item>
      <Form.Item>
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" style={{ width: '250px' }}>
            Отправить заявку
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
