import { Goal } from "../models.js/Goals.js";

//Controller function for adding a goal
export const addGoal = async (req, res) => {
  try {

    const { title, target, date } = req.body;

    if (!title || !target || !date) {
      return res.json({
        success: false,
        message: "All fields are required to fill",
      });
    }
    const newGoal = new Goal({
      title,
      target,
      date,
      userId: req.user.id,
    });

    const savedGoal = await newGoal.save();

    res.json({ success: true, savedGoal });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Contoller function for getting goals data
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json({ success: true, goals });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
