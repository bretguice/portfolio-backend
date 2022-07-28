import Project from '../models/project.js';
import { body } from 'express-validator';

export const getProjects = async (req, res) => {
    try{
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createProject = async (req, res) =>{
    body('title').trim().escape();
    body('description').trim().escape();
    body('summary').trim().escape();
    body('url').trim().escape();
    body('code').trim().escape();
    body('image').trim().escape();
    body('images').trim().escape();
    body('skills').trim().escape();
    const { title, description, summary, url, code, image, images, skills } = req.body;
    const newProject = new Project({ title, description, summary, url, code, image, images, skills  })    
    try{
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}