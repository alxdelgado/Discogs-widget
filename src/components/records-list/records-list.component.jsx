import React from 'react'; 

class RecordsList extends React.Component {
    constructor() {
        super(); 

        this.state = {
            error: null, 
            isLoaded: false,
            records: [], 
        }
    }

    componentDidMount() {
        fetch('https://api.discogs.com/database/search?q=Nirvana&token=abcxyz123456')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true, 
                        items: result.items
                    }); 
                },
                (error) => {
                    this.setState({
                        isLoaded: true, 
                        error
                    }); 
                }
            )
    }

    render() {
        const { error, isLoaded, records } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {records.map(record => (
                        <li key={record.id}>
                            {record.title} {record.body}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default RecordsList;