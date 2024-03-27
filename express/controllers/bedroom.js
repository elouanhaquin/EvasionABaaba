
const Bedroom = require('../models/Bedroom');

exports.create = async (req, res, next) => {
    //getting bedroom data from request body
    const { title, color, img, button, positive, p1, p2 } = req.body;

    try {
 
        const bedroom = new Bedroom({
             title, color, img, button, positive, p1, p2
        });
        const result = await bedroom.create();
        res.send(result);
    } catch (error) {
        const errorToThrow = new Error();
        switch (error.code) {
            case '23505':
                errorToThrow.message = 'Bedroom already exists';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.message = 'Error while creating bedroom';
                errorToThrow.statusCode = 500;
        }
        //pass error to next()
        next(errorToThrow);
    }
};

exports.update = async (req, res, next) => {
    //getting bedroom data from request body
    const { title, color, img, button, positive, p1, p2 } = req.body;

    try {
        const bedroom = new Bedroom({
            title, color, img, button, positive, p1, p2
        });
        const result = await bedroom.update(uid);
        res.send(result);
    } catch (error) {
        const errorToThrow = new Error();
        switch (error.code) {
            case '23505':
                errorToThrow.message = 'Bedroom already exists';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
        //pass error to next()
        next(errorToThrow);
    }
};

exports.delete = async (req, res, next) => {
    //getting bedroom data from request body
    const { id } = req.body;
    try {
        const bedroom = new Bedroom({});
        const query = await bedroom.delete(id);
        res.send(query);
    } catch (error) {
        const errorToThrow = new Error();
        //pass error to next()
        next(errorToThrow);
    }
};

exports.get = async (req, res, next) => {
    //getting bedroom data from request body
    const { id } = req.query;
    try {

        const bedroom = new Bedroom({
            id
        });
        const query = await bedroom.get(_uid);
        const {  title, color, img, button, positive, p1, p2 } = query[0];
        bedroom.title = title;
        bedroom.color = color;
        bedroom.img = img;
        bedroom.button = button;
        bedroom.positive = positive;
        bedroom.p1 = p1;
        bedroom.p2 = p2;
        res.send(bedroom);
    } catch (error) {
        const errorToThrow = new Error(error.code);
        //pass error to next()
        next(errorToThrow);
    }
};


exports.getAll = async (req, res, next) => {
    //getting bedroom data from request body
    try {

        const bedroom = new Bedroom({
        });
        const query = await bedroom.getAll();
        res.send(query);
    } catch (error) {
        const errorToThrow = new Error(error.code);
        //pass error to next()
        next(errorToThrow);
    }
};

