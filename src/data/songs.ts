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
    artist: 'Kyle Davis',
    album: 'KevOS Collection',
    duration: '3:30',
    audioUrl: '/music/Get Wid Lemonade.mp3',
    coverArt: '/assets/Get Wid Lemonade.jpeg',
  },
  {
    id: '2',
    title: 'Obskur Bayside',
    artist: 'Obskur',
    album: 'KevOS Collection',
    duration: '3:45',
    audioUrl: '/music/Obskur Bayside Official Audio.mp3',
    coverArt: '/assets/obskur bayside.jpeg',
  },
  {
    id: '3',
    title: 'Down',
    artist: 'Jay Sean ft. Lil Wayne',
    album: 'KevOS Collection',
    duration: '3:30',
    audioUrl: '/music/Jay Sean Down ft Lil Wayne Lyrics.mp3',
    coverArt: '/assets/down.jpeg',
  },
  // Add more songs here...
];

