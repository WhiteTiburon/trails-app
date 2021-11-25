import React, { useRef, useEffect } from 'react';
import mapboxgl, {Popup} from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NhbXBiZWxsOCIsImEiOiJja3VoMnYwejIxNWZkMm5waDQ0dDlib212In0.Jj7xo4k-Cp31dsj9-F7DAg';

export default function App() {
const mapContainer = useRef(null);
const map = useRef(null);
//const [lng, setLng] = useState(-104.800644);
//const [lat, setLat] = useState(38.846127);
//const [zoom, setZoom] = useState(11);

useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/scampbell8/ckw9zieuw14al14o46dgta1ja',
center: [-104.800644, 38.846127],
zoom: 10
});
});

//useEffect(() => {
//if (!map.current) return; // wait for map to initialize
//map.current.on('move', () => {
//setLng(map.current.getCenter().lng.toFixed(4));
//setLat(map.current.getCenter().lat.toFixed(4));
//setZoom(map.current.getZoom().toFixed(2));
//});
//});

useEffect( () =>{
	map.current.on('load', () => {

			map.current.addSource('places', {
				'type': 'geojson',
				'data': {
					"type": "FeatureCollection",
					"features": [
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.93396, 38.85582, 2045.0]
							},
							"properties": {
								"name": "Barr Trail",
								"miles": 25.0,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.93167, 38.85616, 2010.0]
							},
							"properties": {
								"name": "The Incline Trail",
								"miles": 4.0,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88642, 38.94905, 2166.0]
							},
							"properties": {
								"name": "Blodgett Peak",
								"miles": 3.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88611, 38.94886, 2163.0]
							},
							"properties": {
								"name": "Blodgett Peak Open Space Connector Loop",
								"miles": 1.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.888, 38.94913, 2182.0]
							},
							"properties": {
								"name": "Blodgett Peak Open Space Loop",
								"miles": 1.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88547, 38.94741, 2162.0]
							},
							"properties": {
								"name": "Front Range Ridge via Douglas Fir Trail",
								"miles": 4.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.8731, 38.84862, 1874.0]
							},
							"properties": {
								"name": "Hodgeback Valley and Codell Loop",
								"miles": 1.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88711, 38.79186, 2082.0]
							},
							"properties": {
								"name": "Mount Cutler Trail",
								"miles": 1.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Point",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88659, 38.79175, 2087.0]
							},
							"properties": {
								"name": "Mount Muscoco Trail",
								"miles": 4.0,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.93102, 38.95031, 2847.0]
							},
							"properties": {
								"name": "Ormes Peak East Face",
								"miles": 0.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.93407, 38.94534, 2868.0]
							},
							"properties": {
								"name": "Ormes Peak Trail",
								"miles": 0.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88057, 38.8817, 1979.0]
							},
							"properties": {
								"name": "Palmer, Buckskin-Charley, Niobrara, and Bretag Trail Loop",
								"miles": 4.0,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88036, 38.88106, 1978.0]
							},
							"properties": {
								"name": "Palmer, Cabin Canyon, Strausenbach, and Central Gardens Trail Loop",
								"miles": 4.0,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.89079, 38.82182, 2028.0]
							},
							"properties": {
								"name": "Palmer Trail (Section 16)",
								"miles": 5.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88026, 38.88104, 1978.0]
							},
							"properties": {
								"name": "Perkins Central Garden Trail",
								"miles": 1.1,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87832, 38.85177, 1886.0]
							},
							"properties": {
								"name": "Quarry via Red Rock Canyon Trail",
								"miles": 0.6,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87817, 38.85187, 1886.0]
							},
							"properties": {
								"name": "Red Rock Rim Trail to Palmer Trail To Greenlee Trail",
								"miles": 5.4,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88616, 38.94895, 2164.0]
							},
							"properties": {
								"name": "Red Squirrel Trail to Douglas Fir Trail",
								"miles": 3.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87925, 38.85331, 1888.0]
							},
							"properties": {
								"name": "Sand Canyon, Mesa, Greenlee, Red Rock Canyon Loop",
								"miles": 5.4,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90399, 38.79068, 2296.0]
							},
							"properties": {
								"name": "Seven Bridges Trail",
								"miles": 3.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90395, 38.79059, 2294.0]
							},
							"properties": {
								"name": "St. Mary's Falls Trail",
								"miles": 5.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.86627, 38.84603, 1856.0]
							},
							"properties": {
								"name": "Captain Jacks & Big Bikes OHV Route",
								"miles": 35.6,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87976, 38.85304, 1888.0]
							},
							"properties": {
								"name": "Greenlee and Mesa Loop to Off Leash Dog Area",
								"miles": 2.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.85709, 38.92498, 1999.0]
							},
							"properties": {
								"name": "High Arches Trail and Ute Valley Regional Park Trail Loop",
								"miles": 1.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90348, 38.84262, 2026.0]
							},
							"properties": {
								"name": "Intemann Trail",
								"miles": 3.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87977, 38.85338, 1887.0]
							},
							"properties": {
								"name": "Mesa, Greenlee and Red Rock Canyon Path Loop",
								"miles": 1.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.8835, 38.87623, 1970.0]
							},
							"properties": {
								"name": "Palmer Trail to Siamese Twins",
								"miles": 1.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.89651, 38.86584, 1931.0]
							},
							"properties": {
								"name": "Rampart Range Road",
								"miles": 22.1,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87931, 38.85326, 1888.0]
							},
							"properties": {
								"name": "Sand Canyon, Mesa, Greenlee, Red Rock Canyon Loop",
								"miles": 5.4,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88494, 38.87218, 1939.0]
							},
							"properties": {
								"name": "Scotsman Trail Loop",
								"miles": 1.0,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.89038, 38.86806, 1928.0]
							},
							"properties": {
								"name": "Siamese Twins Loop Trail",
								"miles": 0.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.89881, 38.98932, 2273.0]
							},
							"properties": {
								"name": "Stanley Canyon Trail to Stanley Reservoir",
								"miles": 4.1,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88654, 38.9911, 2192.0]
							},
							"properties": {
								"name": "Stanley Canyon Trail",
								"miles": 5.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88051, 38.88123, 1977.0]
							},
							"properties": {
								"name": "Susan G. Bertag Trail and Palmer Trail Loop",
								"miles": 2.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.88236, 38.87528, 1971.0]
							},
							"properties": {
								"name": "Upper Loop Trail",
								"miles": 0.4,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.86511, 38.97494, 2045.0]
							},
							"properties": {
								"name": "USAFA Stairs",
								"miles": 0.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87814, 38.86984, 1954.0]
							},
							"properties": {
								"name": "Ute Trail",
								"miles": 1.1,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.85676, 38.9249, 2000.0]
							},
							"properties": {
								"name": "Ute Valley Park Loop Trail",
								"miles": 3.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.85711, 38.92494, 1999.0]
							},
							"properties": {
								"name": "Ute Valley Park Trail",
								"miles": 2.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.89821, 38.98854, 2268.0]
							},
							"properties": {
								"name": "West Monument Creek Loop Trail [PRIVATE PROPERTY]",
								"miles": 9.6,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90104, 38.97268, 2188.0]
							},
							"properties": {
								"name": "West Monument Creek Trail 713 to Northfield Reservoir",
								"miles": 5.6,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90361, 38.79043, 2295.0]
							},
							"properties": {
								"name": "Bear Creek Trail",
								"miles": 6.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90369, 38.79063, 2302.0]
							},
							"properties": {
								"name": "Cheyenne Canyon to Mount Rosa",
								"miles": 13.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.9041, 38.79047, 2288.0]
							},
							"properties": {
								"name": "Three Peaks Loop North Cheyenne Canyon",
								"miles": 10.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90418, 38.79079, 2292.0]
							},
							"properties": {
								"name": "Mount Garfield Peak",
								"miles": 9.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90347, 38.79027, 2290.0]
							},
							"properties": {
								"name": "Mount Buckhorn Peak",
								"miles": 3.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.904, 38.79087, 2302.0]
							},
							"properties": {
								"name": "Kineo Mountain via Seven Bridges Trail",
								"miles": 6.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.90401, 38.79085, 2302.0]
							},
							"properties": {
								"name": "Loud's Cabin",
								"miles": 6.2,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.94449, 38.78736, 2791.0]
							},
							"properties": {
								"name": "Jones Park 701 Connector Trail",
								"miles": 2.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.89954, 38.80049, 2405.0]
							},
							"properties": {
								"name": "Mays Peak Trail (Northwest Approach)",
								"miles": 1.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87561, 38.79217, 1997.0]
							},
							"properties": {
								"name": "Helen Hunt Falls via North Cheyenne Canyon Rd",
								"miles": 7.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.87924, 38.79164, 2021.0]
							},
							"properties": {
								"name": "Columbine and Spring Creek Trail",
								"miles": 2.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.8791, 38.79158, 2023.0]
							},
							"properties": {
								"name": "Middle Columbine Trail",
								"miles": 5.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.83121, 38.83123, 1823.0]
							},
							"properties": {
								"name": "Midland Trail",
								"miles": 7.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.85993, 38.82469, 1880.0]
							},
							"properties": {
								"name": "Bear Creek Dog Park Trail",
								"miles": 2.0,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.85642, 38.82341, 1867.0]
							},
							"properties": {
								"name": "Lower Bear Creek Park",
								"miles": 2.6,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.82973, 38.8456, 1837.0]
							},
							"properties": {
								"name": "Pikes Peak Greenway",
								"miles": 2.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.82611, 38.84531, 1844.0]
							},
							"properties": {
								"name": "Monument Valley Park Loop",
								"miles": 1.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.76673, 38.87651, 1989.0]
							},
							"properties": {
								"name": "Kinnickinnick Trail",
								"miles": 1.6,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.7726, 38.88001, 2000.0]
							},
							"properties": {
								"name": "Yucca, Mesa, and Edna Mae Bennet Short Loop",
								"miles": 1.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.77805, 38.87756, 1939.0]
							},
							"properties": {
								"name": "Palmer Point Trail",
								"miles": 3.2,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.77236, 38.87998, 2000.0]
							},
							"properties": {
								"name": "Templeton and Mesa Trail Loop",
								"miles": 3.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.76195, 38.86986, 1942.0]
							},
							"properties": {
								"name": "Palmer Park Ramble",
								"miles": 2.2,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.777, 38.87337, 2010.0]
							},
							"properties": {
								"name": "Cheyenne and Grandview Trail Loop",
								"miles": 1.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.77809, 38.87772, 1940.0]
							},
							"properties": {
								"name": "Edna Mae Bennet Nature Trail",
								"miles": 2.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.76683, 38.87657, 1990.0]
							},
							"properties": {
								"name": "Palmer Park Outer Loop Trail",
								"miles": 7.4,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.77778, 38.8777, 1940.0]
							},
							"properties": {
								"name": "Templeton Trail",
								"miles": 3.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.70561, 38.82435, 1894.0]
							},
							"properties": {
								"name": "Eagle Park Trail",
								"miles": 0.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.74835, 38.82516, 1851.0]
							},
							"properties": {
								"name": "Sand Creek Trail",
								"miles": 5.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.73408, 38.79271, 1828.0]
							},
							"properties": {
								"name": "Meadowlark Loop",
								"miles": 0.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.64027, 38.7399, 1743.0]
							},
							"properties": {
								"name": "Morton Loop Trail (MoLT)",
								"miles": 0.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.7147, 38.7087, 1708.0]
							},
							"properties": {
								"name": "Fountain Creek Regional Trail",
								"miles": 16.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.72628, 38.72253, 1721.0]
							},
							"properties": {
								"name": "Willow Springs Ponds Loop",
								"miles": 0.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.69444, 38.74382, 1780.0]
							},
							"properties": {
								"name": "Big Bluestem and Meadowlark Loop",
								"miles": 8.3,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.71632, 38.71004, 1708.0]
							},
							"properties": {
								"name": "Fountain Creek Nature Trail",
								"miles": 1.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.59331, 38.94551, 2100.0]
							},
							"properties": {
								"name": "Rock Island Trail",
								"miles": 17.1,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.66038, 39.02254, 2327.0]
							},
							"properties": {
								"name": "The Pineries Open Space",
								"miles": 8.6,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.66871, 38.99904, 2264.0]
							},
							"properties": {
								"name": "Black Forest Section 16 Loop",
								"miles": 3.8,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.69759, 38.89944, 2036.0]
							},
							"properties": {
								"name": "Sandstone Loop",
								"miles": 0.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.71581, 38.92046, 2075.0]
							},
							"properties": {
								"name": "Snowy River Loop",
								"miles": 0.4,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.72841, 38.91064, 2096.0]
							},
							"properties": {
								"name": "Homestead Trail",
								"miles": 6.4,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.72831, 38.91075, 2096.0]
							},
							"properties": {
								"name": "Chaparral Trial",
								"miles": 2.1,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.81523, 38.93146, 1919.0]
							},
							"properties": {
								"name": "Santa Fe Hike/Bike Trail to Pulpit Rock",
								"miles": 5.5,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.81824, 38.93324, 1922.0]
							},
							"properties": {
								"name": "Pikes Peak Greenway Trail: New Santa Fe to Bear Creek Park",
								"miles": 9.7,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						},
						{
							"type": "Feature",
							"geometry": {
								"type": "Point",
								"coordinates": [-104.81826, 38.93318, 1922.0]
							},
							"properties": {
								"name": "Santa Fe Regional Trail",
								"miles": 16.9,
								"desc": "Generated by AllTrails https://www.alltrails.com/"
							}
						}
					]
				}


			});
			// Add a layer showing the places.
			map.current.addLayer({
				'id': 'places',
				'type': 'circle',
				'source': 'places',
				'paint': {
					'circle-color': '#4264fb',
					'circle-radius': 4,
					'circle-stroke-width': 2,
					'circle-stroke-color': '#ffffff'
				}
			});

			// Create a popup, but don't add it to the map yet.
			const popup = new Popup({
				closeButton: false,
				closeOnClick: false
			});

			map.current.on('mouseenter', 'places', (e) => {
				// Change the cursor style as a UI indicator.
				map.current.getCanvas().style.cursor = 'pointer';

				// Copy coordinates array.
				const coordinates = e.features[0].geometry.coordinates.slice();
				const description = e.features[0].properties.name + ": " + e.features[0].properties.miles + " miles";

				// Ensure that if the map is zoomed out such that multiple
				// copies of the feature are visible, the popup appears
				// over the copy being pointed to.
				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
				}

				// Populate the popup and set its coordinates
				// based on the feature found.
				popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
			});

			map.current.on('mouseleave', 'places', () => {
				map.current.getCanvas().style.cursor = '';
				popup.remove();
			});
		});
});

return (
<div>
<div ref={mapContainer} className="map-container" />
</div>
);
}