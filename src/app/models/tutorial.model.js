module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("whointhefuck", {
    activity: {
      type: Sequelize.TEXT
    },
    locale: {
      type: Sequelize.TEXT
    },
	
	gender: { type: Sequelize.CHAR},
	
	
    date: {
      type: Sequelize.DATE
    },
	
	starttime: {type: Sequelize.TIME},
	
	endtime: {type: Sequelize.TIME},
	
	description: {type: Sequelize.TEXT}
  });

  return Tutorial;
};