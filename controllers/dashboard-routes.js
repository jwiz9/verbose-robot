const router = require("express").Router();
const { Budget, User, Expense } = require("../Moxdels");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  // Find all budgets and join with user and expense data
  Budget.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: [
      {
        model: Expense,
      },
      {
        model: User,
      },
    ],
  })
    .then((budgetData) => {
      // Serialize data before passing to template
      const budgets = budgetData.map((budget) => budget.get({ plain: true }));
      console.log(budgets);

      res.render("dashboard", { budgets, logged_in: req.session.logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/budget/:id", async (req, res) => {
  // Get budget by id and join with user and expense data
  try {
    const budgetData = await Budget.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Expense,
        },
      ],
    });

    const budget = budgetData.get({ plain: true });
    console.log("============this is budget data" + JSON.stringify(budget));
    res.render("budget", {
      budget,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
