import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._city = props.activeCity;
    this._markers = [];
  }

  componentDidMount() {
    const {offers, card} = this.props;
    this._createMap(this._city);
    this._markers = this._createMarkers(offers, card);
  }

  componentDidUpdate() {
    const {offers, card, activeCity} = this.props;
    if (this._city.name !== activeCity.name) {
      this._city = activeCity;
      this._removeMap();
      this._createMap(this._city);
    }
    this._removeMarkers();
    this._markers = this._createMarkers(offers, card);
  }

  componentWillUnmount() {
    this._removeMap();
  }

  render() {
    return <div id="map" style={{height: `100%`}}></div>;
  }

  _createMarkers(offers, card) {
    if (offers.length === 0 && Array.isArray(offers)) {
      return null;
    }
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/active-pin.svg`,
      iconSize: [30, 30]
    });
    return (
      offers.map((offer) => {
        if (offer.id !== card) {
          return (
            leaflet
              .marker(offer.coordinates, {icon})
              .addTo(this._map)
          );
        } else {
          return (
            leaflet
              .marker(offer.coordinates, {activeIcon})
              .addTo(this._map)
          );
        }
      })
    );
  }

  _createMap(city) {
    const location = [city.location.latitude, city.location.longitude];
    const zoom = city.location.zoom;

    this._map = leaflet.map(`map`, {
      center: location,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(location, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`})
      .addTo(this._map);
  }

  _removeMarkers() {
    if (this._markers !== null) {
      this._markers.forEach((marker) => marker.remove());
    }
  }

  _removeMap() {
    this._map.remove();
    this._map = null;
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  card: PropTypes.number.isRequired,
  activeCity: PropTypes.object.isRequired
};
