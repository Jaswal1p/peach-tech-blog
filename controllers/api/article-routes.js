const router = require('express').Router();
const { User, Article, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// error handling by async, await and try

// get all articles
router.get('/', async (req, res) => {
    try {
        const dbArticleData = await Article.findAll(
            {
                attributes: [
                    'id',
                    'title',
                    'created_at',
                    'article_content'
                ],
                order: [['created_at', 'DESC']],
                
                include: [
                    {
                     model: Comment,
                     attributes: ['id', 'comment_text', 'article_id', 'user_id', created_at],
                     include: {
                         model: User,
                         attributes: ['username']
                     }    
                    },
                    
                    {model: User, 
                    attributes: ['username']
                    },
                ]
            })
        

        res.status(200).json(dbArticleData);

    } catch (err) {
      res.status(500).json(err);
    }
    
});

// get one article by id
router.get('/:id', async (req, res) => {
    try {
        const dbArticleData = await Article.findOne(
            {
               where: {
                   id: req.params.id
               }
            },
            {
                attributes: [
                    'id',
                    'title',
                    'created_at',
                    'article_content'
                ],
                                
                include: [
                    { 
                        model: User, 
                        attributes: ['username']
                    },
                    {
                        model: Comment,
                        attributes: ['id', 'comment_text', 'article_id', 'user_id', created_at],
                        include: {
                            model: User,
                            attributes: ['username']
                        }    
                    },
                ]
            })

            if (!dbArticleData) {
                res.status(404).json({ message: 'No article found with this id' });
                return;
            }    
        

        res.status(200).json(dbArticleData);

    } catch (err) {
      res.status(500).json(err);
    }
    
});

// post an article
router.post('/', withAuth, async (req, res) => {
    try {
        const dbArticleData = await Article.create(
            {
            title: req.body.title,
            article_content: req.body.article_content,
            user_id: req.session.user_id,
            }
        );

        res.status(200).json(dbArticleData);

    } catch (err) {
        res.status(500).json(err);
    }    
    
});

// update an article
router.put('/:id', withAuth, async (req, res) => {
    try {
        const dbArticleData = await Article.update(
            {
            title: req.body.title,
            article_content: req.body.article_content,
            },
            {
             where: {
             id: req.params.id,
             }
            }
        );

        if (!dbArticleData) {
            res.status(404).json({ message: 'No article found with this id' });
            return;
        }

        res.status(200).json(dbArticleData);

    } catch (err) {
      res.status(500).json(err);  
    }
    
});

// Delete an article
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dbArticleData = await Article.destroy(
            {
             where: { id: req.params.id,}
            }
        )

        if (!dbArticleData) {
            res.status(404).json({ message: 'No article found with this id!'});
            return;
        }

        res.status(200).json(dbArticleData);

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;