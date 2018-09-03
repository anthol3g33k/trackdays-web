import React, { Component } from 'react';
import EventsAPI from './EventsAPI'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    EventsAPI.all()
      .then(data => this.setState({ events: data, isLoading: false }));
  }

  render() {
    const { events, isLoading } = this.state;

    if (isLoading) {
        return <p>Loading ...</p>;
      }

    return (
      <section className="bg-secondary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading text-white">Evénements:</h2>
              <h3>
                {
                  events.map(event =>
                    <li>{ event.name }</li>
                  )
                }
              </h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Events
