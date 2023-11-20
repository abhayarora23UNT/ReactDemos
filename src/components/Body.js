import RestaurantCard from "./RestaurentCard"
import resDataList from "../utils/mockData"

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                {resDataList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
}
export default Body