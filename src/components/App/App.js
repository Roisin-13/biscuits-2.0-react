import './App.css';
import '../recipe/Recipe.js';
import { recipes } from '../recipe/Recipe.js';
import { Recipe } from '../recipe/Recipe.js';
//import RecipeList from '../recipe/RecipeList';

function RecipeList() {
  return (
    <section className="recipelist">
      {recipes.map((recipe) => {
        return (
          <Recipe {...recipe}></Recipe>
        );
      })}
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Gonna make some biscuits
        </p>
        <a
          className="App-link"
          href="https://www.acceptcookies.uk/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;accept cookies&gt;
        </a>
      </header>

      <div className="page">
        <div className="recipe">{<RecipeList />}</div>
      </div>

    </div>
  );
}

export default App;
