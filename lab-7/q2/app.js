import express from 'express';
const app = express();

app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.send('app is working!');
});


app.get("/about", (req, res) => {
    const list = [ { name: "suresh", phone: 9876543210 , email: "suresh@example.com"},
                    { name: "ramesh", phone: 8765432109, email: "ramesh@example.com" },
                    { name: "mahesh", phone: 7654321098, email: "mahesh@example.com" },
                    { name: "ganesh", phone: 6543210987, email: "ganesh@example.com" },
                    { name: "vijay", phone: 9988776655, email: "vijay@example.com" },
                    { name: "rajesh", phone: 8877665544, email: "rajesh@example.com" },
                    { name: "sandeep", phone: 7766554433, email: "sandeep@example.com" },
                    { name: "anil", phone: 6655443322, email: "anil@example.com" },
                    { name: "deepak", phone: 9123456789, email: "deepak@example.com" },
                    { name: "kiran", phone: 8234567890, email: "kiran@example.com" }]
    res.render("index", {list });
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
