const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/students/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function () {
            return fetch(`${remoteURL}/students`).then(e => e.json())
        }
    },
    deleteStudents: {
        value: function (id) {
            return fetch(`${remoteURL}/students/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(e => e.json())
        }
    },
    post: {
        value: function (newStudent) {
            return fetch(`${remoteURL}/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newStudent)
            }).then(data => data.json())
        }
    },
    put: {
        value: function (editStudent) {
            return fetch(`${remoteURL}/students/${editStudent.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editStudent)
            }).then(data => data.json());
        }
    }
})