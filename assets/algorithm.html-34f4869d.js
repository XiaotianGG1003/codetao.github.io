const l=JSON.parse('{"key":"v-f13f215e","path":"/notes/algorithm.html","title":"基础算法","lang":"zh-CN","frontmatter":{"title":"基础算法","date":"2023-09-20T00:00:00.000Z","category":["算法"],"tag":["笔记"],"description":"基础算法 快速排序 快速选择排序：求第 K 小的数 归并排序 ```cpp #include #include #include #include using namespace std; const int N = 1e5 + 10; int q[N],temp[N]; int n; void merge_sort(int q[], int l, i...","head":[["meta",{"property":"og:url","content":"https://codetao.cc/notes/algorithm.html"}],["meta",{"property":"og:site_name","content":"韬的小站"}],["meta",{"property":"og:title","content":"基础算法"}],["meta",{"property":"og:description","content":"基础算法 快速排序 快速选择排序：求第 K 小的数 归并排序 ```cpp #include #include #include #include using namespace std; const int N = 1e5 + 10; int q[N],temp[N]; int n; void merge_sort(int q[], int l, i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-20T16:36:51.000Z"}],["meta",{"property":"article:author","content":"韬"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:published_time","content":"2023-09-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-20T16:36:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-20T16:36:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"韬\\",\\"url\\":\\"https://codetao.cc\\"}]}"]]},"headers":[{"level":2,"title":"基础算法","slug":"基础算法","link":"#基础算法","children":[{"level":3,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]},{"level":3,"title":"归并排序","slug":"归并排序","link":"#归并排序","children":[]},{"level":3,"title":"整数二分","slug":"整数二分","link":"#整数二分","children":[]},{"level":3,"title":"小数二分","slug":"小数二分","link":"#小数二分","children":[]},{"level":3,"title":"高精度加法","slug":"高精度加法","link":"#高精度加法","children":[]},{"level":3,"title":"高精度减法","slug":"高精度减法","link":"#高精度减法","children":[]},{"level":3,"title":"高精度 × 低精度","slug":"高精度-×-低精度","link":"#高精度-×-低精度","children":[]},{"level":3,"title":"高精度 × 高精度","slug":"高精度-×-高精度","link":"#高精度-×-高精度","children":[]},{"level":3,"title":"高精度 ÷ 低精度","slug":"高精度-÷-低精度","link":"#高精度-÷-低精度","children":[]},{"level":3,"title":"一维前缀和","slug":"一维前缀和","link":"#一维前缀和","children":[]},{"level":3,"title":"二维前缀和","slug":"二维前缀和","link":"#二维前缀和","children":[]},{"level":3,"title":"一维差分","slug":"一维差分","link":"#一维差分","children":[]},{"level":3,"title":"二维差分","slug":"二维差分","link":"#二维差分","children":[]},{"level":3,"title":"双指针算法","slug":"双指针算法","link":"#双指针算法","children":[]},{"level":3,"title":"位运算","slug":"位运算","link":"#位运算","children":[]},{"level":3,"title":"离散化","slug":"离散化","link":"#离散化","children":[]},{"level":3,"title":"区间合并","slug":"区间合并","link":"#区间合并","children":[]}]},{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[{"level":3,"title":"单链表","slug":"单链表","link":"#单链表","children":[]},{"level":3,"title":"双链表","slug":"双链表","link":"#双链表","children":[]},{"level":3,"title":"栈","slug":"栈","link":"#栈","children":[]},{"level":3,"title":"队列","slug":"队列","link":"#队列","children":[]},{"level":3,"title":"单调栈","slug":"单调栈","link":"#单调栈","children":[]},{"level":3,"title":"单调队列","slug":"单调队列","link":"#单调队列","children":[]},{"level":3,"title":"Trie 树/字典树/前缀树","slug":"trie-树-字典树-前缀树","link":"#trie-树-字典树-前缀树","children":[]},{"level":3,"title":"并查集","slug":"并查集","link":"#并查集","children":[]},{"level":3,"title":"堆","slug":"堆","link":"#堆","children":[]},{"level":3,"title":"一般哈希","slug":"一般哈希","link":"#一般哈希","children":[]},{"level":3,"title":"字符串哈希","slug":"字符串哈希","link":"#字符串哈希","children":[]},{"level":3,"title":"C++ STL 简介","slug":"c-stl-简介","link":"#c-stl-简介","children":[]}]},{"level":2,"title":"搜索与图论","slug":"搜索与图论","link":"#搜索与图论","children":[{"level":3,"title":"树与图的存储","slug":"树与图的存储","link":"#树与图的存储","children":[]},{"level":3,"title":"树与图的遍历","slug":"树与图的遍历","link":"#树与图的遍历","children":[]},{"level":3,"title":"拓扑排序","slug":"拓扑排序","link":"#拓扑排序","children":[]},{"level":3,"title":"朴素 dijkstra 算法","slug":"朴素-dijkstra-算法","link":"#朴素-dijkstra-算法","children":[]},{"level":3,"title":"堆优化版 dijkstra","slug":"堆优化版-dijkstra","link":"#堆优化版-dijkstra","children":[]},{"level":3,"title":"spfa 算法","slug":"spfa-算法","link":"#spfa-算法","children":[]},{"level":3,"title":"spfa 判断图中是否存在负环","slug":"spfa-判断图中是否存在负环","link":"#spfa-判断图中是否存在负环","children":[]}]},{"level":2,"title":"数学知识","slug":"数学知识","link":"#数学知识","children":[{"level":3,"title":"质数","slug":"质数","link":"#质数","children":[]},{"level":3,"title":"试除法分解质因数","slug":"试除法分解质因数","link":"#试除法分解质因数","children":[]},{"level":3,"title":"筛质数","slug":"筛质数","link":"#筛质数","children":[]},{"level":3,"title":"试除法求所有约数","slug":"试除法求所有约数","link":"#试除法求所有约数","children":[]},{"level":3,"title":"数个数和约数之和","slug":"数个数和约数之和","link":"#数个数和约数之和","children":[]},{"level":3,"title":"欧几里得算法","slug":"欧几里得算法","link":"#欧几里得算法","children":[]},{"level":3,"title":"快速幂","slug":"快速幂","link":"#快速幂","children":[]}]}],"git":{"createdTime":1695227811000,"updatedTime":1695227811000,"contributors":[{"name":"xiaotiangg","email":"xiaotiangg2003@outlook.com","commits":1}]},"readingTime":{"minutes":28.98,"words":8693},"filePathRelative":"notes/algorithm.md","localizedDate":"2023年9月20日","excerpt":"","autoDesc":true}');export{l as data};
