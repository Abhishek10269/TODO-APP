// here add all zod for input validation

const zod = require('zod');

// Define a schema for input validation
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string()
});

const updatedTodo = zod.object(
    {
        id: zod.string()
    }
);

module.exports = { createTodo, updatedTodo };
