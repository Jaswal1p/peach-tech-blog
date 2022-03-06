const { Article } = require('../models');

const articleData = [
    {
        title: "Apple Event on March 8th",
        article_content: "The company will show off the devices in an all-virtual event via a livestream on Apple's website. The company said it will be broadcasting from Apple Park, its headquarters in Cupertino, California. The tech giant has hosted online-only events since the start of the pandemic two years ago. Apple is currently assessing when employees will return to the office, as the omicron variant wanes.",
        user_id: 1
    },
    {
        title: "Tesla Gigafactory Berlin",
        article_content: "Tesla's Gigafactories are massive in every sense of the word. They require tons of people and space and resources, but they also seem to come together and become operational a lot faster than you might expect. Except, that is, for Tesla's first European Gigafactory outside Berlin, which has been languishing in bureaucracy for months. Only now, according to a report published Friday by Reuters, that's mostly changing.",
        user_id: 2
    },  
    {
        title: "Russia blocks access to Facebook",
        article_content: "Russian media regulator said Friday it will block access to Meta-owned Facebook in the country as it escalates pressure on media outlets and tech platforms amid its invasion of Ukraine. Last week, the agency placed partial restrictions on Facebook for the alleged violation of federal law.",
        user_id: 3
    },
    {
        title: "Amazon is shutting 68 retail stores",
        article_content: "Amazon plans to close all locations of its Pop Up, Amazon Books and 4-star stores. Over the years, the e-commerce giant has launched an array of brick-and-mortar concepts, from supermarkets to retail stores featuring Amazon-branded electronics and top-selling products that it sells online.",
        user_id: 4
    }
]

const seedArticles = () => articleData.bulkCreate(articleData);

module.exports = seedArticles;