import React, {useEffect, useState} from 'react';
import {carService} from "../service/api.service.";
import {ICarWithAuth} from "../modules/ICarWithAuthModel";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarWithAuth[]>([])

    useEffect(() => {
        carService.getCars().then(car => setCars(cars));
    }, []);

    return (
        <div>
            {cars.map((car) => <div key={car.id}>Cars</div>)}
        </div>
    );
};

export default CarsPage;