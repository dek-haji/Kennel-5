const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/students/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/students`).then(e => e.json())
    },
    deleteStudent(id) {
        return fetch(`${remoteURL}/students/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(e => e.json())
    }
}