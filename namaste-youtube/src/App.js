import './App.css';
import Body from './components/Body.js';
import Head from './components/Head.js';
import { Provider } from 'react-redux';
import store from './utils/store.js';

function App() 
{
    return (
        <Provider store={store}>
            <div>
                <Head />
                <Body />
                {
                    /**
                     * Head
                     * Body
                     *     Sidebar
                     *          MenuItems
                     *      MainContainer
                     *          ButtonList
                     *          VideoContainer
                     *      VideoCard
                     */
                }
            </div>
        </Provider>
  );
}

export default App;
