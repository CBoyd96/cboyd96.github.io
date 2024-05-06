const { useState } = React;

function WelcomeForm() {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username) {
            alert('Please enter your name.');
            return;
        }

        fetch('process.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${encodeURIComponent(username)}`
        })
            .then(response => response.text())
            .then(text => setMessage(text))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Welcome! Please enter your name:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            <div>{message}</div>
        </div>
    );
}

ReactDOM.render(<WelcomeForm />, document.getElementById('root'));

