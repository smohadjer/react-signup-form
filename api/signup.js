export default async (req, res) => {
    const data = JSON.stringify(req.body);
    return res.send(`server received: ${data}`);
}
