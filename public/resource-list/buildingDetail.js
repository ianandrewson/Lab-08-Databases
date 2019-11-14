import Component from '../Component.js';
import Header from '../common/Header.js';
import { deleteSingleBuilding } from '../services/domain-api.js';

export class BuildingDetail extends Component {
    onRender(section){
        const header = new Header();
        const headerDOM = header.renderDOM();
        document.body.prepend(headerDOM);
        const deleteButton = section.querySelector('button');
        console.log(deleteButton);
        deleteButton.addEventListener('click', async () => {
            const queryParams = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryParams);
            const id = searchParams.get('id');
            console.log(id);
            await deleteSingleBuilding(id);
            window.location = './resource-list.html';
        });
    }
    renderHTML(){
        const { name, built, ishome, location, url, height } = this.props;
        return /*html*/`
    <section class = "image" id=${name}>
        <h5>${name}</h5>
        <img src= ${url}>
        <div class = 'info'>
            <p>Built: ${built}</p>
            <p>Is Home: ${ishome}</p>
            <p>Locaiton: ${location}</p>
            <p>Height: ${height}</p>
            <p>But We Don't Need to Tell You That!</p>
        </div>
        <button>Delete</button>
    </section>`;
    }
}