Page({
  data: {
    teamCode: 'ABC-DEF-GHI', // 队伍类型代码
  },
  onCopyCode: function() {
    // 调用微信API复制队伍代码到剪贴板
    wx.setClipboardData({
      data: this.data.teamCode,
      success: function () {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // 此时应与 teamCode 相等
          }
        });
        wx.showToast({
          title: '复制成功'
        })
      }
    });
  },
  onGoHome: function() {
    // 导航到主页
    wx.switchTab({
      url: '/pages/home/home' // 假设home页面已经定义在app.json中
    });
  },
  onGoMessages: function() {
    // 导航到消息页面
    wx.navigateTo({
      url: '/pages/messages/messages' // 假设messages页面已经定义在app.json中
    });
  },
  onGoMy: function() {
    // 导航到我的页面
    wx.navigateTo({
      url: '/pages/my/my' // 假设my页面已经定义在app.json中
    });
  }
});