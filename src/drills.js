require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

function searchItem(searchTerm) {
  knexInstance
    .select("name", "price", "date_added", "category")
    .from("shopping_list")
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then((res) => {
      console.log(res);
    });
}

function paginate(pageNumber) {
  const numPerPage = 5;
  const offset = numPerPage * (pageNumber - 1);
  knexInstance
    .select("name", "price", "date_added", "category")
    .from("shopping_list")
    .limit(numPerPage)
    .offset(offset)
    .then((res) => {
      console.log(res);
    });
}

searchItem("burger");
paginate(3);
