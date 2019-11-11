import Component from '../Component.js';

export class BuildingItem extends Component {

    renderHTML(){
        const { name, id, url } = this.props;
        return /*html*/`
    <section class = "image" id=${id}>
        <h5>${name}</h5>
        <img src= ${url}>
    </section>`;
    }
}