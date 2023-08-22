import { Typography } from "@mui/material";
import PlaylistCard from "../components/PlaylistCard";

const playlistInfo = [
  { name: 'maChills', creator: 'kuzeyko' },
  { name: 'classiscs', creator: 'enonder' },
  { name: 'maMen', creator: 'koseKuzey' },
  { name: 'Gym', creator: 'onder.e' }
]

const Playlists = () => {
  return (
    <div >
      <Typography variant="h3">Playlists</Typography>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: 24 }}>{playlistInfo.map(playlistItem => (
        <PlaylistCard name={playlistItem.name} creator={playlistItem.creator} />
      ))}</div>
    </div>
  )
}

export default Playlists;
