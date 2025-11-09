import { useState } from 'react';
function MyComponentArr(){
    const [food, setFood] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        setFood(f => [...f, newFood]);
        document.getElementById("foodInput").value = "";
    }

    function handleRemoveFood(index){
        setFood(food.filter((_, i) => i!== index))
    }

    return(
        <>
        <div>
            <h2>List of food</h2>
            <ul>
                {food.map( (food, index)=>{
                    return <li key ={index} onClick={()=>handleRemoveFood(index)}>
                            {food}
                            </li>
                })
                }
                
            </ul>
            <input type="text" id="foodInput" placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
        </>
    );

}

export default MyComponentArr;