import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
    const position = [39.8283, -98.5793];

    return (
        <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)] border border-slate-700/30 bg-slate-900/95 backdrop-blur-2xl group">
             {/* Ambient Glow Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] rounded-3xl">
                <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-1000"></div>
            </div>

            {/* Glowing Border Animation */}
            <div className="absolute inset-0 rounded-3xl border border-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.1)] z-20 pointer-events-none"></div>

            <MapContainer 
                center={position} 
                zoom={4.5} 
                scrollWheelZoom={false} 
                dragging={false}
                zoomControl={false}
                doubleClickZoom={false}
                touchZoom={false}
                boxZoom={false}
                keyboard={false}
                className="w-full h-full z-0 outline-none"
                style={{ background: '#0f172a' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
            </MapContainer>
        </div>
    );
}
