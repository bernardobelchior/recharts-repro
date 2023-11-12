import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const generateData = (n: number) => {
    const ret = [];
    for (let i = 0; i < n; i++) {
        ret.push({name: `Page ${i}`, uv: getRandomInt(100)});
    }
    return ret;
}

export function SimpleLineChart() {
    const data = generateData(10000)

    return (
        <LineChart type="monotone" width={700} height={300} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend/>

            <Line dot={false} isAnimationActive={false} type="monotone" dataKey="uv" stroke="#82ca9d"/>
        </LineChart>
    );
}
