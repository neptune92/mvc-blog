const { Post } = require('../models/post');

const postData = [
    {
        title: "This is a post",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Bibendum neque egestas congue quisque egestas diam in.",
        user_id: 3
    },
    {
        title: "I Wrote a Tech Post and all I Got Was This Comment",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Bibendum neque egestas congue quisque egestas diam in.",
        user_id: 4
    },
    {
        title: "Tech 101",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Bibendum neque egestas congue quisque egestas diam in.",
        user_id: 2

    },
    {
        title: "Tech Post",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Bibendum neque egestas congue quisque egestas diam in.",
        user_id: 5
    },
    {
        title: "Latest Tech",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Bibendum neque egestas congue quisque egestas diam in.",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;