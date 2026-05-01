import { Budget } from "../models.js/Budget.js";
import { Transaction } from "../models.js/Transaction.js";

//Contoller function for Adding Budget
export const addBudget = async (req, res) => {
  try {
    const { title, limit } = req.body;

    if (!title || !limit) {
      return res.json({
        success: false,
        message: "All fields required",
      });
    }

    const budget = await Budget.create({
      userId: req.userId,
      title,
      limit,
    });

    res.json({
      success: true,
      budget,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Contoller function for getting budget
export const getBudgets = async (req, res) => {
  try {
    const userId = req.userId;

    //Getting all Budget
    const budgets = await Budget.find({ userId });

    //Getting all expense transaction
    const transactions = await Transaction.find({
      userId,
      type: "expense",
    });

    //Attach spent + remaning
    const result = budgets.map((budget) => {
      const spent = transactions
        .filter((t) => t.category === budget.title)
        .reduce((sum, t) => sum + t.amount, 0);

      const remaning = budget.limit - spent;

      return {
        ...budget._doc,
        spent,
        remaning,
        percent: budget.limit > 0 ? (spent / budget.limit) * 100 : 0,
      };
    });

    res.json({
      success: true,
      budgets: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Contoller function for deleting the budget cards
export const delBudgetcard = async (req, res) => {
  try {
    await Budget.findByIdAndDelete(req.params.id);

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
