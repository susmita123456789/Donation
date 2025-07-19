import { DatePicker, Form, Input, Select } from "antd";
import React from "react";
import FormLabel from "../../../../components/Form/FormLabel";
import BasicDrawer from "../../../../components/Drawer/BasicDrawer";
import TextArea from "antd/es/input/TextArea";
import countryStateCity from "../../../../public/countries+states+cities.json";

interface BasicInfoDrawerProps {
  open: boolean;
  onClose: () => void;
}

const BasicInfoDrawer: React.FC<BasicInfoDrawerProps> = ({ open, onClose }) => {
  const [selectedCountry, setSelectedCountry] = React.useState<string>("");
  const [selectedState, setSelectedState] = React.useState<string>("");

  const countries: {
    name: string;
    states: {
      name: string;
      cities: { name: string }[];
    }[];
  }[] = countryStateCity as {
    name: string;
    states: {
      name: string;
      cities: { name: string }[];
    }[];
  }[];

  const states = (country: string) => {
    const selectedCountry = countries.find((c) => c.name === country);
    return selectedCountry ? selectedCountry.states : [];
  };

  const cities = (country: string, state: string) => {
    const selectedCountry = countries.find((c) => c.name === country);
    if (selectedCountry) {
      const selectedState = selectedCountry.states.find(
        (s) => s.name === state
      );
      return selectedState ? selectedState.cities : [];
    }
    return [];
  };

  return (
    <BasicDrawer
      title="Basic Information"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <Form layout="vertical">
        <Form.Item
          name="firstName"
          label={<FormLabel title="First Name" required />}
        >
          <Input placeholder="Enter first name" />
        </Form.Item>
        <Form.Item name="lastName" label={<FormLabel title="Last Name" />}>
          <Input placeholder="Enter last name" />
        </Form.Item>
        <Form.Item
          name="tagline"
          label={
            <FormLabel
              title="Tagline"
              info="A catchy phrase to describe yourself"
            />
          }
        >
          <TextArea placeholder="Enter tagline" rows={3} />
        </Form.Item>
        <Form.Item name="email" label={<FormLabel title="Email" required />}>
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item name="phone" label={<FormLabel title="Phone" required />}>
          <Input type="phone" placeholder="Enter phone number" />
        </Form.Item>
        <Form.Item name="gender" label={<FormLabel title="Gender" required />}>
          <Select placeholder="Select gender">
            <Select.Option value="MALE">Male</Select.Option>
            <Select.Option value="FEMALE">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dob"
          label={<FormLabel title="Date of Birth" required />}
        >
          <DatePicker style={{ width: "100%" }} placeholder="Select date" />
        </Form.Item>
        <Form.Item
          name="anniversary"
          label={<FormLabel title="Marriage Anniversary" />}
        >
          <DatePicker style={{ width: "100%" }} placeholder="Select date" />
        </Form.Item>
        <Form.Item
          name="fullAddress"
          label={<FormLabel title="Full Address" required />}
        >
          <TextArea placeholder="Enter full address" rows={3} />
        </Form.Item>
        <Form.Item
          name="country"
          label={<FormLabel title="Country" required />}
        >
          <Select
            showSearch
            onChange={(value: string) => setSelectedCountry(value)}
            placeholder="Select country"
          >
            {countries.map((country) => (
              <Select.Option key={country.name} value={country.name}>
                {country.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="state"
          label={<FormLabel title="State/Province/Region" required />}
        >
          <Select
            showSearch
            disabled={!selectedCountry}
            onChange={(value: string) => setSelectedState(value)}
            placeholder="Select state"
          >
            {states(selectedCountry).map((state) => (
              <Select.Option key={state.name} value={state.name}>
                {state.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="city" label={<FormLabel title="City" required />}>
          <Select
            showSearch
            disabled={!selectedCountry || !selectedState}
            placeholder="Select city"
          >
            {cities(selectedCountry, selectedState).map((city) => (
              <Select.Option key={city.name} value={city.name}>
                {city.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="pincode"
          label={<FormLabel title="Pincode" required />}
        >
          <Input placeholder="Enter pincode" />
        </Form.Item>
        <Form.Item name="aadhar" label={<FormLabel title="Aadhar Number" />}>
          <Input placeholder="Enter aadhar number" />
        </Form.Item>
        <Form.Item name="pan" label={<FormLabel title="PAN Number" />}>
          <Input placeholder="Enter PAN number" />
        </Form.Item>
        <Form.Item
          name="Facebook URL"
          label={<FormLabel title="Facebook URL" />}
          rules={[
            {
              pattern: /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9_]+\/?$/,
              message: "Please enter valid Facebook URL",
            },
          ]}
        >
          <Input placeholder="Enter Facebook URL" />
        </Form.Item>
        <Form.Item
          name="LinkedIn URL"
          label={<FormLabel title="LinkedIn URL" />}
          rules={[
            {
              pattern:
                /^(https?:\/\/)?(www\.)?linkedin.com\/in\/[a-zA-Z0-9_]+\/?$/,
              message: "Please enter valid LinkedIn URL",
            },
          ]}
        >
          <Input placeholder="Enter LinkedIn URL" />
        </Form.Item>
        <Form.Item
          name="Instagram URL"
          label={<FormLabel title="Instagram URL" />}
          rules={[
            {
              pattern:
                /^(https?:\/\/)?(www\.)?instagram.com\/[a-zA-Z0-9_]+\/?$/,
              message: "Please enter valid Instagram URL",
            },
          ]}
        >
          <Input placeholder="Enter Instagram URL" />
        </Form.Item>
      </Form>
    </BasicDrawer>
  );
};

export default BasicInfoDrawer;
