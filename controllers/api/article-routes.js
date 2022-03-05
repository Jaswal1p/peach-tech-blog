const router = require('express').Router();
const { User, Article, Comment } = require('../../models');

// error handling by async, await and try

router.get('/', async (req, res) => {
    try {
        const articleData = await Article.findAll(
            {
            include: [{model: User, 
            attributes: ['username']}]
            }
        );

        res.status(200).json(articleData);

    } catch (err) {
      res.status(500).json(err);
    }
    
});

router.post('/', async (req, res) => {
    try {
        const articleData = await Article.create(
            {
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
            }
        );

        res.status(200).json(articleData);

    } catch (err) {
        res.status(400).json(err);
    }    
    
});

router.put('/:id', async (req, res) => {
    try {
        const articleData = await Article.update(
            {
            title: req.body.title,
            content: req.body.content,
            },
            {
             where: {
             id: req.params.id,
             }
            }
        );

        res.status(200).json(articleData);

    } catch (err) {
      res.status(400).json(err);  
    }
    
});

router.delete('/:id', async (req, res) => {
    try {
        const articleData = await Article.destroy(
            {
             where: { id: req.params.id,}
            }
        )

        if (!articleData) {
            res.status(404).json({ message: 'No article found with this id!'});
            return;
        }

        res.status(200).json(articleData);

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;