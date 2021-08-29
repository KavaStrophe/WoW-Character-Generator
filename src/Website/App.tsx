import {RandomCharacterPage} from 'Website/Pages/RandomCharacterPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageName } from 'Resources/Enums/Website/PageName';
import { GetPagePathConfigForPageName } from 'Core/Helpers/DictionaryHelpers/GetPagePathConfigForPageName';
import { RedirectToRandomCharacterPageComponent } from './Components/RedirectComponents/RedirectToRandomCharacterPageComponent';
import { MainLayout } from './Layouts/MainLayout';
import { SavedCharactersPageComponent } from './Pages/SavedCharactersPageComponent';

function App() {
  const homePagePathConfig = GetPagePathConfigForPageName(PageName.HomePage);
  const randomCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.RandomCharacter);
  const newRandomCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.NewRandomCharacter);
  const savedCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.SavedCharacters);

  return (
    <Router>
        <MainLayout children={ (
            <Switch>
                  {/** Saved characters */}
                  <Route path={savedCharacterPagePathConfig.pathModel} exact component={SavedCharactersPageComponent}/>

                  {/** Random character */}
                  <Route path={randomCharacterPagePathConfig.pathModel} exact render={(props) => {
                    const seed = props.match.params.seed;
                    if(seed === undefined)
                      return (<RedirectToRandomCharacterPageComponent />)
                    return (<RandomCharacterPage seed={seed} />)
                  }} />
      
                  {/** New Random character */}
                  <Route path={newRandomCharacterPagePathConfig.pathModel} exact component={RedirectToRandomCharacterPageComponent}/>
      
                  {/** HomePage */}
                  <Route path={homePagePathConfig.pathModel} exact component={SavedCharactersPageComponent}/>
      
                  {/** Default page (404) */}
                  <Route component={RedirectToRandomCharacterPageComponent} />
            </Switch>
        )}/>
    </Router>
  );
}

export default App;
