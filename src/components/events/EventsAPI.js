const EventsAPI = {
  all: function() {
    return fetch('https://trackdays-api.herokuapp.com/events').then(res => res.json())
  }
}

export default EventsAPI
