import {RandomCharacterPage} from 'Website/Pages/RandomCharacterPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageName } from 'Resources/Enums/Website/PageName';
import { GetPagePathConfigForPageName } from 'Core/Helpers/GetPagePathConfigForPageName';
import { RedirectToRandomCharacterPageComponent } from './Components/RedirectComponents/RedirectToRandomCharacterPageComponent';

function App() {
  const homePagePathConfig = GetPagePathConfigForPageName(PageName.HomePage);
  const randomCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.RandomCharacter);
  const newRandomCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.NewRandomCharacter);

  return (
    <Router>
      <Switch>
            {/** Random character */}
            <Route path={randomCharacterPagePathConfig.pathModel} exact render={(props) => {
              return (<RandomCharacterPage seed={props.match.params.seed} />)
            }} />

            {/** New Random character */}
            <Route path={newRandomCharacterPagePathConfig.pathModel} exact component={RedirectToRandomCharacterPageComponent}/>

            {/** HomePage */}
            <Route path={homePagePathConfig.pathModel} exact component={RedirectToRandomCharacterPageComponent}/>

            {/** Default page (404) */}
            <Route component={RedirectToRandomCharacterPageComponent} />
      </Switch>

    </Router>
  );
}

export default App;
