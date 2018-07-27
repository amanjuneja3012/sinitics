<template>
  <div class='modal' v-bind:class="{ 'is-active' : showModal}" >
      <div class="modal-background"></div>
      <div class="modal-content">
          <div class="box" v-bind:class="{ 'is-mobile' : $device.isMobile}">
              <div class="modal-head" >Book a Free Demo</div>
              <div class="modal-sub-head" >Help us with your information and our executive will get back to you soon</div>
              <div>
                  <div class="field">
                      <div class="control">
                          <input class="input is-small" type="text" v-model="name" placeholder="Full Name" v-on:input='activateButton' >
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                          <input class="input is-small" type="text" v-model="company" placeholder="Company Name" v-on:input='activateButton' >
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                          <input class="input is-small" type="email" v-model="email"  placeholder="Email Address" v-on:input='activateButton' >
                      </div>
                  </div>
              </div>
              <button class="modal-button" v-bind:class="{ active: !isButtonDisabled }" v-bind:disabled="isButtonDisabled" v-on:click='sendData' >Submit Details</button>
          </div>
      </div>
      <button class="modal-close is-large" v-bind:class="{ 'is-mobile-close' : $device.isMobile}" aria-label="close" v-on:click='close' ></button>
  </div>
</template>

<script>
    import Button from '~/components/Button';
    export default {
      props: ["showModal", "onSend", "close"],
        components:{
            Button
        },
         data: function () {
            return {
                name: '',
                company: '',
                email: '',
                isButtonDisabled: true
            }
        },
        methods: {
            activateButton:function(){
              console.log(this.name)
                if(this.name !== '' && this.company !== '' && this.email !== '' ) {
                  this.isButtonDisabled = false
                }else {
                  this.isButtonDisabled = true
                }
            },
            sendData:function(){
                this.onSend(this.name, this.company , this.email)
            }
        }
    }
</script>

<style scoped>
    .modal {
      z-index: 100;
    }
    .modal .box{
        padding: 38px;
        max-width: 430px;
        max-height: 509px;
        border-radius: 4px;
        text-align: center;
        margin: 0 auto;
        background-color: #ffffff;
    }
    .box.is-mobile{
        padding: 18px;
    }
    .is-mobile .modal-button{
        width: 100%;
    }
    .modal-head{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
    }
    .modal-sub-head{
        font-size: 16px;
        margin-bottom: 20px;
    }
    .modal .input{
        border: none;
        box-shadow: none;
        margin-top: 22px;
        border-bottom: 1px solid #dee0e6;
    }
    .modal .input:focus{
        border-bottom: 1px solid #ff003c;
    }
    .modal-button{
        width: 350px;
        height: 50px;
        font-size: 16px;
        font-weight: 500;
        color: white;
        box-shadow: none;
        margin-top: 30px;
        cursor: pointer;
        border-radius: 2px;
        background-color: grey;
    }
    .modal-button.active {
      background-color: #ff003c;
    }
    .modal-close {
      z-index: 101;
      position: absolute;
      top: 30px;
    }
    .is-mobile-close.modal-close {
      z-index: 125;
      position: absolute;
      top: 40px;
      right: 6px;
    }
</style>
