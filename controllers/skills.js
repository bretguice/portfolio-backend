import Skill from '../models/skill.js';
import { body } from 'express-validator'

export const getSkills = async (req, res) => {
    try{
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createSkill = async (req, res) => {
    body('title').trim().escape();
    body('img').trim().escape();
    const { title, img } = req.body;
    const newSkill = new Skill({ title, img });
    try{
        await newSkill.save();
        res.status(201).json(newSkill);

    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}