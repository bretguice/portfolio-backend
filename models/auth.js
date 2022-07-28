import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const authSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const Auth = mongoose.model('Auth', authSchema);

export default Auth;