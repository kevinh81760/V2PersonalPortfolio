import { useState } from 'react';
import Map, { NavigationControl, ViewStateChangeEvent } from 'react-map-gl/mapbox';
import { MapMarker } from './MapMarker';
import { MAPBOX_TOKEN, MAP_CONFIG, MAP_CENTER } from './mapConfig';
import 'mapbox-gl/dist/mapbox-gl.css';

export function LocationMap() {
  const [viewState, setViewState] = useState(MAP_CONFIG.initialViewState);

  const handleMove = (evt: ViewStateChangeEvent) => {
    setViewState({
      ...evt.viewState,
      pitch: evt.viewState.pitch ?? 0,
      bearing: evt.viewState.bearing ?? 0,
    });
  };

  // Debug: Check if token is loaded
  console.log('Mapbox Token:', MAPBOX_TOKEN ? 'Loaded ✓' : 'Missing ✗');

  return (
    <div 
      style={{ 
        width: '400px', 
        height: '400px', 
        marginLeft: 'auto',
        marginRight: '4px', // Matches nav px-12 (3rem = 48px)
        marginTop: '24px'
      }}
      className="mapbox-container overflow-hidden rounded-xl border border-white/20 shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]"
    >
      <style>{`
        .mapbox-container .mapboxgl-ctrl-logo,
        .mapbox-container .mapboxgl-ctrl-attrib {
          display: none !important;
        }
      `}</style>
      <Map
        {...viewState}
        onMove={handleMove}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle={MAP_CONFIG.mapStyle}
        style={{ width: '100%', height: '100%', borderRadius: '0.75rem' }}
        attributionControl={false}
        reuseMaps
      >
        {/* Custom Marker - no label */}
        <MapMarker
          longitude={MAP_CENTER.longitude}
          latitude={MAP_CENTER.latitude}
        />

        {/* Navigation controls (zoom buttons) - styled to match theme */}
        <NavigationControl 
          position="bottom-right" 
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
          }}
        />
      </Map>
    </div>
  );
}

