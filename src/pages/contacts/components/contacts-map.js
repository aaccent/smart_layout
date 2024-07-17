import { Map, Marker, LngLatBounds } from 'mapbox-gl'

void function () {
  const mapContainer = document.querySelector('.contacts__map')

  if (!mapContainer) return

  const coords = mapContainer.dataset.coords.split(',')
  const lngLatObject = {
    lng: coords[0],
    lat: coords[1],
  }

  const map = new Map({
    container: mapContainer,
    center: coords, //[49.093589, 55.826865],
    zoom: 10,
    accessToken: 'pk.eyJ1Ijoic2V2YS1hYWNjZW50IiwiYSI6ImNsb2ZlNzR0NDByajUya3FwcmQ4bHdoZG8ifQ.2oZ5rpkSs2dKoP5a10lkcg',
    style: 'mapbox://styles/seva-aaccent/clretvjxt00d401qngujcacgz',
    dragRotate: false,
    cooperativeGestures: true,
    locale: {
      'ScrollZoomBlocker.CtrlMessage': 'ctrl + scroll для увеличения масштаба карты',
      'ScrollZoomBlocker.CmdMessage': '⌘ + scroll для увеличения масштаба карты',
      'TouchPanBlocker.Message': 'Используйте два пальца чтобы подвинуть карту',
      'NavigationControl.ZoomIn': 'Увеличить',
      'NavigationControl.ZoomOut': 'Уменьшить',
    },
  })

  const elContainer = document.createElement('div')
  elContainer.className = 'marker-container'
  const el = document.createElement('div')
  el.className = 'contacts__map-marker'
  elContainer.appendChild(el)
  const marker = new Marker(elContainer, { anchor: 'bottom' }).setLngLat(lngLatObject)
  marker.addTo(map)
}()


