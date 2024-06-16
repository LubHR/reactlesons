import React, {useEffect} from 'react';
import {carService} from "../service/api.service.";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars().then(val => console.log(val));
    }, []);

    return (
        <div>
            cars
        </div>
    );
};

export default CarsPage;