import Component from '../Component.js';
import Header from '../shared/Header.js';
import RecipeList from './RecipeList.js';
import RecipeFilter from './RecipeFilter.js';
import Footer from '../shared/Footer.js';
import Search from './Search.js';
import searchAndFilter from './searchAndFilter.js';
import { recipesByUserRef } from '../services/firebase.js';

class RecipeListApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);
        
        let allRecipes = [];
        let searchTerm;
        let filterTerm;
        
        const recipeFilter = new RecipeFilter({ 
            onFilter:(filterValue) => {
                filterTerm = filterValue;
                const filtered = searchAndFilter(searchTerm, filterValue, allRecipes);
                
                recipeList.update({ recipes: filtered || allRecipes });
            }
        });
        
        dom.appendChild(recipeFilter.render());
        
        const search = new Search();
        dom.appendChild(search.render());
        
        recipesByUserRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const usersRecipes = value ? Object.values(value) : [];
                const mappedRecipes = usersRecipes.map(userRecipes => {
                    return Object.values(userRecipes);
                });

                mappedRecipes.forEach(recipes => {
                    allRecipes = allRecipes.concat(recipes);
                });
                
                recipeList.update({ recipes: allRecipes });
            });
        
        const recipeList = new RecipeList({ recipes: [] });
        dom.appendChild(recipeList.render());
        
        function searchRecipes() { 
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');
            searchTerm = search;
            const searchArray = searchAndFilter(search, filterTerm, allRecipes);
            recipeList.update({ recipes: searchArray || allRecipes });
        }

        searchRecipes();
        window.addEventListener('hashchange', () => {
            searchRecipes();
        });
        
        const footer = new Footer();
        dom.appendChild(footer.render());
        
        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default RecipeListApp;