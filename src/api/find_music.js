/**
 * @Description: 发现音乐
 * @Author: lixianying
 * @Date: 2020-01-14
 */

import service from "@/utils/request.js"

/**
 * 获取banner
 */
export const ajaxGetBannerList = () => service.get('/banner');

/**
 * 获取推荐新音乐
 */
export const ajaxGetRecNewSongs = () => service.get("/personalized/newsong");

/**
 * 获取推荐歌单
 */
export const ajaxGetRecPlayList = (data) => service.get("/personalized", data);

/**
 * 独家放送 
 */
export const ajaxGetExclusiveList = () => service.get('/personalized/privatecontent');

/**
 * 最新专辑
 */
export const ajaxGetNewAlbumList = () => service.get('/album/newest');

/**
 * 推荐MV 
 */
export const ajaxGetRecMVList = () => service.get('/personalized/mv');
