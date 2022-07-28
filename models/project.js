import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {type: String},
    description: {type: String},
    summary: {type: String},
    url: {type: String},
    code: {type: String},
    image: {type: String},
    images: [String],
    skills: [{type: Schema.Types.ObjectId, ref: 'Skill'}]
})

const Project = mongoose.model('Project', projectSchema);

export default Project;