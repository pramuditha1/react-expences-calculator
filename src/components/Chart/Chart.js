import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const valuesArray = props.chartData.map((chart) => chart.value)
    let maxValue = Math.max(...valuesArray);
    return (
        <div className='chart'>
            {
                props.chartData.map((chart) => (
                    <ChartBar 
                    key={chart.label}
                    value={chart.value} 
                    maxValue={maxValue}
                    label={chart.label}
                    />
                ))
            }
        </div>
    )
}

export default Chart