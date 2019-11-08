import Component from '../Component.js';
import Header from '../common/Header.js';

class App extends Component {
    onRender(dom){
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
    }
    renderHTML(){
        return /*html*/`
            <p>test</p>
        `;
    }

}

export default App;