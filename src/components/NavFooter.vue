<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <span>|</span>
      <a href="https://github.com/zengzew/mall" target="_blank">项目github</a>
      <span>|</span>
      <a href="https://zengzew.github.io/" target="_blank">zengze的主页</a>
      <span>|</span>
    </div>
    <div class="copyright">
      Copyright ©2021 <span class="domain">zengze.com</span> All Rights
      Reserved.
    </div>
    <div class="footer-link">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >鄂ICP备2021002449号-1</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>