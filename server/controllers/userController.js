const userController = (req, res, next) => {
  console.log("get request");
  const dummyData = [
    { id: 1, content: "안녕하세요" },
    { id: 2, content: "안녕하세요" },
  ];
  const place = dummyData.find((e) => {
    return String(e.id) === req.params.id;
  });
  if (place) {
    res.json(place);
  } else return next(new HttpError("그런유저 없음", 404));
};

module.exports = userController;
