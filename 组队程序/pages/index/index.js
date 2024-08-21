// index.js
Page({
  navigateToTarget1() {
    wx.navigateTo({
      url: '/pages/teacher/teacher'
    });
  },
  navigateToTarget2() {
    wx.navigateTo({
      url: '/pages/student/student'  
    });
  }
});
