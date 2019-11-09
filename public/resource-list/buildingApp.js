import Component from '../Component.js';
import { BuildingItem } from './buildingItem.js';
import { getBuildings } from '../services/domain-api.js';
import Header from '../common/Header.js';

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
        

    }   

    renderHTML(){
        const dom = /*html*/ `
        <div>
        
        </div>

        `;
        return dom;
    }

    
}

export default App;