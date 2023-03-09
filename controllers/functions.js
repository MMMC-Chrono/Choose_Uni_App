const Uni = require('./models')

const main_page = (req, res) => {
    return res.sendFile(process.cwd()+ '/asserts/index.html')
}

const add_page = (req, res) => {
    return res.sendFile(process.cwd() + '/asserts/add.html')
}

const list_page = async(req, res) => {
    return res.sendFile(process.cwd() + '/asserts/list.html')
}

const create_doc = async (req, res) => {
    const { title, link, price, program, about, note, selection } = req.body;
    const find = await Uni.find({link})
    if (find.length !== 0) {
        return res.send(`Already added: ${title} with link: ${link}`)
    }
    const uni = await Uni.create(req.body)
    if (uni) {
        return res.sendFile(process.cwd() + '/asserts/successful.html')
    }
    return res.send("Something went wrong")
}

const deleted = async(req, res) => {
    const { delete_sch } = req.body
    const target = await Uni.deleteOne({title: delete_sch})
    if (target.deletedCount === 0) {
        return res.send("invalid name")
    } else if (target.deletedCount !== 0) {
        return res.sendFile(process.cwd() + '/asserts/deleted.html')
    }
    return res.send("invalid input")
}

const getAllUni = async (req, res) => {
    const uni = await Uni.find()
    uni.sort((a, b) => /[0-9]+/.exec(a.price) - /[0-9]+/.exec(b.price))
    return res.send(uni)
}


module.exports = {
    main_page,
    add_page,
    list_page,
    create_doc,
    deleted,
    getAllUni
}