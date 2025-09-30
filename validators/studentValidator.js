export const validateStudent = (req, res, next) => {
    const { name, id } = req.body;
    
    if (!name || !id) {
        return res.status(400).json({ message: "Name and id are required."});
    }
    next();
} 