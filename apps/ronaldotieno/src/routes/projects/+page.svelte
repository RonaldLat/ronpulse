<script>
  import ShrinkImg from '$lib/components/ui/ShrinkImg.svelte';
  import { Avatar, TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  let tabSet = 0;
</script>

<h1>Projects</h1>
<Avatar src="lat2-smaller.webp" />

<TabGroup>
  <Tab bind:group={tabSet} name="tab1" value={0}>
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <span>(label 1)</span>
  </Tab>
  <Tab bind:group={tabSet} name="tab2" value={1}>(label 2)</Tab>
  <Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
  <!-- Tab Panels --->
  <svelte:fragment slot="panel">
    {#if tabSet === 0}
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {:else if tabSet === 1}
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {:else if tabSet === 2}
      (tab panel 3 contents)
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {/if}
  </svelte:fragment>
</TabGroup>
<p class="l"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro odit cum numquam a beatae dolorum, itaque nostrum reprehenderit vitae praesentium, iste ab aperiam ratione est doloribus fugit sequi et. Laboriosam saepe sequi repudiandae expedita eveniet. Enim quos quae magnam, nam ea et officia facere dignissimos cupiditate asperiores, eum itaque corrupti nulla accusamus totam blanditiis eos ad. Unde, dolore voluptatem ipsum dolores placeat alias optio accusamus libero corporis enim inventore assumenda iusto possimus fugit. Repellat autem cupiditate sit dolore eaque nobis, nam saepe enim doloribus dicta in cumque numquam expedita assumenda praesentium quidem, nulla recusandae perferendis quam aut id officiis fugiat. Fuga, distinctio culpa incidunt, at labore beatae, quisquam ex quod molestias unde eos neque praesentium voluptatum necessitatibus voluptas numquam. Molestias ut repellat cupiditate ducimus perferendis? Totam fuga a soluta ab, doloribus magni atque fugiat vel voluptas tempora iure, vero voluptatem sit quia sunt, sapiente fugit rerum assumenda provident! Reiciendis illo voluptatibus error. Dolore sint, voluptate voluptas odio quaerat ducimus ea autem numquam harum quod nam dolorem quae pariatur nulla illo nesciunt est deleniti mollitia, perferendis rem quisquam. Impedit iste fugiat temporibus atque ad ex et explicabo soluta harum, ullam voluptas esse iusto. Quam dolore veritatis nam soluta. Officia, dicta!</p>

<ShrinkImg index={0} src={'js.svg'} />
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis hic eum a voluptatum porro saepe aliquam, neque laborum, enim, eveniet ea! Harum maxime corrupti sapiente? Perferendis aliquid omnis dignissimos eveniet alias molestias neque dicta harum, cum aperiam officiis! A sint nobis quaerat ut veniam nesciunt, sunt dolorem laborum sit aperiam eaque in repudiandae odit possimus hic atque, maiores voluptate assumenda dolorum praesentium magnam incidunt, recusandae deserunt nostrum. Repudiandae iste enim temporibus magnam quis fugit neque cum atque sed necessitatibus ratione adipisci in explicabo nesciunt nulla, ab tempora voluptate placeat. Corrupti explicabo, quidem consequatur voluptatum eos veritatis laboriosam facilis repudiandae voluptatibus eius libero, nam labore id rerum deserunt, quos eum unde quibusdam sed at? Neque veniam praesentium inventore pariatur dicta totam ducimus asperiores voluptate fuga a veritatis vel itaque ex error quibusdam, sed quasi placeat eligendi, repellat culpa maiores dolorum assumenda corrupti. Dolores commodi suscipit nemo soluta molestiae corporis, obcaecati perferendis, corrupti, non iusto officia! Adipisci voluptates totam cum a deleniti libero iusto accusantium facere maiores mollitia, repudiandae, ut, doloremque asperiores sit soluta doloribus possimus iure. Fuga vero repellendus id incidunt quasi harum, placeat est, nihil sit officiis quaerat aspernatur officia numquam! Fugit, doloremque quasi! Minus tenetur quibusdam, cum explicabo quod eaque facilis blanditiis optio placeat temporibus illo dolorem nam quaerat libero nisi aliquid ut non ab corporis ea rerum! Eius illum dolor cumque magni blanditiis delectus aspernatur architecto! Eum fugiat enim harum amet veniam fugit corrupti odio, odit eius unde veritatis dolore natus est repellendus? Aspernatur in fugiat alias aperiam numquam repellendus minima sed? Cum dicta et fugiat voluptatibus cumque aliquam illo facilis maiores beatae. Facere esse tempora ut ratione voluptatibus consequatur modi reiciendis possimus commodi? Quo, harum dolores odio voluptatem distinctio dolorem dignissimos nemo, libero, aliquam odit vero cupiditate debitis fuga repellat? Voluptatem, assumenda. Id labore repellendus eligendi consequuntur quaerat dolores consequatur, praesentium omnis ipsa. Cumque pariatur nulla aliquid laborum recusandae! Delectus, expedita maxime! Asperiores, necessitatibus quos reprehenderit ipsa deserunt veritatis quas exercitationem fuga, at debitis, id sed. Repellat veritatis, ut asperiores quas delectus corrupti. Nemo ipsum, obcaecati aperiam voluptates animi qui! Tempore error, velit dolores repellendus esse animi architecto fuga molestias magni et sapiente adipisci natus cupiditate nesciunt explicabo minus necessitatibus ex deleniti odit ducimus. Recusandae, et nostrum at maiores cumque quisquam praesentium esse itaque porro accusantium reprehenderit possimus corrupti in natus quam voluptates pariatur nobis eius molestiae deleniti? Autem at non doloremque voluptatem nisi qui nam!</div>
<ShrinkImg index={1} src={'d3.svg'} />
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium cumque iste eum quaerat impedit, inventore nesciunt fugiat vel quam error delectus sint pariatur dicta aperiam culpa! Suscipit incidunt debitis at voluptates tempora voluptatum nam perspiciatis excepturi hic possimus ipsa nulla vero, soluta quisquam itaque velit, sit, nihil sapiente iusto. Sapiente recusandae modi aperiam nisi eum, porro totam nam cumque reiciendis sed sunt molestiae velit incidunt natus. Itaque blanditiis dolores facilis quidem corrupti fugiat asperiores voluptate impedit sint atque, tempore, repellat minima et nesciunt mollitia delectus nobis eius similique error quasi suscipit repudiandae nihil! Cum ad iste officiis, porro quis eligendi a totam temporibus itaque recusandae possimus magnam eius aliquid quaerat debitis similique ullam id iusto optio, quos quae assumenda placeat esse! At tempora sequi quo illum sint, placeat aut maxime veritatis quas, saepe totam. Pariatur omnis blanditiis dignissimos mollitia non sit veniam, eligendi tempora quibusdam, error reiciendis magnam illum assumenda aperiam minima. Neque, totam deleniti minima sequi, a sed in accusantium doloremque dignissimos labore corporis, magnam maxime iste distinctio aperiam explicabo tempore. In recusandae eius exercitationem minima quibusdam delectus sapiente reprehenderit a eum beatae. Libero non voluptatibus unde pariatur labore a facere, illo enim animi, et, molestiae dolor vel optio! Repellat, corrupti nobis! Dolore ipsa ad temporibus quae sint saepe adipisci reiciendis nulla. Debitis earum illo alias aperiam veniam, eaque maiores doloribus iusto nemo id laudantium ullam adipisci ab! Sint reprehenderit dolores soluta animi saepe illo pariatur nam suscipit cumque inventore fugit aut laudantium minus maxime eos iusto quisquam quae qui magnam explicabo, beatae ab blanditiis. Consequatur possimus officiis, laudantium et esse reprehenderit sapiente doloribus repellat cumque culpa ipsam facilis dolore iure debitis. Distinctio voluptatem ullam, ipsa sunt, aut rerum placeat, nisi eius numquam ea corporis optio sit tenetur. Quo, quae. Autem aperiam inventore repellat deserunt. Praesentium perferendis veniam ipsam nesciunt sed. Labore unde ut, culpa aperiam qui veritatis mollitia eius necessitatibus accusamus neque accusantium optio, eligendi tempora doloribus! Aut vitae soluta numquam facere rem quis officia alias amet quas rerum officiis odio assumenda maxime, animi corrupti dolore vero sapiente nulla esse consequatur molestiae repudiandae cupiditate? Enim et deleniti soluta commodi nisi repudiandae ex eaque ducimus autem? Consequatur mollitia aspernatur iure tempora aut odit excepturi quibusdam eaque rerum aliquid veritatis totam minima animi, numquam vitae eos, repellat dolore. Molestiae, similique nostrum fugit magni, aperiam fuga porro eius sint iusto sapiente facere. Dolorem minima, maiores asperiores debitis voluptate fuga quaerat.</span>
