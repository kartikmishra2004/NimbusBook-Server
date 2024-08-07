import Contact from "../models/contact.model.js";

// Logic for getting contact message
const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contactData = await Contact.create({ name, email, message });
        res.status(200).json({ message: "Message sent successfully!!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to send message!!" });
    }
}

export default contact;