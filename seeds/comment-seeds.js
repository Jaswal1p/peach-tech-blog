const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        article_id: 4,
        comment_text: "Forget about blue horizon with tiny rockets! you cannot even run retail stores"
    },
    {
        user_id: 3,
        article_id: 1,
        comment_text: "Oh No! you will now have more devices with strict privacy policy, crushing my business! Please stop"
    },
    {
        user_id: 4,
        article_id: 3,
        comment_text: "Not only Russia, every country should shut down facebook!"
    },
    {
        user_id: 1,
        article_id: 2,
        comment_text: "My successor Tim Cook made a big mistake when he did not buy Tesla! your cars are awesome!!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;