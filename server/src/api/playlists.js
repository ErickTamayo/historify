import { Router } from 'express';
import Helper from '../helper';

let router = Router();
let helper = new Helper();
let playlists = helper.generatePlaylists();

router.get('/', (req, res) => {
    res.status(200).json(playlists)
});

router.get('/:id', (req, res) => {
    const playlist = helper.getPlaylistById(playlists, req.params.id);

    if (playlist === undefined) {
        res.status(404).json({
            code: 404,
            error: 'Playlist not found.'
        });
    } else {
        res.status(200).json(playlist);
    }
});

router.delete('/:id', (req, res) => {
    res.status(200).json(helper.deletePlaylistById(playlists, req.params.id));
});

export default router;