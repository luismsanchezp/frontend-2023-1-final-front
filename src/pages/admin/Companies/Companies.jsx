import { Tabs } from 'antd';
import { CompaniesList } from '../../../components';
import './Companies.scss'

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `List`,
    children: <CompaniesList />,
  },
  {
    key: '2',
    label: `Add`,
    children: `Content of Tab Pane 2`,
  }
];

export const Companies = () => {
  return (
    <div className='companies-content'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
