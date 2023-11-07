import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getType } from '../Apis/TypeApi';

interface DataType {
  id: string;
  name: string;
 
}




const TypeList: React.FC = () =>{


const [data, setData]= React.useState([])

const columns: ColumnsType<DataType> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
      },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  
];
    const getData= async ()=>{
        const typeList=await getType();
        setData(typeList.data.content);
    }
    React.useEffect(()=>{
        getData();
    }
    ,[]);
    return(
        <><Table columns={columns} dataSource={data} />;
        </>
    )
} 

export default TypeList;