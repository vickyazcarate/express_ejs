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
    }, 

    edit: function(req, res) {
        let idUser = req.params.idUser;

        let users = [
            {id: 1, name: 'Vicky'},
            {id: 2, name: 'John'},
            {id: 3, name: 'Fede'},
            {id: 4, name: 'Juan'},
            {id: 5, name: 'Enrique'},
            {id: 6, name: 'Esteban'},
            {id: 7, name: 'Isabel'}
        ];

        let userToEdit = users[idUser];

        res.render('userEdit', {userToEdit: userToEdit});

    }, 

    delete: function(req, res) {
        //logica
    }
   
}

module.exports = controller;