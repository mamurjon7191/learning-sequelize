const Sequelize = require("sequelize");

const sequelize = new Sequelize("Sequelize", "postgres", "12345", {
  host: "localhost",
  port: "3000",
  dialect: "postgres",
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((err) => {
//     console.log("An error occured while connecting to database!");
//   });

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.DataTypes.STRING,
  },
  age: {
    type: Sequelize.DataTypes.INTEGER,
    deefaultValue: 21,
  },
});

User.sync({ alter: true })
  .then(() => {
    // working with updated table
    return User.create({
      username: "Jafar",
      password: "12345",
      age: 23,
    });
  })
  .then((data) => {
    console.log("User added to database");
    return data.destroy();
  })
  .then((data) => {
    console.log(data);
    console.log("User destroyed");
  })
  .catch((err) => {
    console.log("error on syncing");
  });
