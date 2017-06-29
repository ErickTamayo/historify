import { Router } from 'express';
import Faker from 'faker';
import Helper from '../helper';

let router = Router();
let helper = new Helper();
let songs = helper.generateSongs();

router.get('/', (req, res) => {
    res.status(200).json(songs)
});

router.get('/:id', (req, res) => {
    var song = helper.getSongById(songs, req.params.id);
    if (song === undefined) {
        res.status(404).json({
            code: 404,
            error: 'Song not found.'
        });
    } else {
        res.status(200).json(song);
    }
});

router.delete('/:id', (req, res) => {
    var song = helper.deleteSongById(songs, req.params.id);
    if (song === undefined) {
        res.status(404).json({
            code: 404,
            error: 'Song not found.'
        });
    } else {
        res.status(200).json(song);
    }
});

export default router;