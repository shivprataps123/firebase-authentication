// ArtistCards.jsx
const artists = [
  {
    id: 1,
    name: "Thomas Edward",
    username: "@thewildwithyou",
    cover:
      "https://images.unsplash.com/photo-1745594618508-6e3abfce30ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Chris Doe",
    username: "@thewildwithyou",
    cover:
      "https://plus.unsplash.com/premium_photo-1745587999259-0e6f256a81d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 3,
    name: "Emily Rose",
    username: "@artbyemily",
    cover: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 4,
    name: "Sophia Lin",
    username: "@sophiapaints",
    cover: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "David Chen",
    username: "@sketchydave",
    cover:
      "https://plus.unsplash.com/premium_photo-1741194732641-eca20483c388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

export default function ArtistCards() {
  return (
    <div className="w-full max-w-xs p-4">
      {/* Tabs */}
      <div className="flex mb-4 space-x-4">
        <button className="font-semibold text-black">Artists</button>
        <button className="text-gray-400">Photographers</button>
      </div>

      {/* Cards */}
      <div className="space-y-6 container overflow-y-auto max-h-[60vh] pr-2">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="relative rounded-lg overflow-hidden shadow-md"
          >
            {/* Background Image */}
            <img
              src={artist.cover}
              alt="cover"
              className="w-full h-32 object-cover"
            />

            {/* Avatar */}
            <div className="absolute top-2 left-2 flex items-center">
              <div className="relative">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                {/* Online Green Dot */}
                <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
            </div>

            {/* Name & Username */}
            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="font-semibold text-sm">{artist.name}</h3>
              <p className="text-xs text-gray-300">{artist.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
