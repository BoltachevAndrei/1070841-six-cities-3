import * as React from 'react';
import * as leaflet from 'leaflet';
import {City, Offer} from '../../types';

enum Icon {
  HEIGHT = 39,
  WIDTH = 27
}

interface Props {
  activeCity: City;
  card: number;
  offers: Array<Offer>;
}

export default class Map extends React.PureComponent<Props, {}> {
  private _city: City;
  private _markers;
  private _map;

  constructor(props) {
    super(props);
    this._city = props.activeCity;
    this._markers = [];
    this._map = null;
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

  _createMarkers(offers, card) {
    if (offers.length === 0 && Array.isArray(offers)) {
      return null;
    }
    const notActiveIcon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [Icon.WIDTH, Icon.HEIGHT]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [Icon.WIDTH, Icon.HEIGHT]
    });
    return (
      offers.map((offer) => {
        if (offer.id !== card) {
          return (
            leaflet
              .marker(offer.coordinates, {icon: notActiveIcon})
              .addTo(this._map)
          );
        } else {
          return (
            leaflet
              .marker(offer.coordinates, {icon: activeIcon})
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

  render() {
    return <div id="map" style={{height: `100%`}}></div>;
  }
}

