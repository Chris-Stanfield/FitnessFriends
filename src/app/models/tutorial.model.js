module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("Post", {
    userid: {
      type: Sequelize.STRING
    },
    activity: {
      type: Sequelize.STRING
    },
    thelocation: {
      type: Sequelize.STRING
    },
	  gender: { 
      type: Sequelize.CHAR
    },
    datestarts: {
      type: Sequelize.DATE
    },
	  starttime: {
      type: Sequelize.TIME
    },
	  endtime: {
      type: Sequelize.TIME
    },
	  postdescription: {
      type: Sequelize.STRING
    }
  });

  return Post;
};