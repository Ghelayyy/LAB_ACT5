var form = document.getElementById('form');
var results = document.getElementById('results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

document.getElementById('postButton').addEventListener('click', function () {
    var subject = document.getElementById('subject').value;
    var course = document.getElementById('course').value;

    var url = 'https://jsonplaceholder.typicode.com/posts';

    // Perform a POST request without specifying 'id' in the payload
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: subject,
            course: course,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        results.innerHTML = `
            <p>The subject is : ${data.title}</p>
            <p>The course is : ${data.course}</p>
        `;
        // Clear input fields
        document.getElementById('subject').value = '';
        document.getElementById('course').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('getButton').addEventListener('click', function () {
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        // Perform a GET request
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            results.innerHTML = `
                <p>The subject is : ${data.title}</p>
                <p>The course is : ${data.course}</p>
            `;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('putButton').addEventListener('click', function () {
    var subject = document.getElementById('subject').value;
    var course = document.getElementById('course').value;
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        // Perform a PUT (update) request
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                title: subject,
                course: course,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            results.innerHTML = `<p>Update successful</p>`;
            // Clear input fields after edit
            document.getElementById('subject').value = '';
            document.getElementById('course').value = '';
            document.getElementById('id').value = '';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('deleteButton').addEventListener('click', function () {
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        // Perform a DELETE request
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (response.status === 200) {
                console.log('Delete successful');
                results.innerHTML = `<p>Delete successful</p>`;
                // Clear input fields after delete
                document.getElementById('subject').value = '';
                document.getElementById('course').value = '';
                document.getElementById('id').value = '';
            } else {
                console.error('Delete failed');
                results.innerHTML = `<p>Delete failed</p>`;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});
