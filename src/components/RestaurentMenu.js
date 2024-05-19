import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const {resId}=useParams()
    useEffect(() => {
        //fetchMenu();
    }, [])

    const fetchMenu = async () => {
        let response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" +
            resId
        );
        const json = await response.json();
        console.log("json")
        console.log(json)
        const data = json?.data;
        setResInfo(data)
    }

    return resInfo === null ? Shimmer : (
        <div className="menu">
            <h1>Name of restaurent</h1>
            <h2>Menu</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu