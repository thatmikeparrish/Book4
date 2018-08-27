import React, { Component } from 'react';

const remoteURL = "http://localhost:8088"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/animals`).then(e => e.json())
        }
    },
    deleteAnimal: {
        value: function (id) {
            fetch(`${remoteURL}/animals/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`${remoteURL}/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
        }
    }
})