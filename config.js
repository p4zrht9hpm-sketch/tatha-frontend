/**
 * Tatha Global Config
 * Phase 1: centralize base URL and i18n strings
 * Phase 2: replace with Next.js + next-intl
 */

var TATHA_CONFIG = {
  BASE_URL: 'https://api.genz.ltd',
  DEFAULT_LOCALE: 'zh-CN',

  // i18n message catalogs
  messages: {
    'zh-CN': {
      appName: 'Tatha',
      tagline: '求职与陪伴，可持续的 AI 助理',
      nav: { login: '登录', demo: '演示' },
      tiers: {
        free:  { tag: '免费体验', desc: '适合初次尝试', cta: '免费开始' },
        basic: { tag: '推荐',     desc: '适合求职者日常使用', cta: '立即订阅' },
        pro:   { tag: '专业版',   desc: '适合重度用户', cta: '升级 Pro' }
      },
      features: {
        free:  ['每日 1 次 AI 问答', '每日 3 次职位匹配', '基础诗词推荐'],
        basic: ['每日 15 次 AI 问答', '每日 20 次职位匹配', '简历上传解析', 'MBTI 性格测评', '诗词 RAG 推荐'],
        pro:   ['无限 AI 问答', '无限职位匹配', '优先支持', 'API 接入权限']
      },
      period: '/月',
      auth: {
        title: '登录 / 注册 Tatha',
        demoNote: '当前为演示模式，无需数据库与配置，注册/登录仅校验格式即返回成功。',
        tabLogin: '登录', tabRegister: '注册',
        labelEmail: '邮箱', labelPassword: '密码', labelConfirmPw: '确认密码',
        btnLogin: '登录', btnRegister: '注册',
        backIndex: '返回订阅页', backDemo: '直接进入匹配体验',
        orContinueWith: '或使用以下方式',
        googleLogin: '使用 Google 登录',
        loginSuccess: '登录成功', registerSuccess: '注册成功',
        pwMismatch: '两次密码不一致',
        errRequest: '请求失败：'
      },
      demo: {
        title: 'Tatha 匹配体验',
        subtitle: 'Tatha 求职与陪伴 AI 助理 — 简历上传、职位匹配、诗词推荐、MBTI 测评。',
        logout: '退出登录',
        tabResume: '简历', tabMatch: '职位匹配', tabAsk: '单入口 /v1/ask',
        uploadLabel: '上传简历（PDF/Word 等）',
        uploadBtn: '上传并解析',
        resumeLabel: '简历内容（可从上方「简历」上传解析，或直接填写/粘贴）',
        matchBtn: '匹配岗位',
        sendBtn: '发送 /v1/ask',
        pasteBtn: '粘贴',
        overallScore: '综合分',
        noMatch: '无匹配结果。',
        loading: '请求中…',
        upgradeMsg: '当日配额已用尽，请升级后继续使用。',
        upgradeLink: '去订阅页升级'
      }
    },
    'en': {
      appName: 'Tatha',
      tagline: 'AI Career Companion — Sustainable Job Search',
      nav: { login: 'Sign In', demo: 'Demo' },
      tiers: {
        free:  { tag: 'Free',       desc: 'Perfect for getting started', cta: 'Get Started' },
        basic: { tag: 'Recommended', desc: 'For active job seekers',      cta: 'Subscribe' },
        pro:   { tag: 'Pro',         desc: 'For power users',             cta: 'Upgrade to Pro' }
      },
      features: {
        free:  ['1 AI chat / day', '3 job matches / day', 'Basic poetry recommendations'],
        basic: ['15 AI chats / day', '20 job matches / day', 'Resume parsing', 'MBTI assessment', 'Poetry RAG recommendations'],
        pro:   ['Unlimited AI chats', 'Unlimited job matches', 'Priority support', 'API access']
      },
      period: '/mo',
      auth: {
        title: 'Sign in to Tatha',
        demoNote: 'Demo mode — no database required. Login / register validates format and returns a demo token.',
        tabLogin: 'Sign In', tabRegister: 'Sign Up',
        labelEmail: 'Email', labelPassword: 'Password', labelConfirmPw: 'Confirm Password',
        btnLogin: 'Sign In', btnRegister: 'Create Account',
        backIndex: 'Back to pricing', backDemo: 'Go to demo',
        orContinueWith: 'Or continue with',
        googleLogin: 'Sign in with Google',
        loginSuccess: 'Signed in', registerSuccess: 'Account created',
        pwMismatch: 'Passwords do not match',
        errRequest: 'Request failed: '
      },
      demo: {
        title: 'Tatha Demo',
        subtitle: 'AI Career Companion — Resume upload, job matching, poetry, MBTI assessment.',
        logout: 'Sign Out',
        tabResume: 'Resume', tabMatch: 'Job Match', tabAsk: 'Ask /v1/ask',
        uploadLabel: 'Upload Resume (PDF / Word / TXT)',
        uploadBtn: 'Upload & Parse',
        resumeLabel: 'Resume text (paste here or upload & parse above)',
        matchBtn: 'Match Jobs',
        sendBtn: 'Send /v1/ask',
        pasteBtn: 'Paste',
        overallScore: 'Score',
        noMatch: 'No matches found.',
        loading: 'Loading…',
        upgradeMsg: 'Daily quota exceeded. Please upgrade to continue.',
        upgradeLink: 'Upgrade now'
      }
    }
  },

  /** Get current locale (URL param > localStorage > browser > default) */
  getLocale: function () {
    var params = new URLSearchParams(window.location.search);
    var loc = params.get('lang')
      || localStorage.getItem('tatha_locale')
      || (navigator.language || '').split('-')[0]
      || this.DEFAULT_LOCALE;
    return this.messages[loc] ? loc : (this.messages[loc.split('-')[0]] ? loc.split('-')[0] : this.DEFAULT_LOCALE);
  },

  /** Set locale and reload */
  setLocale: function (loc) {
    localStorage.setItem('tatha_locale', loc);
    var url = new URL(window.location.href);
    url.searchParams.set('lang', loc);
    window.location.href = url.toString();
  },

  /** Get current message catalog */
  t: function () {
    return this.messages[this.getLocale()];
  }
};
