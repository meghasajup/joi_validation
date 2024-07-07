const express = require('express');
const productSchema = require('./productSchema'); // Import the schema

const app = express();
app.use(express.json());

app.post('/products', (req, res) => {
  const { error, value } = productSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details.map(detail => detail.message).join(', ') });
  }

  res.status(201).json({ message: 'Product created successfully!', product: value });
});


// Example product validation outside of an HTTP request
const product = {
    name: 'Iphone 15 Pro',
    price: 154999.99,
    category: 'electronics',
    description: 'a new action button and charging at USB 3.0 speeds.',
    inStock:'true'
  };
  
  const { error, value } = productSchema.validate(product);
  
  if (error) {
    console.error('Validation error:', error.details);
  } else {
    console.log('Validated product:', value);
  }


  const PORT = process.env.PORT || 5234;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});