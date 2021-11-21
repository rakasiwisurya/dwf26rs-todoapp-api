const { todo } = require("../../models");

exports.addTodo = async (req, res) => {
  try {
    const newTodo = await todo.create(req.body);

    const data = await todo.findOne({
      where: {
        id: newTodo.id,
      },
    });

    res.send({
      status: "Success",
      message: "Todo successfully added",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const data = await todo.findAll();

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.getTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await todo.findOne({
      where: {
        id,
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await todo.update(req.body, {
      where: {
        id,
      },
    });

    const data = await todo.findOne({
      where: {
        id,
      },
    });

    res.send({
      status: "Success",
      message: "Todo succesfully updated",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await todo.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "Success",
      message: "Todo successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};
