toggleBlurb('btn').onclick = function () {
  toggleBlurb('blurb1').innerHTML = 'As the old adage goes, if it ain’t broke, don’t fix it. And there’s certainly nothing to fix about this stop. Join us in the friendly confines of Woodley Park, the official opening spot for the Bear Crawl for the third consecutive year. The sights and sounds of DC’s ultimate hidden treasure will be on full display, so come together with us nature, grab your tank from a host, and raise your glass for a day to remember. Be sure to give yourself time to travel to the Woods because you are NOT going to want to miss the Opening Bearmony for this year’s Crawl. It’ll be talked about for years to come.';
  toggleBlurb('blurb2').innerHTML = 'Uncertainty of a new stop in a new neighborhood in 2018 was quickly removed within milliseconds of entering this historic rowhome in one of DC’s oldest neighborhoods. To put it briefly, we had to return in 2019 to see what possibly could come next. Located just one mile south from Woodley and across from the O Street Mansion, join us in DC’s ultimate party house. Remember those drinking games you claimed to be so good at in college? Time to put your money where your mouth is…';
  toggleBlurb('blurb3').innerHTML = 'Same host, new stop. 2019 marks this host’s 3rd year hosting, all at different locations. That kind of versatility is unparalleled and overall, provides a fresh spark to the Crawl as we continue to seek ways to innovate the event year in and year out. This year’s stop will be located on U Street, just a quick uber from Dupont. Historically, the 3rd stop is where the energy levels really turn up so U are not going to want to miss this. This stop took us around the world last year – where will it go this year?';
  toggleBlurb('blurb4').innerHTML = 'We dreamed bigger in 2019….so we made some calls, shook some hands, and reserved a rooftop. Did we mention it was free? Join us at the only designated bar stop on the crawl, at Takoda Bear Garden, for what we are calling Intermission. You’re not going to want to miss the sheer terror in the eyes of bystanders as we roll deep 40 people into the bar. You would have thought they’d seen actual bears. The owner has allowed us to bring in our own food to the bar so feel free to use this time to fill your bellies with something besides alcohol.';
  toggleBlurb('blurb5').innerHTML = 'New host, new house. After attending the bear crawl last year as an out-of-towner, she became determined to move to DC in the hopes that one day she would be able to serve as a host in the bears’ flagship event. 365 days later and we’ve come full circle. Join us just a few short blocks from Takoda, as we venture, hand in hand, into a new era of the crawl with the unraveling of 2019’s newest feature…… an illustrious backyard patio.';
  toggleBlurb('blurb6').innerHTML = 'Voted by TIME Magazine as DC’s hottest rooftop in 2017 and 2018, this final stop is all you can ask for. Even the sun takes a few moments to pay its respects and take a bow as we welcome nightfall. Serving at the sunset stop for 3 years running, this stop is known for its panoramic views and epic sets. Located just down the street from Truxton Circle, come join us on the rooftop as we welcome the ensuing night and pay homage to the creators of Instagram, who have provided us with a platform to post the epic photos you will take here.';
  toggleBlurb('blurb7').innerHTML = 'Home is where the heart…..or EDM….is. Cap off this epic journey at the official Bear Crawl afterparty with the one and only DJ Diesel (aka Shaquille O’Neal) and his team of Bass All Stars. Get your tickets now! We will headbang until the wee hours of the morning celebrating yet another successful bear crawl, concluding our pursuit of eternal salvation.';

}

function toggleBlurb(id) {
  return document.getElementById(id);
}

toggleMap('btn2').onclick = function () {
  toggleMap('blurb1').innerHTML = '<img class="img-home" src="img/2.PNG">';
  toggleMap('blurb2').innerHTML = '<img class="img-home" src="img/2.PNG">';
  toggleMap('blurb3').innerHTML = '<img class="img-home" src="img/2.PNG">';
  toggleMap('blurb4').innerHTML = '<img class="img-home" src="img/2.PNG">';
  toggleMap('blurb5').innerHTML = '<img class="img-home" src="img/2.PNG">';
  toggleMap('blurb6').innerHTML = '<img class="img-home" src="img/2.PNG">';
  toggleMap('blurb7').innerHTML = '<img class="img-home" src="img/2.PNG">';
}

function toggleMap(id) {
  return document.getElementById(id);
}