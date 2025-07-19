"use client"
import Image from "next/image";
import React, {useState} from "react";
import { useSearchParams } from "next/navigation";
import Footer from "../../components/footer";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Checkbox,
} from 'antd';

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export default function Donate() {
  const searchParams = useSearchParams();
  const remarks = searchParams.get("remarks");
  var amount = searchParams.get("amount");
  console.log(amount)
  var tax_details = searchParams.get("tax_details");
  var ask_special_days = searchParams.get("ask_special_days");
  const [amountDonate, setAmount] = useState(amount !== "null" ? amount : undefined)
  const [form] = Form.useForm();
  const [want80G, setWant80G] = useState(false)
  const [specialDaysDelivery, setSpecialDaysDelivery] = useState(false)
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-10 lg:px-8 body1">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="ml-auto mr-auto mb-2"
            src="/iskcon-gurgaon-logo.png"
            alt="logo"
            width={180}
            height={38}
            priority
          />
          <br />
        </div>
        <div className="flex justify-center flex-col max-w-5xl ml-auto mr-auto">
          <p className="text-center">We will send you Receipt instantly on your WhatsApp and Email. Donations are 80G Tax exempt.</p>
          <br />
          <hr className="py-4" />
          <Form
            {...formItemLayout}
            form={form}
            variant={"outlined"}
            style={{ width:"100%", marginLeft:"auto", marginRight:"auto" }}
            initialValues={{ variant: 'filled', Amount: amountDonate,  }}
          >
            <Form.Item label="Full name (legal name)" name="name" rules={[{ required: true, message: 'Please enter your name.' }]}>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email.', type: 'email' }]}
            >
              <Input placeholder="Email ID" />
            </Form.Item>

            <Form.Item
              label="Mobile"
              name="Number"
              rules={[{ required: true, message: 'Please enter your number.' }]}
            >
              <InputNumber style={{ width: '100%' }} placeholder="10 Digit Mobile Number" />
            </Form.Item>

            <Form.Item
              label="Amount"
              name="Amount"
              rules={[{ required: true, message: 'Please enter amount.' }]}
            >
              <InputNumber disabled={amount=="null"?false:true} onChange={(e) => setAmount(e)} style={{ width: '100%' }} placeholder="Total Amount" />
            </Form.Item>

            {tax_details=='true'&&(
              <div>
                <Checkbox
                  onChange={(e) => setWant80G(!want80G)}
                  >
                  I want 80G Tax Exemption
                </Checkbox>
                <br />
                <br />
              </div>
            )}
            {want80G?
            (
              <div>
                <Form.Item label="PAN Details" name="pan" rules={[{ required: true, message: 'Please enter your PAN Details.' }]}>
                  <Input placeholder="Enter your PAN Details" />
                </Form.Item>
                <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your Address.' }]}>
                  <Input placeholder="Enter your Address" />
                </Form.Item>
                <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter your City.' }]}>
                  <Input placeholder="Enter your City" />
                </Form.Item>
                <Form.Item label="State" name="state" rules={[{ required: true, message: 'Please enter your State.' }]}>
                  <Input placeholder="Enter your State" />
                </Form.Item>
                <Form.Item label="Pin" name="pin" rules={[{ required: true, message: 'Please enter your Pin Code.' }]}>
                  <Input placeholder="Enter your Pin Code" />
                </Form.Item>

              </div>
            )
            :
            null}

            {ask_special_days=='true'&&(
              <div>
                <Checkbox
                  onChange={(e) => setSpecialDaysDelivery(!specialDaysDelivery)}
                >
                  I want to get Prasadam on my Special days (T&C apply)
                </Checkbox>
                <br />
                <br />
              </div>
            )}  
            {specialDaysDelivery?
            (
              <div>
                <Form.Item
                  label="Date of Birth"
                  name="birthDay"
                  rules={[{ required: true, message: 'Please enter your Date of Birth' }]}
                >
                  <DatePicker style={{ width: '100%' }} placeholder="Please enter your Date of Birth" />
                </Form.Item>
                <Form.Item
                  label="Date of Anniversary"
                  name="anniversary"
                  rules={[{ required: true, message: 'Please enter your Date of Marriage Anniversary' }]}
                >
                  <DatePicker style={{ width: '100%' }} placeholder="Please enter your Marriage Anniversary" />
                </Form.Item>
              </div>
            )
            :
            null}

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Donate
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
