
const songs = [
    {
        id: 1,
        name: 'Song #1',
        artist: 'Artist Name',
        image: 'https://placem.at/things?w=40&h=40&random=1',
        totalPlays: 180,
    },
    {
        id: 2,
        name: 'Song #2',
        artist: 'Artist Name',
        image: 'https://placem.at/things?w=40&h=40&random=2',
        totalPlays: 180,
    },
    {
        id: 3,
        name: 'Song #3',
        artist: 'Artist Name',
        image: 'https://placem.at/things?w=40&h=40&random=3',
        totalPlays: 180,
    },
    {
        id: 4,
        name: 'Song #4',
        artist: 'Artist Name',
        image: 'https://placem.at/things?w=40&h=40&random=4',
        totalPlays: 180,
    },
];

const getSongById = (id) => new Promise((resolve) => {
    const [song] = songs.filter((song) => { return song.id == id });
    resolve(song);
});

const getSongs = () => new Promise((resolve) => resolve(songs));

const createSong = ({ name, artist, image, totalPlays }) => {
    const song = {
        id: songs.length+1,
        name,
        artist,
        image,
        totalPlays,
    };

    songs.push(song);

    return song;
}

const getObjectById = (type, id) => {
    const types = {
        song: getSongById
    }
    return types[type](id);
};

exports.getSongById = getSongById;
exports.getSongs = getSongs;
exports.createSong = createSong;
exports.getObjectById = getObjectById;