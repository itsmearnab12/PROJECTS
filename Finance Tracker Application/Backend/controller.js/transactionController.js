import { Transaction } from "../models.js/Transaction.js";

//Controller function for Add Transaction
export const addTransaction = async (req, res) => {
  try {
    const { amount, type, category, note } = req.body;

    const transaction = new Transaction({
      userId: req.userId,
      amount,
      type,
      category,
      note,
    });

    await transaction.save();

    res.json({ success: true, transaction });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Controller function for Get All Transaction
export const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.find({
        userId: req.userId,
      }).sort({ createdAt: -1 });

    res.json({ success: true, transaction });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Controller function for Delete Transaction
export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
