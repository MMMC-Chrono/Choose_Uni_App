const Uni = require('./models')
const { getAll } = require('../asserts/list')

const main_page = (req, res) => {
    return res.sendFile(process.cwd()+ '/asserts/index.html')
}

const add_page = (req, res) => {
    return res.sendFile(process.cwd() + '/asserts/add.html')
}

const list_page = async(req, res) => {
    const uni = await Uni.find()
    getAll(uni)
    return res.sendFile(process.cwd() + '/asserts/list.html')
}

const create_doc = async (req, res) => {
    console.log(req.body)
    const { title, link, price, program, about, note, selection } = req.body;
    const uni = await Uni.create(req.body)
    if (uni) {
        return res.sendFile(process.cwd() + '/asserts/successful.html')
    }
    return res.send("Something went wrong")
}

const filter = async(req, res) => {
    console.log(req.body)
}

module.exports = {
    main_page,
    add_page,
    list_page,
    create_doc,
    filter
}