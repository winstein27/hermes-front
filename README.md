# Hermes - Front End

This project is designed to help small businesses effectively manage their finances by tracking their income and expenses. By keeping track of what they sell and what they purchase, businesses can easily visualize their revenue and expenses, giving them a better understanding of how much they are earning.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Create an account using email and password
- Login with the created account
- Logout from my account

### Links

- Live Site URL: [Add live site URL here](https://hermes-front.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- React
- TypeScript
- Next.js
- MUI
- React Hook Form
- Yarn

### What I learned

MUI theme customization:

```ts
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({ palette: { primary: { main: green[900] } } });
```

Form validation with zod:

```ts
const loginSchema = object({
  email: string().nonempty('Email is required').email('Email is invalid'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});
```

### Useful resources

- [React Hook Form, MUI and React](https://codevoweb.com/react-material-ui-and-react-hook-form-html-forms/) - This helped to create forms and add validation to them.

## Author

- LinkedIn - [Winstein Martins](https://www.linkedin.com/in/winstein-martins/)
