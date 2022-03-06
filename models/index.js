// const req = require('express/lib/request');
const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Article.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Article.hasMany(Comment, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Article, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
})



module.exports = { User, Article, Comment };