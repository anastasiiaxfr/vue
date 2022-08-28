<template>
  <main class="container-fluid m-0 p-0">
    <section id="home-page" class="full-height py-4">
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-6 order my-auto">
            <img
              class="img-fluid mt-5 mt-sm-auto"
              src="@/assets/img/travelTreasuryiPhone.png"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="text-center mb-3">
              <h1 class="display-3">{{ title }}</h1>
              <h3>Find the World</h3>
            </div>

            <div class="border p-3 p-mb-5 bg-white rounded shadow mt-5 mt-sm-0">
              <h2>Coming Soon</h2>
              <form class="">
                <div class="form-group">
                  <label for="emailSignUp">
                    Reserve your account now, we'll contact you when it's live
                  </label>
                  <input
                    id="emailSignup"
                    placeholder="Enter Email"
                    class="form-control"
                  />
                  <p>
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email address</small
                    >
                  </p>
                  <button type="submit" class="btn btn-success">
                    Join Waiting List
                  </button>
                </div>
              </form>
            </div>

            <div id="available" class="p-2">
              <h4 class="text-center text-light mb-2 mt-3">Available On</h4>
              <div class="row">
                <div class="col my-au">
                  <img
                    src="@/assets/img/app1.png"
                    class="img-fluid app_store_img"
                  />
                </div>
                <div class="col my-au">
                  <img
                    src="@/assets/img/app2.png"
                    class="img-fluid app_store_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="bg-light p-3 p-md-5">
      <div class="row">
        <div class="col-lg px-lg-5 px-2">
          <img
            src="../assets/img/icon/icon1.svg"
            alt=""
            height="120"
            class="m-4"
          />
          <p>
            Plan your next adventure by setting a daily spending budget. We make
            it easy to break your expenses down by category, giving you more
            time to plan the important tings!
          </p>
        </div>
        <div class="col-lg px-lg-5 px-2">
          <img
            src="../assets/img/icon/icon2.svg"
            alt=""
            height="120"
            class="m-4"
          />
          <p>
            Use the app to track how much money you’ve saved towards your trips
            total budgeted goal. Know exactly how much more you need to save,
            and how much time you have left to save.
          </p>
        </div>
        <div class="col-lg px-lg-5 px-2">
          <img
            src="../assets/img/icon/icon3.svg"
            alt=""
            height="120"
            class="m-4"
          />
          <p>
            When the day of your trip comes, have the peace of mind that you
            planned out your expenses. Never worry about money on a trip again!
          </p>
        </div>
      </div>
    </section>
    <section id="contact" class="bg-info py-4">
      <div class="row mx-auto justify-content-center mt-3 mb-3">
        <div class="col-lg-4">
          <h2>Have Any Questions?</h2>
          <p>Contact us by filling out the information below</p>
          <form @submit.prevent="sendContactMessage()">
            <div class="form-group text-left">
              <input
                v-model="contact_email"
                type="email"
                class="form-control"
                placeholder="Enter Your Email"
              />
              <textarea
                v-model="contact_message"
                class="form-control mt-3"
                placeholder="Enter Your Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    <footer id="footer" class="py-4 bg-dark">
    <div class="text-light p-4">
    
    <a href="https://www.youtube.com/1manstartup" taget="_blank" class="text-warning me-4">Build This App</a>
    <a href="#" class="text-warning"> Privacy Policy </a>
    <p class="mt-2">
        <small>&copy; 2020. TravelTreasury.app </small>
    </p>
    
    </div>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Travel Treasury",
    };
  },
  methods: {

  }
};
</script>
<style scoped lang="css">
#home-page {
  background: #92d2f2 url("../assets/img/bg_mt.jpg") no-repeat 50% center;
  background-size: cover;
}

.img-fluid {
  max-height: 80vh;
}

.order {
  order: 1;
}
@media only screen and (min-width: 640px) {
  .order {
    order: -1;
  }
}

.app_store_img {
  max-height: 80px;
}

#about {
  min-height: 40vh;
}

#iphone-img {
}
</style>