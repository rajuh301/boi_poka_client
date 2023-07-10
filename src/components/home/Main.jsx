
import { Outlet } from 'react-router-dom';
import Footer from '../shaired/Footer';
import Home from './Home';
import ShowWriter from '../pages/ShowWriter';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <ShowWriter></ShowWriter>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;