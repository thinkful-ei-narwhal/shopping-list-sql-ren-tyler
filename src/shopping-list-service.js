'use strict';

//to get, insert, update and delete shopping list items.
const ShoppingListService = {
  getAllItems(knex) {
    return knex.select('*').from('shopping_list');
  },
  insertItem(knex, newItem) {
    return knex
      .insert(newItem)
      .into('shopping_list')
      .returning('*')
      .then((row) => {
        return row[0];
      });
  },
  getId(knex, id) {
    return knex('shopping_list').select().where('id', id);
  },

  updateItem(knex, id, updateItemFields) {
    return knex('shopping_list').where({ id }).update(updateItemFields);
  },
  deleteItem(knex, id) {
    return knex('shopping_list').where({ id }).delete();
  },
};

module.exports = ShoppingListService;
