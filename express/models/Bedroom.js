const db = require('../db');

function Bedroom({
    title = "", color = "", img = "", button = "", positive = "", p1 = "", p2 = ""
}) {
    this.title = title;
    this.color = color;
    this.img = img;
    this.button = button;
    this.positive = positive;
    this.p1 = p1;
    this.p2 = p2;

};


// add a createBedroom method to the prototype
Bedroom.prototype.create = async function () {

    try {
        let request = `INSERT INTO chambres(title, color, img, button, positive, p1, p2  ) VALUES (` +
        '\'' + this.title + '\'' + ',' + '\'' +
        this.color + '\'' + ',' + '\'' +
        this.img + '\'' + ',' + '\'' +
        this.button + '\'' + ',' + '\'' +
        this.positive + '\'' + ',' + '\'' +
        this.p1 + '\'' + ',' + '\'' +
        this.p2 + '\'' + `) RETURNING id`;

        const { rows } = await db.query(request);
        return rows;
    } catch (error) {
        throw error;
    }
};


Bedroom.prototype.get = async function (id) {

    try {
        let request = `SELECT  title, color, img, button, positive, p1, p2
        FROM public.chambres`;
        const { rows } = await db.query(request);

        return rows;
    } catch (error) {
        throw error;
    }
};

Bedroom.prototype.getAll = async function (id) {

    try {
        let request = `SELECT  title, color, img, button, positive, p1, p2
        FROM public.chambres`;
        const { rows } = await db.query(request);

        return rows;
    } catch (error) {
        throw error;
    }
};

Bedroom.prototype.update = async function (id) {

    try {
        try {
            let request = `UPDATE chambres SET title=` + '\'' + this.title + '\'' + ',' +
                `color=` + '\'' + this.color + '\'' + ',' +
                `img=` + '\'' + this.img + '\'' + ',' +
                `button=` + '\'' + this.button + '\'' + ',' +
                `positive=` + '\'' + this.positive + '\'' + ',' +
                `p1=` + '\'' + this.p1 + '\'' + ',' +
                `p2=` + '\'' + this.p2 + '\'' + ` WHERE id=` + '\'' + id + '\'  RETURNING id';
    
            const { rows } = await db.query(request);
            return rows;
        } catch (error) {
            throw error;
        }

    } catch (error) {
        throw error;
    }
};



Bedroom.prototype.delete = async function (id) {
    try {
        let request = `DELETE FROM public.chambres  WHERE id=` + id + ' RETURNING id';
        const { rows } = await db.query(request);
        return rows;
    } catch (error) {
        throw error;
    }
};




module.exports = Bedroom;