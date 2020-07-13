const Product = require('../models/product')

async function getFilterSorter(req, res, next) {
    const match = { sex: req.params.sex };
    // const match = { categoryName: req.params.categoryName };
    if (req.params.categoryName) {
        match.categoryName = req.params.categoryName;
    }
    console.log("getFilterSorter match", match)
    try {
        const r = await Product.aggregate([
            {
                $match: match
            },
            {
                $facet: {
                    "categories": [
                        {
                            $group: {
                                _id: { categoryId: "$categoryId", categoryName: "$categoryName" },
                                count: { $sum: 1 }
                            }
                        },
                        {
                            $replaceRoot: {
                                newRoot: {
                                    categoryId: "$_id.categoryId",
                                    categoryName: "$_id.categoryName",
                                    count: "$count"
                                }
                            }
                        },
                        {
                            $sort: { count: -1 }
                        }
                    ],
                    "models": [
                        {
                            $group: {
                                _id: { modelId: "$modelId", modelName: "$modelName" },
                                count: { $sum: 1 }
                            }
                        },
                        {
                            $replaceRoot: {
                                newRoot: {
                                    modelId: "$_id.modelId",
                                    modelName: "$_id.modelName",
                                    count: "$count"
                                }
                            }
                        },
                        {
                            $sort: { count: -1 }
                        }
                    ],
                    "materials": [
                        {
                            $group: {
                                _id: { materialId: "$materialId", materialName: "$materialName" },
                                count: { $sum: 1 }
                            }
                        },
                        {
                            $replaceRoot: {
                                newRoot: {
                                    materialId: "$_id.materialId",
                                    materialName: "$_id.materialName",
                                    count: "$count"
                                }
                            }
                        },
                        {
                            $sort: { count: -1 }
                        }
                    ],
                    "colors": [
                        {
                            $group: {
                                _id: { colorId: "$colorId", colorName: "$colorName" },
                                count: { $sum: 1 }
                            }
                        },
                        {
                            $replaceRoot: {
                                newRoot: {
                                    colorId: "$_id.colorId",
                                    colorName: "$_id.colorName",
                                    count: "$count"
                                }
                            }
                        },
                        {
                            $project: { _id: 0 }
                        },
                        {
                            $sort: { count: -1 }
                        }
                    ],
                    "sizes": [
                        { $unwind: "$sizes" },
                        {
                            $group: {
                                _id: "$sizes.name"
                            }
                        },
                        { $replaceRoot: { newRoot: { sizeName: "$_id" } } },
                        { $sort: { sizeName: 1 } }
                    ],
                    "prices": [
                        {
                            $group: {
                                _id: 0,
                                min: { $min: "$price" },
                                max: { $max: "$price" }
                            }
                        }
                    ]
                }
            }
        ]).exec();

        return res.status(200).json(r[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }
}

async function getCategories(req, res, next) {
    console.log(req.params)
    try {
        const categories = await Product.aggregate([
            { $match: { sex: req.params.sex } },
            {
                $group: {
                    _id: { categoryId: "$categoryId", categoryName: "$categoryName" },
                    products: { $sum: 1 }
                }
            },
            {
                $replaceRoot: {
                    newRoot: {
                        id: "$_id.categoryId",
                        name: "$_id.categoryName",
                        title: "$_id.categoryName",
                        products: "$products"
                    }
                }
            },
            { $sort: { products: -1 } }

        ]).limit(8).exec();

        return res.status(200).json(categories)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }


}
const RedirectController = {
    getFilterSorter,
    getCategories
}

module.exports = RedirectController