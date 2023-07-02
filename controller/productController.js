const controller = {
    mostrarTodos: function (req, res) {
        // Logica
    },

    mostrarPorId: function (req, res) {
        // logica
    },

    crear: function (req, res) {
        // logica
    },

    guardar: function (req, res) {
        return res.render('guardar');
    },

    store: function (req, res) {
        return res.send(req.body);
    }

}

module.exports = controller;