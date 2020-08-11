import React from 'react';
import MovieCard from './components/common/movieCard/MovieCard';
import Header from './components/homepage/header';
import Footer from './components/common/footer/Footer';
import SearchControl from './components/common/searchControl/SearchControl';
import './styles/styles.less'

function App() {
    return (
        <div>
			<Header/>
            <SearchControl />
			<Footer />
        </div>
    );
}

export default App;