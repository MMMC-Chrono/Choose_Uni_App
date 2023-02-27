const main_page = (req, res) => {
    res.sendFile(process.cwd()+ '/asserts/index.html')
}

const add_page = (req, res) => {
    res.sendFile(process.cwd() + '/asserts/add.html')
}

const list_page = (req, res) => {
    res.sendFile(process.cwd() + '/asserts/list.html')
}

module.exports = {
    main_page,
    add_page,
    list_page
}