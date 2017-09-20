var oldhash;
function closespeeddial(){document.getElementById('thespeeddial').setAttribute('class','speed-dial');}
function resetApp(){getContent('start');}
function jumpto(jumppoint,hash,subselector){mySwiper3.slideTo(jumppoint,650);if(subselector){initSubselector(hash);} else {oldhash='';}}
function openpage(siteurl){var onInApp = window.open('http://'+siteurl, '_blank', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');}
function playAudio(audioid)
{
	if (cordova.platformId=='android') {
		var mediasrc='/android_asset/www/';
	} else {
		var mediasrc='';
	}
	$$('#audioplayer').removeClass('no-player');
	
	//alert(cordova.platformId);
	//console.log('platform: '+ cordova.platformId);
	
	var my_media = new Media(mediasrc+'audio/'+audioid+'.mp3', function () {
						$$('#audioplayer').addClass('no-player');
					}, function (err) { alert('Audio Error: '+err); $$('#audioplayer').addClass('no-player'); }
				);
	my_media.play();
}

function initSubselector(hash)
{
	// console.log('subselector toggled on!');
	var jumppoint=0;
	if((oldhash!==hash[0]) || (oldhash==hash))
	{
		mySwiperSub.removeAllSlides();
		oldhash='';
		console.log('remove all slides');
	}
	// console.log('1 oldhash: '+oldhash+' hash: '+hash);
	var newslides=[];
	var setoldhash;
	switch (hash[0])
	{
	case 'A': 
	// console.log('E');
			newslides=	['<div class="swiper-slide" onclick="getContent(\'A-AA\');"><span>aa</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AI\');"><span>ai</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AU\');"><span>au</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-Ä\');"><span>ä</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-ÄÄ\');"><span>ää</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-ÄI\');"><span>äi</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'A-AA': jumppoint=0; break;
			case 'A-AI': jumppoint=1; break;
			case 'A-AU': jumppoint=2; break;
			case 'A-Ä': jumppoint=3; break;
			case 'A-ÄÄ': jumppoint=4; break;
			case 'A-ÄI': jumppoint=5; break;
		}
		break;
		case 'B': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'B-B\');"><span>&#8722;b</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'B-BB\');"><span>&#8722;bb</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'B-BB2\');"><span>&#8722;bb&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'B-B': jumppoint=0; break;
			case 'B-BB': jumppoint=1; break;
			case 'B-BB2': jumppoint=2; break;
		}
		break;
		case 'C': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'C-CH\');"><span>&#8722;ch</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'C-CK\');"><span>&#8722;ck</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'C-CH': jumppoint=0; break;
			case 'C-CK': jumppoint=1; break;
		}
		break;
		case 'D': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'D-D\');"><span>&#8722;d</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'D-DD\');"><span>&#8722;dd</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'D-DD2\');"><span>&#8722;dd&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'D-D': jumppoint=0; break;
			case 'D-DD': jumppoint=1; break;
			case 'D-DD2': jumppoint=2; break;
		}
		break;
	case 'E': 
	// console.log('E');
			newslides=	['<div class="swiper-slide" onclick="getContent(\'E-EE\');"><span>ee</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-Ë\');"><span>ë</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-Ë2\');"><span>(e)ë(e)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-É\');"><span>é</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-É2\');"><span>&#8722;é(e)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-È\');"><span>è</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-IE\');"><span>ie</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-UE\');"><span>ue</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-IER\');"><span>ier</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-UER\');"><span>uer</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-ÄER\');"><span>äer</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-ÉI\');"><span>éi</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-EI\');"><span>ei</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-EU\');"><span>eu</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'E-EE': jumppoint=0; break;
			case 'E-Ë': jumppoint=1; break;
			case 'E-Ë2': jumppoint=2; break;
			case 'E-É': jumppoint=3; break;
			case 'E-É2': jumppoint=4; break;
			case 'E-È': jumppoint=5; break;
			case 'E-IE': jumppoint=6; break;
			case 'E-UE': jumppoint=7; break;
			case 'E-IER': jumppoint=8; break;
			case 'E-UER': jumppoint=9; break;
			case 'E-ÄER': jumppoint=10; break;
			case 'E-ÉI': jumppoint=11; break;
			case 'E-EI': jumppoint=12; break;
			case 'E-EU': jumppoint=13; break;
			
		}
		break;
	case 'F': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'F-FF\');"><span>ff</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'F-FF': jumppoint=0; break;
		}
		break;
	case 'G': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'G-G\');"><span>&#8722;g&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G2\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G3\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G4\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-GG\');"><span>&#8722;gg</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-NG\');"><span>&#8722;ng</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-NK\');"><span>&#8722;nk</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'G-G': jumppoint=0; break;
			case 'G-G2': jumppoint=1; break;
			case 'G-G3': jumppoint=2; break;
			case 'G-G4': jumppoint=3; break;
			case 'G-GG': jumppoint=4; break;
			case 'G-NG': jumppoint=5; break;
			case 'G-NK': jumppoint=6; break;
		}
		break;
		case 'I': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'I-IE\');"><span>ie</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'I-II\');"><span>ii</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'I-IE': jumppoint=0; break;
			case 'I-II': jumppoint=1; break;
		}
		break;
		case 'J': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'J-J\');"><span>j</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'J-J': jumppoint=0; break;
		}
		break;
		case 'K': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'K-CK\');"><span>&#8722;ck(-)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'K-CK': jumppoint=0; break;
		}
		break;
		case 'L': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'L-LL\');"><span>&#8722;ll(-)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'L-LL': jumppoint=0; break;
		}
		break;
		case 'M': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'M-MM\');"><span>&#8722;mm(-)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'M-MM': jumppoint=0; break;
		}
		break;
		case 'N': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'N-NN\');"><span>nn</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'N-N\');"><span>(n)*&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'N-N2\');"><span>(n)*</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'N-NN': jumppoint=0; break;
			case 'N-N': jumppoint=1; break;
			case 'N-N2': jumppoint=2; break;
		}
		break;
		case 'O': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'O-OO\');"><span>oo</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-OU\');"><span>ou</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-Ö\');"><span>ö</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-ÖÖ\');"><span>öö</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'N-OO': jumppoint=0; break;
			case 'N-OU': jumppoint=1; break;
			case 'N-Ö': jumppoint=2; break;
			case 'N-ÖÖ': jumppoint=3; break;
		}
		break;
		case 'P': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'P-PP\');"><span>pp</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'P-PF\');"><span>pf</span></div>''];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'P-PP': jumppoint=0; break;
			case 'P-PF': jumppoint=1; break;
		}
		break;
		case 'Z': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'Z-TZ\');"><span>-tz</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'Z-TZ': jumppoint=0; break;
		}
		break;
	}
	console.log('2 oldhash: '+oldhash+' hash: '+hash);
	if((oldhash!==hash[0]) || (oldhash==hash))
	{
		mySwiperSub.appendSlide(newslides);
		// $$('#swiper-sub').addClass('showsub');
		$$('#swiper-sub').removeClass('hidesub');
		console.log('Hidesub removed');
	}
	mySwiperSub.slideTo(jumppoint,650);
	oldhash=setoldhash;
}
function getContent(contentid)
{
	//
	var thecontentbox= $$('#thecontent').html();
	var thecontentrule=$$('#thecontentrule').html();
	var result='';
	var hash='';
	var jumppoint=contentid.charCodeAt(0) - 65;
	var subselector=false;
	if ((contentid.length>1) || (contentid.charCodeAt(0)>90))
	{
		//keen normale buchstaaf
		hash=contentid;
		subselector=true;
	} else { $$('#swiper-sub').addClass('hidesub'); }
	$$('#thesubnavbar').removeClass('hide-tabbar');
	switch (contentid)
	{
		case 'A' : thecontentbox="<h1>Buchstaaf A</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>B<span class=\"bold\">a</span>m<br>erk<span class=\"bold\">a</span>len<br><span class=\"bold\">A</span>f</h2><h2>Pr<span class=\"bold\">a</span>bbeli<br>r<span class=\"bold\">a</span>schten<br><span class=\"bold\">A</span>ffekot</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu a</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;a&gt; viru engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den &lt;a&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AA' : thecontentbox="<h1>Buchstaaf aa</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>g<span class=\"bold\">aa</span>psen<br>schm<span class=\"bold\">aa</span>chen<br><span class=\"bold\">aa</span>chtmol</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu aa</h1>';
			thecontentrule+='<p class="rule check">Den &lt;aa&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AI' : thecontentbox="<h1>Buchstaaf ai</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>S<span class=\"bold\">ai</span>er<br>H<span class=\"bold\">ai</span>ser</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ai</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ai&gt; ass eng Vokalkoppel a kënnt da vir, wann d\'Wuert sch vun engem &lt;a&gt; ofleede léisst (am Däitschen oder am Lëtzebuergeschen): Saier (sauer, Haiser (Haus).</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AU' : thecontentbox="<h1>Buchstaaf au</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>D<span class=\"bold\">au</span>f<br>kl<span class=\"bold\">au</span>en</h2><h2>B<span class=\"bold\">au</span>ch<br>F<span class=\"bold\">au</span>scht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu au</h1>';
			thecontentrule+='<p class="rule check">Den&lt;au&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-Ä' : thecontentbox="<h1>Buchstaaf ä</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>qu<span class=\"bold\">ä</span>len<br>pr<span class=\"bold\">ä</span>gen<br>Migr<span class=\"bold\">ä</span>n</h2><h2><span class=\"bold\">Ä</span>ntwert<br>Kn<span class=\"bold\">ä</span>tsch</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			thecontentrule='<h1>Regel zu ä</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;ä&gt; viru engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den &lt;ä&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat</p>';
			break;
			case 'A-ÄÄ' : thecontentbox="<h1>Buchstaaf ää</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>gepr<span class=\"bold\">ää</span>gt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ää</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ää&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-ÄI' : thecontentbox="<h1>Buchstaaf äi</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>st<span class=\"bold\">äi</span>pen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu äi</h1>';
			thecontentrule+='<p class="rule check">Den &lt;äi&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'B' : thecontentbox="<h1><span class=\"bold\">b</span> vir an an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">B</span>&#x200A;auer<br><span>Ka&#x200A;</span><span class=\"bold\">b</span><span>&#x200A;es</span><br><span class=\"bold\">b</span>&#x200A;aken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu b</h1>';
			thecontentrule+='<p class="rule check">Vir an an der Mëtt vum Wuert gëtt den &lt;b&gt; mëll ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-B' : thecontentbox="<h1><span class=\"bold\">b</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Wa<span class=\"bold\">b</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-b');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -b</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;b&gt; um Enn vun engem Wuert, gëtt en haart (d.h. wéi en &lt;p&gt;) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert gëtt de Buchstaf nees mëll ausgeschwat: Wab &gt; Waben.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-BB' : thecontentbox="<h1><span class=\"bold\">bb</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kra<span class=\"bold\">bb</span><br>Klu<span class=\"bold\">bb</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-bb');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -bb</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;bb&gt; um Enn vun engem Wuert, gëtt en haart (d.h. wéi en &lt;p&gt;) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert gëtt de Buchstaf nees mëll ausgeschwat: Krabb &gt; Krabben.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-BB2' : thecontentbox="<h1><span class=\"bold\">bb</span> an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>kli<span class=\"bold\">bb</span>eren<br>Pra<span class=\"bold\">bb</span>eli</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-bb2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -bb-</h1>';
			thecontentrule+='<p class="rule check">An der Mëtt vum Wuert ass den &lt;bb&gt; ëmmer mëll.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'C' : thecontentbox="<h1>Den <span class=\"bold\">C</span> um Ufank vum Wuert</h1><h2>Ausgeschwaat wei e K</h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>abinet<br><span class=\"bold\">C</span>abaret<br><span class=\"bold\">c</span>ool</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c');\">&nbsp;</p></div></div><h2>Ausgeschwaat wei en S</h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>ité<br><span class=\"bold\">C</span>ent</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c-s');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu c</h1>';
			thecontentrule+='<p class="rule check">A frieme Wierder gëtt den &lt;c&gt; am Ufank vum Wuert wéi en &lt;k&gt; ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Kënnt nom &lt;c&gt; en &lt;i&gt; oder &lt;e&gt;, gëtt den &lt;c&gt; wéi en &lt;s&gt; geschwat.</p>';
			thecontentrule+='<p class="rule check">A frieme Wierder gëtt den &lt;c&gt; am Ufank vum Wuert wéi en &lt;s&gt; ausgeschwat.</p>'; // C-C
			thecontentrule+='<h2>Remark</h2><p class="remark">Dëst gëllt just, wann nom &lt;c&gt; en &lt;i&gt; oder &lt;e&gt; kënnt</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-CH' : thecontentbox="<h1>Den <span class=\"bold\">ch</span> an der Mëtt oder um Enn vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Bu<span class=\"bold\">ch</span><br>La<span class=\"bold\">ch<br></span>laa<span class=\"bold\">ch</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-b');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ch</h1>';
			thecontentrule+='<p class="rule check">No engem &lt;a&gt;, &lt;o&gt; oder &lt;u&gt; gëtt den &lt;ch&gt; an der Mëtt oder um Enn vum Wuert ëmmer d\'selwecht ausgeschwat.</p>';
			thecontentrule+='<p class="rule check">No engem &lt;i&gt;, &lt;e&gt;, &lt;ee&gt; oder &lt;é&gt; gëtt den &lt;ch&gt; ëmmer d\'selwecht ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Lauschtert den Audio.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-CK' : thecontentbox="<h1>Den <span class=\"bold\">ck</span> an der Mëtt oder um Enn vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>zé<span class=\"bold\">ck</span>en<br>schmo<span class=\"bold\">ck</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c-ck');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ck</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ck&gt; gëtt ëmmer wéi en &lt;k&gt; ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'D' : thecontentbox="<h1>Den <span class=\"bold\">d</span> Vir an an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">d</span>af<br><span class=\"bold\">D</span>rot<br>bero<span class=\"bold\">d</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu (-)d-</h1>';
			thecontentrule+='<p class="rule check">Vir an an der Mëtt vum Wuert gëtt den &lt;d&gt; mëll ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-D' : thecontentbox="<h1>Den <span class=\"bold\">d</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Schue<span class=\"bold\">d</span><br>Gra<span class=\"bold\">d</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-d');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -d</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;d&gt; um Enn vun engem Wuert, gëtt en haart (d.h. wéi en &lt;t&gt;) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt den &lt;d&gt; nees mëll ausgeschwat: Grad &gt; Graden.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-DD' : thecontentbox="<h1>Den <span class=\"bold\">dd</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Schma<span class=\"bold\">dd</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-dd');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -dd</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;dd&gt; um Enn vun engem Wuert, gëtt en haart (d.h. wéi en &lt;t&gt;) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt den &lt;dd&gt; nees mëll ausgeschwat: Lidd &gt; Lidder.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-DD2' : thecontentbox="<h1><span class=\"bold\">dd</span> an der Mëtt vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Klu<span class=\"bold\">dd</span>er<br>fi<span class=\"bold\">dd</span>eren<br>kri<span class=\"bold\">dd</span>elen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-dd2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -dd-</h1>';
			thecontentrule+='<p class="rule check">An der Mëtt vum Wuert ass den &lt;dd&gt; ëmmer mëll.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'E' : thecontentbox="<h1>Den kuerzen <span class=\"bold\">e</span></h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>P<span class=\"bold\">e</span>ch<br>fr<span class=\"bold\">e</span>ch<br>k<span class=\"bold\">e</span>ng<br>Str<span class=\"bold\">e</span>nz</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e');\">&nbsp;</p></div></div><h1>Den laangen <span class=\"bold\">e</span></h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Z<span class=\"bold\">e</span>bra<br>Alphab<span class=\"bold\">e</span>t<br>M<span class=\"bold\">e</span>ter</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>kuerzen e</h1><p class="rule check">Den &lt;e&gt; gëtt kuerz geschwat a kritt keen extrat Zeechen.</p>';
			thecontentrule+='<h1>laangen e</h1><p class="rule check">Den &lt;e&gt; gëtt laang geschwat, awer just &lt;e&gt; geschriwwen.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op ortho.lod.lu fannt Dir méi Informatiounen iwwert d‘Schreifweis vum &lt;e&gt; an iwwert d‘Friemwierder.</p>';
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'E-EE' : thecontentbox="<h1>Buchstaaf ee</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Streech<br>nee<br>Reen<br>Billjee</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ee</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ee&gt; gëtt ëmmer laang geschwat.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-Ë' : thecontentbox="<h1>Buchstaaf ë</h1>";
			thecontentrule='<h1>Regel ë</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ë&gt; gëtt kuerz geschwat an dierf am Prinzip just an enger betounter Silb stoen.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">D‘Wierder &lt;mech&gt;, &lt;dech&gt;, &lt;sech&gt; an &lt;net&gt; kréie keen &lt;ë&gt;, och wann se d‘selwecht kléngen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-Ë2' : thecontentbox="<h1>Buchstaaf (e)ë(e)</h1>";
			thecontentrule='<h1>Regel ë</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ë&gt; gëtt agesat, wann zwee oder dräi &lt;e&gt;en hannereneestinn, déi ënnerschiddlech geschwat ginn, wéi bei Ee → Eeër.</p>';

			result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-É' : thecontentbox="<h1>Buchstaaf é</h1>";
			thecontentrule='<h1>Regel é</h1>';
			thecontentrule+='<p class="rule check">Den &lt;é&gt;, dee kuerz geschwat gëtt, steet an der Mëtt vum Wuert virun &lt;ng&gt;, &lt;nk&gt;, &lt;ck&gt;, &lt;ch&gt;, &lt;chs&gt; an &lt;x&gt;.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">D‘Wierder &lt;meng&gt;, &lt;deng&gt;, &lt;seng&gt; kréie keen &lt;é&gt;, och wann se d‘selwecht kléngen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-É2' : thecontentbox="<h1>Buchstaaf é(e)</h1>";
			thecontentrule='<h1>Regel é</h1>';
			thecontentrule+='<p class="rule check">Den &lt;é(e)&gt; um Enn vum Wuert ass laang an ëmmer aus dem Franséische geléint.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op ortho.lod.lu fannt Dir méi Informatiounen iwwert d‘Schreifweis vum &lt;é(e)&gt; an iwwert d‘Friemwierder.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-È' : thecontentbox="<h1>Buchstaaf è</h1>";
			thecontentrule='<h1>Regel è</h1>';
			thecontentrule+='<p class="rule check">Den &lt;è&gt; ass ëmmer aus dem Franséische geléint.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op ortho.lod.lu fannt Dir méi Informatiounen iwwert d‘Schreifweis vum &lt;è&gt; an iwwert d‘Friemwierder.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
				case 'E-IE' : thecontentbox="<h1>Buchstaaf ie</h1>";
			thecontentrule='<h1>Regel ie</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ie&gt; ass eng Vokalkoppel a kann net getrennt ginn. Den &lt;e&gt; kritt keen Trema.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
				case 'E-UE' : thecontentbox="<h1>Buchstaaf ue</h1>";
			thecontentrule='<h1>Regel ue</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ue&gt; ass eng Vokalkoppel a kann net getrennt ginn. Den &lt;e&gt; kritt keen Trema.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-IER' : thecontentbox="<h1>Buchstaaf ier</h1>";
			thecontentrule='<h1>Regel ier</h1>';
			thecontentrule+='<p class="rule check">Och wann een den &lt;r&gt; net héiert, gëtt &lt;ier&gt; geschriwwen, wann d\'Wuert aus dem Däitschen ofgeleet ass an do och en &lt;r&gt; huet.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op ortho.lod.lu fannt Dir méi Informatiounen iwwert d‘Schreifweis vum &lt;ir&gt;.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-UER' : thecontentbox="<h1>Buchstaaf uer</h1>";
			thecontentrule='<h1>Regel uer</h1>';
			thecontentrule+='<p class="rule check">Och wann een den &lt;r&gt; net héiert, gëtt &lt;uer&gt; geschriwwen, wann d\'Wuert aus dem Däitschen ofgeleet ass an do och en &lt;r&gt; huet.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op ortho.lod.lu fannt Dir méi Informatiounen iwwert d‘Schreifweis vum &lt;ur&gt;.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-ÄER' : thecontentbox="<h1>Buchstaaf äer</h1>";
			thecontentrule='<h1>Regel äer</h1>';
			thecontentrule+='<p class="rule check">Bei &lt;äer&gt; kënnt ëmmer en &lt;e&gt; tëschent den &lt;ä&gt; an den &lt;r&gt;, wann hannert dem &lt;r&gt; nach op d’mannst ee weidere Konsonant steet.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op ortho.lod.lu fannt Dir méi Informatiounen iwwert d‘Schreifweis vum &lt;är&gt;.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-ÉI' : thecontentbox="<h1>Buchstaaf éi</h1>";
			thecontentrule='<h1>Regel éi</h1>';
			thecontentrule+='<p class="rule check">Den &lt;éi&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-EI' : thecontentbox="<h1>Buchstaaf ei</h1>";
			thecontentrule='<h1>Regel ei</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ei&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-EU' : thecontentbox="<h1>Buchstaaf eu</h1>";
			thecontentrule='<h1>Regel è</h1>';
			thecontentrule+='<p class="rule check">Den &lt;eu&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'F' : thecontentbox="<h1>Buchstaaf F</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>fäerten<br>schlofen<br>Af</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('f');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu f</h1>';
			thecontentrule+='<p class="rule check">Den &lt;f&gt; gëtt ëmmer d’selwecht ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'F-FF' : thecontentbox="<h1>Buchstaaf F</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Beruff<br>Affiche<br>Haff</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('f-ff');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu ff</h1>';
				thecontentrule+='<p class="rule check">Den &lt;ff&gt; gëtt ëmmer d\'selwecht ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">De Vokal virum &lt;ff&gt; gëtt ëmmer kuerz ausgeschwat.</p>';				
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'G' : thecontentbox="<h1>Buchstaaf G</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Gittar<br>Frigo</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu (-)g-</h1>';
			thecontentrule+='<p class="rule check">Den &lt;g&gt; gëtt am Ufank an an der Mëtt vum Wuert mëll ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'G-G' : thecontentbox="<h1>Buchstaaf -g an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Spigel<br>Igel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g-</h1>';
				thecontentrule+='<p class="rule check">Den &lt;g&gt; gëtt an der Mëtt vum Wuert wéi e mëllen &lt;ch&gt; ausgeschwat.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G2' : thecontentbox="<h1>Buchstaaf -g um Enn vun engem Wuert an wei en k ausgeschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>vag<br>Fig</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g2');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g</h1>';
				thecontentrule+='<p class="rule check">Steet den &lt;g&gt; um Enn vun engem Wuert, gëtt e meeschtens haart (d.h. wéi en &lt;k&gt;) ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt de Buschtaf nees mëll ausgeschwat: Fig &gt; Figen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G3' : thecontentbox="<h1>Buchstaaf -g um Enn vun engem Wuert an wei en ch ausgeschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Beleeg<br>Bierg</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g3');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g</h1>';
				thecontentrule+='<p class="rule check">Steet den &lt;g&gt; um Enn vun engem Wuert, gëtt en wéi en &lt;ch&gt; ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt den &lt;g&gt; wéi e mëllen &lt;ch&gt; ausgeschwat: Bierg &gt; Bierger.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G4' : thecontentbox="<h1>Buchstaaf -g um Enn vun engem Wuert an hannen an der Strass geschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Lag<br>Dag<br>klug<br>Katalog</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g4');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g</h1>';
				thecontentrule+='<p class="rule check">Steet den &lt;g&gt; um Enn vun engem Wuert, gëtt en hannen an der Strass geschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Dëst gëllt just, wa virdrun en &lt;a&gt;, &lt;o&gt; oder &lt;u&gt; steet.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-GG' : thecontentbox="<h1>Buchstaaf gg an der Mëtt vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Waggon<br>Bagger</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-gg');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -gg-</h1>';
				thecontentrule+='<p class="rule check">Den &lt;gg&gt; gëtt an der Mëtt vum Wuert mëll ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;gg&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';				
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-NG' : thecontentbox="<h1>Buchstaaf -ng</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zeitung<br>geléngen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-ng');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -ng(-)</h1>';
				thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;ng&gt; gëtt wéi ee Laut gelies a kann net getrennt ginn.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-NK' : thecontentbox="<h1>Buchstaaf -nk</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>denken<br>Gank</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-nk');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -nk(-)</h1>';
				thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;nk&gt; gëtt gelies wéi &lt;ng&gt; an &lt;k&gt; hannerteneen a kann net getrennt ginn.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'H' : thecontentbox="<h1>Buchstaaf H</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Hoer<br>behuelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('h');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu h</h1>';
			thecontentrule+='<p class="rule check">Vir an an der Mëtt vum Wuert gëtt den &lt;h&gt; als Hauchlaut geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Den &lt;h&gt; gëtt am Lëtzebuergeschen net benotzt, fir e Vokal méi laang ze maachen: Drot.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'I' : thecontentbox="<h1>Buchstaaf i virun engem Konsonant</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zil<br>nimols</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i');\">&nbsp;</p></div></div><h1>Buchstaaf i virun zwee oder méi Konsonanten</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>dicht<br>Insel<br>Spill</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu i</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;i&gt; viru just engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den &lt;i&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Den &lt;ie&gt; gëtt am Lëtzebuergeschen net benotzt, fir den &lt;i&gt; méi laang ze maachen.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'I-IE' : thecontentbox="<h1>Buchstaaf ie</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>friem<br>Hiewel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i-ie');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ie</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ie&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'I-II' : thecontentbox="<h1>Buchstaaf ii</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kiischt<br>Biischt<br>Tiitchen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i-ii');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ii</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ii&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'J' : thecontentbox="<h1>Buchstaaf J</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Jackett<br>Pijen<br>jiipsen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('j');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (-)j</h1>';
			thecontentrule+='<p class="rule check">Den &lt;j&gt; gëtt wéi e Konsonant ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Eng Schreiwung mat &lt;jh&gt; gëtt et am Lëtzebuergeschen net.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'J-J' : thecontentbox="<h1>Buchstaaf j</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Joer<br>Jughurt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('j-j');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu j</h1>';
			thecontentrule+='<p class="rule check">Den &lt;j&gt; gëtt wéi en &lt;i&gt; ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'K' : thecontentbox="<h1>Buchstaaf K</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kinnek<br>Klass</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('k');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu (-)k(-)</h1>';
			thecontentrule+='<p class="rule check">Den &lt;k&gt; gëtt ëmmer d’selwecht ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'K-CK' : thecontentbox="<h1>Buchstaaf ck</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zack<br>kucken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('k-ck');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ck(-)</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ck&gt; gëtt an der Mëtt an um Enn vum Wuert haart ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;ck&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'L' : thecontentbox="<h1>Buchstaaf L</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>laachen<br>kal<br>molen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('l');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu l</h1>';
			thecontentrule+='<p class="rule check">Den &lt;l&gt; gëtt ëmmer d\'selwecht geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'L-LL' : thecontentbox="<h1>Buchstaaf ll</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>follegen<br>Mall</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('l-ll');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ll(-)</h1>';
			thecontentrule+='<p class="rule check">Den &lt;l&gt; gëtt ëmmer d\'selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;ll&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'M' : thecontentbox="<h1>Buchstaaf M</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Dram<br>Mëllech</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('m');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu m</h1>';
			thecontentrule+='<p class="rule check">Den &lt;m&gt; gëtt ëmmer d\'selwecht geschwat.</p>';		
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'M-MM' : thecontentbox="<h1>Buchstaaf mm</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>klammen<br>Mamm</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('m-mm');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -mm(-)</h1>';
			thecontentrule+='<p class="rule check">Den &lt;mm&gt; gëtt ëmmer d\'selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;mm&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';	
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'N' : thecontentbox="<h1>Buchstaaf N</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>näischt<br>rosen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu n</h1>';
			thecontentrule+='<p class="rule check">Den &lt;n&gt; gëtt ëmmer d‘selwecht geschwat.</p>';
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-NN' : thecontentbox="<h1>Buchstaaf nn</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kanner<br>dënn</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-nn');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu nn</h1>';
			thecontentrule+='<p class="rule check">Den &lt;nn&gt; gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;nn&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-N' : thecontentbox="<h1>(n) * fällt ewech</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Dammeschong</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-n');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (n) * fält ewech</h1>';
			thecontentrule+='<p class="rule check">Wann den &lt;n&gt; viru verschiddenen Ufanksbuschtawen net geschwat gëtt, da gëtt en och net geschriwwen. Dat gëllt och bei zesummegesate Wierder. </p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-N2' : thecontentbox="<h1>(n) * bleift stoën</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>ären Auto<br>Gromperenzalot</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-n2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (n) * bleift stoen</h1>';
			thecontentrule+='<p class="rule check">Den &lt;n&gt; bleift stoe virun all de Vokalen &lt;a, e, i, o, u, ä, ë, é, ö, ü,(y)&gt; a virun de Konsonanten: &lt;d, h, n, t, z&gt;. Den &lt;n&gt; bleift och stoen um Enn vun Eegennimm a virun engem Sazzeechen &lt;. , ; : )&gt;.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'O' : thecontentbox="<h1>Buchstaaf O</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>kromm</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o');\">&nbsp;</p></div></div><h1>Buchstaaf O</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Drot<br>schlofen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu o</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;o&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den &lt;o&gt; viru just engem Konsonant, gëtt e laang geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-OO' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>gekroomt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-oo');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu oo</h1>';
			thecontentrule+='<p class="rule check">Den &lt;oo&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-OU' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>soueren<br>wou<br>Kou</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-ou');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ou</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ou&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-Ö' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>blöd<br>Fön</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-ö');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ö</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;ö&gt; viru just engem Konsonant, gëtt e laang geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-ÖÖ' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>geföönt<br>blöödsten</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-öö');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu öö</h1>';
			thecontentrule+='<p class="rule check">Den &lt;öö&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'P' : thecontentbox="<h1>Buchstaaf P</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Trap<br>Poul<br>klapen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu (-)p(-)</h1>';
			thecontentrule+='<p class="rule check">Den &lt;p&gt; gëtt ëmmer d‘selwecht geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'P-PP' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zopp<br>klappen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p-pp');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu pp</h1>';
			thecontentrule+='<p class="rule check">Den &lt;pp&gt; gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;pp&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'P-PF' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zipfel<br>Pflicht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p-pf');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (-)pf-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;pf&gt; gëtt wéi &lt;p&gt; an &lt;f&gt; geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Q' : thecontentbox="<h1>Buchstaaf Q</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>queesch<br>quaken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('q');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu qu-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;qu&gt; gëtt wéi &lt;k&gt; an &lt;u&gt; geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'R' : thecontentbox="<h1>Buchstaaf R</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>richteg<br>Kraaft<br>raschten</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu r</h1>';
			thecontentrule+='<p class="rule check">Den &lt;r&gt; gëtt am Ufank an an der Mëtt vum Wuert an der Strass geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Lauschtert den Audio.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-R' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Stär<br>Bier<br>Kanner</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-r');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -r</h1>';
			thecontentrule+='<p class="rule check">Den &lt;r&gt; gëtt no engem Vokal um Enn vun engem Wuert wéi e Vokal geschwat.</p>';		
			thecontentrule+='<h2>Remark</h2><p class="remark">Dësen &lt;r&gt; gëtt net ëmmer d‘selwecht ausgeschwat.</p>';				
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-R2' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Hierscht<br>Wierder<br>Wuert</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-r2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -r-</h1>';
			thecontentrule+='<p class="rule check">Den &lt;r&gt; gëtt geschriwwen, mee net geschwat.</p>';		
			thecontentrule+='<h2>Remark</h2><p class="remark">Dësen &lt;r&gt; gëtt geschriwwen, wann dat däitscht Parallelwuert och en &lt;r&gt; huet: &lt;Wierder&gt; (Wörter), awer &lt;Wieder&gt; (Wetter)</p>';	
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-RR' : thecontentbox="<h1>Buchstaaf s</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Terrain<br>Barrikaden<br>Furri</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-rr');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -rr-</h1>';
			thecontentrule+='<p class="rule check">Den &lt;rr&gt; gëtt an der Mëtt vum Wuert wéi en &lt;r&gt; geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'S' : thecontentbox="<h1>Buchstaaf S</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Saachen<br>Saier<br>Keesen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s');\">&nbsp;</p></div></div><h1>Buchstaaf S</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>super<br>Samba<br>Sylvester</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu s</h1>';
			thecontentrule+='<p class="rule check">Den &lt;s&gt; gëtt am Ufank an an der Mëtt vum Wuert mëll geschwat.</p>';			
			thecontentrule+='<p class="rule check">Den &lt;s&gt; gëtt am Ufank vum Wuert schaarf ausgeschwat.</p>';	
			thecontentrule+='<h2>Remark</h2><p class="remark">Dësen &lt;s&gt; kann am Ufank vum Wuert och mëll ausgeschwat ginn.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-S' : thecontentbox="<h1>Buchstaaf s</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Rees</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-s');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -s</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;s&gt; um Enn vun engem Wuert, gëtt en haart (d.h. wéi &lt;ss&gt;) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt de Buschtaf nees mëll ausgeschwat: Rees &gt; Reesen.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-ST' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Küst<br>bastelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-st');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -st(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;st&gt; gëtt an der Mëtt an um Enn vum Wuert wéi en &lt;s&gt; an en &lt;t&gt; geschwat a kann net getrennt ginn.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-ST2' : thecontentbox="<h1>Buchstaaf st-</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>staark<br>Stiwwel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-st2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu st-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;st&gt; gëtt am Ufank vum Wuert wéi en &lt;sch&gt; an en &lt;t&gt; geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SP' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Knosp<br>Respekt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sp');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -sp(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;sp&gt; gëtt an der Mëtt an um Enn vum Wuert wéi en &lt;s&gt; an en &lt;p&gt; geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SP2' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>späizen<br>Speck</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sp2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu sp-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;sp&gt; gëtt am Ufank vum Wuert wéi en &lt;sch&gt; an en &lt;p&gt; geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SCH' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Këscht<br>schéin<br>raschelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sch');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (-)sch(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;sch&gt; gëtt wéi ee Laut geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SS' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zooss<br>duuss</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-ss');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ss(-)</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ss&gt; gëtt ëmmer da benotzt, wann et en däitscht Parallelwuert mat &lt;ss&gt;, &lt;chs&gt;, &lt;z&gt; oder &lt;ß&gt; gëtt.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Den &lt;ß&gt; gëtt et am Lëtzebuergeschen net.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'T' : thecontentbox="<h1>Buchstaaf T</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Blat<br>Trap</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu t</h1>';
			thecontentrule+='<p class="rule check">Den &lt;t&gt; gëtt ëmmer d‘selwecht geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'T-TZ' : thecontentbox="<h1>Buchstaaf tz</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>botzen<br>fatzeg<br>Datz</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('t-tz');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -tz(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;tz&gt; gëtt an der Mëtt an um Enn vum Wuert wéi &lt;t&gt; an &lt;s&gt; geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;tz&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'T-TT' : thecontentbox="<h1>Buchstaaf tt</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Ketten<br>platt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('t-tt');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu tt</h1>';
			thecontentrule+='<p class="rule check">Den &lt;tt&gt; gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;tt&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'U' : thecontentbox="<h1>Buchstaaf U</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Nummer<br>Buschtaf</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u');\">&nbsp;</p></div></div><h1>Buchstaaf U</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Trubel<br>Tut</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu u</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;u&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';			
			thecontentrule+='<p class="rule check">Steet den &lt;u&gt; viru just engem Konsonant, gëtt e laang geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-UU' : thecontentbox="<h1>Buchstaaf uu</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Duuscht<br>duuss</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-uu');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu uu</h1>';
			thecontentrule+='<p class="rule check">Den &lt;uu&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-UE' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Hues<br>Kuel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ue');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ue</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ue&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-OU' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Informatioun<br>Boun<br>zou</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ou');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ou</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ou&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-Ü' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Bün<br>bäifügen<br>Gerücht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ü');\">&nbsp;</p></div></div><h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Küst<br>flüsteren<br>Gerücht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ü2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ü</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;ü&gt; viru just engem Konsonant, gëtt e laang geschwat.</p>';		
			thecontentrule+='<p class="rule check">Steet den &lt;ü&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';		
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-ÜÜ' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>geüübt<br>bäigefüügt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-üü');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu üü</h1>';
			thecontentrule+='<p class="rule check">Den &lt;üü&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'V' : thecontentbox="<h1>Buchstaaf V</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Villchen<br>verléieren<br>viischt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('v');\">&nbsp;</p></div></div><h1>Buchstaaf V</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Vanill<br>Vas<br>Vakanz<br>Bravour<br>Revisioun</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('v2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu v</h1>';
			thecontentrule+='<p class="rule check">Den &lt;v&gt; gëtt am Ufank vum Wuert wéi en &lt;f&gt; ausgeschwat.</p>';			
			thecontentrule+='<p class="rule check">Den &lt;v&gt; gëtt am Ufank an an der Mëtt vum Wuert wéi en &lt;w&gt; ausgeschwat.</p>';		
			thecontentrule+='<h2>Remark</h2><p class="remark">Op ortho.lod.lu fannt Dir méi Informatiounen iwwert d‘Schreifweis vun de Friemwierder.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'V-V' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>brav<br>Oliv</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -v</h1>';
			thecontentrule+='<p class="rule check">Den &lt;v&gt; gëtt um Enn vum Wuert wéi en &lt;f&gt; ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt de Buschtaf nees mëll ausgeschwat: Oliv &gt; Oliven.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'W' : thecontentbox="<h1>Buchstaaf W</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>waarm<br>wibbelen<br>awer<br>Léiw</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu w</h1>';
			thecontentrule+='<p class="rule check">Den &lt;w&gt; gëtt ëmmer d‘selwecht geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'W-WW' : thecontentbox="<h1>Buchstaaf ww</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Miwwel<br>kniwwelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ww-</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ww&gt; gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun &lt;ww&gt; gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'X' : thecontentbox="<h1>Buchstaaf X</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Mixer<br>Hex<br>Xylophon</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('x');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu x</h1>';
			thecontentrule+='<p class="rule check">Den &lt;x&gt; gëtt wéi &lt;k&gt; an &lt;s&gt; geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Y' : thecontentbox="<h1>Buchstaaf Y</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>trendy<br>Psychologie</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('y');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu y</h1>';
			thecontentrule+='<p class="rule check">Den &lt;y&gt; gëtt wéi en &lt;i&gt; geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Z' : thecontentbox="<h1>Buchstaaf Z</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kaz<br>Zalot<br>verzielen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('z');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu z</h1>';
			thecontentrule+='<p class="rule check">Den &lt;z&gt; gëtt wéi &lt;t&gt; an &lt;s&gt; geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'Z-TZ' : thecontentbox="<h1>Buchstaaf tz</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>motzen<br>Datz<br>Witz</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('z-tz');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zum -tz(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp &lt;tz&gt; gëtt an der Mëtt an um Enn vum Wuert wéi &lt;t&gt; an &lt;s&gt; geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		default : thecontentbox="<h1>Lëtzebuergesch<br />fir an d'Boxentäsch</h1><h2>Dreck op e Buschtaaf fir déi entspriechend Wierder, souwie och d'Reegelen ugewissen ze kréien.</h2>";
			result='start';
			$$('#thesubnavbar').addClass('hide-tabbar');
	}
	// console.log('selector: '+contentid);
	$$('#thecontent').html(thecontentbox);
	$$('#thecontentrule').html(thecontentrule);
	if (result==='start')
	{
		//Startup
		// console.log('startup initiated');
		mySwiperSub.removeAllSlides();
		$$('#swiper-sub').addClass('hidesub');
	}
}

function jumpsel(jp,hs,subsel,cont)
{
	result=cont.charCodeAt(0)+' '+cont;
	jumpto(jp,hs,subsel);
	return result;
}