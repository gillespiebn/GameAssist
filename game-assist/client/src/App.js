import React from('react');
import { Route } from 'react-router-dom';
import HomePage from "./components/Pages/HomePage";
import HomePage from "./components/Pages/LoginPage";

const App = () => 
<div>
    <Route path="/" exact component={HomePage} />
    <Route path="/" exact component={LoginPage} />
    
</div>

export default App;