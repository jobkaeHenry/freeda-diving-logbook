import { refreshTokenURL } from "@/data/URL/server/Authentication/refreshToken";
import axios from "@/lib/api/axios";
import { getLS, removeLS } from "@/utils/localStorage";

const useRefreshToken = () => {
  const refresh = async () => {
    const refreshToken = getLS("refreshToken");
    const response = await axios
      .post(refreshTokenURL, { refreshToken: refreshToken })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        /**로컬 스토리지 비우기 */
        // removeLS('userInfo')
      });
    return response.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
