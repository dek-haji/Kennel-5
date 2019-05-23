const remoteURL = "http://localhost:5002"
// const animalURL = "http://localhost:5002/animals"


export default Object.create(null, {
    get: {
        value: function (id) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function () {
            return fetch(`${remoteURL}/animals`).then(e => e.json())
        }
    },
    deleteAnimal: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(e => e.json())
        }
    },
    post: {
        value: function (newAnimal) {
            return fetch(`${remoteURL}/animals`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAnimal)
            }).then(data => data.json())
        }
    },
    put: {
        value: function (editedAnimal) {
            return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editedAnimal)
            }).then(data => data.json());
        }
    }
})