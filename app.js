const express = require("express")
const path = require("path")
const app = express();
const port = 80;

// To serve the static files such as .css, .js and .jpg
app.use(express.static('static'))

// To not show the submitted details in the url
app.use(express.urlencoded())

// pug demo endpoint - other way (raw HTML)
app.get("/index", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/aboutus", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'aboutus.html'));
});
app.get("/volunteers", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'volunteers.html'));
});
app.get("/contactus", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'contactus.html'));
});
app.get("/donation", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'donation.html'));
});
app.get("/login", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.get("/orgsignup", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'orgsignup.html'));
});
app.get("/projects", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'projects.html'));
});
app.get("/volunteersForm", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'volunteersForm.html'));
});
app.get("/usersignup", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'usersignup.html'));
});
app.get("/redirect", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'redirect.html'));
});
app.get("/orgDashboard", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'orgDashboard.html'));
});
app.get("/resourceRequest", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'resourceRequest.html'));
});
app.get("/resourceDonation", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'resourceDonation.html'));
});
app.get("/alerts", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'alerts.html'));
});
app.get("/fundCampaign", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'fundCampaign.html'));
});
app.get("/resourceDonation", (req, res)=>{
    // res.status(200).render('index');
    res.sendFile(path.join(__dirname, 'resourceDonation.html'));
});

app.post("/login", (req, res)=>{
    // let content = `\nEmail : ${req.body.email}\nPassword : ${req.body.password}`;
    res.sendFile(path.join(__dirname, 'redirect.html'));
})
app.post("/usersignup", (req, res)=>{
    // let content = `\nEmail : ${req.body.email}\nPassword : ${req.body.password}`;
    res.sendFile(path.join(__dirname, 'redirect.html'));
})
app.post("/orgsignup", (req, res)=>{
    // let content = `\nEmail : ${req.body.email}\nPassword : ${req.body.password}`;
    res.sendFile(path.join(__dirname, 'redirect.html'));
})
app.post("/volunteersForm", (req, res)=>{
    // let content = `\nEmail : ${req.body.email}\nPassword : ${req.body.password}`;
    res.sendFile(path.join(__dirname, 'redirect.html'));
})
app.post("/contactus", (req, res)=>{
    // let content = `\nEmail : ${req.body.email}\nPassword : ${req.body.password}`;
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, ()=>{
    console.log(`App running on the port ${port}`);
});