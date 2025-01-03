exports.api = async (event) => {

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@doe@gmail.com',
    },
    {
      id: 2,
      name: 'Smith Doe',
      email: 'smith@doe@gmail.com',
    }
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};
