function initMap() {
  var uluru = {lat: 37.9001519, lng: -122.3073993};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
    zoom: 16,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{color: '#c9b2a6'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{color: '#dcd2be'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ae9e90'}]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#93817c'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{color: '#a5b076'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#447530'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{color: '#fdfcf8'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#f8c967'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#e9bc62'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{color: '#e98d58'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{color: '#db8555'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#806b63'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{color: '#8f7d77'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ebe3cd'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{color: '#b9d3c2'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#92998d'}]
      }
    ]
  });
  
  var contentString = '<b style="line-height: 1.5em">Bridges Rock Gym</b><br />'
      + 'Gym with a rock wall & fitness classes';
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  var isOpen = false;
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  marker.addListener('click', function() {
    if (isOpen) {
      infoWindow.close();
      isOpen = false;
    } else {
      infoWindow.open(map, marker);
      isOpen = true;
    }
  });
}

$(document).ready(function() {
  var submitRegWidth = '80%', submitExpWidth = '40%';
  // This should probably happen on a resize event as well
  if ($(window).width() <= 1100) {
    submitRegWidth = '60%';
    $('#zipcode-input').attr('data-text', 'Enter a zipcode');
    $('#zipcode-input').css('width', '40%');
    $('#zipcode-submit').css('width', submitRegWidth);
  } else if ($(window).width() <= 1350) {
    submitRegWidth = '70%';
    $('#zipcode-input').css('width', '30%');
    $('#zipcode-submit').css('width', submitRegWidth);
  }
  
  var zipcodeInput = $('#zipcode-input');
  var permissibleEvts = [8, 35, 36, 37, 38, 39, 40, 46];
  var expanded = false;
  var handleZipcodeInput = function(evt) {
    if (!permissibleEvts.includes(evt.which) && zipcodeInput.text().length >= 5) {
      evt.preventDefault();
    }
    if (!expanded && zipcodeInput.text().length >= 5) {
      $('#zipcode-submit').css('width', submitExpWidth);
      $('#zipcode-submit').css('color', '#ffffff');
      $('#zipcode-submit').css('cursor', 'pointer');
      expanded = true;
    } else if (expanded && zipcodeInput.text().length < 5) {
      $('#zipcode-submit').css('width', submitRegWidth);
      $('#zipcode-submit').css('color', '#a5a5a5');
      $('#zipcode-submit').css('cursor', 'default');
      expanded = false;
    }
  }
  zipcodeInput.keyup(function(evt) { handleZipcodeInput(evt); });
  zipcodeInput.keydown(function(evt) { handleZipcodeInput(evt); });
});
