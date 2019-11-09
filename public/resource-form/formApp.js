import Component from '../Component.js';
import Header from '../common/Header.js';
import { getIsHome } from '../services/domain-api.js';
class App extends Component {
    async onRender(dom){
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        const isHomeValues = getIsHome();
        debugger
        let isHomePartOfForm = dom.getElementsByClassName('is-home');
        dom.createElement('option');
    }
    async renderHTML(){
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