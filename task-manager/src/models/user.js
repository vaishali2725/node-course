const mongoose =  require('mongoose');
const validator =  require('validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid!');
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minLength:6,
        validate(value){
            // if(value.length < 6){
            //     throw new Error('Password should contain 6 or more charaters');
            // }

            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain password word');
            }
        }
    },
    age:{
        type:Number,
        default:20,
        validate(value){
            if(value<=0){
                throw new Error('Age should not be negetive number!.')
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

// Generate Auth Token 
userSchema.methods.generateAuthToken =  async function(){
    const user = this;

    const token = jwt.sign({_id:user._id.toString()}, 'nodejs course');
    console.log(token);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}

//User Login 
userSchema.statics.findUserByCredentials = async (email, password) => {
    
    const user = await User.findOne({email});
    if(!user){
        throw new Error('Invalid Email');
    }

    const isMatch =  await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('Invalid password');
    }

    return user;
}

//Generate encrypted password before saving
userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})


const User = mongoose.model('User', userSchema);

module.exports = User;