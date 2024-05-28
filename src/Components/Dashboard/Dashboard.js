
import React from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Table_1 from './Table_1/Table_1.js';
import Chart from '../Chart/chart.js';
import Footer from './Footer/footer.js';

const Dashboard = () => {
    return (
        <body>
            <div className='Dashboard' >
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div className='Chart_data'>
                            <Chart />
                        </div>
                        <Table_1 />
                        <Footer />
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Dashboard;
