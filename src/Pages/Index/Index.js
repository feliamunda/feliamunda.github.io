import './Index.scss'

import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import CV from '../../Components/CV/CV'
import Portfolio from '../../Components/Portfolio/Portfolio'

function Index() {
    return (
        <div className="index container">
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <CV></CV>
        </div>
    );
}

export default Index;