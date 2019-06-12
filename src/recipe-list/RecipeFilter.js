import Component from '../Component.js';

class RecipeFilter extends Component {

    render() {
        const dom = this.renderDOM();

        //
        const onFilter = this.props.onFilter;
        
        const form = dom.querySelector('form');

        //add an event listener onto our dropdown
        form.addEventListener('input', () => {
            const filterValue = form.elements['filter'].value;
            onFilter(filterValue);

        });
        
        return dom;

    }

    renderTemplate() {
        return /*html*/`
        <section>
            <form>
                <select id="filter" name="filter" >Filter Your Search
                    <option disabled selected value> select a filter below </option>
                    <option value="All">All</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-free">Gluten-free</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Side">Side</option>
                </select>
            </form>
        </section>
        `;
    }
}
export default RecipeFilter;


