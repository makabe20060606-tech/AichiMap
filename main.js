// セントレア中心
const map = L.map('map').setView([34.8584, 136.8050], 9);

// OpenStreetMap タイル
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// 東・南・北の端の観光地
const farthestPlaces = [
  { name: "茶臼山高原（東）", lat: 35.2219, lng: 137.6220 },
  { name: "恋路ヶ浜（南）", lat: 34.5968, lng: 137.0789 },
  { name: "犬山城（北）", lat: 35.3880, lng: 136.9397 }
];

// 青ピンアイコン
const blueIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// 地図に3地点だけ表示
farthestPlaces.forEach(place => {
  L.marker([place.lat, place.lng], { icon: blueIcon })
    .bindPopup(place.name)
    .addTo(map);
});
