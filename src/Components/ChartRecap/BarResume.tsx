import { useSelector } from 'react-redux';
import { IRootState } from '../../Store';
import { ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { COLORS } from '.';

export default function PieResume(){
  const result = useSelector((state: IRootState) => state.fizzbuzz).result;
  const {
    fizzString,
    buzzString
  } = useSelector((state: IRootState) => state.fizzbuzz).data;

  let data = [
    {
      name: fizzString,
      count: result!.fizzCount,
      total: result!.totalCount
    },
    {
      name: buzzString,
      count: result!.buzzCount,
      total: result!.totalCount
    },
    {
      name: fizzString+buzzString,
      count: result!.fizzbuzzCount,
      total: result!.totalCount
    },
    {
      name: 'Normal',
      count: result!.normalCount,
      total: result!.totalCount
    },
  ]

  return <ResponsiveContainer width="100%" height="100%">
  <BarChart width={500} height={500} data={data}>
    <Bar dataKey="count">
      {data.map(( _, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Bar>
    <XAxis dataKey="name" />
    <YAxis dataKey="count" />
    <Tooltip />
  </BarChart>
</ResponsiveContainer>
}