// here add all zod for input validation

const { z } = require('zod');

// Define a schema for input validation
const createTodo = z.object({
  title: z.string(),
  description: z.string(),
});

const updatedTodo = z.object(
    {
        id: z.string
    }
);

module.export = {
    createTodo: createTodo,
    updatedTodo: updatedTodo

}
