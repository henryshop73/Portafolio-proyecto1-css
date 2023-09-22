document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4979540690115!2d-77.00982172592236!3d-12.078024788161205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6297769d675%3A0x8cfee580ccbabc05!2sPje%20Wacaypata%20339%2C%20San%20Luis%2015021!5e0!3m2!1ses-419!2spe!4v1695273987968!5m2!1ses-419!2spe"></iframe>
        ` ;
    }, 500);

   
});