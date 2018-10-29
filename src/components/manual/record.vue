<template>
  <div class="list_wall">
    <div class="flow">
      <div class="mask">1</div>
      <div class="close" v-show="!d1"><img class="down" src="./../../../static/img/newdown.png" alt="" @click="open('1')">
      </div>
      <div class="close" v-show="d1"><img class="down" src="./../../../static/img/newup.png" alt="" @click="open('1')">
      </div>
      <div class="header_line"></div>
      <div class="mask_title"  @click="open('1')">对外贸易经营者登记</div>
      <div class="flow_main" v-show="d1">
        <div class="line"></div>
        <div class="flow_title">对接部门</div>
        <div class="flow_p">注册地区商务局</div>
        <div class="flow_title">办事流程</div>
        <div class="flow_p">1、登录商务部业务系统平台企业端（http://iecms.mofcom.gov.cn/corpLogin.html）;</div>
        <div class="flow_p">2、在线填写备案资料，并提交；</div>
        <div class="flow_p">3、准备相关材料，区商务局窗口现场办理。</div>
        <div class="flow_title">准备材料</div>

        <div class="flow_p">（一）《对外贸易登记表》打印件</div>
        <div class="flow_p">（二）营业执照复印件（需要有对外贸易项，如没有应先去工商办理相关增项）</div>
        <div class="flow_p">（三）企业法人身份证复印件</div>
        <div class="flow_p">注意：提交的材料应当加盖企业公章</div>

        <div class="flow_title">办理时间</div>
        <div class="flow_p">柜台当天可以取</div>
        <div class="flow_title">领取注意事项</div>
        <div class="flow_p">需要经办人签字。</div>
      </div>
    </div>
    <div class="flow">
      <div class="mask">2</div>
      <div class="close" v-show="!d2"><img class="down" src="./../../../static/img/newdown.png" alt="" @click="open('2')">
      </div>
      <div class="close" v-show="d2"><img class="down" src="./../../../static/img/newup.png" alt="" @click="open('2')">
      </div>
      <div class="mind_line"></div>
      <div class="mask_title" @click="open('2')">海关报检企业备案</div>
      <div class="flow_main" v-show="d2">
        <div class="line"></div>
        <div class="flow_title">对接部门</div>
        <div class="flow_p">所在地海关</div>
        <div class="flow_title">办事流程</div>
        <div class="flow_p">
          1，中国电子检验检疫业务网站“www.eciq.cn”，在首页的“业务在线”栏下点击“报检企业备案登记”项，选择“新用户”，输入“组织机构代码”或“社会统一信用代码”后点击“备案”按钮。在线填写备案信息并提交。
        </div>
        <div class="flow_p">2、准备相关材料，国检窗口现场办理</div>
        <div class="flow_title">准备材料</div>

        <div class="flow_p">（一）《报检企业备案表》（需双面打印，背面法人签字并盖单位公章）</div>
        <div class="flow_p">（二）营业执照复印件（用统一社会信用代码备案的企业，不用提供）</div>
        <div class="flow_p">（三）组织机构代码证书复印件或统一社会信用代码证复印件</div>
        <div class="flow_p">（四）出入境快件营运企业应当提交国际快递业务经营许可证复印件</div>
        <div class="flow_p">（五）企业的公章印模</div>
        <div class="flow_p">（六）使用报检专用章的，应当提交报检专用章印模（有多枚报检专用章的，应编号予以区别）</div>
        <div class="flow_p">注意：提交的材料应当加盖企业公章，提交复印件的同时交验原件</div>


        <div class="flow_title">办理时间</div>
        <div class="flow_p">柜台当天可以取</div>
        <div class="flow_title">领取注意事项</div>
        <div class="flow_p">需要经办人签字。</div>
      </div>
    </div>
    <div class="flow">
      <div class="mask">3</div>
      <div class="close" v-show="!d3"><img class="down" src="./../../../static/img/newdown.png" alt="" @click="open('3')">
      </div>
      <div class="close" v-show="d3"><img class="down" src="./../../../static/img/newup.png" alt="" @click="open('3')">
      </div>
      <div class="mind_line"></div>
      <div class="mask_title" @click="open('3')">报关单位注册登记证书</div>
      <div class="flow_main" v-show="d3">
        <div class="line"></div>
        <div class="flow_title">对接部门</div>
        <div class="flow_p">所在地海关</div>
        <div class="flow_title">办事流程</div>
        <div class="flow_p">1、准备所需材料；</div>
        <div class="flow_p">2、现场提交审核材料，并提交；</div>
        <div class="flow_p">3、5个工作日后，带申请表至柜台领取。</div>
        <div class="flow_title">准备材料</div>

        <div class="flow_p">（一）《报关企业注册登记许可申请书》；</div>
        <div class="flow_p">（二）《报关单位情况登记表》；</div>
        <div class="flow_p">（三）企业法人营业执照副本复印件以及组织机构代码证书副本复印件（若提交载有18位统一社会信用代码的企业法人营业执照，可不提交企业组织机构代码证书副本复印件）；</div>
        <div class="flow_p">（四）报关服务营业场所所有权证明或者使用权证明；</div>
        <div class="flow_p">（五）其他与申请注册登记许可相关的材料。</div>
        <div class="flow_p">以上提交复印件的，应当同时向海关交验原件。</div>


        <div class="flow_title">办理时间</div>
        <div class="flow_p">柜台提交材料以后5个工作日领取</div>
        <div class="flow_title">领取注意事项</div>
        <div class="flow_p">需要经办人签字。</div>
        <div class="flow_p">携带申请书（申请书上需要写明企业网址，申请业务类别，并加盖公章）。</div>
      </div>
    </div>
    <div class="flow">
      <div class="mask">4</div>
      <div class="close" v-show="!d4"><img class="down" src="./../../../static/img/newdown.png" alt="" @click="open('4')">
      </div>
      <div class="close" v-show="d4"><img class="down" src="./../../../static/img/newup.png" alt="" @click="open('4')">
      </div>
      <div class="mind_line"></div>
      <div class="mask_title" @click="open('4')">IC卡，读卡器</div>
      <div class="flow_main" v-show="d4">
        <div class="line"></div>
        <div class="flow_title">对接部门</div>
        <div class="flow_p">海关数据分中心</div>
        <div class="flow_title">办事流程</div>
        <div class="flow_p">南京数据分中心综合业务大厅柜台</div>
        <div class="flow_p">第一步：企业到南京数据分中心综合业务大厅办理电子口岸信息录入、制卡手续。携带资料</div>
        <div class="flow_p">第二步：柜台审核受理后，现场排队等待办理录入、制卡手续。</div>
        <div class="flow_title">准备材料</div>

        <div class="flow_p">（一）三证合一的《企业营业执照》的原件及复印件(清晰可辨)。（老企业建议更换为三证合一企业后再来办理）</div>
        <div class="flow_p">（二）海关报关单位注册登记证书复印件。</div>
        <div class="flow_p">（三）加盖企业公章的2号表（此表可在下载专区下载）。</div>
        <div class="flow_p"> （四）法人卡持卡人身份证复印件</div>
        <div class="flow_p">（五）操作员持卡人身份证原件、复印件。</div>


        <div class="flow_title">办理时间</div>
        <div class="flow_p">当天柜台企业缴费、领取电子口岸卡。</div>
        <div class="flow_p">初始密码为8个8，可正常使用。</div>
        <div class="flow_title">领取注意事项</div>
        <div class="flow_p">需要经办人签字。</div>
        <div class="flow_p">
          全省现有南京、镇江、南通、淮安地区的新入网企业来一次柜台就可以办理到中国电子口岸IC卡。其他地区的企业仍需要去各市级主管工商局柜台进行人工电子口岸审核，审核后方可来柜台办理制卡手续。（需要来柜台两次才可以办理到IC卡）三证合一企业主管海关已设置自动审核，无需要去窗口进行人工审核。
        </div>
      </div>
    </div>
    <div class="flow">
      <div class="mask">5</div>
      <div class="close" v-show="!d5"><img class="down" src="./../../../static/img/newdown.png" alt="" @click="open('5')">
      </div>
      <div class="close" v-show="d5"><img class="down" src="./../../../static/img/newup.png" alt="" @click="open('5')">
      </div>
      <div class="mind_line"></div>
      <div class="mask_title" @click="open('5')">报关员IC卡流程</div>
      <div class="flow_main" v-show="d5">
        <div class="line"></div>
        <div class="flow_title">对接部门</div>
        <div class="flow_p">海关数据分中心</div>
        <div class="flow_title">办事流程</div>
        <div class="flow_p">南京数据分中心综合业务大厅柜台</div>
        <div class="flow_title">准备材料</div>

        <div class="flow_p">（一）上网下载（www.njeport.com），并填写“办理中国电子口岸业务清单”（补卡的需填写），填写补卡的姓名、报关员注册号，同时加盖企业公章。</div>
        <div class="flow_p">（二）《报关人员备案证明》原件，此证明经当地海关企管部门审核批准并发放。（新增报关员卡需携带）</div>
        <div class="flow_p">（三）照片1张，反面备注姓名和报关员号。（新增、补卡都需要）</div>
        <div class="flow_p">（四）企业法人卡并提供密码。</div>


        <div class="flow_title">办理时间</div>
        <div class="flow_p">柜台当天可以取</div>
        <div class="flow_title">领取注意事项</div>
        <div class="flow_p">（1）IC卡的有效期为2年期限，到期前2个月登陆时有提示。</div>
        <div class="flow_p">（2）IC卡初始密码为8个“8”，请自行更改后使用。连续五次输入错误，IC卡即被锁定。</div>
        <div class="flow_p">（3）报关员IC卡85元/张。</div>
      </div>
    </div>
    <div :class="d6?'flow3':'flow2'">
      <div class="mask">6</div>
      <div class="close" v-show="!d6"><img class="down" src="./../../../static/img/newdown.png" alt="" @click="open('6')">
      </div>
      <div class="close" v-show="d6"><img class="down" src="./../../../static/img/newup.png" alt="" @click="open('6')">
      </div>
      <div class="last_line"></div>
      <div class="mind_line" v-show="d6"></div>
      <div class="mask_title" @click="open('6')">报关员IC卡流程</div>
      <div class="flow_main" v-show="d6">
        <div class="line"></div>
        <div class="flow_title">对接部门</div>
        <div class="flow_p">海关数据分中心</div>
        <div class="flow_title">办事流程</div>
        <div class="flow_p">南京数据分中心综合业务大厅柜台</div>
        <div class="flow_title">准备材料</div>

        <div class="flow_p">（一）上网下载（www.njeport.com），并填写《南京关区预录入操作员卡信息表》，同时加盖企业公章。申请几张操作员卡，就填写几张此表格。</div>
        <div class="flow_p">（二）企业法人卡，并提供法人卡密码。</div>

        <div class="flow_title">办理时间</div>
        <div class="flow_p">柜台当天可以取</div>
        <div class="flow_title">领取注意事项</div>
        <div class="flow_p">IKEY卡密码为初始密码8个8，IKEY卡110元/张。</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "record",
    data() {
      return {
        d1: false,
        d2: false,
        d3: false,
        d4: false,
        d5: false,
        d6: false,
      }
    },
    methods: {
      open(res) {
        if (res == 1) {
          this.d1 = !this.d1;
        }
        if (res == 2) {
          this.d2 = !this.d2;
        }
        if (res == 3) {
          this.d3 = !this.d3;
        }
        if (res == 4) {
          this.d4 = !this.d4;
        }
        if (res == 5) {
          this.d5 = !this.d5;
        }
        if (res == 6) {
          this.d6 = !this.d6;
        }
      }
    }
  }
