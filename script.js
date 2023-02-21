// Define the Tulsa city council districts and their boundaries
const districts = [
  {
    name: 'District 1',
    coords: [
      {lat: 36.246111, lng: -95.994622},
      {lat: 36.245520, lng: -95.984465},
      {lat: 36.198362, lng: -95.985150},
      {lat: 36.198304, lng: -95.993644},
      {lat: 36.246111, lng: -95.994622}
    ]
  },
  {
    name: 'District 2',
    coords: [
      {lat: 36.217751, lng: -95.965221},
      {lat: 36.219569, lng: -95.952086},
      {lat: 36.204967, lng: -95.946900},
      {lat: 36.190394, lng: -95.956856},
      {lat: 36.190958, lng: -95.975202},
      {lat: 36.217751, lng: -95.965221}
    ]
  },
  {
    name: 'District 3',
    coords: [
      {lat: 36.156628, lng: -96.019388},
      {lat: 36.156441, lng: -96.008659},
      {lat: 36.128581, lng: -96.004933},
      {lat: 36.123738, lng: -96.022054},
      {lat: 36.156628, lng: -96.019388}
    ]
  },
  {
    name: 'District 4',
    coords: [
      {lat: 36.159196, lng: -95.984374},
      {lat: 36.123694, lng: -95.980758},
      {lat: 36.122679, lng: -95.985230},
      {lat: 36.122800, lng: -95.993198},
      {lat: 36.159196, lng: -95.984374}
    ]
  },
  {
    name: 'District 5',
    coords: [
      {lat: 36.125009, lng: -95.906184},
      {lat: 36.129219, lng: -95.895386},
      {lat: 36.102282, lng: -95.879837},
      {lat: 36.076636, lng: -95.909378},
      {lat: 36.082479, lng: -95.925432},
      {lat: 36.125009, lng: -95.906184}
    ]
  },
  {
    name: 'District 6',
    coords: [
      {lat: 36.151423, lng: -95.886801},
      {lat: 36.134089, lng: -95.880978},
      {lat: 36.118567, lng: -95.893971},
      {lat: 36.117139, lng: -95.902434},
      {lat: 36.124478, lng: -95.907245},
      {lat: 36.141206, lng: -95.890254},
      {lat: 36.151423, lng: -95.886801}
    ]
  },
  {
    name: 'District 7',
    coords: [
      {lat: 36.136737, lng: -95.952815},
      {lat: 36.160532, lng: -95.955657},
      {lat: 36.160407, lng: -95.945885},
      {lat: 36.153305, lng: -95.926005},
      {lat: 36.126438, lng: -95.939280},
      {lat: 36.136737, lng: -95.952815}
    ]
  }
];

// Define the pre-written message to the councilor
const message = `Dear Councilor [name],\n\nI am a resident of your district, and I am writing to urge you to support the resolution to reaffirm that Tulsa is a safe and welcoming city. As your constituent, I believe it is important for our city to stand up against hate and discrimination, and to promote equality and diversity. Please let me know where you stand on this issue, and how you plan to vote. Thank you for your attention.\n\nSincerely,\n[your name]`;

// Define a function to generate the email link
function generateEmailLink(name, email, district) {
  const subject = encodeURIComponent('Support the resolution to reaffirm that Tulsa is a safe and welcoming city');
  const body = encodeURIComponent(message.replace('[name]', name));
  const link = `mailto:${email}?subject=${subject}&body=${body}`;
  return link;
}

// Create the map and the district polygons
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 36.153981, lng: -95.992775}
  });
  districts.forEach(district => {
    const polygon = new google.maps.Polygon({
      paths: district.coords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polygon.setMap(map);
    // Define an event listener for the polygon click
    google.maps.event.addListener(polygon
    , 'click', function() {
      // Show the councilor information for the clicked district
      const councilorInfo = document.getElementById('councilor-info');
      councilorInfo.innerHTML = '';
      councilorInfo.style.display = 'block';
      const districtName = document.createElement('h2');
      districtName.textContent = district.name;
      councilorInfo.appendChild(districtName);
      const councilor = getCouncilorByDistrict(district.name);
      if (councilor) {
        const councilorName = document.createElement('p');
        councilorName.textContent = councilor.name;
        councilorInfo.appendChild(councilorName);
        const emailLink = document.createElement('a');
        emailLink.href = generateEmailLink(councilor.name, councilor.email, councilor.district);
        emailLink.textContent = `Email ${councilor.name}`;
        councilorInfo.appendChild(emailLink);
      } else {
        const noCouncilor = document.createElement('p');
        noCouncilor.textContent = 'No councilor found for this district.';
        councilorInfo.appendChild(noCouncilor);
      }
    });
  });
}

// Define a function to get the councilor information by district name
function getCouncilorByDistrict(districtName) {
  // Replace the following with your own code to retrieve the councilor information from the provided link
  const councilors = [
    {name: 'Phil Lakin', email: 'phil.lakin@tulsacouncil.org', district: 'District 7'},
    {name: 'Jeannie Cue', email: 'jeannie.cue@tulsacouncil.org', district: 'District 2'},
    {name: 'Cass Fahler', email: 'cass.fahler@tulsacouncil.org', district: 'District 6'},
    {name: 'Lori Decter Wright', email: 'lori.decterwright@tulsacouncil.org', district: 'District 7'},
    {name: 'Kara Joy McKee', email: 'kara.joymckee@tulsacouncil.org', district: 'District 4'},
    {name: 'J Crista Patrick', email: 'jcrista.patrick@tulsacouncil.org', district: 'District 3'},
    {name: 'Mykey Arthrell-Knezek', email: 'mykey.arthrellknezek@tulsacouncil.org', district: 'District 5'},
    {name: 'Connie Dodson', email: 'connie.dodson@tulsacouncil.org', district: 'District 1'}
  ];
  return councilors.find(councilor => councilor.district === districtName);
}

// Load the Google Maps API
function loadMapScript() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}

// Load the map script when the page finishes loading
window.addEventListener('load', loadMapScript);

