const authenticationMiddleware = {
    auth: (req, res, next) => {
        if (req.session){
            if (req.session.login){
                next();
            } else
            {
                res.status(400).json("Você não está logado");
            }
        }   
      },
};

module.exports = authenticationMiddleware