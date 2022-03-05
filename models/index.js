// const req = require('express/lib/request');
const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'author_id',
});

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
});

Article.belongsTo(User, {
    foreignKey: 'author_id'
});

Article.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'commenter_id',
});

Comment.belongsTo(Article, {
    foreignKey: 'post_id',
})



module.exports = { User, Article, Comment };