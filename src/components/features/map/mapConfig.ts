// Mapbox Configuration
// Token loaded from .env file (VITE_MAPBOX_TOKEN)
export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

// Location: 88 E San Carlos St #1206, San Jose, CA 95112
export const MAP_CENTER = {
  longitude: -121.8858,
  latitude: 37.3308,
};

// Location details
export const LOCATION_INFO = {
  address: '88 E San Carlos St #1206',
  city: 'San Jose',
  state: 'CA',
  zip: '95112',
  fullAddress: '88 E San Carlos St #1206, San Jose, CA 95112',
};

// Initial map view configuration
export const MAP_CONFIG = {
  initialViewState: {
    ...MAP_CENTER,
    zoom: 14, // Good zoom level to see neighborhood
    pitch: 0, // 0 = top-down view, 60 = angled view
    bearing: 0, // Map rotation in degrees
  },
  // Street map style
  mapStyle: 'mapbox://styles/mapbox/streets-v12',
  
  // Map interaction settings
  interactive: true, // Set to false to disable zoom/pan
  
  // Animation settings
  transitionDuration: 1000, // Smooth transitions in ms
};

// Optional: Additional map styles you can switch between
export const MAP_STYLES = {
  streets: 'mapbox://styles/mapbox/streets-v12',
  dark: 'mapbox://styles/mapbox/dark-v11',
  light: 'mapbox://styles/mapbox/light-v11',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
  navigationNight: 'mapbox://styles/mapbox/navigation-night-v1',
};

// Marker styling configuration
export const MARKER_CONFIG = {
  color: '#10b981', // Emerald-400 to match your brand
  pulseColor: 'rgba(16, 185, 129, 0.3)',
  showLabel: true,
};
