const fileController = (req, res) => {
  try {
    let body = req.body;
    let files = req.files;

    console.log("Body:", body);
    console.log("Files:", files);

    return res.status(200).json({
      message: "File received successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = fileController
