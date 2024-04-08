import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const women: MenuProps["items"] = [
  {
    label: <Link href="/category/women/womenshoe">Kadın Ayakkabı</Link>,
    key: "0",
  },
  {
    label: <Link href="/category/women/womensweat">Kadın Sweat</Link>,
    key: "1",
  },
];

const men: MenuProps["items"] = [
  {
    label: <Link href="/category/men/menshoes">Erkek Ayakkabı</Link>,
    key: "2",
  },
  {
    label: <Link href="/category/men/mensweat">Erkek Sweat</Link>,
    key: "3",
  },
];

const kids: MenuProps["items"] = [
  {
    label: <Link href="/category/kidsdress">Çocuk</Link>,
    key: "4",
  },
];

const App: React.FC = () => (
  <div className="flex items-center justify-center bg-white text-black h-10 gap-36 border-2 border-red-500">
    {/* women */}
    <Dropdown menu={{ items: women }}>
      <a
        className="flex items-center justify-center gap-2"
        onClick={(e) => e.preventDefault()}
      >
        <Space>Kadın</Space>
        <DownOutlined />
      </a>
    </Dropdown>

    {/* men */}
    <Dropdown menu={{ items: men }}>
      <a
        className="flex items-center justify-center gap-2"
        onClick={(e) => e.preventDefault()}
      >
        <Space>Erkek</Space>
        <DownOutlined />
      </a>
    </Dropdown>

    {/* kids */}
    <Dropdown menu={{ items: kids }}>
      <a
        className="flex items-center justify-center gap-2"
        onClick={(e) => e.preventDefault()}
      >
        <Space>Kids</Space>
        <DownOutlined />
      </a>
    </Dropdown>
  </div>
);

export default App;
