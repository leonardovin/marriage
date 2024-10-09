// signup.js

const { PrismaClient } = require('@prisma/client');
const readline = require('readline');

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const signup = async () => {
  try {
    const name = await askQuestion('Enter your name: ');
    const email = await askQuestion('Enter your email: ');

    // Create user in the database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    console.log('User created successfully:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
    rl.close();
  }
};

signup();
