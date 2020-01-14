/**
 * @Description: 发现音乐
 * @Author: lixianying
 * @Date: 2020-01-14
 */

import service from "@/utils/request.js"

/**
 * 获取推荐新音乐
 */
export const ajaxGetRecommendNewSongs = () => service.get("/personalized/newsong");

export const testApi = (data) => service.get("/top/list", data);

