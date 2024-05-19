import RestaurantCard from "./RestaurentCard"
import Shimmer from "./Shimmer"
import resDataList from "../utils/mockData"
import { useState, useEffect } from "react"


const Body = () => {

    // local state variable in react
    // pass default value in argument , for eg []
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    console.log("listOfRestaurant ", listOfRestaurant);

    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([])
    console.log("filteredListOfRestaurant ", filteredListOfRestaurant);

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchDataFromAPI();
    }, [])

    const fetchDataFromAPI = async () => {
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
        const options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            mode: "cors"
        }
        const data = await fetch(url, options);
        const json = data.json();
        console.log(json)
    }
    //let listOfRestaurant = resDataList

    // conditional rendering //

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(event) => {
                        setSearchText(event.target.value)
                    }}></input>
                    <button onClick={() => {
                        console.log(searchText)
                        const searchedList = listOfRestaurant.filter(element => (element.info.name).toLowerCase().includes(searchText.toLowerCase()))
                        console.log("Search List ", searchedList)
                        setFilteredListOfRestaurant(searchedList)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(element => element.info.avgRating > 4)
                    console.log("Filtered List ", filteredList)
                    setFilteredListOfRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="rest-container">
                {filteredListOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info?.id} resData={restaurant} />)}
            </div>
        </div>
    )
}
export default Body