const knex = require("knex");
const ShopplingListService = require("../src/shopping-list-service");

describe("Shopping List Object", () => {
  let db;
  //(id, name, price, date_added, checked, category)
  const testItems = [
    {
      id: 1,
      name: "Coffee",
      price: "4.02",
      date_added: new Date("2100-05-22T16:28:32.615Z"),
      checked: false,
      category: "Breakfast",
    },
    {
      id: 2,
      name: "Juice",
      price: "8.53",
      date_added: new Date("2100-05-22T16:28:32.615Z"),
      checked: false,
      category: "Snack",
    },
    {
      id: 3,
      name: "Sandwich",
      price: "12.22",
      date_added: new Date("2100-05-22T16:28:32.615Z"),
      checked: false,
      category: "Lunch",
    },
  ];

  before("setup db", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL,
    });
  });

  before("clean db", () => db("shopping_list").truncate());
  afterEach("clean db", () => db("shopping_list").truncate());

  // After all tests run, let go of the db connection
  after("destroy db connection", () => db.destroy());

  describe("getAllItems()", () => {
    it("should return an empty array", () => {
      return ShopplingListService.getAllItems(db).then((items) =>
        expect(items).to.eql([])
      );
    });
    context("When data present, returns data", () => {
      beforeEach("insert test items", () =>
        db("shopping_list").insert(testItems)
      );
      it("should return all items", () => {
        return ShopplingListService.getAllItems(db).then((items) =>
          expect(items).to.eql(testItems)
        );
      });
    });
  });

  describe("insertItem()", () => {
    it("should insert a new item", () => {
      let newItem = {
        id: 4,
        name: "Steak",
        price: "50.02",
        date_added: new Date("2100-05-22T16:28:32.615Z"),
        checked: false,
        category: "Main",
      };

      return ShopplingListService.insertItem(db, newItem).then((items) =>
        expect(items).to.eql(newItem)
      );
    });
  });
});