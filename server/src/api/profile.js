import { Router } from 'express';
import Helper from '../helper';

let router = Router();
let helper = new Helper();
let profile = helper.getProfile();

router.get('/', (req, res) => {
    res.status(200).json(profile)
});

router.put('/', (req, res) => {
    profile = Object.assign(profile, req.body);
    res.status(200).json(profile);
});

export default router;