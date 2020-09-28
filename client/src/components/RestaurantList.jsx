import React, { useEffect, useContext } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../context/RestaurantsContext'
//useEffect is a Hook which retrives the data from backend as soon as the component pops up;
const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext)
    useEffect(() =>//it should not not return anything.
    {
        const fetchData = async () =>//it is used to avoid returning of promises from  use effect as it doesn't like. Promises are returnef by this function
        {
            try {
                const response = await RestaurantFinder.get("/");

                setRestaurants(response.data.data.restaurant)

            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [])
    //empty dependency array where it makes to run only one time when it get pops up, does not run  every time it renders)
    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">

                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {restaurants && restaurants.map(restaurant=>{
                    return <tr key={restaurant.id} > 
                      <td>{restaurant.name}</td>
                      <td>{restaurant.location}</td>
                      <td>{"$".repeat(restaurant.price_range)}</td>
                      <td></td>
                      <td><button className="btn btn-warning">Update</button></td>
                      <td><button className="btn btn-danger">Delete</button></td>
                  </tr>
                })}
                    {/* <tr>
                      <td>mcdonalds</td>
                      <td>chennai</td>
                      <td>$$</td>
                      <td>Rating</td>
                      <td><button className="btn btn-warning">Update</button></td>
                      <td><button className="btn btn-danger">Delete</button></td>
                  </tr>
                  <tr>
                      <td>mcdonalds</td>
                      <td>chennai</td>
                      <td>$$</td>
                      <td>Rating</td>
                      <td><button className="btn btn-warning">Update</button></td>
                      <td><button className="btn btn-danger">Delete</button></td>
                  </tr>
                  <tr>
                      <td>mcdonalds</td>
                      <td>chennai</td>
                      <td>$$</td>
                      <td>Rating</td>
                      <td><button className="btn btn-warning">Update</button></td>
                      <td><button className="btn btn-danger">Delete</button></td>
                  </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
