const prisma = require('../config/prisma');

exports.create = async (req, res) => {
  try {
    const { title, status } = req.body;
    const newTodo = await prisma.todo.create({
      data: {
        title: title,
        status: status,
      },
    });
    res.json({ newTodo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error during creation!' });
  }
};

exports.list = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json({ todos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error during listing!' });
  }
};

exports.update = async (req, res) => {
  try {
    const { todoid } = req.params;
    const { title, status } = req.body;
    const updated = await prisma.todo.update({
      where: {
        id: Number(todoid),
      },
      data: {
        title: title,
        status: status,
      },
    });
    res.json({ updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error during update!' });
  }
};

exports.remove = async (req, res) => {
  try {
    const { todoid } = req.params;
    const deleted = await prisma.todo.delete({
      where: {
        id: Number(todoid),
      },
    });
    res.json({ deleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error during deletion!' });
  }
};
