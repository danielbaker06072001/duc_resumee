import Header from './components/header/header';
import Landing from './components/content/landing';
import About from './components/content/about';
import Portfolio from './components/content/portfolio';
import Card from './components/card/Card';
import GetInTouch from './components/content/getInTouch';
import {Data} from './components/data/data';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Data.map(element => console.log(element))
  }, [])

  return (
    <div>
      <Header/>
      <Landing/>
      <About/>

      <Portfolio/>
      <div className = "card-display" style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", backgroundColor: "#424242"}}>
        {Data.map(element => <Card Project_name = {element.Project_name} Project_image = {element.Project_image} Project_description = {element.Project_description} Project_git = {element.Project_git}/>)}
      </div>
      <GetInTouch/>
    </div>
  );
}


export default App;
