const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../middleware/isAuthenticated");

router.post("/", withAuth, async (req, res) => {
	try {
		const newComment = await comment.create({
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
