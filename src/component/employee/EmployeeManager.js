const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function () {
            return fetch(`${remoteURL}/employees`).then(e => e.json())
        }
    },
    deleteEmployees: {
        value: function (id) {
            return fetch(`${remoteURL}/employees/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(e => e.json())
        }
    },
    post: {
        value: function (newEmployee) {
            return fetch(`${remoteURL}/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            }).then(data => data.json())
        }
    },
    put: {
        value: function (editEmployee) {
            return fetch(`${remoteURL}/employees/${editEmployee.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editEmployee)
            }).then(data => data.json());
        }
    }
})