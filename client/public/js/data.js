const apicall = 'https://bmi-webapp-prod-awdshow.azurewebsites.net/pages/17';

fetch(apicall).then(res => res.json()).then(json => {
  console.log(json[0].name);

    
 
    // INTRO heading
    var introhead, introhead1, introhead_id = "";
    introhead = json;

    for (introhead1 in introhead) {
        if (introhead[introhead1].__component == "pages.gospel-intro") {
            introhead_id +=   introhead[introhead1].heading;
        }
    }
    document.getElementById("about-heading").innerHTML = introhead_id;
    
    
    
    // INTRO COPY
    var introcopy, introcopy1, introcopy_id = "";
    introcopy = json;

    for (introcopy1 in introcopy) {
        if (introcopy[introcopy1].__component == "pages.gospel-intro") {
            introcopy_id +=   introcopy[introcopy1].intro_text;
        }
    }
    document.getElementById("about-copy").innerHTML = introcopy_id;
    
    
    // INTRO modal
    var intromore, intromore1, intromore_id = "";
    intromore = json;

    for (intromore1 in intromore) {
        if (intromore[intromore1].__component == "pages.gospel-intro") {
            intromore_id +=   intromore[intromore1].learn_more;
        }
    }
    document.getElementById("about-more").innerHTML = intromore_id;
    
	
	// HOSTS
	
	var hosts, hosts1, hosts2, hosts_id = "";
    hosts = json;    
    for (hosts1 in hosts) { 
        if (hosts[hosts1].__component == "pages.host-list") {
            for (hosts2 in hosts[hosts1].hosts) { 

hosts_id +=     '<div class="col host-wrap animate-slide-up">';
hosts_id +=     	'<div class="host">';
hosts_id +=     		'<div class="front">';
hosts_id +=     			'<div>';
hosts_id +=     				'<h3>' + hosts[hosts1].hosts[hosts2].name + '</h3>';
hosts_id +=     				'<p>' + hosts[hosts1].hosts[hosts2].bio + '</p>';
hosts_id +=     			'</div>';
hosts_id +=     		'</div>';
hosts_id +=     		'<div class="back" style="background-image: url(' + hosts[hosts1].hosts[hosts2].image.url + ')"></div>';
hosts_id +=     	'</div>';
hosts_id +=     '</div>';
			
			
			}
			
        }
    }
    document.getElementById("host-list").innerHTML = hosts_id;
	
	
	
	// IMPACT
	var impact, impact2, impact_id = "";
    impact = json;

    for (impact2 in impact) {
        if (impact[impact2].meta_key == "impact-award") {
			
impact_id += '<div class="col-lg-6 offset-lg-1">';
impact_id += 	'<h2 class="animate-slide-right">' + impact[impact2].award_name + '</h2>';
impact_id += 	'<h3 class="animate-slide-right">' + impact[impact2].award_winner + '</h3>';
impact_id += 	'<p class="animate-slide-right">' + impact[impact2].award_details + '</p>';
impact_id += '</div>';
impact_id += '<div class="col-lg-4">';
impact_id += 	'<div class="photo animate-slide-left" style="background-image: url(' + impact[impact2].image.url + ')"></div>';
impact_id += '</div>';
			
        }
    }
    document.getElementById("impact-content").innerHTML = impact_id;
	
	
	
	// VIDEO
	var vid, vid1, vid_id = "";
    vid = json;

    for (vid1 in vid) {
        if (vid[vid1].meta_key == "impact-performance") {
	
vid_id += '<div class="container">';
vid_id += 	'<div class="row">';
vid_id += 		'<div class="col-lg-8 offset-lg-2 text-center">';
vid_id += 			'<h2 class="animate-zoom-out">' + vid[vid1].award_name + '</h2>';
vid_id += 		'</div>';
vid_id += 	'</div>';
vid_id += '</div>';
vid_id += '<div class="embed-container">';
vid_id += 	'<button class="play-vid"><img src="img/play-btn3.png"></button>';
vid_id += 	'<img src="' + vid[vid1].image.url + '" class="poster">';
vid_id += 	'<iframe id="videoiframe" src="https://www.youtube.com/embed/' + vid[vid1].youtube_id + '?enablejsapi&rel=0" frameborder="0" allowfullscreen></iframe>';
vid_id += '</div>';
		}
    }
    document.getElementById("video-content").innerHTML = vid_id;
			
	
			
	// SOTY
	var soty, soty2, soty_id = "";
    soty = json;

    for (soty2 in soty) {
        if (soty[soty2].meta_key == "song-of-the-year") {
			
soty_id += '<div class="col-lg-4 offset-lg-1">';
soty_id += 		'<div class="photo animate-slide-right" style="background-image: url(' + soty[soty2].image.url + ')"></div>';
soty_id += '</div>';
soty_id += '<div class="col-lg-6">';
soty_id += 		'<h2 class="animate-slide-left">' + soty[soty2].award_name + '</h2>';
soty_id += 		'<h3 class="animate-slide-left">' + soty[soty2].award_winner + '</h3>';
soty_id += 		soty[soty2].award_details;
soty_id += 		'<div class="soty-hiwts">';
// soty_id += 			'<div class="sm-photo" style="background-image: url(img/hiwts.jpg)"></div>';
soty_id += 			'<div class="bar">';
soty_id += 				'<a class="sm-btn" href="//www.youtube.com/watch?v=' + soty[soty2].youtube_id + '?enablejsapi&rel=0" data-lity><img src="img/play-btn2.png"></a>';
soty_id += 				'<p>A Special Message from Tom Barnes</p>';
soty_id += 			'</div>';
soty_id += 		'</div>';
soty_id += '</div>';

			
        }
    }
    document.getElementById("soty-content").innerHTML = soty_id;
	

	
	// CHAMPION
	var champ, champ2, champ_id = "";
    champ = json;

    for (champ2 in champ) {
        if (champ[champ2].meta_key == "champion-award") {
			
champ_id += '<div class="col-lg-6 offset-lg-1">';
champ_id += 	'<h2 class="animate-slide-right">' + champ[champ2].award_name + '</h2>';
champ_id += 	'<h3 class="animate-slide-right">' + champ[champ2].award_winner + '</h3>';
champ_id += 	'<p class="animate-slide-right">' + champ[champ2].award_details + '</p>';
champ_id += '</div>';
champ_id += '<div class="col-lg-4">';
champ_id += 	'<div class="photo animate-slide-left" style="background-image: url(' + champ[champ2].image.url + ')"></div>';
champ_id += '</div>';
			
        }
    }
    document.getElementById("champ-content").innerHTML = champ_id;
	
	
	
	// HIWTS INTRO
	var hi, hi2, hi_id = "";
    hi = json;

    for (hi2 in hi) {
        if (hi[hi2].meta_key == "hiwts-intro") {
			
hi_id += '<h2 class="animate-zoom-out">' + hi[hi2].name + '</h2>';
hi_id += '<h3 class="animate-zoom-out">' + hi[hi2].content + '</h3>';
hi_id += '<hr>';
			
        }
    }
    document.getElementById("hiwts-intro").innerHTML = hi_id;
	
	// HIWTS 1
	var h1, h1b, h1_id = "";
    h1 = json;

    for (h1b in h1) {
        if (h1[h1b].meta_key == "hiwts-1") {
		
h1_id += '<a href="//www.youtube.com/watch?v=' + h1[h1b].youtube_id + '?enablejsapi&rel=0" data-lity>';
h1_id += 	'<div class="small"><img src="img/play-btn1.png"></div>';
h1_id += 	'<div class="large" style="background-image: url(' + h1[h1b].image.url + ')"></div>';
h1_id += '</a>';
h1_id += '<h3>' + h1[h1b].name + h1[h1b].text + '</h3>';
			
        }
    }
    document.getElementById("hiwts1").innerHTML = h1_id;
	
	// HIWTS 2
	var h2, h2b, h2_id = "";
    h2 = json;

    for (h2b in h2) {
        if (h2[h2b].meta_key == "hiwts-2") {
		
h2_id += '<a href="//www.youtube.com/watch?v=' + h2[h2b].youtube_id + '?enablejsapi&rel=0" data-lity>';
h2_id += 	'<div class="small"><img src="img/play-btn1.png"></div>';
h2_id += 	'<div class="large" style="background-image: url(' + h2[h2b].image.url + ')"></div>';
h2_id += '</a>';
h2_id += '<h3>' + h2[h2b].name + h2[h2b].text + '</h3>';
			
        }
    }
    document.getElementById("hiwts2").innerHTML = h2_id;
	
	// HIWTS 3
	var h3, h3b, h3_id = "";
    h3 = json;

    for (h3b in h3) {
        if (h3[h3b].meta_key == "hiwts-3") {
		
h3_id += '<a href="//www.youtube.com/watch?v=' + h3[h3b].youtube_id + '?enablejsapi&rel=0" data-lity>';
h3_id += 	'<div class="small"><img src="img/play-btn1.png"></div>';
h3_id += 	'<div class="large" style="background-image: url(' + h3[h3b].image.url + ')"></div>';
h3_id += '</a>';
h3_id += '<h3>' + h3[h3b].name + h3[h3b].text + '</h3>';
			
        }
    }
    document.getElementById("hiwts3").innerHTML = h3_id;
	
	
	
	
	// SONGWRITER SONGS 
    const ineligiblePROs = ['BMI', 'APRA', 'SOCAN'];
    var songs, songs1, songs2, songs3, songs_id = "";
    songs = json;

    for (songs1 in songs) {
        if (songs[songs1].type == "TopSongs") {
            for (songs2 in songs[songs1].songs) {
                
songs_id +=    '<div class="col-lg-3 col-md-4 col-sm-12 song-col">';
songs_id +=        '<div class="song-card-wrap animate-zoom-in">';
songs_id +=            '<div class="song-card">';
songs_id +=                '<div class="inner">';
songs_id +=                '<div class="song-img"><img src="' + songs[songs1].songs[songs2].image.url + '" class="lazy" alt="album cover"></div>';
songs_id +=                '<h4>' + songs[songs1].songs[songs2].name + '</h4>';        
songs_id +=                '<hr><div>';
                
                            const writers = songs[songs1].songs[songs2].writers;
                            // sort non-European writers to the bottom
                            writers.sort(function (writer1, writer2) {
                              if (ineligiblePROs.indexOf(writer1.affiliation) === -1 && ineligiblePROs.indexOf(writer2.affiliation) > -1) return -1;
                            });
songs_id +=                     '<ul class="writers">';
                           for (songs3 in songs[songs1].songs[songs2].writers) {
songs_id +=                     '<li';
                                // is this writer non-European?
                                if (ineligiblePROs.indexOf(songs[songs1].songs[songs2].writers[songs3].affiliation) > -1) {
songs_id +=                     ' style="font-weight: 100; color:#CDD" ';
                                }
songs_id +=                     '>';
                                if (songs[songs1].songs[songs2].writers[songs3].first_win) {
songs_id +=                         '<span>★</span>'; 
                                }
songs_id +=                     songs[songs1].songs[songs2].writers[songs3].name; 
                               
songs_id +=                     '</h5>';
                           }
songs_id +=                 '</ul><ul class="publishers">'; 
                            for (songs3 in songs[songs1].songs[songs2].publishers) {
                              // only show non-BMI publishers
                              if (songs[songs1].songs[songs2].publishers[songs3].affiliation !== "BMI") {
songs_id +=                     '<li>' + songs[songs1].songs[songs2].publishers[songs3].name + '</li> '; 
                              }
                            }
songs_id +=                 '</ul>';
songs_id +=                 '</div>';
songs_id +=                 '</div>';
songs_id +=            '</div>';
songs_id +=        '</div>';
songs_id +=    '</div>';
            }
        }
    }
    document.getElementById("songwriters-winners").innerHTML = songs_id;
	
	
    $('.song-img').on('click', function(){     
        $(this).toggleClass('active');
    });

  
	// FIRST TIME
	
	var fth, fth1, fth_id = "";
    fth = json;

    for (fth1 in fth) {
        if (fth[fth1].meta_key == "fun-facts-1-intro") {
		
fth_id += '<h2 class="animate-slide-right">' + fth[fth1].name + '</h2>';
fth_id += '<h3>' + fth[fth1].content + '</h3>';

		}
    }
    document.getElementById("ft-heading").innerHTML = fth_id;
	
									
	
	var ft1, ft1b, ft1c, ft1_id = "";
    ft1 = json;    
    
    for (ft1b in ft1) { 
        if (ft1[ft1b].__component == "pages.facts-list") {
            if (ft1[ft1b].meta_key == "fun-facts-1") {
                for (ft1c in ft1[ft1b].fun_facts) { 
					
ft1_id +=     '<div class="swiper-slide">';
ft1_id +=     	'<div class="slider-image">';
ft1_id +=     		'<img src="' + ft1[ft1b].fun_facts[ft1c].image.url + '">';
ft1_id +=     	'</div>';
ft1_id +=     '</div>';
			
                }
            }
        }
    }
    document.getElementById("ft1").innerHTML = ft1_id;
	
	
	var ft2, ft2b, ft2c, ft2_id = "";
    ft2 = json;    
    
    for (ft2b in ft2) { 
        if (ft2[ft2b].__component == "pages.facts-list") {
            if (ft2[ft2b].meta_key == "fun-facts-1") {
                for (ft2c in ft2[ft2b].fun_facts) { 
ft2_id +=     '<div class="swiper-slide">';
ft2_id +=     	'<p>' + ft2[ft2b].fun_facts[ft2c].text + '</p>';
ft2_id +=     '</div>';
			
                }
            }
        }
    }
    document.getElementById("ft2").innerHTML = ft2_id;
	
	
	
	// SPECIAL MESSAGES
	var sm1, sm1b, sm1_id = "";
    sm1 = json;

    for (sm1b in sm1) {
        if (sm1[sm1b].meta_key == "special-message-1") {
		
sm1_id += '<a href="//www.youtube.com/watch?v=' + sm1[sm1b].youtube_id + '?enablejsapi&rel=0" data-lity>';
sm1_id += 	'<div class="small"><img src="img/play-btn1.png"></div>';
sm1_id += 	'<div class="large" style="background-image: url(' + sm1[sm1b].image.url + ')"></div>';
sm1_id += '</a>';
sm1_id += '<h3>' + sm1[sm1b].name + '</h3>';
		}
    }
    document.getElementById("sm1").innerHTML = sm1_id;
	
	var sm2, sm2b, sm2_id = "";
    sm2 = json;

    for (sm2b in sm2) {
        if (sm2[sm2b].meta_key == "special-message-2") {
		
sm2_id += '<a href="//www.youtube.com/watch?v=' + sm2[sm2b].youtube_id + '?enablejsapi&rel=0" data-lity>';
sm2_id += 	'<div class="small"><img src="img/play-btn1.png"></div>';
sm2_id += 	'<div class="large" style="background-image: url(' + sm2[sm2b].image.url + ')"></div>';
sm2_id += '</a>';
sm2_id += '<h3>' + sm2[sm2b].name + '</h3>';
		}
    }
    document.getElementById("sm2").innerHTML = sm2_id;
	
	var sm3, sm3b, sm3_id = "";
    sm3 = json;

    for (sm3b in sm3) {
        if (sm3[sm3b].meta_key == "special-message-3") {
		
sm3_id += '<a href="//www.youtube.com/watch?v=' + sm3[sm3b].youtube_id + '?enablejsapi&rel=0" data-lity>';
sm3_id += 	'<div class="small"><img src="img/play-btn1.png"></div>';
sm3_id += 	'<div class="large" style="background-image: url(' + sm3[sm3b].image.url + ')"></div>';
sm3_id += '</a>';
sm3_id += '<h3>' + sm3[sm3b].name + '</h3>';
		}
    }
    document.getElementById("sm3").innerHTML = sm3_id;
	
	
			
			
	// FUN FACTS
		
	var ffh, ffh1, ffh_id = "";
    ffh = json;

    for (ffh1 in ffh) {
        if (ffh[ffh1].meta_key == "fun-facts-2-intro") {
		
ffh_id += '<h2 class="animate-slide-right">' + ffh[ffh1].name + '</h2>';
ffh_id += '<h3>' + ffh[ffh1].content + '</h3>';

		}
    }
    document.getElementById("ff-heading").innerHTML = ffh_id;
	
	
	var ff1, ff1b, ff1c, ff1_id = "";
    ff1 = json;    
    
    for (ff1b in ff1) { 
        if (ff1[ff1b].__component == "pages.facts-list") {
            if (ff1[ff1b].meta_key == "fun-facts-2") {
                for (ff1c in ff1[ff1b].fun_facts) { 
					
ff1_id +=     '<div class="swiper-slide">';
ff1_id +=     	'<div class="slider-image">';
ff1_id +=     		'<img src="' + ff1[ff1b].fun_facts[ff1c].image.url + '">';
ff1_id +=     	'</div>';
ff1_id +=     '</div>';
			
                }
            }
        }
    }
    document.getElementById("ff1").innerHTML = ff1_id;
	
	
	var ff2, ff2b, ff2c, ff2_id = "";
    ff2 = json;    
    
    for (ff2b in ff2) { 
        if (ff2[ff2b].__component == "pages.facts-list") {
            if (ff2[ff2b].meta_key == "fun-facts-2") {
                for (ff2c in ff2[ff2b].fun_facts) { 
ff2_id +=     '<div class="swiper-slide">';
ff2_id +=     	'<p>' + ff2[ff2b].fun_facts[ff2c].text + '</p>';
ff2_id +=     '</div>';
			
                }
            }
        }
    }
    document.getElementById("ff2").innerHTML = ff2_id;
			
			
	// MILL INTRO
	
	var mi, mi1, mi_id = "";
    mi = json;    
    
    for (mi1 in mi) { 
        if (mi[mi1].meta_key == "Million Air Qualifier") {
			
mi_id +=     '<h2 class="animate-zoom-out">' + mi[mi1].name + '</h2>';
mi_id +=     '<h3 class="animate-zoom-out">' + mi[mi1].content + '</h3>';
mi_id +=     '<hr class="mb-5">';
			
        }
    }
    document.getElementById("mi").innerHTML = mi_id;
	
	
	
	// MILL 1
	
	var mill1, mill1b, mill1c, mill1d, mill1_id = "";
    mill1 = json;    
    
    for (mill1b in mill1) { 
		if (mill1[mill1b].meta_key == "16-million") {
			for (mill1c in mill1[mill1b].songs) { 
				
				
mill1_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-90">';
mill1_id +=        '<div class="song-card-wrap animate-zoom-in">';
mill1_id +=            '<div class="song-card">';
mill1_id +=            		'<div class="inner">';
mill1_id +=            			'<div class="song-img"><img class="lazy" src="' + mill1[mill1b].songs[mill1c].image.url + '"></div>';
mill1_id +=            			'<h5>' + mill1[mill1b].songs[mill1c].name + '</h4>';
mill1_id +=            			'<hr>';
mill1_id +=                     '<ul class="writers">'; 
								for (mill1d in mill1[mill1b].songs[mill1c].writers) {
mill1_id +=                     	'<li>' + mill1[mill1b].songs[mill1c].writers[mill1d].name + '</li>';
								}
mill1_id +=                     '</ul>';
mill1_id +=                     '<ul class="publishers">';				
                                for (mill1d in mill1[mill1b].songs[mill1c].publishers) {
mill1_id +=                         '<li>' + mill1[mill1b].songs[mill1c].publishers[mill1d].name + '</li> '; 
                                }
mill1_id +=                     '</ul>';
				
mill1_id +=                 '</div>';
mill1_id +=            '</div>';
mill1_id +=        '</div>';
mill1_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("mill1").innerHTML = mill1_id;
			
			
	// MILL 2
	
	var mill2, mill2b, mill2c, mill2d, mill2_id = "";
    mill2 = json;    
    
    for (mill2b in mill2) { 
		if (mill2[mill2b].meta_key == "8-million") {
			for (mill2c in mill2[mill2b].songs) { 
				
				
mill2_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-90">';
mill2_id +=        '<div class="song-card-wrap animate-zoom-in">';
mill2_id +=            '<div class="song-card">';
mill2_id +=            		'<div class="inner">';
mill2_id +=            			'<div class="song-img"><img class="lazy" src="' + mill2[mill2b].songs[mill2c].image.url + '"></div>';
mill2_id +=            			'<h5>' + mill2[mill2b].songs[mill2c].name + '</h4>';
mill2_id +=            			'<hr>';
mill2_id +=                     '<ul class="writers">'; 
								for (mill2d in mill2[mill2b].songs[mill2c].writers) {
mill2_id +=                     	'<li>' + mill2[mill2b].songs[mill2c].writers[mill2d].name + '</li>';
								}
mill2_id +=                     '</ul>';
mill2_id +=                     '<ul class="publishers">';				
                                for (mill2d in mill2[mill2b].songs[mill2c].publishers) {
mill2_id +=                         '<li>' + mill2[mill2b].songs[mill2c].publishers[mill2d].name + '</li> '; 
                                }
mill2_id +=                     '</ul>';
				
mill2_id +=                 '</div>';
mill2_id +=            '</div>';
mill2_id +=        '</div>';
mill2_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("mill2").innerHTML = mill2_id;		
			
	
	// MILL 3
	
	var mill3, mill3b, mill3c, mill3d, mill3_id = "";
    mill3 = json;    
    
    for (mill3b in mill3) { 
		if (mill3[mill3b].meta_key == "7-million") {
			for (mill3c in mill3[mill3b].songs) { 
				
				
mill3_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-90">';
mill3_id +=        '<div class="song-card-wrap animate-zoom-in">';
mill3_id +=            '<div class="song-card">';
mill3_id +=            		'<div class="inner">';
mill3_id +=            			'<div class="song-img"><img class="lazy" src="' + mill3[mill3b].songs[mill3c].image.url + '"></div>';
mill3_id +=            			'<h5>' + mill3[mill3b].songs[mill3c].name + '</h4>';
mill3_id +=            			'<hr>';
mill3_id +=                     '<ul class="writers">'; 
								for (mill3d in mill3[mill3b].songs[mill3c].writers) {
mill3_id +=                     	'<li>' + mill3[mill3b].songs[mill3c].writers[mill3d].name + '</li>';
								}
mill3_id +=                     '</ul>';
mill3_id +=                     '<ul class="publishers">';				
                                for (mill3d in mill3[mill3b].songs[mill3c].publishers) {
mill3_id +=                         '<li>' + mill3[mill3b].songs[mill3c].publishers[mill3d].name + '</li> '; 
                                }
mill3_id +=                     '</ul>';
				
mill3_id +=                 '</div>';
mill3_id +=            '</div>';
mill3_id +=        '</div>';
mill3_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("mill3").innerHTML = mill3_id;	
	
	
	// MILL 4
	
	var mill4, mill4b, mill4c, mill4d, mill4_id = "";
    mill4 = json;    
    
    for (mill4b in mill4) { 
		if (mill4[mill4b].meta_key == "6-million") {
			for (mill4c in mill4[mill4b].songs) { 
				
				
mill4_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-90">';
mill4_id +=        '<div class="song-card-wrap animate-zoom-in">';
mill4_id +=            '<div class="song-card">';
mill4_id +=            		'<div class="inner">';
mill4_id +=            			'<div class="song-img"><img class="lazy" src="' + mill4[mill4b].songs[mill4c].image.url + '"></div>';
mill4_id +=            			'<h5>' + mill4[mill4b].songs[mill4c].name + '</h4>';
mill4_id +=            			'<hr>';
mill4_id +=                     '<ul class="writers">'; 
								for (mill4d in mill4[mill4b].songs[mill4c].writers) {
mill4_id +=                     	'<li>' + mill4[mill4b].songs[mill4c].writers[mill4d].name + '</li>';
								}
mill4_id +=                     '</ul>';
mill4_id +=                     '<ul class="publishers">';				
                                for (mill4d in mill4[mill4b].songs[mill4c].publishers) {
mill4_id +=                         '<li>' + mill4[mill4b].songs[mill4c].publishers[mill4d].name + '</li> '; 
                                }
mill4_id +=                     '</ul>';
				
mill4_id +=                 '</div>';
mill4_id +=            '</div>';
mill4_id +=        '</div>';
mill4_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("mill4").innerHTML = mill4_id;	
	
	
	// MILL 5
	
	var mill5, mill5b, mill5c, mill5d, mill5_id = "";
    mill5 = json;    
    
    for (mill5b in mill5) { 
		if (mill5[mill5b].meta_key == "5-million") {
			for (mill5c in mill5[mill5b].songs) { 
				
				
mill5_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-90">';
mill5_id +=        '<div class="song-card-wrap animate-zoom-in">';
mill5_id +=            '<div class="song-card">';
mill5_id +=            		'<div class="inner">';
mill5_id +=            			'<div class="song-img"><img class="lazy" src="' + mill5[mill5b].songs[mill5c].image.url + '"></div>';
mill5_id +=            			'<h5>' + mill5[mill5b].songs[mill5c].name + '</h4>';
mill5_id +=            			'<hr>';
mill5_id +=                     '<ul class="writers">'; 
								for (mill5d in mill5[mill5b].songs[mill5c].writers) {
mill5_id +=                     	'<li>' + mill5[mill5b].songs[mill5c].writers[mill5d].name + '</li>';
								}
mill5_id +=                     '</ul>';
mill5_id +=                     '<ul class="publishers">';				
                                for (mill5d in mill5[mill5b].songs[mill5c].publishers) {
mill5_id +=                         '<li>' + mill5[mill5b].songs[mill5c].publishers[mill5d].name + '</li> '; 
                                }
mill5_id +=                     '</ul>';
				
mill5_id +=                 '</div>';
mill5_id +=            '</div>';
mill5_id +=        '</div>';
mill5_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("mill5").innerHTML = mill5_id;	
	
	
	
	// MILL 6
	
	var mill6, mill6b, mill6c, mill6d, mill6_id = "";
    mill6 = json;    
    
    for (mill6b in mill6) { 
		if (mill6[mill6b].meta_key == "4-million") {
			for (mill6c in mill6[mill6b].songs) { 
				
				
mill6_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-90">';
mill6_id +=        '<div class="song-card-wrap animate-zoom-in">';
mill6_id +=            '<div class="song-card">';
mill6_id +=            		'<div class="inner">';
mill6_id +=            			'<div class="song-img"><img class="lazy" src="' + mill6[mill6b].songs[mill6c].image.url + '"></div>';
mill6_id +=            			'<h5>' + mill6[mill6b].songs[mill6c].name + '</h4>';
mill6_id +=            			'<hr>';
mill6_id +=                     '<ul class="writers">'; 
								for (mill6d in mill6[mill6b].songs[mill6c].writers) {
mill6_id +=                     	'<li>' + mill6[mill6b].songs[mill6c].writers[mill6d].name + '</li>';
								}
mill6_id +=                     '</ul>';
mill6_id +=                     '<ul class="publishers">';				
                                for (mill6d in mill6[mill6b].songs[mill6c].publishers) {
mill6_id +=                         '<li>' + mill6[mill6b].songs[mill6c].publishers[mill6d].name + '</li> '; 
                                }
mill6_id +=                     '</ul>';
				
mill6_id +=                 '</div>';
mill6_id +=            '</div>';
mill6_id +=        '</div>';
mill6_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("mill6").innerHTML = mill6_id;	
	
	
	
	
	// FILM INTRO
	
	var fi, fi1, fi_id = "";
    fi = json;    
    
    for (fi1 in fi) { 
        if (fi[fi1].meta_key == "filmtv-intro") {
			
fi_id +=     '<h2 class="animate-zoom-out">' + fi[fi1].name + '</h2>';
fi_id +=     '<h3 class="animate-zoom-out">' + fi[fi1].content + '</h3>';
fi_id +=     '<hr class="mb-5">';
			
        }
    }
    document.getElementById("fi").innerHTML = fi_id;
	
	
	// FILM 1
	
	var film1, film1b, film1c, film1d, film1_id = "";
    film1 = json;    
    
    for (film1b in film1) { 
		if (film1[film1b].meta_key == "film") {
			for (film1c in film1[film1b].videos) { 
				
				
film1_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-5">';
film1_id +=        '<div class="song-card-wrap animate-zoom-in">';
film1_id +=            '<div class="song-card">';
film1_id +=            		'<div class="inner">';
film1_id +=            			'<h5>' + film1[film1b].videos[film1c].name + '</h4>';
film1_id +=            			'<hr>';
film1_id +=                     '<ul class="writers">'; 
								for (film1d in film1[film1b].videos[film1c].writers) {
film1_id +=                     	'<li>' + film1[film1b].videos[film1c].writers[film1d].name + '</li>';
								}
film1_id +=                     '</ul>';
				
film1_id +=                 '</div>';
film1_id +=            '</div>';
film1_id +=        '</div>';
film1_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("film1").innerHTML = film1_id;	
	
	
	// 2
	
	var film2, film2b, film2c, film2d, film2_id = "";
    film2 = json;    
    
    for (film2b in film2) { 
		if (film2[film2b].meta_key == "streaming") {
			for (film2c in film2[film2b].videos) { 
				
				
film2_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-5">';
film2_id +=        '<div class="song-card-wrap animate-zoom-in">';
film2_id +=            '<div class="song-card">';
film2_id +=            		'<div class="inner">';
film2_id +=            			'<h5>' + film2[film2b].videos[film2c].name + '</h4>';
film2_id +=            			'<hr>';
film2_id +=                     '<ul class="writers">'; 
								for (film2d in film2[film2b].videos[film2c].writers) {
film2_id +=                     	'<li>' + film2[film2b].videos[film2c].writers[film2d].name + '</li>';
								}
film2_id +=                     '</ul>';
				
film2_id +=                 '</div>';
film2_id +=            '</div>';
film2_id +=        '</div>';
film2_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("film2").innerHTML = film2_id;
	
	// 3
	
	var film3, film3b, film3c, film3d, film3_id = "";
    film3 = json;    
    
    for (film3b in film3) { 
		if (film3[film3b].meta_key == "cable") {
			for (film3c in film3[film3b].videos) { 
				
				
film3_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-5">';
film3_id +=        '<div class="song-card-wrap animate-zoom-in">';
film3_id +=            '<div class="song-card">';
film3_id +=            		'<div class="inner">';
film3_id +=            			'<h5>' + film3[film3b].videos[film3c].name + '</h4>';
film3_id +=            			'<hr>';
film3_id +=                     '<ul class="writers">'; 
								for (film3d in film3[film3b].videos[film3c].writers) {
film3_id +=                     	'<li>' + film3[film3b].videos[film3c].writers[film3d].name + '</li>';
								}
film3_id +=                     '</ul>';
				
film3_id +=                 '</div>';
film3_id +=            '</div>';
film3_id +=        '</div>';
film3_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("film3").innerHTML = film3_id;
	
	// 4
	
	var film4, film4b, film4c, film4d, film4_id = "";
    film4 = json;    
    
    for (film4b in film4) { 
		if (film4[film4b].meta_key == "network") {
			for (film4c in film4[film4b].videos) { 
				
				
film4_id +=    '<div class="col-md-4 col-sm-6 col-12 song-col mb-5">';
film4_id +=        '<div class="song-card-wrap animate-zoom-in">';
film4_id +=            '<div class="song-card">';
film4_id +=            		'<div class="inner">';
film4_id +=            			'<h5>' + film4[film4b].videos[film4c].name + '</h4>';
film4_id +=            			'<hr>';
film4_id +=                     '<ul class="writers">'; 
								for (film4d in film4[film4b].videos[film4c].writers) {
film4_id +=                     	'<li>' + film4[film4b].videos[film4c].writers[film4d].name + '</li>';
								}
film4_id +=                     '</ul>';
				
film4_id +=                 '</div>';
film4_id +=            '</div>';
film4_id +=        '</div>';
film4_id +=    '</div>';
							
			}
		}
    }
	
    document.getElementById("film4").innerHTML = film4_id;
	
	
	
	
/**************** CAROUSELS ***************/

var swiper1a = new Swiper( '.swiper1a', {
	navigation: {
		nextEl: '.swiper1-btn-next',
		prevEl: '.swiper1-btn-prev',
	},
	loop: true,
  
});
var swiper1b = new Swiper( '.swiper1b', {
	autoHeight: true,
	loop: true
});
swiper1a.controller.control = swiper1b;
swiper1b.controller.control = swiper1a;


var swiper2a = new Swiper( '.swiper2a', {
	navigation: {
		nextEl: '.swiper2-btn-next',
		prevEl: '.swiper2-btn-prev',
	},
	loop: true,
  
});
var swiper2b = new Swiper( '.swiper2b', {
	autoHeight: true,
	loop: true
});
swiper2a.controller.control = swiper2b;
swiper2b.controller.control = swiper2a;
	
	
	
    
/**************** LAZY LOAD ******************/    
    
    var lazyLoad = new LazyLoad();
    
    
    
    
/**************** SCROLL TRIGGER ******************/   
    
var $animation_elements = $('.animate-slide-right, .animate-slide-up, .animate-slide-left, .animate-zoom-out, .animate-zoom-in, .animated-rule');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
    var window_offset = (window_height * .15);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position - window_offset)) {

            //Add class that the element is ready
            $element.addClass('ready');
        } else {
            $element.removeClass('ready');
        }

        //stagger in view for "one at a time animation"
        $(".ready:not(.in-view)").each(function(index) {
            $(this).delay( 50 * index ).queue(function() {
                $(this).addClass("in-view");
            });
        });
  });
}
var scrollTimeout;
$(window).on('scroll resize', function () {
    //Call animateInViewport for animations
    //Throttled to occur every .2s
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
            check_if_in_view();
            scrollTimeout = null;
        }, 50);
    }
});
	
	
	
	
	
	
}); // data end