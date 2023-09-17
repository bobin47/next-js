
import Image from "next/image";
import { Button, ConfigProvider, Space, theme } from "antd";
import Post from "./post/page";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ["lg"],
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];


export default function Home() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
    // <ConfigProvider>
    //   <Space>
    //     <Button type="primary">Primary</Button>
    //     <Button>Default</Button>
    //     <Post />
    //   </Space>
    // </ConfigProvider>
  );
}
