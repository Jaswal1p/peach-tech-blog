const router = require('express').Router();
const sequelize = require('../config/connection');
const { Article, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    
    Article.findAll({
      attributes: [
        'id',
        'title',
        'created_at',
        'article_content'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'article_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbarticleData => {
        const articles = dbarticleData.map(article => article.get({ plain: true }));
        res.render('homepage', {
            articles,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });



router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });


  
router.get('/article/:id', (req, res) => {
    Article.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'article_content'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'article_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbarticleData => {
        if (!dbarticleData) {
          res.status(404).json({ message: 'No article found with this id' });
          return;
        }
  
        // serialize the data
        const article = dbarticleData.get({ plain: true });
  
        // pass data to template
        res.render('single-article', {
            article,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;