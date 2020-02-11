/**
 * @Description: 工具库
 * @Author: lixianying
 * @Date: 2020-02-11
 */

/**
 * 将时间戳格式化为 年 月 日 20:10
 */
export const formateTime = (time) => {
  let tempDate = new Date(time), dateObj = {
    year: tempDate.getFullYear(),
    month: tempDate.getMonth() + 1,
    day: tempDate.getDate(),
    hour: tempDate.getHours(),
    minute: tempDate.getMinutes()
  };
  dateObj.month = dateObj.month >= 10 ? dateObj.month : `0${dateObj.month}`;
  dateObj.day = dateObj.day >= 10 ? dateObj.day : `0${dateObj.day}`;
  dateObj.hour = dateObj.hour >= 10 ? dateObj.hour : `0${dateObj.hour}`;
  dateObj.minute = dateObj.minute >= 10 ? dateObj.minute : `0${dateObj.minute}`;
  return `${dateObj.year}年${dateObj.month}月${dateObj.day}日 ${dateObj.hour}:${dateObj.minute}`;
}