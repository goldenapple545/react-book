import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, ingredients, steps }) => 
	<section id={name.toLowerCase().replace(/ /g, "-")}>
		<h1>{name}</h1>
		<Ingredients list={ingredients} />
		<Instructions title="Cooking Instructions" steps={steps} />
	</section>

export default Recipe