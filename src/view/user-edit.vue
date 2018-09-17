<template>
  <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
    <FormItem label="Name" prop="name">
      <Input type="text" v-model="formCustom.name"></Input>
    </FormItem>
    <FormItem label="Role" prop="role">
      <Input type="text" v-model="formCustom.role"></Input>
    </FormItem>
    <FormItem label="Phone" prop="phone">
      <Input type="text" v-model="formCustom.phone"></Input>
    </FormItem>
    <FormItem label="Describe" prop="desc">
      <Input type="text" v-model="formCustom.desc"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
      <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
  import http from '../http/http.js'
  import Url from '../http/url.js'
  export default {
    data () {
      const validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your name'));
        } else {
          callback();
        }
      };
      const validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your phone again'));
        }else if(!/^1[34578][0-9]{9}$/.test(value)){
          callback(new Error('Please enter your correct phone again'));
        } else {
          callback();
        }
      };
   /*   const validateAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Age cannot be empty'));
        }
        // 模拟异步验证效果
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please enter a numeric value'));
          } else {
            if (value < 18) {
              callback(new Error('Must be over 18 years of age'));
            } else {
              callback();
            }
          }
        }, 1000);
      };*/

      return {
        formCustom: {
          name: '',
          role: '',
          phone: '',
          des: ''
        },
        ruleCustom: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      this.getUserDetail()
    },
    mounted(){

    },
    methods: {
      getUserDetail(){
        http.httpRequest('GET',Url.user.detail,{id:this.$route.params.id}).then(res=>{
          this.formCustom= res.data.resultContent;
          console.log(this.formCustom)
        })
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
