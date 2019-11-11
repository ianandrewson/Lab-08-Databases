import Component from '../Component.js';
import { BuildingItem } from './buildingItem.js';
import { getBuildings } from '../services/domain-api.js';
import Header from '../common/Header.js';
import { BuildingDetail } from '../resource-list/buildingDetail.js';
import { getSingleBuilding } from '../services/domain-api.js';

class App extends Component {

    async onRender(dom){

        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        let props = await getBuildings();
        props.forEach(building => {
            const aBuilding = new BuildingItem(building);
            const aBuildingDOM = aBuilding.renderDOM();
            dom.appendChild(aBuildingDOM);
        });

        document.querySelector('.building-list').addEventListener('click', event => {
            const url = window.location;
            console.log(event.target);
            const queryParams = event.target.id;
            const detailedBuilding = new BuildingDetail(getSingleBuilding(queryParams));
            window.location = url + '?' + queryParams;
            document.body.append(detailedBuilding);
        });
    }   

    renderHTML(){
        const dom = /*html*/ `
        <div class="building-list">
        
        </div>

        `;
        return dom;
    }

}

export default App;