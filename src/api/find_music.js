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
 * 获取推荐歌单
 */
export const ajaxGetRecPlayList = (data) => service.get("/personalized", data);

/**
 * 独家放送 
 */
export const ajaxGetExclusiveList = () => service.get('/personalized/privatecontent');

/**
 * 获取推荐新音乐（该接口对应个性推荐模块下的最新音乐）
 */
export const ajaxGetRecNewSongs = () => service.get("/personalized/newsong");

/**
 * 最新专辑
 */
export const ajaxGetNewAlbumList = () => service.get('/album/newest');

/**
 * 推荐MV 
 */
export const ajaxGetRecMVList = () => service.get('/personalized/mv');

/**
 * 获取歌单分类
 */
export const ajaxGetPlayListCatList = () => service.get('/playlist/catlist');

/**
 * 获取热门歌单分类
 */
export const ajaxGetHotPlayListCatList = () => service.get('/playlist/hot');

/**
 * 获取歌单分类下的歌单（支持分页）
 */
export const ajaxGetPlayListByCat = (data) => service.get('/top/playlist', data);

/**
 * 获取精品歌单（支持分页）
 */
export const ajaxGetQualityPlayListByCat = (data) => service.get('/top/playlist/highquality', data);

export const testApi = () => service.get('');
