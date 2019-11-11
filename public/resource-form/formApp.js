import Component from '../Component.js';
import Header from '../common/Header.js';
import { getIsHome } from '../services/domain-api.js';
import htmlToDOM from '../util/htmlToDOM.js';
import { postBuilding } from '../services/domain-api.js';

class App extends Component {
    async onRender(dom){
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        const isHomeValues = await getIsHome();

        let isHomePartOfForm = document.querySelector('.is-home');
        const optionsArray = isHomeValues.map((value) => {
            const optionItem = document.createElement('option');
            optionItem.value = value['ishome'];
            optionItem.textContent = (value['ishome'] === 1 );
            htmlToDOM(optionItem);
            return optionItem;
        });
        optionsArray.forEach((option) => {
            isHomePartOfForm.appendChild(option);
        });

        document.querySelector('.submit').addEventListener('click', async event => {
            event.preventDefault();
            const buildingForm = new FormData(document.querySelector('form'));

            const newBuilding = {
                name: buildingForm.get('name'),
                built: buildingForm.get('built'),
                is_home_id: buildingForm.get('ishome'),
                location: buildingForm.get('location'),
                url: buildingForm.get('url'),
                height: buildingForm.get('height')
            };

            await postBuilding(newBuilding);
            


        });
    }
    renderHTML(){
        const dom = /*html*/`
            <form>
                <label>Building Name</label>
                    <input type = 'text' name='name'>
                <label>Built</label>
                    <input type = 'text' name="built">
                <label>Is it a home?</label>
                <select class = 'is-home' name="ishome"></select>
                <label>Location</label>
                    <input type = 'text' name="location">
                <label>Link to image</label>
                    <input type ='text' name='url'>
                <label>Height</label>
                    <input type = 'text' name="height">
                <button class="submit" type = 'submit'>LOAD UP</button> 
            </form>
        `;
        return dom;
    }

}

export default App;