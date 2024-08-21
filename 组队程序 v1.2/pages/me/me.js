Page({
  data: {
    name: '',
    studentId: ''
  },
  onLoad: function() {
    // 页面加载时获取存储的个人信息
    this.updateProfileData();
  },
  onShow: function() {
    // 页面显示时更新个人信息
    this.updateProfileData();
  },
  updateProfileData: function() {
    // 从本地存储中获取用户信息并更新页面
    const name = wx.getStorageSync('name') || '张三';
    const studentId = wx.getStorageSync('studentId') || '20210001';
    this.setData({
      name: name,
      studentId: studentId
    });
  }
});
