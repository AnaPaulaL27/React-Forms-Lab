const CakeName = ({cakeName, ingredients, rating}) => {
    // console.log(ingredients);
    // debugger;
    return(
        <>
            <p>{cakeName}</p>
            <ul>{ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
            <p>Rating: {rating}</p>
        </>
    )
}

export default CakeName;