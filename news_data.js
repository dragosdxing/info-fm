const NEWS_DB = [
    {
        date: "14 ianuarie 2026",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Love Radio"</span> a început să emită în Telenești, pe frecvența <span class="freq-style">94,4 MHz</span> și Hîncești pe frecvența <span class="freq-style">97,4 MHz</span>. Ambele emit cu RDS [LOVE_FM_] și PI [1435].`
    },
    {
        date: "5 ianuarie 2026",
        country: "MD",
        content: `Conform grupului <span class="highlight">"MDtvRADIO"</span>, postul de radio <span class="highlight">"Radio Moldova"</span> a început să emită în Iepureni (raionul Cantemir) pe <span class="freq-style">100,2 MHz</span>. Frecvențele <span class="freq-style">91,4 MHz</span> Mingir și <span class="freq-style">96,0 MHz</span> Cărpineni încă nu sunt operaționale.`
    },
    {
        date: "1 ianuarie 2026",
        country: "RO",
        content: `Postul de radio <span class="highlight">"One World Radio"</span> a fost înlocuit cu <span class="highlight">Vibe FM</span> ce are ca format muzică românească, solicitarea de schimbare a licenței a avut loc pe 16 decembrie 2025.`
    },
    {
        date: "23 decembrie 2025",
        country: "MD",
        content: `Consiliul Audiovizual a propus retragerea a două licențe radio, respectiv <span class="highlight">"Diaspora FM"</span> din Sîngerei - <span class="freq-style">93,1 MHz</span> (a retransmis postul de radio "Radio Dar") și <span class="highlight">"Radio Noroc"</span> din Glodeni - <span class="freq-style">102,5 MHz</span>, pe motiv că frecvențele respective nu au funcționat pe parcursul perioadelor de verificare, fapt confirmat și de datele furnizate de ANRCETI.`
    },
    {
        date: "21 decembrie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Diaspora FM"</span> a revenit în eter pe frecvența <span class="freq-style">97,8 MHz</span> în Bălți, după o lungă absență a sa.`
    },
    {
        date: "15 decembrie 2025",
        country: "RO",
        content: `În Târgoviște au început să emită noile licențe <span class="freq-style">88,7 MHz</span> <span class="highlight">Radio Guerrilla</span> și <span class="freq-style">90,5 MHz</span> <span class="highlight">Radio Vocea Evangheliei</span>, ambele cu RDS.`
    },
    {
        date: "15 decembrie 2025",
        country: "RO",
        content: `A inceput sa emita in Bucuresti noul post de radio <span class="highlight">"Urban FM"</span> pe frecventa <span class="freq-style">92,7 MHz</span>. Postul emite relativ de pe acelasi amplasament cu postul <span class="highlight">"Gold FM"</span> de pe <span class="freq-style">96,9 MHz</span>, mai exact de pe Strada Lujerului. Postul emite cu RDS [Urban_FM] si PI [E7A3].`
    },
    {
        date: "5 noiembrie 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">„Smile FM”</span> a început să emită în Vaslui pe <span class="freq-style">89,7 MHz</span>. Postul emite pe același amplasament cu <span class="freq-style">95,2 MHz</span> <span class="highlight">Radio Guerrilla</span> și <span class="freq-style">106,7 MHz</span> <span class="highlight">Radio Trinitas</span>.`
    },
    {
        date: "5 noiembrie 2025",
        country: "RO",
        content: `În urma ședinței CNA, au fost retrase două licențe radio, și mai exact <span class="highlight">„Sport Total FM”</span> ce a emis în Victoria - <span class="freq-style">92,8 MHz</span> și <span class="highlight">„Radio Tecuci”</span> ce a emis în Tecuci pe <span class="freq-style">106,9 MHz</span>.`
    },
    {
        date: "30 octombrie 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">„Radio Guerrilla”</span> a început să emită în Târgoviște pe <span class="freq-style">88,7 MHz</span>.`
    },
    {
        date: "17 octombrie 2025",
        country: "MD",
        content: `În urma ședinței CA, s-au acordat 10 frecvențe radio din cele 28 scoase la concurs, astfel: postul <span class="highlight">„Radio 7”</span> a câștigat Rezina - <span class="freq-style">89,4 MHz</span>, Fălești - <span class="freq-style">93,4 MHz</span>, Taraclia - <span class="freq-style">97,0 MHz</span>, Ceadîr-Lunga - <span class="freq-style">104,2 MHz</span>, Soroca - <span class="freq-style">104,6 MHz</span> și Florești - <span class="freq-style">106,0 MHz</span>; <span class="highlight">„Love Radio”</span> a câștigat Telenești - <span class="freq-style">94,4 MHz</span> și Hîncești - <span class="freq-style">97,4 MHz</span>; <span class="highlight">„Vintage FM”</span> a câștigat fosta frecvență a postului „Radio ZUM 2”, mai exact Chișinău - <span class="freq-style">93,3 MHz</span> și <span class="highlight">„Radio Vocea Speranței”</span> a câștigat frecvența din Căușeni - <span class="freq-style">104,8 MHz</span>.`
    },
    {
        date: "23 septembrie 2025",
        country: "RO",
        content: `Au început să emită <span class="highlight">"Sweet FM"</span> în Sibiu pe <span class="freq-style">90,4 MHz</span>, respectiv <span class="highlight">"Magic FM"</span> în Focșani pe <span class="freq-style">99,3 MHz</span>. De menționat că „Magic FM” Focșani a pornit cu RDS: [MAGIC_FM][99.3____] și PI [E210] și emite pe același sistem radiant cu „Kiss FM” de pe <span class="freq-style">88,7 MHz</span>.`
    },
    {
        date: "20 septembrie 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Trinitas"</span> a început să emită în Bistrița (releul Heniu) pe frecvența <span class="freq-style">93,4 MHz</span>.`
    },
    {
        date: "19 august 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">„Sweet FM”</span> ce a emis în Murfatlar pe <span class="freq-style">95,9 MHz</span> s-a mutat pe releul din Techirghiol pe <span class="freq-style">95,8 MHz</span> și cu PAR de 500W.`
    },
    {
        date: "3 iulie 2025",
        country: "RO",
        content: `Astăzi s-a desfășurat un nou concurs radio, rezultatele sunt următoarele: Alba Iulia - <span class="freq-style">100,5 MHz</span> (Sweet FM), Arad - <span class="freq-style">90,6 MHz</span> (Rock FM), Baia Mare - <span class="freq-style">92,8 MHz</span> (Maramureș FM), Bechet - <span class="freq-style">96,8 MHz</span> (Hit FM), Bistrița / Heniu - <span class="freq-style">93,4 MHz</span> (R.Trinitas), Blaj - <span class="freq-style">105,2 MHz</span> (Radio Someș), Brad - <span class="freq-style">87,7 MHz</span> (Alt FM), București - <span class="freq-style">90,2 MHz</span> (Nostalgia Radio) - <span class="freq-style">92,7 MHz</span> (Urban FM) - <span class="freq-style">107,3 MHz</span> (Euronews Radio), Caransebeș - <span class="freq-style">99,1 MHz</span> (Virgin Radio), Cluj Napoca - <span class="freq-style">92,8 MHz</span> (Radio Dor FM), Costești - <span class="freq-style">94,8 MHz</span> (Radio Someș), Câmpina - <span class="freq-style">103,2 MHz</span> (R.Guerrilla), Câmpulung - <span class="freq-style">88,4 MHz</span> (Pro FM), Deva - <span class="freq-style">93,5 MHz</span> (M1 FM) - <span class="freq-style">98,8 MHz</span> (Sport Total FM), Dorohoi - <span class="freq-style">93,9 MHz</span> (Radio Someș), Focșani - <span class="freq-style">99,3 MHz</span> (Magic FM), Făget / Coșevița - <span class="freq-style">100,9 MHz</span> (Europa FM), Hațeg - <span class="freq-style">89,8 MHz</span> (Radio Q), Horezu - <span class="freq-style">95,1 MHz</span> (Hit FM), Huedin - <span class="freq-style">89,2 MHz</span> (Radio Dor FM), Hunedoara - <span class="freq-style">92,1 MHz</span> (Kiss FM), Huși - <span class="freq-style">97,6 MHz</span> (Smile FM), Iași - <span class="freq-style">97,4 MHz</span> (Ercis FM), Mahmudia - <span class="freq-style">90,9 MHz</span> (Europa FM), Medgidia - <span class="freq-style">93,5 MHz</span> (Nostalgia Radio), Mediaș - <span class="freq-style">95,9 MHz</span> (R.Vocea Speranței), Moldova Nouă - <span class="freq-style">107,8 MHz</span> (Europa FM), Nehoiu - <span class="freq-style">88,2 MHz</span> (Hit FM), Odorheiu Secuiesc - <span class="freq-style">90,9 MHz</span> (City Radio), Onești - <span class="freq-style">92,7 MHz</span> (Ercis FM), Orăștie - <span class="freq-style">92,9 MHz</span> (Melody FM), Pașcani - <span class="freq-style">102,7 MHz</span> (Kiss FM), Petroșani - <span class="freq-style">105,9 MHz</span> (Radio ZU), Piatra Neamț - <span class="freq-style">88,6 MHz</span> (Radio M Plus), Ploiești - <span class="freq-style">95,9 MHz</span> (Focus FM), Rupea - <span class="freq-style">90,3 MHz</span> (Radio Someș), Râmnicu Vâlcea / Cozia - <span class="freq-style">88,6 MHz</span> (Itsy Bitsy), Sibiu - <span class="freq-style">90,4 MHz</span> (Sweet FM) - <span class="freq-style">96,1 MHz</span> (Radio Galaxy), Soveja - <span class="freq-style">88,2 MHz</span> (R.Vocea Evangheliei), Timișoara - <span class="freq-style">89,7 MHz</span> (Radio Nova FM), Turda - <span class="freq-style">107,7 MHz</span> (Radio Dor FM), Turnu Măgurele - <span class="freq-style">90,7 MHz</span> (Digi FM), Târgoviște - <span class="freq-style">88,7 MHz</span> (R.Guerrilla) - <span class="freq-style">90,5 MHz</span> (R.Vocea Evangheliei), Vaslui - <span class="freq-style">89,7 MHz</span> (Smile FM), Văratec - <span class="freq-style">98,1 MHz</span> (Maramureș FM), Zalău - <span class="freq-style">90,8 MHz</span> (Power FM) și Zărnești - <span class="freq-style">88,2 MHz</span> (Europa FM). Frecvențele 99,8 MHz Greci, 107,0 MHz Sulina, 105,4 MHz Toplița și 100,6 MHz Tg.Mureș nu au fost atribuite.`
    },
    {
        date: "2 iulie 2025",
        country: "MD",
        content: `Noul post de radio <span class="highlight">"Radio Moldova Comrat"</span> a început să emită în Comrat pe <span class="freq-style">105,6 MHz</span>. De menționat că deține și frecvența <span class="freq-style">104,3 MHz</span> din Vulcănești însă aceasta înca nu emite.`
    },
    {
        date: "17 iunie 2025",
        country: "RO",
        content: `„Societatea Română de Radio (SRR)” a solicitat la CNA acordarea de 15 frecvențe. Însă, postul public nu a primit niciuna dintre aceste frecvențe, deoarece au întârziat cu solicitarea.`
    },
    {
        date: "13 iunie 2025",
        country: "RO",
        content: `CNA a anunțat lista societăților înscrise la concursul de acordare a licențelor audiovizuale pentru 2025. Concursul va începe în data de 30 iunie 2025.`
    },
    {
        date: "1 iunie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">„Ai Noștri”</span>, deja cunoscut în mediul online, a început să emită și în eter, la Chișinău, pe frecvența <span class="freq-style">92,1 MHz</span>. Transmisia are loc din turnul de la Telecentru, pe fosta frecvență a postului „Publika FM”.`
    },
    {
        date: "25 mai 2025",
        country: "MD",
        content: `A pornit în Chișinău pe <span class="freq-style">98,6 MHz</span> postul de radio <span class="highlight">"Realitatea FM"</span>. UPDATE: Emite cu RDS [RLT_FM__] și PI [1019].`
    },
    {
        date: "22 mai 2025",
        country: "RO",
        content: `CNA a aprobat mutarea postului de radio <span class="highlight">"Sweet FM"</span> ce a emis în Murfatlar pe <span class="freq-style">95.9 MHz</span> pe SNR Techirghiol, cu modificarea frecvenței în <span class="freq-style">95.8 MHz</span>, respectiv mutarea lui <span class="highlight">"Radio ZU"</span> Eforie Nord - <span class="freq-style">100,6 MHz</span> la Mangalia.`
    },
    {
        date: "10 mai 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Vocea Speranței"</span> ce a emis în Cobadin pe <span class="freq-style">103,5 MHz</span>, și-a mutat emisia la Constanta pe aceeași frecvență.`
    },
    {
        date: "10 mai 2025",
        country: "MD",
        content: `Timp de câteva ore au început testele de emisie ale postului de radio <span class="highlight">"Radio 7"</span> ce urmează să emită în Comrat pe <span class="freq-style">98,4 MHz</span>.`
    },
    {
        date: "7 mai 2025",
        country: "MD",
        content: `Două posturi din Rep.Moldova au obținut 5 frecvențe noi: <span class="highlight">"Radio Dar"</span> cu frecvențele din Ocnița (<span class="freq-style">91,6 MHz</span>), Edineț (<span class="freq-style">88,7 MHz</span>), Nisporeni (<span class="freq-style">97,0 MHz</span>) și Comrat (<span class="freq-style">98,0 MHz</span>), respectiv <span class="highlight">"Jurnal FM"</span> care a obținut frecvența din Leova (<span class="freq-style">92,1 MHz</span>).`
    },
    {
        date: "28 aprilie 2025",
        country: "MD",
        content: `Au fost pornite două stații noi ale postului <span class="highlight">"Radio Moldova Tineret"</span>: <span class="freq-style">98,1 MHz</span> Șoldănești și <span class="freq-style">101,9 MHz</span> Rezina, și totodată <span class="highlight">"Radio Moldova"</span> din Criuleni (<span class="freq-style">103,0 MHz</span>).`
    },
    {
        date: "21 aprilie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Drochia"</span> și-a încetat emisia, deoarece a expirat licența. De asemenea, în același caz este și <span class="highlight">Radio Pro Mingir</span>, ce a emis în Mingir pe <span class="freq-style">105,1 MHz</span>.`
    },
    {
        date: "18 aprilie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Dar"</span> a început să emită în Vulcănești, pe <span class="freq-style">88,1 MHz</span>, cu RDS [DAR-FM__][TELEFON:][069383693] și PI [103E]. Pe această frecvență a emis fostul Radio Albena.`
    },
    {
        date: "14 aprilie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Plai"</span> a început să emită în Țareuca (Rezina), pe <span class="freq-style">90,3 MHz</span>.`
    },
    {
        date: "14 aprilie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Soroca"</span> pe <span class="freq-style">104,6 MHz</span> și-a încetat emisia, iar frecvența a fost scoasă la concurs.`
    },
    {
        date: "1 aprilie 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Minisat"</span> a fost preluat de către <span class="highlight">Radio ZU</span>, cu aprobarea CNA.`
    },
    {
        date: "25 martie 2025",
        country: "MD",
        content: `Consiliul Audiovizualului a anunțat un nou concurs cu 26 de frecvențe radio.`
    },
    {
        date: "24 martie 2025",
        country: "RO",
        content: `S-a relansat online postul de radio <span class="highlight">"Vibe FM"</span>, de data asta cu muzică românească nostalgică.`
    },
    {
        date: "12 martie 2025",
        country: "MD",
        content: `Consiliul Audiovizualului a acordat 23 de frecvențe radio din cele 48 scoase la concurs.`
    },
    {
        date: "3 martie 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Smart Radio"</span> a încetat să mai emită în București, pe <span class="freq-style">107,3 MHz</span>. Postul va continua să emită doar online.`
    },
    {
        date: "26 februarie 2025",
        country: "MD",
        content: `<span class="highlight">"Hit FM Moldova"</span> a început să emită în Soroca pe <span class="freq-style">103,1 MHz</span> și Rezina pe <span class="freq-style">92,9 MHz</span>.`
    },
    {
        date: "25 februarie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Relax"</span> a început să emită în Vadul lui Vodă pe <span class="freq-style">94,5 MHz</span>.`
    },
    {
        date: "12 februarie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"City FM"</span> a început să emită în Bălți pe <span class="freq-style">103,9 MHz</span> (ex. Russkoe Liubimoe), cu RDS [CITY_FM_].`
    },
    {
        date: "3 februarie 2025",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Kiss FM"</span> a început să emită în Drobeta-Turnu Severin pe <span class="freq-style">101,2 MHz</span>.`
    },
    {
        date: "31 ianuarie 2025",
        country: "MD",
        content: `Posturile de radio <span class="highlight">"R.Albena"</span> din Comrat pe <span class="freq-style">95,9 MHz</span> și <span class="highlight">"R.Roks"</span> din Bălți pe <span class="freq-style">96,1 MHz</span> au fost oprite și introduse în lista concursului radio.`
    },
    {
        date: "30 ianuarie 2025",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Jurnal FM"</span> a început să emită în Cantemir pe <span class="freq-style">102,4 MHz</span>, fără RDS.`
    },
    {
        date: "28 ianuarie 2025",
        country: "MD",
        content: `Posturile de radio <span class="highlight">Rodnoe Radio</span> și <span class="highlight">R.Albena</span> au încetat să mai emită în eter, deoarece nu au fost prelungite licențele acestora.`
    },
    {
        date: "24 ianuarie 2025",
        country: "MD",
        content: `Consiliul Audiovizual a eliberat 48 de frecvențe radio (sursa: unimedia.info).`
    },
    {
        date: "19 noiembrie 2024",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Moldova Tineret"</span> a început să emită în Ștefan-Vodă pe <span class="freq-style">89,8 MHz</span>.`
    },
    {
        date: "18 noiembrie 2024",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Moldova Tineret"</span> a început să emită în Căușeni pe <span class="freq-style">100,3 MHz</span>.`
    },
    {
        date: "12 noiembrie 2024",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Dance FM"</span> a început să emită în Bălți pe <span class="freq-style">89,3 MHz</span>. Postul emite cu RDS [DANCE_FM] și PI 1035.`
    },
    {
        date: "4 noiembrie 2024",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Moldova Tineret"</span> a început să emită în Briceni pe <span class="freq-style">102,6 MHz</span>.`
    },
    {
        date: "10 octombrie 2024",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Tanănana"</span> se retrage definitiv, fie în FM fie online.`
    },
    {
        date: "10 septembrie 2024",
        country: "RO",
        content: `CNA a retras licența postului de radio <span class="highlight">"Național FM"</span> ce a emis în Mahmudia pe <span class="freq-style">90,9 MHz</span>.`
    },
    {
        date: "23 iulie 2024",
        country: "RO",
        content: `A fost retrasă licența postului <span class="highlight">"Național FM"</span> ce a emis în Petroșani (stația Parângul Mare) pe <span class="freq-style">105,9 MHz</span>.`
    },
    {
        date: "11 iunie 2024",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Favorit FM"</span> ce emite în Pașcani pe <span class="freq-style">102,7 MHz</span> a fost retras. De asemenea, CNA a retras licența postului <span class="highlight">"Radio Vâlcea 1"</span> ce a emis în Râmnicu Vâlcea pe <span class="freq-style">88,6 MHz</span>.`
    },
    {
        date: "29 mai 2024",
        country: "RO",
        content: `A fost retrasă licența postului de radio <span class="highlight">"Național FM"</span> ce a emis în Târgu Mureș pe <span class="freq-style">100,6 MHz</span>.`
    },
    {
        date: "8 martie 2024",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Impuls"</span> a început să emită pe frecvențele Radio Boom (Focșani - <span class="freq-style">95,3 MHz</span>, Bârlad - <span class="freq-style">104,9 MHz</span>, Buzău - <span class="freq-style">96,7 MHz</span> și Piatra-Neamț - <span class="freq-style">102,3 MHz</span>).`
    },
    {
        date: "26 februarie 2024",
        country: "RO",
        content: `Au fost adăugate licențe noi în lista cu frecvențele anunțate pe 20 februarie 2024 (Costești <span class="freq-style">94,8 MHz</span>, Horezu <span class="freq-style">95,1 MHz</span>, Nehoiu <span class="freq-style">88,2 MHz</span>, Sibiu <span class="freq-style">90,4 MHz</span>, Soveja <span class="freq-style">88,2 MHz</span>, Târgoviște <span class="freq-style">88,7 MHz</span>).`
    },
    {
        date: "20 februarie 2024",
        country: "RO",
        content: `Consiliul National al Audiovizualului a anunțat o listă cu frecvențe noi pentru următorul concurs radio.`
    },
    {
        date: "18 februarie 2024",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio România Actualități"</span> ce emite în Sibiu (Păltiniș) și-a schimbat frecvența de pe <span class="freq-style">101,8 MHz</span> pe <span class="freq-style">101,9 MHz</span>. UPDATE. Postul și-a revenit pe frecvența de <span class="freq-style">101,8 MHz</span>.`
    },
    {
        date: "16 ianuarie 2024",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Moldova Tineret"</span> a început să emită în Chișinău pe <span class="freq-style">105,9 MHz</span>.`
    },
    {
        date: "9 ianuarie 2024",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Impuls"</span> a primit aprobare de la CNA să preia frecvențele postului <span class="highlight">"Boom FM"</span>.`
    },
    {
        date: "21 decembrie 2023",
        country: "MD",
        content: `În urma concursului radio organizat de CA Moldova, s-au câștigat multiple licențe noi.`
    },
    {
        date: "17 decembrie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Galați"</span> a început să emită cu RDS în Tecuci pe <span class="freq-style">106,1 MHz</span>.`
    },
    {
        date: "10 decembrie 2023",
        country: "MD",
        content: `A revenit în eter postul de radio <span class="highlight">"Radio Jean"</span> în Cahul pe <span class="freq-style">92,6 MHz</span> și Baurci pe <span class="freq-style">107,5 MHz</span>.`
    },
    {
        date: "29 noiembrie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Galați"</span> a început să emită cu RDS în Galați pe <span class="freq-style">87,7 MHz</span>.`
    },
    {
        date: "21 noiembrie 2023",
        country: "MD",
        content: `Astăzi s-a lansat oficial postul de radio <span class="highlight">"Smile FM Moldova"</span>.`
    },
    {
        date: "20 noiembrie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Pro FM"</span> a început să emită fără RDS în Videle pe <span class="freq-style">90,4 MHz</span>.`
    },
    {
        date: "15 noiembrie 2023",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Smile FM Moldova"</span> a început să emită în Hîncești pe <span class="freq-style">94,2 MHz</span> și în Leova pe <span class="freq-style">89,9 MHz</span>.`
    },
    {
        date: "12 noiembrie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"M Plus"</span> a început să emită cu RDS în Pașcani pe <span class="freq-style">90,1 MHz</span>.`
    },
    {
        date: "1 noiembrie 2023",
        country: "MD",
        content: `Consiliul Audiovizual a eliberat licențe noi în FM.`
    },
    {
        date: "4 octombrie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Rock FM"</span> a început să emită în Miercurea Ciuc pe <span class="freq-style">90,9 MHz</span> în locul postului <span class="highlight">"Kiss FM”</span>.`
    },
    {
        date: "4 octombrie 2023",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Jurnal FM"</span> a început să emită în Orhei pe frecvența <span class="freq-style">101,6 MHz</span>. Emite de pe același CET împreună cu <span class="freq-style">97,5</span> <span class="highlight">Orhei FM</span> și <span class="freq-style">98,3 MHz</span> <span class="highlight">Radio Noroc</span>.`
    },
    {
        date: "8 septembrie 2023",
        country: "MD",
        content: `Licențele posturilor de radio <span class="highlight">"Radio One"</span> și <span class="highlight">"Liubimoe Radio"</span> nu au mai fost prelungite de către CA.`
    },
    {
        date: "1 septembrie 2023",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Moldova Tineret"</span> a început să emită în Cahul pe <span class="freq-style">89,3 MHz</span>. Postul emite fără RDS.`
    },
    {
        date: "22 august 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Sweet FM"</span> a început să emită în Râmnicu Vâlcea (<span class="freq-style">96,9 MHz</span>) și în Agnita (<span class="freq-style">88,5 MHz</span>) în locul postului <span class="highlight">"Eveniment FM"</span>.`
    },
    {
        date: "16 iulie 2023",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Love Radio"</span> a început să emită în Glodeni (TX Iabloana), pe frecvenţa <span class="freq-style">99,9 MHz</span>.`
    },
    {
        date: "27 iunie 2023",
        country: "RO",
        content: `Posturile de radio <span class="highlight">"Smart Radio"</span> (ce a emis în Câmpina pe <span class="freq-style">103,2 MHz</span>) și <span class="highlight">"Popular FM"</span> (ce a emis în Moldova Nouă pe <span class="freq-style">107,8 MHz</span>) și-au retras licențele.`
    },
    {
        date: "25 iunie 2023",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Dor"</span> ce a emis în Căușeni pe <span class="freq-style">93,0 MHz</span> își retrage licența.`
    },
    {
        date: "18 iunie 2023",
        country: "RO",
        content: `Postul <span class="highlight">"Radio Clasic"</span> a pornit în Făgăraș pe <span class="freq-style">90,9 MHz</span>. Postul a pornit fără RDS.`
    },
    {
        date: "8 iunie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"EBS Radio"</span> a început să emită în Brașov (Vf Postăvarul) pe frecvența <span class="freq-style">106,4 MHz</span>.`
    },
    {
        date: "13 mai 2023",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Eco FM"</span> a început să emită în Chișinău pe <span class="freq-style">95,7 MHz</span>.`
    },
    {
        date: "2 mai 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Realitatea FM"</span> a început să emită în Snagov pe <span class="freq-style">103,1 MHz</span>.`
    },
    {
        date: "25 aprilie 2023",
        country: "MD",
        content: `În urma concursului radio, posturile care au obținut noile licențe sunt: <span class="highlight">Radio Moldova Tineret</span> (multiple frecvențe), <span class="highlight">Smile FM Moldova</span>, <span class="highlight">Love Radio Moldova</span>, <span class="highlight">Jurnal FM</span>.`
    },
    {
        date: "24 aprilie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Realitatea FM"</span> ce a emis în București pe <span class="freq-style">90,2 MHz</span> și-a încetat emisia.`
    },
    {
        date: "23 aprilie 2023",
        country: "MD",
        content: `Noul post de radio <span class="highlight">"Radio Roks Moldova"</span> emite pe fostele frecvente ale postului <span class="highlight">"Radio Alla"</span> din Chisinau pe <span class="freq-style">96,7 Mhz</span> si Balti <span class="freq-style">102,1 MHz</span>.`
    },
    {
        date: "10 aprilie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">„Radio Impuls”</span> a început să emită în Ploiești pe <span class="freq-style">88,3 MHz</span>, Câmpina pe <span class="freq-style">88,6 MHz</span> și Sinaia pe <span class="freq-style">103,6 MHz</span>.`
    },
    {
        date: "4 aprilie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Galaxy"</span> ce emite în Caransebeș pe <span class="freq-style">99,1 MHz</span>, și-a mutat frecvența pe <span class="freq-style">98,6 MHz</span> și emite cu 300W.`
    },
    {
        date: "28 martie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Impuls"</span> a început să emită în Alba Iulia pe <span class="freq-style">99,7 MHz</span> și Câmpeni <span class="freq-style">96,2 MHz</span>.`
    },
    {
        date: "21 martie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio România Muzical"</span> a început să emită în Iaşi pe <span class="freq-style">95,4 MHz</span> seara după ora 23.`
    },
    {
        date: "18 martie 2023",
        country: "MD",
        content: `A revenit în eter postul de radio <span class="highlight">"Hit FM"</span> în Ungheni pe <span class="freq-style">104,5 MHz</span>.`
    },
    {
        date: "7 martie 2023",
        country: "RO",
        content: `<span class="highlight">"Radio Impuls"</span> a început să emită în Botoșani pe <span class="freq-style">91,1 MHz</span>.`
    },
    {
        date: "23 februarie 2023",
        country: "RO",
        content: `Licențele postului <span class="highlight">"Radio Son"</span> din Sovata (<span class="freq-style">89,2 MHz</span>) și Luduș (<span class="freq-style">94,2 MHz</span>) au fost cedate postului de radio <span class="highlight">"Jurnal FM"</span>.`
    },
    {
        date: "21 februarie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"White FM"</span> ce emite în Târgoviște pe <span class="freq-style">89,8 MHz</span> a fost preluat de directorul local <span class="highlight">Kiss FM</span>.`
    },
    {
        date: "20 februarie 2023",
        country: "MD",
        content: `Consiliul Audiovizual a anunțat un nou concurs radio unde vor fi incluse 19 frecvențe noi.`
    },
    {
        date: "15 februarie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Play Radio"</span> a început să emită în teste, în Constanța pe <span class="freq-style">91,6 FM</span>.`
    },
    {
        date: "15 februarie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Impact FM"</span> (cel cu sediul lași) a început să emită în teste, în Suceava pe <span class="freq-style">92,4 MHz</span>.`
    },
    {
        date: "3 februarie 2023",
        country: "RO",
        content: `A început să emită în probe <span class="highlight">"Radio România Muzical"</span> în Iași pe <span class="freq-style">95,4 MHz</span>.`
    },
    {
        date: "2 februarie 2023",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Ruskii Hit"</span> ce emite în Chișinău pe <span class="freq-style">101,3 MHz</span> s-a schimbat în <span class="highlight">Dance FM Moldova</span>.`
    },
    {
        date: "1 februarie 2023",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Ring"</span> ce emite în Mediaș pe <span class="freq-style">90,2 MHz</span>, a devenit <span class="highlight">Jurnal FM</span>.`
    },
    {
        date: "29 ianuarie 2023",
        country: "MD",
        content: `S-a lansat o nouă nișă online creată de <span class="highlight">Radio Record Moldova</span>, numită <span class="highlight">Record Rock</span>.`
    },
    {
        date: "21 ianuarie 2023",
        country: "RO",
        content: `A revenit afișajul RDS al postului <span class="highlight">Viva FM</span> ce emite în Hârlău pe <span class="freq-style">107,4 MHz</span>.`
    },
    {
        date: "17 ianuarie 2023",
        country: "RO",
        content: `Se retrage licența postului <span class="highlight">Realitatea FM</span> ce a emis în Sulina pe <span class="freq-style">107,0 MHz</span>.`
    },
    {
        date: "10 ianuarie 2023",
        country: "RO",
        content: `Se retrage licența postului <span class="highlight">Realitatea FM</span> ce emite în Cluj pe <span class="freq-style">92,8 MHz</span>.`
    },
    {
        date: "23 decembrie 2022",
        country: "MD",
        content: `Postul de radio <span class="highlight">"Radio Orhei"</span> ce emite pe <span class="freq-style">101,6 MHz</span> și-a încetat activitatea de emisie din motive financiare.`
    },
    {
        date: "6 decembrie 2022",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Itsy Bitsy FM"</span> a început să emită pe <span class="freq-style">93,3 MHz</span> în Ploiești.`
    },
    {
        date: "28 noiembrie 2022",
        country: "MD",
        content: `În urma concursului radio din Republica Moldova organizat de CA, au fost acordate licențe noi pentru <span class="highlight">ECO FM</span>, <span class="highlight">JURNAL FM</span>, <span class="highlight">RADIO CHIȘINĂU</span>, <span class="highlight">RADIO MOLDOVA TINERET</span>, <span class="highlight">RADIO NOROC</span>, <span class="highlight">VOCEA BASARABIEI</span>.`
    },
    {
        date: "23 noiembrie 2022",
        country: "RO",
        content: `Postul de radio <span class="highlight">Hit FM Brașov</span> a început să emită pe <span class="freq-style">88,2 MHz</span> în Zărnești.`
    },
    {
        date: "18 noiembrie 2022",
        country: "RO",
        content: `<span class="highlight">Gliga FM</span> ce emite din Toplita pe <span class="freq-style">105,4 MHz</span> isi incheie activitatea de emisie.`
    },
    {
        date: "12 noiembrie 2022",
        country: "MD",
        content: `Din motive de mentenanță, <span class="highlight">Hit FM Moldova</span> a oprit emițătoarele din Ungheni (<span class="freq-style">104,5 MHz</span>) și Cahul (<span class="freq-style">105,2 MHz</span>).`
    },
    {
        date: "9 noiembrie 2022",
        country: "RO",
        content: `Licențele posturilor <span class="highlight">Best FM</span> și <span class="highlight">Atlas FM</span> sunt cedate către <span class="highlight">Radio Impuls</span>.`
    },
    {
        date: "8 noiembrie 2022",
        country: "MD",
        content: `S-a încheiat perioada depunerii dosarelor pentru concursul radio din Republica Moldova.`
    },
    {
        date: "2 noiembrie 2022",
        country: "RO",
        content: `<span class="highlight">Radio ZU</span> a inceput sa emita in Slatina pe <span class="freq-style">92,4 MHz</span>.`
    },
    {
        date: "1 noiembrie 2022",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Ercis FM"</span> ce emite in Roman pe <span class="freq-style">88,3 MHz</span> se va muta la catedrala din Sabaoani, Neamt.`
    },
    {
        date: "1 noiembrie 2022",
        country: "RO",
        content: `Postul de radio <span class="highlight">"Radio Unu"</span> a inceput sa emita pe <span class="freq-style">107,2 MHz</span> in Piatra Neamt.`
    },
    {
        date: "25 octombrie 2022",
        country: "MD",
        content: `A inceput sa emita postul <span class="highlight">Jurnal FM</span> pe <span class="freq-style">88,8 MHz</span> in Nisporeni.`
    },
    {
        date: "18 octombrie 2022",
        country: "MD",
        content: `A revenit in eter <span class="highlight">Radio Pro Mingir</span> ce emite in Mingir pe <span class="freq-style">105,1 MHz</span>.`
    },
    {
        date: "13 octombrie 2022",
        country: "MD",
        content: `Postul <span class="highlight">Radio Maximum</span> ce emite in Slobozia pe <span class="freq-style">91,5 MHz</span> va fuziona cu <span class="highlight">Radio Energy RUS</span>.`
    },
    {
        date: "30 septembrie 2022",
        country: "MD",
        content: `A revenit in eter <span class="highlight">Radio Noroc</span> ce emite in Ungheni pe <span class="freq-style">106,0 MHz</span>.`
    },
    {
        date: "28 septembrie 2022",
        country: "RO",
        content: `<span class="highlight">Roman FM</span> obtine aviz de marire a puterii de emisie, de la 200W la 400W.`
    },
    {
        date: "28 septembrie 2022",
        country: "RO",
        content: `In urma confirmarii sedintei CNA, <span class="highlight">Radio Vocea Bucovinei</span> ce emite in Campulung Moldovenesc pe <span class="freq-style">88,8 MHz</span> va deveni <span class="highlight">Jurnal FM</span>.`
    },
    {
        date: "27 septembrie 2022",
        country: "RO",
        content: `Viitorul <span class="highlight">Play Radio</span> Constanta ce va emite pe <span class="freq-style">91,6 MHz</span> se va lansa oficial in primavara anului 2023.`
    },
    {
        date: "21 septembrie 2022",
        country: "RO",
        content: `Si-a revenit RDS-ul postului <span class="highlight">Radio Trinitas</span> ce emite pe Magura Odobesti pe frecventa <span class="freq-style">93,0 MHz</span>. <span class="highlight">Digi FM</span> <span class="freq-style">90,0 MHz</span> si <span class="highlight">Focus FM</span> <span class="freq-style">97,0 MHz</span> emit in continuare fara RDS.`
    },
    {
        date: "16 septembrie 2022",
        country: "MD",
        content: `Audiovizual.md a anuntat un nou concurs radio in Moldova.`
    },
    {
        date: "8 septembrie 2022",
        country: "RO",
        content: `<span class="highlight">Radio Trinitas</span> ce emite in Craiova pe <span class="freq-style">100,0 MHz</span> se muta pe <span class="freq-style">100,1 MHz</span>.`
    },
    {
        date: "6 septembrie 2022",
        country: "RO",
        content: `Aprobare de la CNA, <span class="highlight">Doina FM</span> ce emite in Cernavoda pe <span class="freq-style">97,1 MHz</span> si Mangalia pe <span class="freq-style">98,9 MHz</span> vor deveni <span class="highlight">Radio Trinitas</span>.`
    },
    {
        date: "1 septembrie 2022",
        country: "MD",
        content: `Si-a revenit reteaua <span class="highlight">Radio Plai</span> atat in eter cat si online.`
    },
    {
        date: "30 august 2022",
        country: "MD",
        content: `Incepand din aceasta seara, din motive necunoscute, postul <span class="highlight">Radio Plai</span> a ramas fara sunet pe intreaga retea.`
    },
    {
        date: "22 august 2022",
        country: "MD",
        content: `Postul <span class="highlight">Radio Vocea Basarabiei</span> a inceput sa emita pe <span class="freq-style">98,9 MHz</span> in Cahul.`
    },
    {
        date: "12 august 2022",
        country: "RO",
        content: `A pornit emisia <span class="highlight">Ercis FM</span> din Bacau pe frecventa <span class="freq-style">107,0 MHz</span>.`
    },
    {
        date: "9 august 2022",
        country: "MD",
        content: `Un nou post de radio online in Moldova, ce poarta numele de <span class="highlight">Radio Relax International</span>.`
    },
    {
        date: "7 august 2022",
        country: "MD",
        content: `Si-a revenit emisia postului <span class="highlight">Radio Vocea Basarabiei</span> ce emite in Taraclia pe <span class="freq-style">101,9 MHz</span>.`
    },
    {
        date: "25 iulie 2022",
        country: "MD",
        content: `Dupa o perioada de probleme tehnice, <span class="highlight">Hit FM</span> Cimislia <span class="freq-style">93,5 MHz</span> si Ceadir-Lunga <span class="freq-style">94,6 MHz</span> isi vor relua emisia pe data de 1 august 2022.`
    },
    {
        date: "24 iulie 2022",
        country: "MD",
        content: `<span class="highlight">Radio Plai</span> din Stefan Voda pe frecventa de <span class="freq-style">100,5 MHz</span> isi muta emisia pe <span class="freq-style">100,6 MHz</span>.`
    },
    {
        date: "6 iulie 2022",
        country: "MD",
        content: `Si-a revenit emisia postului de pe <span class="freq-style">92,6 MHz</span> Cahul insa emite <span class="highlight">Novoe Radio</span>.`
    },
    {
        date: "30 iunie 2022",
        country: "RO",
        content: `Astazi s-au acordat noile licente radio de la concursul radio CNA 2022.`
    },
    {
        date: "18 iunie 2022",
        country: "MD",
        content: `Licentele <span class="highlight">Radio 1</span> si <span class="highlight">Radio 1 Plus</span> din Tiraspol au fost mutate pe <span class="freq-style">104,1 MHz</span>, respectiv <span class="freq-style">105,1 MHz</span>.`
    },
    {
        date: "17 iunie 2022",
        country: "MD",
        content: `A pornit codorul RDS de la <span class="highlight">Hit FM Moldova</span> Cahul; PS: HIT_FM__/<span class="freq-style">105.2_FM</span> si cod PI: 5000.`
    },
    {
        date: "3 mai 2022",
        country: "MD",
        content: `Astazi este ziua oficiala in care se inchide TV Analogul Terestru din Moldova inclusiv partile audio ce au emis in FM banda est (OIRT).`
    },
    {
        date: "28 februarie 2022",
        country: "MD",
        content: `Echipa redactiei <span class="highlight">Radio Sputnik Moldova</span> partea romaneasca a demisionat din cauza propagandei impuse de conducerea postului.`
    }
];
