/**
 * @Description: 发现音乐
 * @Author: lixianying
 * @Date: 2020-01-14
 */

import service from "@/utils/request.js"

/**
 * 获取推荐新音乐
 */
export const ajaxGetRecNewSongs = () => service.get("/personalized/newsong");

/**
 * 获取推荐歌单
 */
export const ajaxGetRecPlayList = (data) => service.get("/personalized", data);

export const testApi = (data) => service.get("/top/list", data);

