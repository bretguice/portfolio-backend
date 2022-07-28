import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const skillSchema = new Schema({
    title: {type: String},
    img: {type: String}
})

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;