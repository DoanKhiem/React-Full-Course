function List(props) {
    const category = props.category;
    const itemList = props.items;
    // const fruits = [
    //     { id: 1, name: 'grape', calogies: 52 }, 
    //     { id: 2, name: 'banana', calogies: 33 }, 
    //     { id: 3, name: 'cherry', calogies: 44 }, 
    //     { id: 4, name: 'lemon', calogies: 55 }, 
    //     { id: 5, name: 'fig', calogies: 64 }, 
    //     { id: 6, name: 'apple', calogies: 15 },
    // ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse alphabetical order
    // fruits.sort((a, b) => a.calogies - b.calogies); //Ascending order
    // fruits.sort((a, b) => b.calogies - a.calogies); //Descending order

    // const lowFrutis = fruits.filter(fruit => fruit.calogies < 50);

    const ListItems = itemList.map((fruit, index) => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calogies}</b>
        </li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{ListItems}</ol>
        </>
    );
}

export default List;