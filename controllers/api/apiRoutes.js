const router = require("express").Router();
const { Comment } = require("../../models");
const isAuthenticated = require("../../middleware/isAuthenticated");

// can i create a db for feedback or use a model?
// router.get("/", (req, res) =>
// 	readFromFile("./db/feedback.json").then((data) => res.json(JSON.parse(data)))
// );

router.post("/locations", isAuthenticated, async (req, res) => {
	try {
		const newComment = await Comment.create({
			...req.body,
			user_id: req.session.user_id,
		});

		res.status(200).json(newComment);
	} catch (err) {
		res.status(400).json(err);
	}
});

// router.delete("/:id", withAuth, async (req, res) => {
// 	try {
// 		const projectData = await Comment.destroy({
// 			where: {
// 				id: req.params.id,
// 				user_id: req.session.user_id,
// 			},
// 		});

// 		if (!projectData) {
// 			res.status(404).json({ message: "No project found with this id!" });
// 			return;
// 		}

// 		res.status(200).json(projectData);
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

module.exports = router;
