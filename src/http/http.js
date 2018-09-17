/**
 * Created by Administrator on 2018/8/18/018.
 */
import axios from 'axios'

//全局设置
axios.defaults.baseURL = 'https://easy-mock.com/mock';/*https://api.example.com*/
axios.defaults.timeout = 10000
//axios.defaults.headers.common['Authorization'] = sessionStorage['token'];
axios.defaults.headers = {
  'Authorization': sessionStorage['token']
}
/*axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.put['Content-Type'] = 'application/json; charset=utf-8';*/


// 添加请求拦截器
axios.interceptors.request.use(
  config=> {
  // 在发送请求之前做些什么  loading
  return config;
}, error=> {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(
  response=>{
  // 对响应数据做点什么
  return response;
}, error=> {
  // 对响应错误做点什么
  if(error){
    switch (error.status){
      case 401:
            this.$router.push('login');
            break;
      case 400:
        this.$router.push('*');
        break;
    }
  }

  return Promise.reject(error);
});

export default {

  httpRequest(type,url, ...params){
  let httpOptions= {
    method: type,
    url: url
  }
  if(type== 'GET' || type== 'DELETE'){ //get delete
   httpOptions['url']= this.transformUrl(url,params[0]);
  }else if(params.length == 1){ //post put只传了body
    httpOptions['data']= JSON.stringify(params[0]);
  }else{ //post put传了body也传了url参数
    httpOptions['url']= this.transformUrl(url,params[0]);
    httpOptions['data']= JSON.stringify(params[1]);
  }

  return new Promise((resolve, reject)=> {
    axios(httpOptions).then(res=> {
      resolve(res)
    }).catch(err=> {
      alert(err)
      reject(err)
    })
  })
},

transformUrl(url,params){
  return url.replace(/{(\w+)}/g, function (origin, match, index) {
    return params[match]
  })
},

  /*get(url,params){
    return new Promise((resolve, reject)=> {
      axios.get(url, {
        params: params
      }).then(res=> {
        resolve(res)
      }).catch(err=> {
        reject(err)
      })
    })
  },

  post(url,data){
    return new Promise((resolve,reject)=>{
      axios.post(url,data)
        .then(res=>{
          resolve(res)
        }).catch(err=>{
          reject(err)
      })
    })
  }*/

}
