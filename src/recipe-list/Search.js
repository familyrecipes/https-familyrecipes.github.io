import Component from '../Component.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            // const formData = new FormData(form);
            event.preventDefault();
            const searchParams = new URLSearchParams();
            searchParams.set('search', input.value);
            window.location.hash = searchParams.toString();
            
        });

        //TODO: figure out how to populate search bar with nav bar contents
        function setInputFromHash() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');
            if(searchParams.search === undefined) {
                input.value = '';
            }
            else {
                input.value = search;
            }
        }

        setInputFromHash();

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });


        return form;
    }
    renderTemplate() {
        return /*html*/ `
            <form>
            <button>Search: </button>
                <input id="search-bar">
            </form>
    `;
    }
}

export default Search;