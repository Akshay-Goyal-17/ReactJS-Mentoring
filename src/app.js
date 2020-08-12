import React from 'react';
import Header from './components/homepage/header';
import Footer from './components/common/footer/Footer';
import Body from './components/homepage/Body';
import './styles/styles.less';

function App() {
    return (
        <>
			<Header/>
			<div className="separator"></div>
			<Body/>
			<Footer />
        </>
    );
}

export default App;