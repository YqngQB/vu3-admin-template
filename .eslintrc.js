module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境中的全局变量。
    node: true // Node.js 全局变量和 Node.js 作用域。
  },
  globals: {
    // Ref sugar (take 2)
    $: "readonly", // jQuery
    $$: "readonly", // document.querySelectAll() 简写
    $ref: "readonly", // vue3 响应性语法糖
    $shallowRef: "readonly", // vue3 响应性语法糖
    $computed: "readonly", // vue3 响应性语法糖

    // index.d.ts
    // global.d.ts
    Fn: "readonly",
    PromiseFn: "readonly",
    RefType: "readonly",
    LabelValueOptions: "readonly",
    EmitType: "readonly",
    TargetContext: "readonly",
    ComponentElRef: "readonly",
    ComponentRef: "readonly",
    ElRef: "readonly",
    global: "readonly",
    ForDataType: "readonly",
    ComponentRoutes: "readonly",

    // script setup
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  extends: [
    "plugin:vue/vue3-essential", // 启用 vue-eslint-parser 基本语法检查
    "eslint:recommended", // 启用 eslint 推荐的规则
    "@vue/typescript/recommended",
    "@vue/prettier", // 启用 prettier 格式化
    "@vue/eslint-config-typescript" // 此规则集是 Vue-TypeScript 项目的基本配置。除了设置解析器和插件选项外，它还关闭了规则集中的几个冲突规则eslint:recommended。因此，当与其他可共享配置一起使用时，此配置应放在extends数组的末尾
  ],
  //使用自定义解析器 https://eslint.vuejs.org/user-guide/#usage
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // 使用自定义解析器
    ecmaVersion: 2020, // ECMAScript 版本
    sourceType: "module", // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    jsxPragma: "React", // 指定创建JSX元素的函数，以避免与React.createElement冲突
    ecmaFeatures: {
      // 启用的额外语言特性
      jsx: true // 启用JSX
    }
  },
  overrides: [
    // 用于覆盖默认配置的配置文件
    {
      files: ["*.ts", "*.vue"], // 覆盖的文件
      rules: {
        "no-undef": "off" // 禁止使用未定义的变量
      }
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser", // 解析器 https://eslint.vuejs.org/
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest", // ECMAScript 版本
        ecmaFeatures: {
          jsx: true // 启用JSX
        }
      },
      rules: {
        "no-undef": "off" // 禁止使用未定义的变量
      }
    }
  ],
  rules: {
    "no-var-requires": "off", // 禁止使用 require
    "vue/no-v-html": "off", // 是否禁止使用 v-html 来防止 XSS 攻击
    "vue/require-default-prop": "off", // prop 必须有默认值
    "vue/require-explicit-emits": "off", // 组件必须显式地列出它们发出的事件
    "vue/multi-word-component-names": [
      // 组件名称必须是多个单词
      "error",
      {
        ignores: ["index", "home", "401", "403", "404", "500","navbar","vertical","horizontal","logo","Auth","Icon","Redirect"]
      }
    ],
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any
    "prefer-const": 2, // 要求使用 const 声明那些声明后不再被修改的变量
    "no-debugger": "off", // 禁止使用 debugger
    "@typescript-eslint/explicit-module-boundary-types": "off", // setup()
    "@typescript-eslint/ban-types": "off", // 禁止使用特定的类型
    "@typescript-eslint/ban-ts-comment": "off", // 禁止使用特定的注释
    "@typescript-eslint/no-empty-function": "off", // 禁止出现空函数
    "@typescript-eslint/no-non-null-assertion": "off", // 禁止使用非空断言
    "vue/html-self-closing": [
      // 强制自闭和标签的一致性
      "error",
      {
        html: {
          void: "always", // 要求在没有内容的元素上自动关闭
          normal: "always",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 10 // 单行最多属性
        },
        multiline: {
          max: 1
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      // 禁止出现未使用过的变量
      "error",
      {
        argsIgnorePattern: "^_", // 忽略以下划线开头的变量
        varsIgnorePattern: "^_" // 忽略以下划线开头的变量
      }
    ],
    "no-unused-vars": [
      // 禁止出现未使用过的变量
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "no-unmodified-loop-condition": 2, // 禁用一成不变的循环条件
    "no-unneeded-ternary": [
      2,
      {
        defaultAssignment: false
      }
    ], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "prettier/prettier": [
      // prettier 格式化
      "error",
      {
        endOfLine: "auto" // 换行符使用 auto
      }
    ],
    semi: [2, "never"],
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 强制在块之前使用一致的空格
    "space-before-blocks": [2, "always"],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2, "never"],
    // 要求操作符周围有空格
    "space-infix-ops": 2,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false
      }
    ]
  }
};
