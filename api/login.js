export default async (req, res) => {
    console.log(req.body);
    const data = JSON.stringify(req.body);
    return res.send(`server received: ${data}`);
}
