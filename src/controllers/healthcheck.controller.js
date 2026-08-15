import { ApiResponse } from "../utils/api-response.js";

/* simple way of try catch
const healthCheck = async (req, res, next) => {
  try {
    await getUserFromDB();
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is running" }));
  } catch (err) {
    next(err); // express's builtin error handler
  }
};

*/

const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { data: "health check ok" }, "bingo"));
});

export { healthCheck };
