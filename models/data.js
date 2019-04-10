module.exports = async function (db) {
    console.log(db.sequelize.sync);
    await db.sequelize.sync({force: true});
  console.log(1);
    await db.user.bulkCreate([
        {
            email: "q@q.q",
            password: "$2a$05$TwS/mBTDkKiYOIthlYpI/O0D.haVTNbQzgsg2tUwck9c42PmnArV.",
            codes: "[12345,54321,44444,21543]"
        }
    ]);
  };
//password - admin
//bcrypt iteration's number - 5