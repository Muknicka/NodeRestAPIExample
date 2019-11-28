'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//#region Gets
exports.get = async () => {
    const res = await Product.find(
        {
            active: true
        }, 'title price slug'
    );
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Product.findOne({
        active: true,
        slug: slug,
    }, 'title description price slug tags');
    return res;
}

exports.getByTag = async (tag) => {
    const res = await Product.find({
        active: true,
        tags: tag,
    }, 'title description price slug tags');
    return res;
}

exports.getById = async (id) => {
    const res = await Product.findById(id)
        .then(data => {
            res.status(200).send(data);
        });
    return res;
}
//#endregion

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
}

exports.delete = async (id) => {
    await Product.findOneAndRemove(id)
        .then(x => {
            res.status(200).send({ message: 'Produto removido' });
        });
}





