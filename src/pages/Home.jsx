import React from 'react';
import { format, addDays, differenceInDays, isAfter } from 'date-fns';

const Home = () => {
    const today = new Date();
    const deliveryDate = addDays(today, -5);

    const daysLeft = differenceInDays(deliveryDate, today);

    return (
        <div className="p-4 border rounded shadow mt-4">
            <h3>Date-fns Example</h3>
            <p><b>Today:</b> {format(today, 'PPPP')}</p>
            <p><b>Expected Delivery:</b> {format(deliveryDate, 'dd-MM-yyyy')}</p>
            <p><b>Days Left:</b> {daysLeft} Days</p>
            <p><b>Is Expired?</b> {isAfter(today, deliveryDate) ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default Home;