</script>

<style scoped>
  .list_wall {
    position: relative;
  }

  .flow {
    position: relative;
    width: 750px;
    min-height: 90px;
  }
  .flow3 {
    position: relative;
    width: 750px;
    min-height: 90px;
  }

  .flow2 {
    position: relative;
    width: 750px;
    min-height: 90px;
  }

  .mask {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    font-size: 26px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    font-family: PingFangSC-Regular;
    background: #227EFF;
    left: 25px;
    top: 28px;
    z-index: 170;
  }

  .mask_title {
    font-size: 34px;
    font-family: PingFangSC-Regular;
    position: absolute;
    line-height: 90px;
    width: 100%;
    background: #fff;
    padding-left: 80px;
    z-index: 150;
    box-sizing: border-box;
  }

  .flow_main {
    padding: 96px 36px 36px 80px;
    font-size: 26px;
    background: #f5f5f5;
    position: relative;
    overflow: hidden;
  }

  .flow_title {
    font-size:32px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(34,126,255,1);
    line-height:30px;
    margin-bottom: 19px;
    margin-top: 36px;
  }

  .flow_p {
    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:40px;
  }

  .close {
    position: absolute;
    right: 40px;
    top: 32px;
    z-index: 200;
  }

  .down {
    width: 28px;
  }

  .header_line{
    position: absolute;
    z-index: 160;
    height: 50px;
    border-left: 2px solid #227EFF;
    left: 44px;
    top: 45px;
  }
  .mind_line{
    position: absolute;
    z-index: 160;
    height: 100px;
    border-left: 2px solid #227EFF;
    left: 44px;
    top: -5px;
  }
  .last_line{
    position: absolute;
    z-index: 160;
    height: 50px;
    border-left: 2px solid #227EFF;
    left: 44px;
    top: -5px;
  }
  .line{
    position: absolute;
    z-index: 140;
    height: 100%;
    border-left: 2px solid #227EFF;
    left: 44px;
    top: 90px;
  }
</style>
