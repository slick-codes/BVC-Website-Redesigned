
// const map = document.querySelector('.message__map')

const map = L.map('map', {
    center: [4.4340589, 7.1754711]
}).setView([4.4340589, 7.1754711], 12)

const osm = L.tileLayer(`https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=62X3VodNUYD2iJzpPweJ`, {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map)
const marker = L.marker([4.4340589, 7.1754711]).addTo(map)



//
const stiker = document.querySelector('.leaflet-control-attribution.leaflet-control')
stiker.style.display = 'none'