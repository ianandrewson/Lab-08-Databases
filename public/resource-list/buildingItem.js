import Component from '../Component.js';

export class BuildingItem extends Component {

    renderHTML(){
        const { name, built, is_home, location, url, height } = this.props;
        return /*html*/`
    <section class = "image">
        <h5>${name}</h5>
        <img src= ${url}>
    <div class = 'info'>
        <p>Built: ${built}</p>
        <p>Is Home: ${is_home}</p>
        <p>Locaiton: ${location}</p>
        <p>Height: ${height}</p>
        <p>But We Don't Need to Tell You That!</p>
    </div>
    </section>`;
    }
}