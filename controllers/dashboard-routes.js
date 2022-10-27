const router = require("express").Router();
const { Budget, User, Expense } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  Budget.findAll({
      where: {
        user_id: req.session.user_id
      },
    // where: {
    //   user_id: 1,
    // },
    //   attributes: [
    //     'id',
    //     'name',
    //     'budget_limit',
    //     'user_id',
    //   ],
    include: [
      {
        model: Expense,
        //   attributes: ['id', 'expense_name', 'expense_description', 'expense_date', 'budget_id'],
        //   include: {
        //     model: User,
        // attributes: ['username']
        //   }
      },
      {
        model: User,
        //   attributes: ['username']
      },
    ],
  })
    .then((budgetData) => {
      // serialize data before passing to template
      const budgets = budgetData.map((budget) => budget.get({ plain: true }));
      const logged_in = req.session.logged_in;
      console.log(budgets);

      res.render("dashboard", { budgets, logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/budget/:id", async (req, res) => {
  try {
    const budgetData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const budget = budgetData.get({ plain: true });

    res.render("budget", {
      ...budget,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/edit/:id', withAuth, (req, res) => {
//   Budget.findOne({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//         'id',
//         'name',
//         'budget_limit',
//         'user_id',
//     ],
//     include: [
//       {
//         model: Expense,
//         attributes: ['id', 'expense_name', 'expense_description', 'expense_date', 'budget_id'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(budgetData => {
//       if (!budgetData) {
//         res.status(404).json({ message: 'No budget found with this id' });
//         return;
//       }
//       const budget = budgetData.get({ plain: true });
//       const loggedIn = req.session.loggedIn;

//       res.render('edit-budget', {
//        budget,
//        loggedIn,
//        layout: 'main'
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// })

module.exports = router;
