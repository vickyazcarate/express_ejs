const controller = {
    
    register: (req, res) => {
      return res.render('register');
    },

    login: function(req, res) {
        // logica
    },

    list: function(req, res) {
        let users = [
            {id: 1, name: 'Vicky'},
            {id: 2, name: 'John'},
            {id: 3, name: 'Fede'},
            {id: 4, name: 'Juan'},
            {id: 5, name: 'Enrique'},
            {id: 6, name: 'Estaben'},
            {id: 7, name: 'Isabel'}
        ];

    },

    search: function(req, res) {
        // logica
    },

    create: function(req, res) {
        let user = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        };
        res.redirect('usuarios/list');
    }
   
}

module.exports = controller;