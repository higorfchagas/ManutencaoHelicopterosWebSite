<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-primary">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>CONTACT US</template>
            <template>
              <div class="text-center text-muted mb-4"></div>
              <div class="text-center text-muted mb-4">
                <small>FIND HOW OUR SERVICES CAN BENEFIT YOUR COMPANY</small>
              </div>
              <div class="text-center text-muted mb-4">
                <small>IF YOU ARE EXPERIENCED HELICOPTER PROFESSIONAL LOKING FOR OPPORTUNITIES.</small>
              </div>
              <div class="text-center text-muted mb-4">
                <small>YOU ARE ALSO WELCOME</small>
              </div>

              <form class="contact-form" @submit.prevent="sendEmail(Email)">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Name:</label>
                      <input class="form-control" type="text" v-model="Email.user_name" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Email:</label>
                      <input class="form-control" type="email" v-model="Email.user_email" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Message:</label>
                      <textarea
                        class="form-control"
                        style="overflow:auto;resize:none"
                        rows="7"
                        cols="20"
                        v-model="Email.user_message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    class="btn btn-primary"
                    type="submit"
                    :disabled="!Email.user_email || !Email.user_message || !Email.user_name"
                    value="Send"
                  />
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default {
  name: "ContactUs",
  components: {},
  data() {
    return {
      Email: {
        user_name: "",
        user_email: "",
        user_message: "",
      },
    };
  },
  methods: {
    sendEmail(email){
      var self = this;
      emailjs
        .send(
          process.env.VUE_APP_SERVICE,
          process.env.VUE_APP_TEMPLATE,
          {
            to_name: email.user_name,
            from_name: email.user_email,
            message: email.user_message,
            reply_to: "teste",
          },
          process.env.VUE_APP_USER
        )
        .then(
           (result) => {
             self.clearForm();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your email is sent.",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Error.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
    },
    clearForm() {
      var self = this;
      self.Email = { user_name: "", user_email: "", user_message: "" };
    },
  },
};
</script>
<style>
</style>
