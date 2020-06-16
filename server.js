const express = require('express');
const data = require('./data.json')
const app = express();

app.use(express.json());

app.get('/employees', (req, res) => {
  res.json(data);
});
app.get('/employees/:id', (req, res) => {
  const { id } = req.params
  const employee = data.find(el => el.id == id);
  if (!employee) {
    return res.status(204).json()
  }
  res.json(employee);
});
app.post('/employees', (req, res) => {
  const { first_name , last_name , email } = req.body

  // save
  console.log(last_name)
  res.json({first_name, last_name, email})
});
app.put('/employees/:id', (req, res) => {
  const { id } = req.params
  const employee = data.find(el => el.id == id);
  if (!employee) {
    return res.status(204).json()
  }
  const { email } = req.body
  employee.email = email

  res.json({employee})
});
app.delete('/employees/:id', (req, res) => {
  const { id } = req.params
  const employee = data.find(el => el.id == id);
  if (!employee) {
    return res.status(204).json()
  }
  const filteredEmployees = data.filter(el => el.id != id)
  res.json(filteredEmployees)
});

app.listen(3200, () => {
  console.log('Server Initialize')
})

