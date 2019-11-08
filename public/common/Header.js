import Component from '../Component.js';

class Header extends Component {
    
    renderHTML() {
        return /*html*/`
        <nav>
            <a href="../index.html">Home</a>
            <a href="../resource-list.html">Buildings</a>
            <a href="../resource-form.html">Add a Building</a>
        </nav>
        `;
    }
}

export default Header;