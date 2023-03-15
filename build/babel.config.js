/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-06 17:19:59
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-07 13:32:45
 * @FilePath: /react-project/build/babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    presets: [
        [
            // babel预设
            '@babel/preset-env',
            {
                // 使用corejs 2版本
                corejs: 2,
                // 按需加载
                useBuiltIns: 'entry',
                // 不使用模块化  交给其他打包工具处理
                modules: false
            }
        ]
    ],
    plugins: [
        ["@babel/plugin-tranform-runtime"],
        "@babel/plugin-syntax-dynamic-import"
    ]
}