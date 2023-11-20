import RestaurantCard from "./RestaurentCard"
import resDataList from "../utils/mockData"
import { useState, useEffect } from "react"


const Body = () => {

    // local state variable in react
    // pass default value in argument , for eg []
    const [listOfRestaurant, setListOfRestaurant] = useState(resDataList)
    console.log("state variable ", listOfRestaurant);

    //let listOfRestaurant = resDataList
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(element => element.info.avgRating > 4)
                    console.log("Filtered List ", filteredList)
                    setListOfRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="rest-container">
                {listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info?.id} resData={restaurant} />)}
            </div>
        </div>
    )
}
export default Body