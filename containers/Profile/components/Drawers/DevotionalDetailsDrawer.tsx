import React from "react";
import BasicDrawer from "../../../../components/Drawer/BasicDrawer";
import { Form, Input, Select } from "antd";
import FormLabel from "../../../../components/Form/FormLabel";

interface DevotionalDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DevotionalDetailsDrawer: React.FC<DevotionalDetailsDrawerProps> = ({
  open,
  onClose,
}) => {
  return (
    <BasicDrawer
      title="Devotioanl Details"
      placement="right"
      open={open}
      onClose={onClose}
    >
      <Form layout="vertical">
        <Form.Item
          name="spiritualName"
          label={<FormLabel title="Spiritual Name" required />}
        >
          <Input placeholder="Enter spiritual name" />
        </Form.Item>
        <Form.Item
          name="characteristics"
          label={<FormLabel title="Characteristics" required />}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
          />
        </Form.Item>
        <Form.Item
          name="chantingRounds"
          label={<FormLabel title="Chanting Rounds" required />}
        >
          <Input placeholder="Enter chanting rounds" />
        </Form.Item>
        <Form.Item
          name="currentBookReading"
          label={<FormLabel title="Current Book Reading" required />}
        >
          <Input placeholder="Enter current book reading" />
        </Form.Item>
        <Form.Item
          name="spiritualMentor"
          label={<FormLabel title="Spiritual Mentor" required />}
        >
          <Input placeholder="Enter spiritual mentor" />
        </Form.Item>
        <Form.Item
          name="connectedSince"
          label={<FormLabel title="Connected Since" required />}
        >
          <Input placeholder="Enter connected since" />
        </Form.Item>
      </Form>
    </BasicDrawer>
  );
};

export default DevotionalDetailsDrawer;
