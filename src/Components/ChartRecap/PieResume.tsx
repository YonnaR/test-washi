import { useSelector } from 'react-redux';
import { IRootState } from '../../Store'
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { COLORS } from '.';
import { DEFAULT_BUZZ_STRING, DEFAULT_FIZZ_STRING } from '../../Store/FizzbuzzSlice/FizzBuzz';


export default function PieResume(){
  const result = useSelector((state: IRootState) => state.fizzbuzz).result;
  const form = useSelector((state: IRootState) => state.fizzbuzz).data;

  let fizzString = form.fizzString === "" ? DEFAULT_FIZZ_STRING : form.fizzString,
    buzzString = form.buzzString === "" ? DEFAULT_BUZZ_STRING : form.buzzString;
  let data = [
    {
      name: fizzString,
      value: result!.fizzCount,
    },
    {
      name: buzzString,
      value: result!.buzzCount,
    },
    {
      name: fizzString+buzzString,
      value: result!.fizzbuzzCount,
    },
    {
      name: 'Normal',
      value: result!.normalCount,
    },
  ];
  return <ResponsiveContainer width="100%" height="100%">
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        paddingAngle={5}
        label={(entry) => `${entry.name}-${entry.value}`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>;
}