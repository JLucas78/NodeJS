import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
    {
        id: 1,
        name: "Lucas Andrade",
        email: "Lucasandrade@me.com",
    },
    {
        id: 2,
        name: "Luiz Rodrigues",
        email: "Luizrodrigues@me.com",
    },
    {
        id: 3,
        name: "Vinicius Xavier",
        email: "Xavier@me.com",
    },
];



app.get("/api/users", (request, response) => {
  response.status(200).send(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = Number(request.params.id);
  console.log(parsedId);

  if (isNaN(parsedId)) return response.status(400).send({
    message: "Id must be a number. Invalid id",
  });

  const findUser = mockUsers.find((user) => user.id === parsedId);

  if (!findUser) return response.status(404).send({
    message: "User not found",
  });
  

  return response.status(200).send(findUser);
 


});

app.get("/", (request, response) => {
    response.status(200).send({
      message: "Hello World!",
    });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Localhost:3000
