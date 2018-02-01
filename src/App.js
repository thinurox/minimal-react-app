import React from 'react'

class App extends React.Component {
    constructor (props) {
        super(props)
        fetch('http://localhost:8082/api')
            .then(response => {
                if (response.status != 200) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
    }

    render () {
        return (
            <div>
                <h1>Hello to React app</h1>
            </div>
        )
    }
}

export default App
