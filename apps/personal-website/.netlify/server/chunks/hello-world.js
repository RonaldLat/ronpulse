import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Hello World",
  "author": "Jeff",
  "date": "2022-05-27T00:00:00.000Z",
  "layout": "blog",
  "published": true,
  "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget massa sit amet arcu varius lacinia nec quis lacus."
};
const Hello_world = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-2vj08s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget massa sit amet arcu varius lacinia nec quis lacus. Proin auctor lectus a volutpat porta. Nullam eget ipsum convallis, elementum orci sodales, blandit velit. In imperdiet, ligula sed ultricies pharetra, metus mi consequat dui, vitae luctus dolor ligula eu nunc. Fusce consequat mauris ac egestas iaculis. Quisque pharetra et ante maximus convallis. Nulla sollicitudin velit molestie mauris dignissim, at hendrerit diam fringilla. Donec mollis eget ex non iaculis. In a vehicula nisl. Donec dapibus orci in enim posuere, non rhoncus risus ultrices. Pellentesque elementum metus ipsum, ut scelerisque mauris ultrices vel.</p> <p data-svelte-h="svelte-1evrqpm">Aliquam ullamcorper est vehicula, suscipit nulla pellentesque, convallis odio. Praesent eget elit eget magna fringilla pharetra tempor quis magna. Proin et est vestibulum neque rhoncus mattis non vel lacus. Proin vulputate risus vel dignissim vestibulum. Quisque id sollicitudin neque, sed sagittis urna. Vestibulum vehicula metus sed eros venenatis, sit amet facilisis nunc porta. Nam pharetra luctus sapien, ut venenatis nibh tincidunt mollis. Phasellus efficitur, felis vitae mattis cursus, sapien diam vulputate dui, sit amet pulvinar ante ipsum non urna.</p> <p data-svelte-h="svelte-8sln8w">Fusce est nulla, efficitur vitae turpis eget, pretium rutrum turpis. Fusce at lectus eros. Phasellus convallis condimentum dolor ac rutrum. Integer commodo augue et dui efficitur tincidunt. Nam scelerisque egestas quam, vitae ultrices turpis tincidunt rhoncus. Duis rutrum placerat erat. Ut ac tincidunt elit. In laoreet dictum mauris nec posuere. Curabitur tempus, dolor malesuada ultrices feugiat, ipsum eros faucibus tellus, eu ultricies nunc est sed dolor. Suspendisse nisi eros, vehicula vitae iaculis sit amet, aliquet sit amet leo. Sed euismod urna at eros posuere laoreet. Curabitur in sodales lorem. Nulla rutrum aliquam felis ac tempor.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">function example()&#123;</span></span>
<span class="line"><span style="color: #F8F8F2">        console.log(&#39;Hello world&#39;)</span></span>
<span class="line"><span style="color: #F8F8F2">    &#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-ljn7m9">Ut pretium vitae elit ac facilisis. Aliquam nisi tortor, feugiat at lacus sed, condimentum egestas urna. Vestibulum hendrerit augue non urna volutpat, et fermentum tortor pellentesque. Aenean eget pharetra leo. Vestibulum ut laoreet dui. Phasellus nec nunc imperdiet, mollis urna eget, interdum lacus. Nulla ac neque pulvinar ex vestibulum venenatis at sed mi. Aliquam faucibus risus eget dolor porttitor interdum. Phasellus rutrum augue ex, vel tempus velit sollicitudin vitae. Pellentesque libero sapien, ullamcorper nec elementum nec, pharetra sed nisl. Nullam egestas arcu et ex vulputate, pretium vestibulum odio convallis. Nam auctor risus nec fermentum ultricies.</p> <p data-svelte-h="svelte-so2np0">Donec porttitor quis ipsum ut imperdiet. Fusce ac pretium felis, sit amet pharetra orci. Donec vitae quam ac tellus pellentesque fringilla. Curabitur placerat quam a leo imperdiet tincidunt. Nunc porta pulvinar orci sit amet varius. Suspendisse dapibus ipsum nec magna ultricies gravida. Maecenas varius justo ac sem rhoncus lobortis. Integer eget cursus diam. Vestibulum sollicitudin enim at metus scelerisque blandit. In sit amet pulvinar nunc. Sed sit amet rutrum ex, efficitur imperdiet nunc.</p>`;
});
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hello_world,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_5 as _
};
