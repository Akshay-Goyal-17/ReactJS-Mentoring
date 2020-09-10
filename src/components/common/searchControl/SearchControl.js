import React from 'react';
import Button from '../button/Button';
import './SearchControl.less';

export default function SearchControl(){
    return(
        <div className="searchContainer clearfix">
            <h1>FIND YOUR MOVIE</h1>
            <input type="text" className="left-align" placeholder="What do you want to watch?"/>
            <Button title="SEARCH" class="btn btn-md btn-main" />
        </div>
    );
}