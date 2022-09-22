const  mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

BlogPost.create({
    title: "The myth guide to saving money on energy bills",
    body: 'If you have been here a long time, you might remember when I went to tv tonight to dispense a masterclass in saving money on energy '
},(error, blogpost) =>{
    console.log(error, blogpost)
})