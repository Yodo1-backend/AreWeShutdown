function Post(url,body){

};
function Get(url){
  return "yeah";
};
module.exports.GET = function(url,callback){
  let result = null;
  wx.request({
    url: url,
    data: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: res => {
      console.log(res);
      callback(res.data);
    },
    fail: function(res) {},
    complete: function(res) {},
  });
  return result;
};
module.exports.POST = function(url,body){
  return "ha";
};