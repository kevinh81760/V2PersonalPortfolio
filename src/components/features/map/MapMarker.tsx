import { Marker } from 'react-map-gl/mapbox';
import { MapPin } from 'lucide-react';

interface MapMarkerProps {
  longitude: number;
  latitude: number;
  label?: string;
}

export function MapMarker({ longitude, latitude, label }: MapMarkerProps) {
  return (
    <Marker longitude={longitude} latitude={latitude} anchor="bottom">
      <div className="relative flex flex-col items-center group cursor-pointer">
        {/* Pulsing ring effect */}
        <div className="absolute -top-8 w-12 h-12 bg-emerald-400/30 rounded-full animate-ping" />
        
        {/* Pin icon with glass morphism */}
        <div 
          className="relative z-10 p-2 rounded-full border border-emerald-400/50 shadow-lg"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            background: 'rgba(16, 185, 129, 0.2)',
          }}
        >
          <MapPin 
            className="w-6 h-6 text-emerald-400" 
            fill="currentColor"
            strokeWidth={1.5}
          />
        </div>

        {/* Optional label tooltip */}
        {label && (
          <div 
            className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap border border-white/20"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              background: 'rgba(0, 0, 0, 0.8)',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            {label}
          </div>
        )}
      </div>
    </Marker>
  );
}
