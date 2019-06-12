import Component from '../Component.js';

class RecipeFilter extends Component {

    render() {
        const dom = this.renderDOM();

        const onFilter = this.props.onFilter;
        
        const form = dom.querySelector('form');

        form.addEventListener('input', () => {
            const dietFilterValue = form.elements['diet-type-filter'].value;
            const mealFilterValue = form.elements['meal-type-filter'].value;
            let filters = ['', ''];
            filters[0] = dietFilterValue; 
            filters[1] = mealFilterValue;
            onFilter(filters);
        });

        return dom;

    }

    renderTemplate() {
        return /*html*/`
        <section>
            <form>
                <select id="diet-type-filter" name="diet-type-filter" >Filter Your Search
                    <option disabled selected value> select a filter for diet type below </option>
                    <option value="All">All</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-free">Gluten-free</option>
                </select>
                <select id="meal-type-filter" name="meal-type-filter" >Filter Your Search
                    <option disabled selected value> select a filter for meal type below </option>
                    <option value="All">All</option>
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


