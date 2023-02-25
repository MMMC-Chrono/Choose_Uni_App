const main_page = (req, res) => {
    res.sendFile(process.cwd()+ '/views/index.html')
}

module.exports = {
    main_page
}