import React from 'react'; 

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class NewsList extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            error: null, 
            isLoaded: false,
            hits: [], 
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true})

        fetch(API + DEFAULT_QUERY)
            .then(res => res.json())
            .then(data => this.setState({ hits: data.hits, isLoading: false }))
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        console.log(this.state.hits);
        const { error, isLoaded, hits } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {hits.map(hit => (
                        <li key={hit.objectID}>
                           <a href={hit.url}>{hit.title}</a>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default NewsList;
