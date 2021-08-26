import {HomePage} from 'Website/Pages/HomePage'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <Router>

      <Route path="/" exact render={() => {
        return (<Redirect to={`/${uuidv4()}`} />)
      }} />

      <Route path="/:seed" exact render={(props) => {
        return (<HomePage seed={props.match.params.seed} />)
        }} />

    </Router>
  );
}

export default App;
