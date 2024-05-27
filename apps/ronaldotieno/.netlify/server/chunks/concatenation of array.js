import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Leetcode 1929 Python, Concatenation of Array",
  "author": "Ronald Otieno",
  "date": "2023-10-1",
  "layout": "blog",
  "published": true,
  "excerpt": "Solving array concatenation with Python",
  "categories": ["leetcode"]
};
const Concatenationu20ofu20array = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="problem" data-svelte-h="svelte-1fiv5a0">Problem</h2> <p data-svelte-h="svelte-1q7j580">Given an integer array <code>nums</code> of length <code>n</code>, you want to create an array <code>ans</code> of length <code>2n</code> where<code>ans[i]==nums[i]</code> and <code>ans[i + n] ==nums[i]</code> for <code>0 &lt;= i &lt; n</code> (0 indexed).
Specifically, <code>ans</code> is the <strong>concatenation</strong> of two <code>nums</code> arrays.
Return the array <code>ans</code>.</p> <h2 id="solution-1" data-svelte-h="svelte-w9w42b">Solution 1</h2> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">def</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">arrayConcatenation</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">nums</span><span style="color: #F8F8F2">):</span></span>
<span class="line"><span style="color: #F8F8F2">    nums </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">    ans </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> nums </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> nums</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> ans</span></span></code></pre>`}<!-- HTML_TAG_END --> <h3 id="solution-2" data-svelte-h="svelte-vguv4t">Solution 2</h3> <ul data-svelte-h="svelte-265d4e"><li>Take an array and append it to itself</li></ul> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">class</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Solution</span><span style="color: #F8F8F2">:</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">def</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">arrayConcatenation</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">self</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">nums</span><span style="color: #F8F8F2">):</span></span>
<span class="line"><span style="color: #F8F8F2">        ans </span><span style="color: #F92672">=</span><span style="color: #F8F8F2">[]</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">for</span><span style="color: #F8F8F2"> i </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">range</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">):</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #F92672">for</span><span style="color: #F8F8F2"> n </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> nums:</span></span>
<span class="line"><span style="color: #F8F8F2">                ans.append(n)</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> ans</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Concatenationu20ofu20array,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
