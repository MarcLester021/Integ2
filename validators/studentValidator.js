export const validateStudent = (req, res, next) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ message: "Name and id are required."});
    }
    next();
} 