import Component from '../Component.js';
import Header from '../common/Header.js';
import { getIsHome } from '../services/domain-api.js';
import htmlToDOM from '../util/htmlToDOM.js';
class App extends Component {
    async onRender(dom){
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        const isHomeValues = getIsHome();

        let isHomePartOfForm = dom.getElementsByClassName('is-home');
        const optionsArray = isHomeValues.map((value) => {
            const optionItem = dom.createElement('option');
            optionItem.value = value;
            optionItem.textContent = value;
            htmlToDOM(optionItem);
            return optionItem;
        });
        optionsArray.forEach((option) => {
            isHomePartOfForm.append(option);
        });
    }
    renderHTML(){
        const dom = /*html*/`
            <form>
                <label>Building Name</label>
                    <input type = 'text'>
                <label>Built</label>
                    <input type = 'text'>
                <label class = 'is-home'>Is it a home?</label>
                
                <label>Location</label>
                    <input type = 'text'>
                <label>Link to image</label>
                    <input type ='text'>
                <label>Height</label>
                    <input type = 'text'>
                <button type = 'submit'>LOAD UP</button> 
            </form>
        `;
        return dom;
    }

}

export default App;