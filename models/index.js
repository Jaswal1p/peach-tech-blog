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
    foreignKey: 'user_id'
});

Article.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Article, {
    foreignKey: 'post_id',
})



module.exports = { User, Article, Comment };