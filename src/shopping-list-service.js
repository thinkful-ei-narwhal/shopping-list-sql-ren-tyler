//to get, insert, update and delete shopping list items.
const ShoppingListService = {
  getAllItems(knex) {
    return knex.select("*").from("shopping_list");
  },
  insertItem(knex, newItem) {
    return knex
      .insert(newItem)
      .into("shopping_list")
      .returning("*")
      .then((row) => {
        return row[0];
      });
  },
};

module.exports = ShoppingListService;
