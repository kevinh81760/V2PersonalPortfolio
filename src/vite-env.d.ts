/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_TOKEN: string;
  // Add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Type declaration for react-map-gl
declare module 'react-map-gl/mapbox' {
  import { CSSProperties, ReactNode } from 'react';
  import type { Map as MapboxMap } from 'mapbox-gl';
  
  export interface ViewState {
    longitude: number;
    latitude: number;
    zoom: number;
    pitch?: number;
    bearing?: number;
  }
  
  export interface ViewStateChangeEvent {
    viewState: ViewState;
  }
  
  export interface MapProps {
    mapboxAccessToken: string;
    mapStyle: string;
    style?: CSSProperties;
    longitude: number;
    latitude: number;
    zoom: number;
    pitch?: number;
    bearing?: number;
    onMove?: (evt: ViewStateChangeEvent) => void;
    children?: ReactNode;
    attributionControl?: boolean;
    reuseMaps?: boolean;
  }
  
  export default function Map(props: MapProps): JSX.Element;
  
  export interface MarkerProps {
    longitude: number;
    latitude: number;
    anchor?: 'center' | 'top' | 'bottom' | 'left' | 'right';
    children?: ReactNode;
  }
  
  export function Marker(props: MarkerProps): JSX.Element;
  
  export interface NavigationControlProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    style?: CSSProperties;
  }
  
  export function NavigationControl(props: NavigationControlProps): JSX.Element;
}

