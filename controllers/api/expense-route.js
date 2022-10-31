const router = require("express").Router();
const { Expense } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  // Get all expenses where budget_id is 1
  Expense.findAll({
    where: {
      budget_id: 1,
    },
  })
  // Serialize data so the template can read it then pass serialized data and session flag into template
    .then((expenseData) => {
      const expenses = expenseData.map((expense) =>
        expense.get({ plain: true })
      );
      console.log(expenses);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, async (req, res) => {
  // Post for creating a new expense while logged in
  try {
    const newExpense = await Expense.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log("THIS IS A NEW EXPENSE" + newExpense);
    res.status(200).json(newExpense);
  } catch (err) {
    console.log("THISIS AN EXPENSE ERROR" + err);
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  // Delete expense while logged in
  try {
    const expenseData = await Expense.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });
    console.log(`I AM EXPENSE DATA \n =============== \n ${expenseData}`);

    if (!expenseData) {
      res.status(404).json({ message: "No expense found with this id!" });
      return;
    }
    console.log(
      `I AM returning the next step of expense data \n =============== \n ${expenseData}`
    );

    res.status(200).json(expenseData);
  } catch (err) {
    console.log(`I AM THE EXPENSE DELET ERROR \n ========= ${err}`);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  // Update a category by its `id` value
  Expense.update(
    {
      expense_name: req.body.expense_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((expeData) => {
      !expeData
        ? res.status(404).json({ message: "No expense found with this id" })
        : res.json({ Success: "Expense has been updated", Expense: expeData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
