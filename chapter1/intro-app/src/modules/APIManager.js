const remoteURL = "http://localhost:8088"

export default Object.create(null, {
    get: {
        value: function (resources, id) {
            return fetch(`${remoteURL}/${resources}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (resources) {
            // console.log(`${remoteURL}/${resources}`)
            return fetch(`${remoteURL}/${resources}`).then(e => e.json())
        }
    },
    delete: {
        value: function (resources, id) {
            return fetch(`${remoteURL}/${resources}/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`${remoteURL}/${resources}`))
            .then(e => e.json())
            
        }
    }
})