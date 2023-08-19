const mongoose = require('mongoose') //db
mongoose.connect('mongodb+srv://ChinduAnurag:csmodel52@cluster0.jrwfyam.mongodb.net/tododb?retryWrites=true&w=majority',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('MongoDB connected successfully');
}).catch((error)=>{
    console.log(error.message)
})