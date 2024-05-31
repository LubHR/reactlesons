import {ICarWithAuth} from "./ICarWithAuthModel";

export interface ICarPaginatedModel {
    total_items: number,
    total_page: number,
    prev:string,
    next:string,
    items: ICarWithAuth[],
}