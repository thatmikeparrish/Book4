import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                <section>
                    <h4>Nashville North</h3>
                    <p>123 Address Dr. Nashville, TN</p>
                </section>
                <section>
                    <h4>Nashville South</h4>
                    <p>456 Address Dr. Nashville, TN</p>
                </section>
            </article>
        );
    }
}