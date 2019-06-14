import Component from '../Component.js';

class FavoritesApp extends Component {
    
    render() {
        const image = this.renderDOM();
        image.addEventListener('click', () => {
            this.props.onFavorite(!this.props.isFavorite);
        });

        return image;
    }

    renderTemplate() {
        const isFavorite = this.props.isFavorite;
        const fave = isFavorite ? './../assets/fave.png' : './../assets/not-fave.png';
        return /*html*/ ` 
            <img src="${fave}">
        `;
    }
}
export default FavoritesApp;