import React from 'react';

const welcomeMessage = React.createElement(
	'h1', 
	{
		className: 'welcome',
		align: 'center',
		style: 
		{
			color:'blue'
		}
	}, 
	'Hello World!'
);

function App() {
    return (
        <div>
            {welcomeMessage}
        </div>
    );
}
    
export default App;