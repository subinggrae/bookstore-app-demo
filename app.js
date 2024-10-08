const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const categoryRouter = require('./routes/categories');
const bookRouter = require('./routes/books');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');
const reviewRouter = require('./routes/reviews');

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/categories', categoryRouter);
app.use('/books', bookRouter);
app.use('/carts', cartRouter);
app.use('/orders', orderRouter);
app.use('/reviews', reviewRouter);