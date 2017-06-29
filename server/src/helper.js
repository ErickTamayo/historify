import Faker from 'faker';

class Helper {

    /**
     * Generates a Profile Object.
     *
     * @return {Object}
     */
    getProfile() {
        return {
            name: 'Erick',
            profileImg: 'https://placem.at/people?w=50&h=50',
            'played': {
                'allTime': 640,
                'thisWeek': 45
            }
        }
    }

    /**
     * Generates a random playlist given a quantity.
     *
     * @param  {Number} quantity
     * @return {Array}
     */
    generatePlaylists(quantity = 10) {
        const playlists = [];

        for (let i = 0; i < quantity; i++) {
            playlists.push({
                id: i+1,
                name: Faker.lorem.sentence(3),
                artist: Faker.name.findName(),
                image: 'https://placem.at/things?w=40&h=40&random='+i,
                totalPlays: Faker.random.number({min:1, max: 99}),
            });
        }

        return playlists;
    }

    /**
     * Gets playlist by id.
     *
     * @param  {Array} playlists
     * @param  {Number} id
     * @return {Object}
     */
    getPlaylistById(playlists, id) {
        return playlists.filter(playlist => playlist.id == id)[0];
    }

    /**
     * Delete playlist by id.
     *
     * @param  {Array} playlists
     * @param  {Number} id
     * @return {Object}
     */
    deletePlaylistById(playlists, id) {
        const playlist = getPlaylistById(id);

        if (playlist === undefined) {
            return;
        }

        const index = playlists.indexOf(playlist);
        return playlists.splice(index, 1)[0];
    }

    /**
     * Generates a song list.
     *
     * @param  {Number} quantity
     * @return {Array}
     */
    generateSongs(quantity = 20) {
        const songs = [];

        for (var i = 0; i < quantity; i++) {
            songs.push({
                id: i+1,
                name: Faker.lorem.sentence(3),
                artist: Faker.name.findName(),
                image: 'https://placem.at/things?w=40&h=40&random='+i,
                'totalPlays': Faker.random.number({min:1, max: 99}),
                'playedTodayAt': Faker.date.between('2017-03-01', '2017-05-16'),
            });
        }

        return songs;
    }

    /**
     * Get a song by its id.
     *
     * @param  {Array} songs
     * @param  {Number} id
     * @return {Object}
     */
    getSongById(songs, id) {
        return songs.filter(song => song.id == id)[0];
    }

   /**
     * Delete song by id.
     *
     * @param  {Array} playlists
     * @param  {Number} id
     * @return {Object}
     */
    deleteSongById(songs, id) {
        const song = songs.filter(song => song.id == id)[0];

        if (song === undefined) {
            return;
        }

        const index = songs.indexOf(song);
        return songs.splice(index, 1)[0];
    }

}

export default Helper;