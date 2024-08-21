Page({
  data: {
    name: '',
    studentId: ''
  },
  onLoad: function() {
    // 页面加载时获取存储的个人信息
    const name = wx.getStorageSync('name') || '';
    const studentId = wx.getStorageSync('studentId') || '';
    this.setData({
      name: name,
      studentId: studentId
    });
  },
  onInputChange: function(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [field]: e.detail.value
    });
  },
  onSubmit: function() {
    const { name, studentId } = this.data;
    if (name && studentId) {
      // 保存修改后的个人信息到本地存储
      wx.setStorageSync('name', name);
      wx.setStorageSync('studentId', studentId);
      
      wx.showToast({
        title: '信息提交成功',
        icon: 'success',
        duration: 2000
      });
      
      // 返回到个人主页
      wx.navigateBack();
    } else {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      });
    }
  }
});
