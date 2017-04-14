/**
 * 系统配置信息
* @Author: rogerli
* @Date:   2016-09-19T10:22:22+08:00
* @Last modified by:   rogerli
* @Last modified time: 2016-10-10T17:09:31+08:00
*/
import { message } from 'antd';

const APP_ID = "9002";

export const ARMANI_APIS = {
      "staff_status_api": Settings.WEBLOGIN_HOST + "/login/staff/status",
      "staff_info_api": Settings.WEBLOGIN_HOST + "/login/staff/info",
      "weblogin_login": Settings.WEBLOGIN_HOST + "/login?appId=" + APP_ID + "&returnUrl=",
      "weblogin_logout": Settings.WEBLOGIN_HOST + "/login/logout?appId=" + APP_ID + "&returnUrl=",
      "auth_urls": Settings.WEBLOGIN_HOST + "/login/staff/authorized_urls"
}

export const armani_config = {
      "appid": APP_ID
};
/**
 * 上传配置信息
 * @type {Object}
 */
export const UPLOADCONFIG = {
  action: Settings.FILEGW_HOST+'/upload?tfsGroupId=0',
  withCredentials: true,
  headers: {
     'X-Requested-With': null
  },
  beforeUpload(file) {
    const isJPG = ['image/jpeg', 'image/png', 'image/bmp', 'image/tiff', 'image/gif'].indexOf(file.type) >= 0;
    if (!isJPG) {
      message.error(' 只能上传JPG或PNG文件哦！');
    }
    const isLt500k = file.size / 1024 < 500;
    if (!isLt500k) {
      message.error(' 图片大小不能超过500k ');
    }
    return isJPG && isLt500k;
  }
}

/**
 * 系统api配置
 * @type {Object}
 */
// http://srv.test.pajkdc.com/seagard/api/ad/pageQuery?pageNo=1&pageSize=20&adType=-1&putType=-1
export const SYS_APIS = {
      //分页查询广告计划
     'planListByPage': Settings.API+'/api/ad/pageQuery',
     //新建广告计划
     'addPlan': Settings.API+'/api/ad/add',
     //暂停广告计划
     'pausePlan': Settings.API+'/api/ad/pause',
     //恢复广告计划
     'resumePlan': Settings.API+'/api/ad/resume',
     //终止广告计划
     'stopPlan': Settings.API+'/api/ad/stop',
     //广告计划详情
     'planDetailByPage': Settings.API+'/api/ad/detail/pageQuery',
    //广告计划详情
    'planDetail': Settings.API+'/api/ad/getAdDetail',
     //下载广告计划的打点数据
     'planExport': Settings.API+'/api/ad/export',
     //所有展位信息
     'planBooths': Settings.API+'/api/ad/plan/booth/all',
     //新建投放计划
     'addPlanBooth': Settings.API+'/api/ad/plan/add',
     //暂停投放计划
     'pausePlanBooth': Settings.API+'/api/ad/plan/pause',
     //恢复投放计划
     'resumePlanBooth': Settings.API+'/api/ad/plan/resume',
     //终止投放计划
     'stopPlanBooth': Settings.API+'/api/ad/plan/stop',
     //更新投放计划
     'updatePlanBooth': Settings.API+'/api/ad/plan/update',
     //判断投放计划是否存在时间上的冲突
     'planBoothPeriodCheck': Settings.API+'/api/ad/plan/period/check',
     //下载投放计划打点数据
     'planBoothExport': Settings.API+'/api/ad/plan/export',
     //所有展位模块列表
     'postionList': Settings.API+'/api/ad/plan/position/all',
     //新增展位模块
     'addPosition': Settings.API+'/api/ad/plan/position/add',
     //展位类型列表
     'boothTypes': Settings.API+'/api/ad/plan/booth/type',
     //所有版本信息
      'versionList': Settings.API+'/api/ad/version/all',
     //新增版本
      'addVersion': Settings.API+'/api/ad/version/add',
     //分页查询展位
      'boothByPage': Settings.API+'/api/ad/plan/booth/pageQuery',
      //查询展位详情
      'boothDetail': Settings.API+'/api/ad/plan/booth/detail',
      //新增展位
      'addBooth': Settings.API+'/api/ad/plan/booth/add',
      //更新展位信息
      'updateBooth': Settings.API+'/api/ad/plan/booth/update',
      //获取展位信息
      'getBoothInfo': Settings.API+'/api/ad/plan/info',

      //add owner
      'addOwner': Settings.API+'/api/ad/owner/add',
      'updateOwner': Settings.API+'/api/ad/owner/update',
      'ownerListByPage': Settings.API+'/api/ad/owner/pageQuery',
      //广告主 未关联账号
      'not_associated':Settings.API+'api/ad/owner/getAllOperators',

      //广告计划 关键字 标签 
      'plan_keyword':Settings.API+'api/ad/plan/findTagList',

      //根据广告计划获取所有投放计划
      'getAllPlanByAdId': Settings.API + '/api/ad/detail/getPlans',
      //查找报表数据
      'getPlanChartReport': Settings.API + '/api/ad/plan/getPlanReportByTime',

        //channel
      'addChannel': Settings.API+'/api/ad/channel/add',
      'updateChannel': Settings.API+'/api/ad/channel/update',
      'channelListByPage': Settings.API+'/api/ad/channel/pageQuery',
      'channelReportListByPage': Settings.API+'/api/ad/channel/getChannelReportsByPage',
     //展位类型列表
     'channels': Settings.API+'/api/ad/channel/getAllChannels',
}

/**
 * 系统提示信息
 * @type {Object}
 */
export const TIP_LIST = {
     'addVersion': '版本添加成功!',
     'addBooth': '展位添加成功!',
     'updateBooth': '展位更新成功!',
     'addPlan': '广告计划添加成功!',
     'addModule': '模块添加成功!',
     'optionSuc': '操作成功!',
     'imgUnValidate': '图片的尺寸与展位要求的尺寸不一致',
     'selectBoothFirst': '请先选择展位',
     'add': '添加成功!',
     'update':'更新成功'
}

/**
 * 系统平台配置
 * @type {Object}
 */
export const PLATFORM_CONFIG = {
     IOS: 2,
     ANDROID: 1
}
/**
 * 分页信息配置
 * @type {Object}
 */
export const PAGENATION_CONFIG = {
     current: 1,
     defaultPageSize: 20,
     pageSize: 20
}
/**
 * 广告计划状态映射
 * @type {Object}
 */
export const ADSTATUS_CONFIG = {
    '0': '正常',
    '1': '终止',
    '2': '已投放',
    '3': '暂停',
    '4': '未开始',
    '5': '投放中'
}


/**
 * 广告地域标签
 * @type {Object}
 */
export const PROVINCES_CONFIG = [
    '全部',
    '北京市',
    '上海市',
    '广东省',
    '内蒙古自治区',
    '湖南省',
    '宁夏回族自治区',
    '青海省',
    '河北省',
    '香港特别行政区',
    '河南省',
    '云南省',
    '福建省',
    '江西省',
    '西藏自治区',
    '浙江省',
    '海南省',
    '澳门特别行政区',
    '四川省',
    '贵州省',
    '黑龙江省',
    '甘肃省',
    '山西省',
    '新疆维吾尔自治区',
    '天津市',
    '江苏省',
    '台湾省',
    '安徽省',
    '山东省',
    '广西壮族自治区',
    '吉林省',
    '辽宁省',
    '重庆市',
    '湖北省',
    '陕西省'
]
