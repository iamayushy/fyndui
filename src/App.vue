<template>
  <div id="app">
    <h1>Checking The Component</h1>
    <div>
      <FyButton fullwidth upper-case size="xl" />
      <FyButton fullwidth />
      <FyCard class="box">
        <template v-slot:header>
          <fy-image
            desc="anti-imae"
            :src="imageLink"
            fit="cover"
            height="240px"
          />
        </template>
        <template v-slot:content>
          <h3>With Love, From Jio</h3>
          <p>For More Information hvhj Connect and Enjoy</p>
        </template>

        <template v-slot:actions>
          <section>
            <FyButton variant="secondary" size="xl" label="Get Now" fullwidth>
            </FyButton>
          </section>
        </template>
      </FyCard>
      <fy-paper>
        <section>
          <section>
            <h3>I am the header section</h3>
          </section>
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis
            eveniet in similique vitae eum obcaecati, sunt nam dolore
            dignissimos laboriosam asperiores hic dolor expedita! Illum
            voluptatum consectetur praesentium repellendus, quisquam cupiditate
            iusto repudiandae libero ipsa nulla, reprehenderit ratione aut?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            soluta exercitationem non dolor! Sed tempora aspernatur enim ad
            accusamus qui dolorem distinctio fugit! Consequuntur sunt optio
            sequi, assumenda dolorem reiciendis!
          </section>
        </section>
      </fy-paper>
      <fy-image :src="imageLink" height="450px" fit="contain" />
    </div>
  </div>
</template>

<script>
import FyButton from "./components/Buttons/FyButton.vue";
import FyCard from "./components/Cards/FyCard.vue";
import FyPaper from "./components/Paper/FyPaper.vue";
import FyImage from "./components/Image/FyImage.vue";
export default {
  data() {
    return {
      imageLink:
        "https://img.tuttoandroid.net/wp-content/uploads/2022/01/Samsung-Galaxy-S22-custodie-6.png",
    };
  },
  name: "App",
  comments: {},
  components: { FyButton, FyCard, FyPaper, FyImage },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.box {
  width: fit-content;
  height: fit-content;
  border-radius: 32px;
  box-shadow: 6px 6px 6px black;
}
</style>
