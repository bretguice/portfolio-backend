import express from 'express';
import { getSkills, createSkill } from '../controllers/skills.js';

const router = express.Router();

router.get('/', getSkills);
router.post('/createSkill', createSkill);

export default router;