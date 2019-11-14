import { BuildingDetail } from './buildingDetail.js';
import { getSingleBuilding } from '../services/domain-api.js';

async function run() {
    const queryParams = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryParams);
    const id = searchParams.get('id');
    const app = new BuildingDetail(await getSingleBuilding(id));
    document.body.append(app.renderDOM());
}

run();