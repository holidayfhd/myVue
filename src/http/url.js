/**
 * Created by Administrator on 2018/8/18/018.
 */

const host= '/5b76fd671963881cfe2ba3e5';
const path= '/example'
export default{
  common:{
    "auth": '/{a}/example/query',
    "user": '/mock/5b76fd671963881cfe2ba3e5/example/auth/project/create',
    "add": '/5b76fd671963881cfe2ba3e5/example/query'
  },

  host:{
    "list": host+ path+ '/api/host/{page}/{size}/list',
    "detail": host+ path+ '/api/host/detail/{id}',
    "create": host+ path+ '/api/host/create'
  },

  user: {
    "list": host+ path+ '/api/user/{page}/{size}/list',
    "detail": host+ path+ '/api/user/{id}/detail'
  }
}
