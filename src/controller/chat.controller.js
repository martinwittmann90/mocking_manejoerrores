class ChatController{
    async chat (req, res) {
        try {
            res.render("chat", {});
        } catch (error) {
            res.status(error.status || 500).json({ status: "error", payload: error.message, });
        }
    }
};

export const chatController = new ChatController();