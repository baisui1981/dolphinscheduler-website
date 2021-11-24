export default {
  'en-us': {
    barText: 'Blog',
    postsTitle: 'All posts',
    list: [
      {
        title: 'Lizhi-case-study(En)',
        author: 'Debra Chen',
        dateStr: '2021-11-24',
        desc: 'Lizhi case study(En)',
        link: '/en-us/blog/Lizhi-case-study(En).html',
      },
      {
        title: 'DS-2.0-alpha-release(En)',
        author: 'Debbra Chen',
        dateStr: '2021-10-29',
        desc: 'DolphinScheduler 2.0 alpha release',
        link: '/en-us/blog/DS-2.0-alpha-release(En).html',
      },     
      {
        title: 'DolphinScheduler Vulnerability Explanation',
        author: 'Debar Chen',
        dateStr: '2021-10-26',
        desc: 'DolphinScheduler Vulnerability Explanation',
        link: '/en-us/blog/DolphinScheduler Vulnerability Explanation.html',
      },
      {
        title: 'Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!',
        author: 'Debar Chen',
        dateStr: '2021-10-22',
        desc: 'Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!',
        link: '/en-us/blog/Introducing Apache DolphinScheduler 1.3.9.html',
      },
      {
        title: 'Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!',
        author: 'Debar Chen',
        dateStr: '2021-10-22',
        desc: 'Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.',
        link: '/en-us/blog/Introducing Apache DolphinScheduler 1.3.9.html',
      },
      {
        title: 'Why did we split the big json of DAG in workflow definition?',
        author: 'JinyLeeChina',
        translator: 'QuakeWang',
        dateStr: '2021-06-03',
        desc: 'The task and relationship in the workflow of Dolphinscheduler is saved as the process_definition_json field that saves the process_definiton table in the database in a large JSON. If a workflow is large, this JSON field has become a result. Very big, you need to analyze JSON when using it, it costs very much, and the task cannot be reused, so the community plan launches the JSON split project.',
        link: '/en-us/blog/Json_Split.html',
      },
      {
        title: ' Big Data Workflow Task Scheduling - Directed Acyclic Graph (DAG) for Topological Sorting',
        author: 'LidongDai',
        translator: 'QuakeWang',
        dateStr: '2021-05-06',
        desc: 'DAG: Full name Directed Acyclic Graph，referred to as DAG。Tasks in the workflow are assembled in the form of directed acyclic graphs, which are topologically traversed from nodes with zero indegrees of ingress until there are no successor nodes.',
        link: '/en-us/blog/DAG.html',
      },
      {
        title: 'FAQ of Apache DolphinScheduler',
        author: 'LidongDai',
        dateStr: '2021-03-20',
        desc: 'Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.',
        link: '/en-us/blog/FAQ.html',
      },
      {
        title: 'Apache Dolphin Scheduler(Incubating) Meetup 2019.10 Shanghai',
        author: 'William',
        dateStr: '2019-9-27',
        desc: 'Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.',
        link: '/en-us/blog/meetup_2019_10_26.html',
      },

    ],
  },
  'zh-cn': {
    barText: '博客',
    postsTitle: '所有文章',
    list: [
      {
        title: '荔枝机器学习平台与大数据调度系统“双剑合璧”，打造未来数据处理新模式!',
        author: 'Debra Chen',
        dateStr: '2021-11-23',
        desc: 'Lizhi case study',
        link: '/zh-cn/blog/Lizhi-case-study.html',
      }, 
      {
        title: '重构、插件化、性能提升 20 倍，Apache DolphinScheduler 2.0 alpha 发布亮点太多!',
        author: 'DolphinScheduler',
        dateStr: '2021-10-29',
        desc: 'DolphinScheduler 2.0 alpha发布',
        link: '/zh-cn/blog/DS-2.0-alpha-release.html',
      },
     {
        title: 'DolphinScheduler漏洞情况说明',
        author: '徐玮毅',
        dateStr: '2021-10-26',
        desc: 'DolphinScheduler漏洞情况说明',
        link: '/zh-cn/blog/DolphinScheduler漏洞情况说明.html',
      },
      {
        title: 'Apache DolphinScheduler 架构演进及开源经验分享',
        author: '徐玮毅',
        dateStr: '2021-07-18',
        desc: 'DolphinScheduler 1.2.x/1.3.x/2.0架构演进及开源经验分享（阮文俊）',
        link: '/zh-cn/blog/DS_architecture_evolution.html',
      },
      {
        title: '伴鱼数据质量平台实践',
        author: '伴鱼技术团队',
        editor: '太空人',
        dateStr: '2021-07-06',
        desc: '伴鱼基础架构数据团队在应对该类问题时推出的平台化产品 - 数据质量中心（Data Quality Center, DQC）的设计与实现',
        link: '/zh-cn/blog/ipalfish_tech_platform.html',
      },
      {
        title: 'DolphinScheduler在Windows环境启动源码',
        author: '寇文皓',
        dateStr: '2021-07-05',
        desc: '在Windows环境下启动DolphinScheduler的代码进行开发调试',
        link: '/zh-cn/blog/DS_run_in_windows.html',
      },
      {
        title: 'DolphinScheduler 核心之 DAG 大 JSON 拆分详解',
        author: '进勇',
        editor: '小P',
        dateStr: '2021-05-29',
        desc: 'DolphinScheduler 核心之 DAG 大 JSON 拆分始末',
        link: '/zh-cn/blog/dolphinscheduler_json.html',
      },
      {
        title: '为什么要把 DolphinScheduler 工作流定义中保存任务及关系的大 json 给拆了?',
        author: '进勇',
        editor: '王福政',
        dateStr: '2021-05-25',
        desc: '当前 DolphinScheduler 的工作流中的任务及关系保存时是以大 json 的方式保存到数据库中 process_definiton 表的 process_definition_json 字段，如果某个工作流很大比如有 1000 个任务，这个 json 字段也就随之变得非常大，在使用时需要解析 json，非常耗费性能，且任务没法重用，故社区计划启动 json 拆分项目。',
        link: '/zh-cn/blog/json_split.html',
      },
      {
        title: '大数据工作流任务调度--有向无环图(DAG)之拓扑排序',
        author: '代立冬',
        translator: '王福政',
        dateStr: '2021-05-19',
        desc: 'DAG：全称是Directed Acyclic Graph，简称DAG。工作流中的任务以有向无环图的形式组合，从拓扑上看，这些节点的入口度为零，直到没有后续节点为止。',
        link: '/zh-cn/blog/DAG.html',
      },
      {
        title: 'Apache Dolphinscheduler 1.3.x 系列配置文件指南',
        author: '张伯毅',
        dateStr: '2021-01-05',
        target: '_blank',
        desc: '本文档为dolphinscheduler配置文件指南,针对版本为 dolphinscheduler-1.3.x 版本',
        link: 'https://mp.weixin.qq.com/s/gJUsGBHuMxw79VGH2ziZtg',
      },
      {
        title: 'DolphinScheduler & K8s 在优路科技的实践！',
        author: '李文禾',
        dateStr: '2020-11-12',
        target: '_blank',
        desc: '本文通过介绍DolphinScheduler on Kubernetes 在优路科技的实践，阐述了DolphinScheduler如何在云原生时代，更好地助力企业实现高效的数据调度解决方案',
        link: 'https://mp.weixin.qq.com/s/roNuuZ1AWySam5WwNQHwhg',
      },
      {
        title: 'Apache DolphinScheduler 需要的sudo，还可以这么玩，长见识了！',
        author: '海豚调度',
        dateStr: '2020-12-16',
        target: '_blank',
        desc: '这里推荐一下社区贡献者 import 的实践文章，写的非常赞，sudo 也是非常的痛点，也寻求一种更好的实现方式来实现多租户',
        link: 'https://mp.weixin.qq.com/s/5rRWMoT0DLMcOdDl-mrsRQ',
      },
      {
        title: 'Apache Dolphin Scheduler(Incubating)将于2019.10在上海举行见面会',
        author: '郭炜',
        dateStr: '2019-9-27',
        desc: 'Apache Dolphin Scheduler(Incubating) 将于2019年10月26日在上海组织一次会议，欢迎踊跃报名。 ',
        link: '/zh-cn/blog/meetup_2019_10_26.html',
      },
    ],
  },
};
