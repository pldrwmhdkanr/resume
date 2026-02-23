import React from 'react';

const Resume = () => {
  return (
    // 最外层容器：浅色背景，全局字体设置，打印时去除背景
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-6 md:py-12 px-4 print:bg-transparent print:py-0 print:px-0 antialiased">
      
      {/* 简历主体纸张 */}
      <div className="max-w-[850px] mx-auto bg-white relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 md:px-22 md:py-18 px-6 py-10 print:shadow-none print:max-w-full print:px-0 print:py-0">
        
        {/* 顶部科技感蓝青渐变装饰条 (打印时隐藏) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-teal-600 print:hidden"></div>

        {/* --- 头部信息 --- */}
        <header className="mb-14 relative">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-1">
            陈铅
          </h1>
          <div className="text-lg font-semibold text-blue-600 mb-5">
            全栈开发工程师
          </div>
          
          {/* 联系方式 (使用等宽字体，增加圆点分隔符) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-mono text-slate-500">
            <span className="flex items-center after:content-[''] after:inline-block after:w-1 after:h-1 after:bg-slate-300 after:rounded-full after:ml-4 print:after:hidden">
              (+86) 138 6713 8745
            </span>
            <span className="flex items-center after:content-[''] after:inline-block after:w-1 after:h-1 after:bg-slate-300 after:rounded-full after:ml-4 print:after:hidden">
              <a href="mailto:2242893550@qq.com" className="hover:text-blue-600 transition-colors">
                2242893550@qq.com
              </a>
            </span>
            <span className="flex items-center after:content-[''] after:inline-block after:w-1 after:h-1 after:bg-slate-300 after:rounded-full after:ml-4 print:after:hidden">
              浙江农林大学 / 计算机科学与技术
            </span>
            <span>2022.09 - 2026.06</span>
          </div>
        </header>

        {/* --- 专业技能 --- */}
        <section className="mb-12">
          <SectionTitle>专业技能</SectionTitle>
          <div className="flex flex-col gap-5">
            <SkillRow title="后端架构与开发">
              熟练掌握 <TechTag>Java</TechTag> (Spring Boot) 与 <TechTag>Node.js</TechTag> 后端生态；深入钻研现代前后端同构技术栈（基于 <TechTag>Hono</TechTag> + <TechTag>Drizzle ORM</TechTag> + <TechTag>Zod</TechTag> 的类型安全方案）；具备独立进行 RESTful API 设计、复杂业务逻辑处理及 JWT/OAuth 鉴权开发的完整闭环能力。
            </SkillRow>
            <SkillRow title="数据库与运维">
              熟练掌握 <TechTag>MySQL</TechTag> 关系型数据库的底层原理、表结构建模与 SQL 性能调优；熟悉 Linux 生产环境指令，具备独立配置 <TechTag>Nginx</TechTag> 反向代理、处理复杂跨域，以及编写 <TechTag>GitLab CI/CD</TechTag> 自动化构建流水线的实战落地经验。
            </SkillRow>
            <SkillRow title="前端核心与高阶业务">
              深入理解 <TechTag>Vue 3</TechTag> + <TechTag>TypeScript</TechTag> 体系及工程化构建；精通中后台复杂场景线开发，熟练应用 <TechTag>AG Grid</TechTag> 处理海量数据渲染、高阶行列分组与事务更新；具备从零搭建企业级 RBAC 动态权限控制与自定义指令（如 <code>v-permission</code>）封装的能力。
            </SkillRow>
            <SkillRow title="数据可视化与 AI">
              熟练应用 <TechTag>ECharts</TechTag> 与 <TechTag>D3.js</TechTag> 开发包含时间轴缩放、动态刻度计算的交互式监控大屏（如码头泊位/GIS 数据看板）；具备将大语言模型（如集成 <TechTag>Gemini API</TechTag>）等 AI 能力接入全栈业务流，实现智能化工具开发的经验。
            </SkillRow>
          </div>
        </section>

        {/* --- 项目经历 --- */}
        <section className="mb-12">
          <SectionTitle>项目经历</SectionTitle>

          {/* 项目一 */}
          <div className="mb-9 relative">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
              <h3 className="text-[1.15rem] font-bold text-slate-900">校园综合服务与交易平台</h3>
              <span className="text-sm font-mono font-medium text-sky-500 bg-sky-50 px-2.5 py-0.5 rounded-full mt-1 md:mt-0 w-fit">
                2024.01 - 2024.06
              </span>
            </div>
            <div className="text-[0.95rem] font-semibold text-blue-600 mb-3">
              全栈开发 | 面向高校师生的 B2C/C2C 交易管理系统
            </div>
            <div className="text-[0.95rem] text-slate-500 mb-3 bg-slate-50 px-4 py-2.5 border-l-4 border-slate-200 rounded-r print:bg-transparent print:pl-3 print:border-slate-300">
              基于前后端分离架构，提供商品多维检索、RBAC 权限管理、订单状态流转及后台数据看板等核心功能模块，致力于提升校园资源利用率。
            </div>
            <ul className="space-y-2">
              <BulletPoint>
                <b>前端交互与架构：</b>主导商品分类导航与高阶搜索模块，采用防抖/节流及虚拟列表技术优化长列表渲染性能；提取并封装多个高复用性业务组件（如动态权限指令、全局高级筛选表单），统一项目 UI 规范。
              </BulletPoint>
              <BulletPoint>
                <b>后端与数据设计：</b>协助设计商品、用户、评论等核心数据库表，参与用户登录注册模块的前后端状态同步与 JWT 身份验证逻辑开发。
              </BulletPoint>
              <BulletPoint>
                <b>工程化落地：</b>参与项目的打包与构建优化，配合 Nginx 完成前端静态资源与后端 API 代理的服务器部署配置。
              </BulletPoint>
            </ul>
          </div>

          {/* 项目二 */}
          <div className="mb-9 relative">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
              <h3 className="text-[1.15rem] font-bold text-slate-900">基于深度学习的图像色彩分析系统</h3>
              <span className="text-sm font-mono font-medium text-sky-500 bg-sky-50 px-2.5 py-0.5 rounded-full mt-1 md:mt-0 w-fit">
                2024.10 - 2025.06
              </span>
            </div>
            <div className="text-[0.95rem] font-semibold text-blue-600 mb-3">
              项目负责人 | 智能图像分析与可视化数据面板
            </div>
            <div className="text-[0.95rem] text-slate-500 mb-3 bg-slate-50 px-4 py-2.5 border-l-4 border-slate-200 rounded-r print:bg-transparent print:pl-3 print:border-slate-300">
              结合计算机视觉与前端可视化的智能分析工具。通过模型自动识别上传图像中的核心区域并提取主色调，以动态图表展示色彩权重与分析报告。
            </div>
            <ul className="space-y-2">
              <BulletPoint>
                <b>核心算法与模型：</b>使用 <TechTag>OpenCV</TechTag> 预处理图像，结合 KMeans 聚类算法高效提取并转换颜色空间，保障特征提取的准确度与运行效率。
              </BulletPoint>
              <BulletPoint>
                <b>数据可视化面板：</b>运用 <TechTag>ECharts</TechTag> 与 <TechTag>D3.js</TechTag> 设计数据面板，将算法产出的多维聚类数据转化为动态饼图、散点图等直观的图表形态，实现交互式数据联动。
              </BulletPoint>
              <BulletPoint>
                <b>全栈链路优化：</b>优化大图片上传与流式处理链路，重构结果整合逻辑，使分析报告的生成速度与前端可视化渲染更加流畅平滑。
              </BulletPoint>
            </ul>
          </div>
        </section>

        {/* --- 教育与其他 --- */}
        <section className="mb-12">
          <SectionTitle>教育与其他</SectionTitle>
          <div className="relative">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
              <h3 className="text-[1.15rem] font-bold text-slate-900">浙江农林大学</h3>
              <span className="text-sm font-mono font-medium text-sky-500 bg-sky-50 px-2.5 py-0.5 rounded-full mt-1 md:mt-0 w-fit">
                2022.09 - 2026.06
              </span>
            </div>
            <div className="text-[0.95rem] font-semibold text-blue-600 mb-3">
              计算机科学与技术 | 全日制本科
            </div>
            <ul className="space-y-2">
              <BulletPoint>
                <b>语言能力：</b>大学英语四级 (CET-4)，能够流畅阅读英文官方技术文档与 StackOverflow 等社区资料；普通话国家二级甲等。
              </BulletPoint>
            </ul>
          </div>
        </section>

        {/* --- 自我评价 --- */}
        <section>
          <SectionTitle>自我评价</SectionTitle>
          <p className="text-[0.95rem] text-slate-500 text-justify leading-relaxed">
            具备扎实的计算机专业基础与完整的全栈项目落地经验。对前端高阶交互（复杂表格/数据可视化）与现代后端架构（Node/Java 生态）有深厚兴趣。编码习惯良好，注重代码的可维护性与组件复用，习惯拥抱开源社区。具备较强的逻辑思维能力与抗压能力，能够快速学习新技术并无缝融入敏捷开发团队。
          </p>
        </section>

      </div>
    </div>
  );
};

