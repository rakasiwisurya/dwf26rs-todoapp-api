const express = require("express");
const router = express.Router();

const {
  addTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo");

router.post("/todos", addTodo);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
