import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, ReferenceLine, Area, } from 'recharts';

const data = [
    { name: '0h', graus: 5 },
    { name: '1h', graus: 5 },
    { name: '2h', graus: 8 },
    { name: '3h', graus: 5 },
    { name: '4h', graus: 5 },
    { name: '5h', graus: 5 },
    { name: '6h', graus: 5 },
    { name: '7h', graus: 5 },
    { name: '8h', graus: 8 },
    { name: '9h', graus: 5 },
    { name: '10h', graus: 5 },
    { name: '11h', graus: 5 },
    { name: '12h', graus: 5 },
    { name: '13h', graus: 3 },
    { name: '14h', graus: 5 },
    { name: '15h', graus: 5 },
    { name: '16h', graus: 5 },
    { name: '17h', graus: 5 },
    { name: '18h', graus: 5.5 },
    { name: '19h', graus: 5 },
    { name: '20h', graus: 5 },
    { name: '21h', graus: 15 },
    { name: '22h', graus: 5 },
    { name: '23h', graus: 5 },
];

class Grafico extends Component {
    render() {
        return (
            <ResponsiveContainer width="100%" height="80%">
                <LineChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="graus" stroke="#ffffff" />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default Grafico