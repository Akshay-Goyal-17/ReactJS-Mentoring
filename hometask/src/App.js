import React from 'react';
import HelloComponent from './HelloComponent';
import HelloPureComponent from './HelloPureComponent';

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
const gitHubLink = React.createElement(
	'a', 
	{ href: "https://github.com/Akshay-Goyal-17/ReactJS-Mentoring.git" }, 
	'Akshay\'s GitHub'
);

function ShowGitHubLink(props) {
  return (
	<p style={{marginLeft:'20px'}}>
		Please find my work here: {props.link}
	</p>
  );
}

function App() {
return (
	<div>
		{welcomeMessage}
		<table className="table" style={{marginLeft:'20px'}}>
		<tbody>
			<HelloComponent/>
			<HelloPureComponent/>
		</tbody>
		</table>,
		<ShowGitHubLink link={gitHubLink}/>
	</div>
);
}

export default App;
