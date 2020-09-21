<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <img
            width="100%"
            src="https://res.cloudinary.com/mco/image/upload/v1600384392/WebAviacaoAMS/helicoptero_szhrct.jpg"
          />
        </div>
        <div class="col-lg-6">
          <h4
            class="text-primary font-weight-light mb-2"
          >WE ARE READY TO MEET THE NEEDS OF YOUR BUSINESS</h4>
          <h4
            class="mb-0 font-weight-light"
          >AVIATION MANPOWER SOLUTIONS OFFERS HIGHLY EXPERIENCED AVIATION PROFESSIONALS TO SUPPORT YOUR OPERATIONS. WE PROVIDE, B1 AND B2 ENGINEERS, SHEET METAL EXPERST FOR ALL MODELS OF AIRCRAFTS. OUR PARTICULAR EXPERTISTE ARE HELICOPTERS MODELS:</h4>
          <br/>
          <h5 class="mb-0 font-weight-light text-danger">AW139</h5>
          <h5 class="mb-0 font-weight-light text-danger">S92</h5>
          <h5 class="mb-0 font-weight-light text-danger">S76</h5>
          <h5 class="mb-0 font-weight-light text-danger">EC 225</h5>
          <br/>
          <h4 class="mb-0 font-weight-light">
            ALL OF OUR FIELD SERVICE ENGINEERS ARE TRAINED, AND DRIVEN TO ASSIST YOUR AIRCRAFT, PROVIDE SUPPORT ENGINEER TO THE CLIENT ASSISTING THE LOCAL TEAM IN MAINTENANCE TASKS, PLANNING OF
            MAINTENANCE, ADVISING ON TROUBLESHOOTING PROBLEMS, SERVICES TO SUPPORT A MAJOR REPAIR AND TRAINING YOUR STAFF.
            IN ALL OUR DOING WE COMMIT OURSELVES TO HIGHEST STANDARDS OF EFFICIENCY, QUALITY AND SAFETY
            PLEASE DO NOT HESITATE TO CHALLENGE US. LET US KNOW HOW WE CAN EFFICIENTLY SUPPORT YOUR BUSINESS.
          </h4>
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
.imagem {
  display: table;
  width: 100%;
  height: 100vh;
  padding: 100px 0;
  color: white;
  background-position: 30% 45%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
</style>
