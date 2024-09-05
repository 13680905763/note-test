const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
const notes = [
    {
      id: 1,
      name: "会议纪要 - 项目进展",
      details: "讨论了项目的最新进展，开发将于下周完成，测试将在两周后开始。",
    },
    {
      id: 2,
      name: "阅读笔记 - 《深度工作》",
      details: "专注工作可以提高效率，培养深度工作的习惯能带来高质量产出。",
    },
    {
      id: 3,
      name: "购物清单",
      details: "牛奶、面包、鸡蛋、咖啡豆、蔬菜。周末去超市。",
    },
    {
      id: 4,
      name: "旅行计划 - 日本",
      details: "明年春天计划去日本，重点参观东京、京都和大阪。",
    },
    {
      id: 5,
      name: "工作任务清单",
      details: "完成项目报告，跟进客户反馈，组织下周会议。",
    },
    {
      id: 6,
      name: "家务待办",
      details: "清洁厨房，整理衣橱，修理水龙头。",
    },
    {
      id: 7,
      name: "健身计划",
      details: "每周三次跑步，每次5公里，加入力量训练。",
    },
    {
      id: 8,
      name: "学习计划 - Python",
      details: "每天学习1小时，完成基础课程和项目实践。",
    },
    {
      id: 9,
      name: "生日礼物清单",
      details: "为朋友准备的礼物包括书籍、耳机、和香水。",
    },
    {
      id: 10,
      name: "健康饮食计划",
      details: "减少糖分摄入，多吃蔬菜水果，避免油炸食品。",
    },
    {
      id: 11,
      name: "会议纪要 - 客户需求",
      details: "客户要求增加一个新功能，计划在下次更新中实现。",
    },
    {
      id: 12,
      name: "电影推荐清单",
      details: "近期想看的电影包括《沙丘》《失控玩家》和《小丑》。",
    },
    {
      id: 13,
      name: "旅行计划 - 欧洲",
      details: "夏天计划去法国、意大利和西班牙，重点参观历史景点。",
    },
    {
      id: 14,
      name: "家装计划",
      details: "重新粉刷客厅，购买新的沙发和地毯。",
    },
    {
      id: 15,
      name: "培训课程笔记",
      details: "学习了项目管理的基本原则和工具使用。",
    },
    {
      id: 16,
      name: "年度目标",
      details: "提升专业技能，定期锻炼身体，读10本书。",
    },
    {
      id: 17,
      name: "新书阅读计划",
      details: "本月计划阅读《白夜行》和《百年孤独》。",
    },
    {
      id: 18,
      name: "音乐会计划",
      details: "下个月去看周杰伦演唱会，提前预定票和住宿。",
    },
    {
      id: 19,
      name: "工作总结",
      details: "总结了上季度的工作成果，并提出下季度的目标。",
    },
    {
      id: 20,
      name: "宠物护理",
      details: "给猫洗澡，剪指甲，安排定期的健康检查。",
    },
    {
      id: 21,
      name: "网站开发项目",
      details: "完成首页设计，搭建后台管理系统，优化移动端体验。",
    },
    {
      id: 22,
      name: "课程作业",
      details: "完成数据分析报告，提交时间是下周五。",
    },
    {
      id: 23,
      name: "财务预算",
      details: "本月支出控制在5000元以内，减少娱乐开销。",
    },
    {
      id: 24,
      name: "社交媒体营销计划",
      details: "提升品牌在社交平台的曝光率，每周发布两次内容。",
    },
    {
      id: 25,
      name: "摄影技巧学习",
      details: "学习了构图技巧和光线的使用，提高照片质量。",
    },
    {
      id: 26,
      name: "家庭聚会安排",
      details: "本周末家人聚会，准备晚餐菜单和游戏环节。",
    },
    {
      id: 27,
      name: "职业发展规划",
      details: "未来两年内提升为项目经理，继续深造相关专业知识。",
    },
    {
      id: 28,
      name: "视频制作学习",
      details: "学会了基本的剪辑技巧和后期特效处理。",
    },
    {
      id: 29,
      name: "技术博客文章",
      details: "撰写关于JavaScript异步编程的博客，计划下周发布。",
    },
    {
      id: 30,
      name: "电子产品购物清单",
      details: "购买新款笔记本电脑和无线耳机，比较各品牌优劣。",
    },
    {
      id: 31,
      name: "家居整理计划",
      details: "整理书架，清理多余物品，重新布置客厅。",
    },
    {
      id: 32,
      name: "语言学习进度",
      details: "每天学习30分钟法语，主要集中在听力和口语。",
    },
    {
      id: 33,
      name: "亲子活动计划",
      details: "周末带孩子去公园，参与手工制作和阅读时间。",
    },
    {
      id: 34,
      name: "社交活动安排",
      details: "本月与朋友聚会两次，一次在咖啡馆，一次在餐厅。",
    },
    {
      id: 35,
      name: "环保行动计划",
      details: "减少塑料使用，定期回收废旧物品，参与社区环保活动。",
    },
    {
      id: 36,
      name: "家庭理财规划",
      details: "每月储蓄收入的10%，并投资股票和基金。",
    },
    {
      id: 37,
      name: "健康检查安排",
      details: "每年进行一次体检，定期关注血压和血糖水平。",
    },
    {
      id: 38,
      name: "DIY项目",
      details: "自己动手制作木质书架，学习木工基础技能。",
    },
    {
      id: 39,
      name: "汽车保养记录",
      details: "定期更换机油，检查轮胎和刹车系统，清洁车内。",
    },
    {
      id: 40,
      name: "心理健康计划",
      details: "每天冥想10分钟，保持正面情绪，减少压力。",
    },
    {
      id: 41,
      name: "职业认证考试",
      details: "报名参加PMP考试，准备材料和复习计划。",
    },
    {
      id: 42,
      name: "房屋租赁计划",
      details: "寻找合适的租房，预算每月4000元左右。",
    },
    {
      id: 43,
      name: "烹饪学习",
      details: "学习了几道新菜品，包括意大利面和日式拉面。",
    },
    {
      id: 44,
      name: "节日活动计划",
      details: "春节期间回家探亲，准备节日礼物和红包。",
    },
    {
      id: 45,
      name: "宠物训练",
      details: "训练狗狗听从基本指令，并定期进行散步。",
    },
    {
      id: 46,
      name: "摄影器材购买",
      details: "计划购买一台单反相机和几款镜头，预算1万元。",
    },
    {
      id: 47,
      name: "在线课程学习",
      details: "正在学习一门关于数据科学的在线",
    },
  ];

const getRandomNote = () => {
    let randomNumbers = new Set(); 
    while (randomNumbers.size < 10) {
        let randomNumber = Math.floor(Math.random() * 47)+1; 
        randomNumbers.add(randomNumber); 
    }
    console.log([...randomNumbers]);
    
   return  notes.filter(note=> [...randomNumbers].includes(note.id))
  };
app.get('/api/note', (req, res) => {
  res.send(notes.filter(note => note.id == req.query.id)[0]);
});
app.get('/api/List', (req, res) => {
    res.send(getRandomNote());
  });
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});