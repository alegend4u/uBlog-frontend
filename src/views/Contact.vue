<template>
  <div class="split">
    <div class="contact_info">
      <p class="header_text">Let's Connect</p>
      <div class="page_body">
        <form class="feedback_form" method="post">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" required />
          <textarea
            name="feedback"
            rows="5"
            required
            placeholder="Anything on your mind ;)"
          ></textarea>
          <div class="button_container">
            <input type="submit" class="submit_button" />
          </div>
        </form>
        <div class="vertical_divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 3 225.03"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-1" d="M1.5,223.53V1.5" />
              </g>
            </g>
          </svg>
        </div>
        <div class="quote">
          <p class="quote_text">"You cannot not communicate."</p>
          <p class="author">- Paul Watzlawick</p>
        </div>
      </div>
      <div class="social_media">
        <a
          href="https://www.instagram.com/_a.legend_/"
          target="_blank"
          class="fab fa-instagram"
          ><font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-prajapati0/"
          target="_blank"
          class="fab fa-linkedin"
          ><font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://github.com/alegend4u/"
          target="_blank"
          class="fab fa-github"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>

        <!-- <a
          href="mailto:rishabh.prajapati0@gmail.com"
          target="_blank"
          class="fas fa-at"
        >
        </a>

        <a
          href="tel:+91942-928-8602"
          target="_blank"
          class="fas fa-phone-square-alt"
        ></a> -->
      </div>
      <div class="email_phone">
        <a class="email" href="mailto:rishabh.prajapati0@gmail.com"
          >rishabh.prajapati0@gmail.com</a
        >
        <div class="vertical_divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 3 225.03"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-1" d="M1.5,223.53V1.5" />
              </g>
            </g>
          </svg>
        </div>
        <a class="phone" href="tel:+91942-928-8602">+91 942-928-8602</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/sass/portfolio/contact.sass";

.vertical_divider {
  max-height: 100%;
  .cls-1 {
    stroke: #454545;
    stroke-linecap: round;
    stroke-width: 2px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  svg {
    height: 100%;
    width: 4px;
  }
}
</style>
