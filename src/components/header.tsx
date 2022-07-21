import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const items: MenuProps["items"] = [
  {
    label: "首页",
    key: "/",
  },
  {
    label: "归档",
    key: "file",
  }
];
const header = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname.slice(1);
  const [current, setCurrent] = useState(pathname);
  const onClickFunc: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };
  return (
    <div>
      <Menu onClick={onClickFunc} selectedKeys={[current]} mode='vertical' items={items}
        style={{
          display: "flex"
        }}
      />
    </div>
  );
};

export default header;