import React from 'react';
import Header from './components/homepage/header';
import Footer from './components/common/footer/Footer';
import Body from './components/homepage/Body';
import ErrorBoundary from './error/ErrorBoundary';
import './styles/styles.less';

function App() {
    return (
        <>
        <ErrorBoundary>
			<Header/>
			<div className="separator"></div>
			<Body/>
			<Footer />
        </ErrorBoundary>
        </>
    );
}

export default App;