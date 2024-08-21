Page({
  data: {
    roles: {
      role1: '',
      role2: '',
      role3: ''
    }
  },
  onRoleInput: function(e) {
    const role = e.currentTarget.dataset.role;
    this.setData({
      [`roles.${role}`]: e.detail.value
    });
  },
  onSubmit: function() {
    const { role1, role2, role3 } = this.data.roles;
    // 这里可以添加提交组队要求的逻辑
    console.log('提交组队要求:', { role1, role2, role3 });
    // 假设提交成功，跳转到结果页面
    wx.navigateTo({
      url: '/pages/result/result' // 假设result页面已经定义在app.json中
    });
  }
});