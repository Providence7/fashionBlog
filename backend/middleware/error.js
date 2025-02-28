const errorHandler = (err, req, res, next) => {
    console.error("🚨 Error:", err.message); // Log errors for debugging

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler
