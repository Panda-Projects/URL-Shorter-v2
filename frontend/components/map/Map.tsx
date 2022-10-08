import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

// @ts-ignore
const Map = ({last10clicks}) => {

    return (
        <MapContainer center={[52.519444, 13.406667]} className="rounded-xl" zoom={5} scrollWheelZoom={false}
                      style={{height: 400, width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
            {last10clicks.map((value: any) => {
                if(value.city === "local") return;
                return (
                    <>
                        <Marker position={[value.lat, value.lon]}>
                            <Popup>
                                {value.city}
                            </Popup>
                        </Marker>
                    </>
                )
            })}
        </MapContainer>
    )
}

export default Map