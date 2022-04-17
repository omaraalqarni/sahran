

const apiKey = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API}&callback=initMap`;

export default function Footer() {
  return(
    <footer>


      <div id="scripts">
        <script async defer src={apiKey} ></script>
        <script src="index.js"></script>
      </div>
    </footer>
  )
}
