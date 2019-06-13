import Component from '../Component.js';


class FavoritesApp extends Component {
    
    render() {
        const button = this.renderDOM();
        button.addEventListener('click', () => {
            this.props.onFavorite(!this.props.isFavorite);
        });

        return button;
    }

    renderTemplate() {
        const isFavorite = this.props.isFavorite;
        const star = isFavorite ? '❤' : '🍲';
        return /*html*/ ` 
            <button class="favorite-star ${isFavorite ? 'favorite' : ''}">${star}</button>
        `;
    }
}
export default FavoritesApp;