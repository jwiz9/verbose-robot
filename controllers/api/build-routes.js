const router = require("express").Router();
const { Budget, User, Expense } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
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
      // serialize data before passing to template
      const budgets = budgetData.map((budget) => budget.get({ plain: true }));
      console.log(budgets);

      res.render("buildbudget", { budgets, logged_in: req.session.logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/budget/:id", async (req, res) => {
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
    res.render("buildbudget", {
      budget,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;