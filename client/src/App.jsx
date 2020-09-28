import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import UpdatePage from './routes/UpdatePage';
import Home from './routes/Home';
import RestaurantdetailPage from './routes/RestaurantdetailPage';
const App =() =>
{
    return <div>
    <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
        <Route exact path="/restaurants/:id" component={RestaurantdetailPage}/>
    </Router>
    </div>
};
export default App;