module.exports = {
    hello: function(req, res) {
        var name = req.body.name;
        var lang = req.body.language || 'ko';
        switch(lang) {
            case 'en':
                return res.send('Hello, ' + name)
            break;
            case 'ko':
                return res.send('안녕, ' + name)
            break;
            default:
                return res.send('Error: Invalid Language')
        }
    }
};
