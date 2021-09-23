
// codigo con promesas

const pedirUsuario = (req, res ) => {
    Usuario.get(req)
    .then((user) => {
        console.log(user)
    })
    .catch((err) => console.log(err))
}

// async await

const pedirUsuarioAW = async (req, res) => {

    try {
        const User = await User.get()
        console.log(User.id)
        if(User.id === 1){
            console.log('Eres el primer humano')
        }
    }
    catch (err){
        console.log(err)
    }
}