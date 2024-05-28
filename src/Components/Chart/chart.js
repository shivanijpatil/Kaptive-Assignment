import './chart.css';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
    const chartRef = useRef(null);
    useEffect(() => {
        const xValues = ['2015 - 16', '2016 - 17', '2017 - 18', '2018 - 19', '2019 - 20', '2020 - 21', '2021 - 22', '2022 - 23'];

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('myChart').getContext('2d');

        const newChart = new Chart(ctx, {
            type: "bar",
            borderColor: "black",

            data: {
                labels: xValues,
                datasets: [{
                    label: 'Revenue',
                    data: [50, 160, 90, 92, 50, 160, 90, 97],
                    borderColor: "red",
                    backgroundColor: 'rgba(128, 0, 128,0.4)',
                    fill: false
                }, {
                    label: 'COGS',
                    data: [200, 300, 150, 117, 200, 400, 150, 117],
                    borderColor: "green",
                    backgroundColor: 'rgba(135, 206, 260, 1)',
                    fill: false
                }, {
                    label: 'Gross Profit',
                    data: [100, 120, 100, 100, 100, 120, 100, 100],
                    borderColor: "blue",
                    backgroundColor: "orange",
                    fill: false
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'start'
                    }

                },
                title: {
                    diplay: true,
                    text: "Financial Data",
                },
                scales: {
                    x: {
                        barPercentage: 5,
                        categoryPercentage: 5,
                    }
                },
                layout: {
                    padding: {
                        left: 10,
                        top: 20,
                        bottom: 20,
                        right: 50,

                    }
                }
            }
        });
        chartRef.current = newChart;
        return () => {

            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);
    return <canvas id="myChart" />;

}

export default MyChart;

