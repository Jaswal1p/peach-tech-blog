const router = require('express').Router();
const { User, Article, Comment } = require('../../models');

// error handling by async, await and try

router.get('/', async (req, res) => {
    try {
        const articleData = await Article.findAll({
            include: [{model: User, attributes: ['username']}]
        });

        res.status(200).json(articleData);
    }   catch (err) {
        res.status(500).json(err);
    }
    
});




module.exports = router;