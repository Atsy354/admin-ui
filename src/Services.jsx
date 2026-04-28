export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city: "Jakarta",
      street: "Jl. Kebon Jeruk",
    }));
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await response.json();

    return posts.slice(0, 6).map((post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }));
  } catch (error) {
    console.error(error);
  }
};