import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._markers = [];
  }

  componentDidMount() {
    const {offers, card} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;

    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`})
      .addTo(this._map);
    this._markers = this._createMarkers(offers, card);
  }

  componentDidUpdate() {
    const {offers, card} = this.props;

    this._removeIcons();
    this._markers = this._createMarkers(offers, card);
  }

  componentWillUnmount() {
    this._removeMap();
  }

  render() {
    return <div id="map" style={{height: `100%`}}></div>;
  }

  _createMarkers(offers, card) {
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

  _removeIcons() {
    this._markers.forEach((marker) => marker.remove());
  }

  _removeMap() {
    this._map.remove();
    this._map = null;
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  card: PropTypes.number.isRequired
};
