const validUser = {
  name: 'John',
  email: 'john@gmail.com',
  phone: '380501234567',
  subject: 'Double Room',
  message: 'I would like to know more about room availability'
};

const invalidEmailUser = {
  name: 'John',
  email: 'johngmail.com',
  phone: '380501234567',
  subject: 'Double Room',
  message: 'Test message'
};

module.exports = { validUser, invalidEmailUser };