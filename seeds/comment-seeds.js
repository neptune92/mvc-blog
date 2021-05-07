const { Comment } = require('../models/comment');

const commentData = [
  {
    comment_text: "sjflngfnrpgengfpnkgn",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "eprojgm pokskj ojgr[o",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "sgtehnnfn",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "hf trtrtrt",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Interesting",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Thnks fr th mmrs",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;