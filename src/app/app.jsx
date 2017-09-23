import {NavLink} from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sVal: 0,
			data: null
		}	
	}

	componentDidMount() {
		fetch("/data", {
			method: 'GET'
		}).then(function(res) {
			try {
       			const data = res.json();
        	// Do your JSON handling here
    		} catch(err) {
        	// It is text, do you text handling here
        		return null
    		}
		}).then(function(data){
			if(data) {
				this.setState({data: data})
			}
		})
	}



	render() {
		var children = React.Children.map(this.props.children, (child) => {
    		return React.cloneElement(child, {
      			sVal: this.state.sVal
    		})
  		})
		return (
				<div id='content'>
					<ul>
					<li><NavLink to={'/main'} activeClassName="active">Prediction</NavLink></li>
					<li><NavLink to={'/sent'} activeClassName="active">Sentiment</NavLink></li>
					<li><NavLink to={'/corr'} activeClassName="active">Correlation</NavLink></li>
					</ul>
					{children}
				</div>
		)
	}
}

export default App