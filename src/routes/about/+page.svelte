<script>

  import * as config from '$lib/config'

</script>

<article>
  <h1>About</h1>
  <img src="marco.jpg" alt="Marco" width="200" height="200">

  <p class="role">{config.role}</p>
  <p class="company">{config.company}</p>

  <div class="about">
    <p>
      I am an engineer who loves challenges, hard problems and to learn something new everyday. I am a fast paced and proactive self learner. I am a lifelong learner. I am passionate about learning new idioms, programmng languages and technologies. I am a result-oriented and motivated person, and I assume responsibilities.
    </p>

    <p>
      I have over 20 years of programming experience, what made me become a polyglot programmer. Experienced technical leader. Problem solver with solid engineering foundation. Passionate about evangelism, research and sharing bleeding edge technologies. I have started my journey as a developer at the age of 11. I have been through Basic, Assembler, Cobol, Pascal, C, C++, PHP, Java, JavaScript, Python, Ruby, R and others. Recently I am focused more on TypeScript and Rust. I have full stack and DevOps experience. I know a big number of frameworks. Polyglot persistence. Deep web standards and HTTP knowledge. Great UNIX/Linux experience.
    </p>

    <p>
      Besides having a strong technical education, I appreciate working with people and the exchange of knowledge and experiences between different people. For me it is easy to relate to people and to work in teams. Leadership attitude and management ability are natural features that I intend to improve professionally with technique and experience.
    </p>

    <p>
      Over the last months I dedicated all my free time to studying and learning emerging technologies and frameworks. I love to learn new things and got excited about the number of new stacks I've found along the way. The list is huge. TypeScript, NextJS (React), Svelte, NestJS, tRPC, Vite, Astro, Prisma and many others! And it doesn't seem to end. I would love to get an opportunitty to work with new stuff like this ones!

      Zod,
    </p>
  </div>

</article>


<style>

  h1 {
    font-size: var(--size-7);
    color: var(--text-1);
    padding: var(--size-1);
    align-self: flex-start;
  }

  .role {
    font-size: var(--size-3);
    color: var(--text-1);
    padding-top: var(--size-1);
  }

  .company {
    font-size: var(--size-3);
    color: var(--text-2);
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--size-0);
  }
  img {
    border-radius: 99999px;
  }

  .about {
    color: var(--text-2);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding-block-start: var(--size-5);
    max-width: 650px;
    font-size: 115%;
    line-height: 1.4;
  }

  article * p {
    padding-block-start: var(--size-5);
  }

  article * p:first-child::first-letter {
    color: var(--text-1);
    float: left;
    font-family: Georgia;
    font-size: 50px;
    line-height: 45px;
    padding-right: var(--size-2);
    padding-left: var(--size-1);
}

</style>