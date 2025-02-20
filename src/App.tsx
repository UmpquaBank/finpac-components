
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/fin_pac/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  