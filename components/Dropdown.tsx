"use client";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const women: MenuProps["items"] = [
  {
    label: (
      <Link href="/pages/category/women/womenshoe" target="_blank">
        Kadın Ayakkabı
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/pages/category/women/womenshoe"
      >
        Kadın Sweat
      </Link>
    ),
    key: "1",
  },
];

const men: MenuProps["items"] = [
  {
    label: (
      <Link
        href="/pages/category/men/menshoes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Erkek Ayakkabı
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link
        href="/pages/category/men/mensweat"
        target="_blank"
        rel="noopener noreferrer"
      >
        Erkek Sweat
      </Link>
    ),
    key: "3",
  },
];

const kids: MenuProps["items"] = [
  {
    label: (
      <a href="/" target="_blank" rel="noopener noreferrer">
        Çocuk Ayakkabı
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a href="/" target="_blank" rel="noopener noreferrer">
        Çocuk Sweat
      </a>
    ),
    key: "5",
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
