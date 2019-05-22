const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animals`).then(e => e.json())
    },
    deleteAnimal(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(e => e.json())
    }
}