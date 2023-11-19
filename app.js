import React from "react";
import ReactDOM from "react-dom/client";
import appLogo from "./asset/appLogo.png"

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={appLogo} alt="company-logo" >

                </img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const resDataList = [
    {
        "info": {
            "id": "628064",
            "name": "Mid Night Khana",
            "cloudinaryImageId": "ub34xiuupjxy8hb8f2vx",
            "locality": "Saraswati vihar",
            "areaName": "Pitampura",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Burgers",
                "Indian",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "628064",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4100
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4100
            },
            "parentId": "375296",
            "avgRatingString": "4.3",
            "totalRatingsString": "8",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-20 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mid-night-khana-saraswati-vihar-pitampura-delhi-628064",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "426669",
            "name": "Cake Craft - Photo Cakes",
            "cloudinaryImageId": "wwfkcrsh1uoffzmo49wt",
            "locality": "Sector 24",
            "areaName": "Rohini",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 3.5,
            "veg": true,
            "feeDetails": {
                "restaurantId": "426669",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4100
            },
            "parentId": "237439",
            "avgRatingString": "3.5",
            "totalRatingsString": "5",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "46 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-27 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cake-craft-photo-cakes-sector-24-rohini-delhi-426669",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "440909",
            "name": "Cake Craze",
            "cloudinaryImageId": "ihmk1ipuccu21rhtsh4p",
            "locality": "Sector24",
            "areaName": "Rohini",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
                "restaurantId": "440909",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4100
            },
            "parentId": "243097",
            "avgRatingString": "4.3",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "42 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-27 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cake-craze-sector24-rohini-delhi-440909",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "424621",
            "name": "Cake Home",
            "cloudinaryImageId": "ebh4ta3pmaezxpfladl7",
            "locality": "Rithala",
            "areaName": "Rohini",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "424621",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4800
            },
            "parentId": "54905",
            "avgRatingString": "3.9",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 48,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "48 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-27 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cake-home-rithala-rohini-delhi-424621",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "327422",
            "name": "My Cake Kart",
            "cloudinaryImageId": "e5lawgzyuwztso7ii9hi",
            "locality": "Sector 24",
            "areaName": "Rohini",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Desserts",
                "Bakery"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "327422",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4800
            },
            "parentId": "142376",
            "avgRatingString": "3.9",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "47 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-27 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/my-cake-kart-sector-24-rohini-delhi-327422",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "545842",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Sector 11",
            "areaName": "Rohini",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "545842",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6400
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6400
            },
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "25 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Currently not taking orders for this location",
                "nextCloseTime": "2023-11-20 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-sector-11-rohini-delhi-545842",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "225317",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "aizb6uyem2jb1hcrhxac",
            "locality": "Rohini",
            "areaName": "New Friends Colony",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "225317",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6800
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6800
            },
            "parentId": "4961",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 5.8,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "34 mins",
                "lastMileTravelString": "5.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Currently not taking orders for this location",
                "nextCloseTime": "2023-11-20 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-rohini-new-friends-colony-delhi-225317",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "451989",
            "name": "Hyderabadi Handi Biryani",
            "cloudinaryImageId": "x4klsynvibffbmvb7ogp",
            "locality": "Sector 7",
            "areaName": "Rohini",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 3.7,
            "feeDetails": {
                "restaurantId": "451989",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5700
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5700
            },
            "parentId": "11087",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "34 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Currently not taking orders for this location",
                "nextCloseTime": "2023-11-20 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "UPTO ₹125"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hyderabadi-handi-biryani-sector-7-rohini-delhi-451989",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "371595",
            "name": "Momo Shomo",
            "cloudinaryImageId": "zlctslkcgx1kcbanll9b",
            "locality": "Sector 10",
            "areaName": "Rohini",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Asian",
                "Chinese",
                "Tibetan",
                "North Eastern",
                "Beverages",
                "Street Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "371595",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "21859",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "32 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Currently not taking orders for this location",
                "nextCloseTime": "2023-11-20 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-25453cf4-120a-4f04-b470-06d87ed35bc6"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/momo-shomo-sector-10-rohini-delhi-371595",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const RestaurantCard = (props) => {
    console.log(props)
    const { resData } = props
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info

    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(' , ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}



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

const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

