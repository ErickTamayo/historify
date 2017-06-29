import { Router } from 'express';
import Profile from './profile';
import Songs from './songs';
import Playlists from './Playlists';

let router = Router();

/*
    API Routes:
        GET /profile
        PUT /profile

        GET /songs
        GET /songs/:id

        GET /playlists
        POST /playlists
        GET /playlists/:id
        DELETE /playlists/:id
 */
router.use('/profile', Profile);
router.use('/songs', Songs);
router.use('/playlists', Playlists);

export default router;