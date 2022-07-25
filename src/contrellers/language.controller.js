import {getConnection} from "./../database/database"

const getLanguages = async(req, res)=>{
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM language")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.mensage);        
    }
};

const getLanguage = async(req, res)=>{
    try {
        console.log(req.params)
        const { id } = req.params;
        const connection = await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.mensage);        
    }
};

const addLanguage = async(req, res)=>{
    try {
        const { name, programmers } = req.body
        if(name === undefined || programmers === undefined){
            res.status(400).json({ message: "Bad request. Plase fill all field." })
        }
        const language = {name , programmers}
        const connection = await getConnection()
        await connection.query("INSERT INTO language SET ?", language)
        res.json({ message: "Language added"})
    } catch (error) {
        res.status(500)
        res.send(error.mensage);        
    }
};

const updateLanguage = async(req, res)=>{
    try {
        console.log(req.params)
        const { id } = req.params
        const { name, programmers } = req.body
        if( id === undefined || name === undefined || programmers === undefined){
            res.status(400).json({ message: "Bad request. Plase fill all field." })
        }
        const language = {id, name , programmers}
        const connection = await getConnection()
        const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id])
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.mensage);        
    }
};

const deleteLanguage = async(req, res)=>{
    try {
        console.log(req.params)
        const { id } = req.params;
        const connection = await getConnection()
        const result = await connection.query("DELETE FROM language WHERE id = ?", id)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.mensage);        
    }
};

export const methods = {
    getLanguages,
    addLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
}