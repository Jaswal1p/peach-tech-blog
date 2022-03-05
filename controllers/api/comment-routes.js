const router = require('express').Router();
const { User, Article, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll(req.body);

        res.status(200).json(dbCommentData);

    } catch (err) {
        res.status(400).json(err);
    }    
})


router.post('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.create(req.body);

        res.status(200).json(dbCommentData);

    } catch (err) {
        res.status(400).json(err);
    }    
    
});


router.delete('/:id', async (req, res) => {
    try {
        const dbCommentData = await Comment.destroy(
            {
             where: { id: req.params.id,}
            }
        )

        if (!dbCommentData) {
            res.status(404).json({ message: 'No Comment found with this id!'});
            return;
        }

        res.status(200).json(dbCommentData);

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;