const router = require("express").Router();
const { Budget, User } = require("../models");

// Makes home route to login page
router.get("/", (req, res) => {
  console.log("arriving at home");
  res.render("login");
});

// Use withAuth middleware to prevent access to route
router.get("/", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Budget }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dash");
    return;
  }

  res.render("login");
});

router.get("/build", (req, res) => {
  res.render("buildbudget");
});

module.exports = router;
