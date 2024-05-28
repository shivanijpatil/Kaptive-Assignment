import "./Table_1.css";
import * as React from "react";
import { useTable } from "react-table";
import axios from "axios";
import { FaCaretDown } from "react-icons/fa";
function App() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(`https://mock-api-plse-2.onrender.com/Sheet1?Overhead=Net cash provided by operating activities&Overhead=Net cash provided by investing activities&Overhead=Net cash provided by financing activities&Overhead=Net cash increase for period`);
                setData(response.data);
                console.log(response.data[1].Jan);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Cashflow",
                accessor: "Overhead",
            },
            {
                Header: "January",
                accessor: "Jan",
            },
            {
                Header: "February",
                accessor: "Feb",
            },
            {
                Header: "March",
                accessor: "March",
            },
            {
                Header: "April",
                accessor: "April",
            },
            {
                Header: "May",
                accessor: "May",
            },
            {
                Header: "June",
                accessor: "June",
            },
            {
                Header: "July",
                accessor: "July",
            },
            {
                Header: "August",
                accessor: "August",
            },
            {
                Header: "September",
                accessor: "September",
            },
            {
                Header: "October",
                accessor: "October",
            },
            {
                Header: "November",
                accessor: "November",
            },
            {
                Header: "December",
                accessor: "December",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <div className="table_container">
            <div className="tabl">
                <div className="title">
                    <h4> Cashflow Summary-1 </h4>
                    <div className="chart_button">
                        <button style={{ fontSize: '12px', fontWeight: 'bold', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '0px' }}> Decimal View</button>
                        <button style={{ fontSize: '12px', fontWeight: 'bold', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '0px' }}> Percent View</button>
                        <button style={{ fontSize: '12px', fontWeight: 'bold', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '0px' }}> Euro  <FaCaretDown />
                        </button>
                    </div>

                </div>

                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;