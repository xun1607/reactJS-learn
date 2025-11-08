
function List(){
    const fruits = [{name:"apple", calo: 100}, 
        {name: "orange", calo: 45}, 
        {name: "banana", calo: 120}, 
        {name: "strawberry", calo: 43}];
    
    const listItem = fruits.map((fruit)=>{
        return <li key={fruit.name}>{fruit.name}</li>
    });

    return(<ol>{listItem}</ol>);
}
export default List;