export default Resume;

/* =========================================
   提取的小组件 (为了保持代码清爽可读)
   ========================================= */

// 章节标题组件 (带渐变小方块)
const SectionTitle = ({ children }) => (
  <h2 className="text-[1.25rem] font-bold text-slate-900 mb-6 flex items-center">
    <span className="inline-block w-1.5 h-5 bg-gradient-to-r from-blue-600 to-teal-600 mr-3 rounded-sm"></span>
    {children}
  </h2>
);

// 技能行组件
const SkillRow = ({ title, children }) => (
  <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
    <div className="font-semibold text-slate-900 w-full md:w-[140px] shrink-0 md:pt-1">
      {title}
    </div>
    <div className="text-[0.95rem] text-slate-500 leading-relaxed">
      {children}
    </div>
  </div>
);

// 科技感小标签组件
const TechTag = ({ children }) => (
  <code className="font-mono bg-blue-50 text-blue-800 border border-blue-100 px-1.5 py-0.5 rounded font-medium text-[0.85em] mx-0.5">
    {children}
  </code>
);

// 列表项组件 (带自定义科技感圆点)
const BulletPoint = ({ children }) => (
  <li className="relative pl-5 text-[0.95rem] text-slate-900 text-justify">
    <span className="absolute left-0 top-[0.45rem] w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
    {children}
  </li>
);
