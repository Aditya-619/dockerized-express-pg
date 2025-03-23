const handleError = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: 0,
        msg: `something went wrong: ${err.message}`,
        payload: {}
    });
}

export default handleError;