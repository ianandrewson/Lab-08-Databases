import Component from '../Component.js';
import Header from '../common/Header.js';
import { getIsHome } from '../services/domain-api.js';
import htmlToDOM from '../util/htmlToDOM.js';
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
            optionItem.textContent = value['ishome'];
            htmlToDOM(optionItem);
            return optionItem;
        });
        optionsArray.forEach((option) => {
            isHomePartOfForm.appendChild(option);
        });
    }
    renderHTML(){
        const dom = /*html*/`
            <form>
                <label>Building Name</label>
                    <input type = 'text'>
                <label>Built</label>
                    <input type = 'text'>
                <label>Is it a home?</label>
                <select class = 'is-home'></select>
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