import React from 'react';
import Button from '../common/button/Button';
import Logo from '../common/logo/Logo';

export default function Header(){
    return(
        <div className='container clearfix'>
            <Logo />
            <Button class='btn btn-default right-align' title='+ ADD MOVIE' />
        </div>
    );
}