const underMaintaince = false

const maintaince = async (req, res, next) => {
    if (underMaintaince) {
        return res.status(503).send('Site is currently down. Check back soon!')
    }
    next()
}

module.exports = maintaince;