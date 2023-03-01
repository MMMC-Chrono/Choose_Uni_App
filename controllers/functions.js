const Uni = require('./models')

const main_page = (req, res) => {
    res.sendFile(process.cwd()+ '/asserts/index.html')
}

const add_page = (req, res) => {
    res.sendFile(process.cwd() + '/asserts/add.html')
}

const list_page = (req, res) => {
    res.sendFile(process.cwd() + '/asserts/list.html')
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

module.exports = {
    main_page,
    add_page,
    list_page,
    create_doc
}