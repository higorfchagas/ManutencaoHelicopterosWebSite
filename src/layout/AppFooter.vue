<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3
            class="text-primary font-weight-light mb-2"
          >We are ready to meet the needs of your business.</h3>
          <h4
            class="mb-0 font-weight-light"
          >Aviation Manpower Solutions offers highly experienced aviation professionals to support your operations we provide, B1 and B2 engineers, sheet metal experst for all models of aircrafts. Our particular expertiste are helicopters models:</h4>
          <h6 class="mb-0 font-weight-light">-AW139</h6>
          <h6 class="mb-0 font-weight-light">-S92</h6>
          <h6 class="mb-0 font-weight-light">-S76</h6>
          <h6 class="mb-0 font-weight-light">-EC 225</h6>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{year}}
            <a>Copyright AMS</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
                <router-link to="/contactus" class="dropdown-item">Contact us</router-link>
            </li>
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                class="nav-link"
                target="_blank"
                rel="noopener"
              >LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
