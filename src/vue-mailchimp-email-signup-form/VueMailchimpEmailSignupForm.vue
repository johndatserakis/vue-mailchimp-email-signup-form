<template>
  <div class="subscribe-container">
    <div :id="elementId + 'mc_embed_signup'">
      <form
        :action="url"
        method="post"
        :id="elementId + 'mc-embedded-subscribe-form'"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
      >
        <div :id="elementId + 'mc_embed_signup_scroll'">
          <label
            class="subscribe-container__title"
            htmlFor="mce-EMAIL"
          >
            {{title}}
          </label>

          <p v-if="subtitle" class="subscribe-container__subtitle">
            {{subtitle}}
          </p>

          <input
            type="email"
            name="EMAIL"
            class="subscribe-container__email"
            :id="elementId + 'mce-EMAIL'"
            placeholder="Your email address"
            required
          />
          <div
            style="position: absolute; left: -5000px;"
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_5f0b91c96bbdf35913a136639_ddfba3375e"
              tabIndex="-1"
            />
          </div>
          <div>
            <button
              type="submit"
              name="subscribe"
              :id="elementId + 'mc-embedded-subscribe'"
              class="subscribe-container__submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-mailchimp-email-signup-form',
  props: {
    elementId: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
$white: #fff;
$black: #000;
$grey: #e6e6e6;
$light-grey: #f9fafb;
$dark-grey: #777;
$green: rgb(76, 175, 80);
$box-shadow: 0 2px 15px 0 rgba(210, 214, 220, 0.3);
$border: 1px solid $grey;
$border-radius: 4px;

.subscribe-container {
  background: $light-grey;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 600px;
  padding: 1.25rem 1rem;
  width: 100%;

  &,
  & * {
    box-sizing: border-box;
  }

  form {
    margin-bottom: 0;
  }

  &__title {
    color: $black;
    display: inline-block;
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  &__subtitle {
    font-size: 1rem;
    color: $dark-grey;
    padding-bottom: 0;
    margin-block-start: 0;
    margin-bottom: 1rem;
  }

  &__email {
    border-color: $grey;
    border-radius: $border-radius;
    color: rgb(0, 0, 0);
    font-weight: 400;
    width: 100%;
    background: $white;
    font-size: 15px;
    padding: 12px;
    border: $border;
    flex: 1 0 auto;
    line-height: 1.4;
    margin: 0;
    transition: border-color 0.3s ease-out;
    overflow: visible;
    margin-bottom: 1rem;
  }

  &__submit {
    background-color: $green;
    border-radius: 8px;
    color: $white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out;
    padding: 12px 18px;
    width: 100%;

    &:hover {
      background-color: darken($green, 10%);
    }
  }
}
</style>
