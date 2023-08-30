import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as i}from"./app-25b72cc6.js";const e={},t=i(`<p><strong>新建仓库并推送到远程仓库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# test&quot;</span> <span class="token operator">&gt;&gt;</span> README.md
// 初始化仓库
<span class="token function">git</span> init

// 添加文件到暂存区
<span class="token function">git</span> <span class="token function">add</span> README.md

// 提交暂存区文件到分支
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>

// 更改分支名为main
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main

// 添加远程仓库
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/XiaotianGG1003/test.git

// 推送main分支到远程仓库
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>推送本地仓库到远程仓库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/XiaotianGG1003/test.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function c(o,r){return s(),a("div",null,l)}const u=n(e,[["render",c],["__file","git.html.vue"]]);export{u as default};
