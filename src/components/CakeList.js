import CakeName from "./CakeName";

const CakeList = ({cakeRecipes}) => {

    return(
        cakeRecipes.map((cake, index) => {
            return <CakeName cakeName={cake.cakeName} ingredients={cake.ingredients} rating={cake.rating} key={index}/>;
        })
    );
}

export default CakeList;