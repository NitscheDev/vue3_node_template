//create controller modules
const root = (req,res) => {
    res.send('Backend is alive');
}


//export controller modules
module.exports = {
    root
}