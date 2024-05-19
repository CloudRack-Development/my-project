const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newTicket = new Ticket({
            user: req.user.id,
            title,
            description
        });

        const ticket = await newTicket.save();
        res.json(ticket);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({ user: req.user.id });
        res.json(tickets);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({ msg: 'Ticket not found' });
        }

        if (ticket.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        res.json(ticket);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
