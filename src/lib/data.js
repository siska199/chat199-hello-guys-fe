export const contacts = [...Array(10)].map((_, i) => ({
  image: `../assets/profile-picture/user${i}.jpg`,
  username: `user test${i}`,
  lastMessage: `Lorem ipsum test ${i}`,
}));

export const messages = [...Array(20)].map((_, i) => ({
  user: `${i % 2 === 0 ? "receiver" : "sender"}`,
  message: `${
    i % 2 === 0
      ? "galley of type and scrambled it to make"
      : "when an unknown printer took a galley of type and scrambled it to make"
  }`,
}));
