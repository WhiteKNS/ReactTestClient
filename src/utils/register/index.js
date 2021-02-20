function register (email, digest) {
    // Send the credentials to the server
    const payload = { email, digest };
    const request = new Request('http://localhost:8088/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(payload)
    })
    return fetch(request)
        .then(response => {
            if (response.status === 201) {
                return response.text();
            } else {
                throw new Error('Error creating new user');
            }
        })
}

export default register;