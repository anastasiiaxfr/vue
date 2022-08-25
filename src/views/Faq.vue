<template>
  <main class="faq">
    <section>
      <b-container>
        <b-row class="text-center py-5">
          <h2 class="mb-5">Frequently Asked Questions</h2>
          <div
            class="accordion col-md-9 mx-auto"
            role="tablist"
            v-for="(item, index) in faq1"
            :key="`name-${index}`"
          >
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  v-b-toggle="'accordion-' + index"
                  variant="info"
                >
                  {{ item.term }}
                </b-button>
              </b-card-header>
              <b-collapse
                :id="`accordion-${index}`"
                visibles
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    {{ item.description }}
                  </b-card-text>
                  <b-card-text> </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>

          <h3 class="mt-5">Attracting players</h3>
          <div
            class="accordion col-md-9 mx-auto"
            role="tablist"
            v-for="(item, index) in faq2"
            :key="`name-${index}`"
          >
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  v-b-toggle="'accordion-faq2-' + index"
                  variant="info"
                >
                  {{ item.term }}
                </b-button>
              </b-card-header>
              <b-collapse
                :id="`accordion-faq2-${index}`"
                visibles
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    {{ item.description }}
                  </b-card-text>
                  <b-card-text> </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>

          <h3 class="mt-5">Payments</h3>

          <div
            class="accordion col-md-9 mx-auto"
            role="tablist"
            v-for="(item, index) in faq3"
            :key="`name-${index}`"
          >
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  v-b-toggle="'accordion-faq3-' + index"
                  variant="info"
                >
                  {{ item.term }}
                </b-button>
              </b-card-header>
              <b-collapse
                :id="`accordion-faq3-${index}`"
                visibles
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    {{ item.description }}
                  </b-card-text>
                  <b-card-text> </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Faq",

  data() {
    return {
      faq1: [
        {
          term: "What is the Heroic Affiliates Program?",
          description:
            "Heroic Affiliates will help you earn money by attracting active players to our projects. Benefits of our affiliate program include:",
        },
        {
          term: "How can I become a partner?",
          description:
            "To become a partner, you first need to register. Once we verify and confirm your account, you will be able to access promotional materials, kickstart your affiliate campaign, and earn money as a Heroic Affiliate! If you need help nregistering, please contact us and we’ll be happy to guide your way.",
        },
        {
          term: "Is becoming a Heroic Affiliate free of charge?",
          description:
            "Yes, it is completely free! We will pay you for attracting active players to our projects.",
        },
      ],
      faq2: [
        {
          term: "I am a Heroic Affiliate. What do I do next?",
          description:
            "You need to create a campaign in the partner’s cabinet. Then, choose a commission plan, add promotional materials or simply add an affiliate link.",
        },
        {
          term: "Where do I find the promotional materials for my campaign?",
          description:
            "You can find creatives when setting up an advertising campaign in the partner’s cabinet. The graphics and texts are, in most cases, created by our partners themselves independently, as they know their audience better. If you need help in creating your own content, please contact your affiliate manager and they will be glad to help.",
        },
        {
          term: "What traffic sources do you accept?",
          description:
            "There are no source restrictions on our revenue share model. However, fraudulent traffic is not accepted, such as misleading, motivated traffic and promotional materials calling for illegal actions against the company’s projects.",
        },
      ],

      faq3: [
        {
          term: "How often are payments made?",
          description: "Payments are made once a month.",
        },
        {
          term: "What financial model do you use?",
          description:
            "At the moment we are working with the Revenue Share model. The partner’s income percentage directly depends on the financial activity of the players and is calculated dynamically based on the results of the previous month.",
        },
        {
          term: "Do you have a referral program?",
          description:
            "Yes! You will receive 5% of the income of each of your acquired partners. Please ask your manager if you want to know more about the referral program.",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
$main: #deb657

h3
    margin-bottom: 25px
    font-weight: 900
    font-size: 3rem
    color: $main

.accordion
    text-align: left

    ul
        margin-top: 15px
        font-size: 14px

    .card
        border-radius: 0
        border: none
        &-body
            padding: 30px
        &-header
            background: transparent
            border-color: $main

    .btn
        background: transparent
        color: black
        min-width: auto
        &:hover, &:focus
            outline: none
            border: none
            box-shadow: none
</style>