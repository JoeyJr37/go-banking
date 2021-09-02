const bcrypt = require('bcryptjs');
const db = (req) => req.app.get('db');


const register = async (req, res) => {
    const { username, password, designationId } = req.body;

    try {
        const foundUser = await db(req).find_user(username);
        const existingUser = foundUser[0];
        if (existingUser){
            return res.status(409).send('Username taken');
        } else {
            const hash = bcrypt.hashSync(password); //default 10 salt
            const registeredUser = await db(req).create_user([username, hash, designationId]);
            console.log(registeredUser);
            const user = registeredUser[0];
            req.session.user = {
                id: user.designation_id
            }
            return res.status(201).send(req.session.user);
        }
    } catch(err) {
        console.log(`Error registering new user: ${err}`);
    }
}

const loginUser = async (req, res ) => {
    const { username, password } = req.body;
    try {
        const foundUser = await db(req).find_user(username);
        const existingUser = foundUser[0];
        // console.log(existingUser);

        if (!existingUser){
            return res.status(401).send('User not found. Please register new user')
        } else {
            const isAuthenticated = bcrypt.compareSync(password, existingUser.password);
            if (!isAuthenticated){
                return res.status(403).send('Incorrect password!')
            } else {
                req.session.user = {
                    id: existingUser.designation_id
                }
                // console.log(req.session.user);
                return res.status(200).send(req.session.user)
            }
        }
    } catch (err) {
        console.log(`Error loggin in user: ${err}`);
    }
}

const logout = (req, res) => {
    req.session.destroy()
    console.log('User logged out');
    res.status(200).send('User logged out!');
}

module.exports = {
    register,
    loginUser, 
    logout
}