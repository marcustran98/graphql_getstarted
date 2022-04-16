const mongoose = require("mongoose");
async function connectDB() {
    try {
        const data = await mongoose.connect(process.env.MONGOOSE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connect sucess", data);
    } catch (err) {
        console.log('err', err);
    }
}
module.exports = {
    connectDB
}