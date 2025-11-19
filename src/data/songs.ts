// Your music library
// Add your MP3 files to /public/music/ folder

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  audioUrl: string; // Path to MP3 in public folder
  coverArt?: string; // Optional album art
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Get Wid Lemonade',
    artist: 'Artist Name',
    album: 'KevOS Collection',
    duration: '3:30',
    audioUrl: '/music/Get Wid Lemonade.mp3',
  },
  {
    id: '2',
    title: 'Obskür Bayside',
    artist: 'Artist Name',
    album: 'KevOS Collection',
    duration: '3:45',
    audioUrl: '/music/Obskür Bayside Official Audio.mp3',
  },
  // Add more songs here...
];

