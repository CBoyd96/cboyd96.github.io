const { useState } = React;

function WelcomeForm() {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username.trim()) {
            alert('Please enter your name.');
            return;
        }
        setMessage(`Hello, ${username}! Welcome to our site.`);
        setUsername(''); // Clear the input after setting the message
    };

    return (
        <div>
            <h1>Welcome! Please enter your name:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

ReactDOM.render(<WelcomeForm />, document.getElementById('root'));
