Page({
  data: {
    creatorName: '',
    teamTypeName: '',
    rolesOptions: ['2个角色', '3个角色', '4个角色'], // 角色数量选项
    selectedRoles: '2个角色' // 默认选择
  },
  onCreatorNameInput: function(e) {
    this.setData({ creatorName: e.detail.value });
  },
  onTeamTypeNameInput: function(e) {
    this.setData({ teamTypeName: e.detail.value });
  },
  onRolesChange: function(e) {
    this.setData({ selectedRoles: this.data.rolesOptions[e.detail.value] });
  },
  onSubmit: function() {
    const { creatorName, teamTypeName, selectedRoles } = this.data;
    // 这里可以添加提交组队要求的逻辑
    console.log('提交组队要求:', { creatorName, teamTypeName, selectedRoles });
    // 可以在这里调用API发送数据到服务器
  }
});