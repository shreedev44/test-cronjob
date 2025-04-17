setInterval(() => {
    fetch("https://inker.onrender.com/health")
        .then(() => console.log("running successfully"))
        .catch(() => console.log("not good"));
}, 600000)