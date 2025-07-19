import { Drawer } from "antd";
import React from "react";
import styles from "./BasicDrawer.module.scss";

interface BasicDrawerProps extends React.ComponentProps<typeof Drawer> {
  open: boolean;
  onClose: () => void;
  title: string;
  placement?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

const BasicDrawer: React.FC<BasicDrawerProps> = ({
  open,
  onClose,
  title,
  placement = "right",
  children,
  ...props
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      closable
      onClose={onClose}
      open={open}
      width={500}
      maskClosable
      className={styles.basicDrawer}
      {...props}
    >
      {children}
    </Drawer>
  );
};

export default BasicDrawer;
