limit = 18

function loadFakeWiki(){
    newPage();
    interval = setInterval(newPage,60000);
}

function newPage(){
    fillPage(0);
    number = 1+Math.floor(Math.random()*limit)
    fillPage(number);   
}


function fillPage(number){
        Object.entries(data[number]).forEach(function (element,index){
            if(element[0]!="_image"){
                document.getElementById(element[0]).innerHTML=element[1];
            }else{
                document.getElementById(element[0]).src=element[1];
            }
        })
}

function shufflePage(){
    number = newNumber(limit);
    Object.entries(data[number]).forEach(function (element,index){
        content = Object.entries(data[newNumber(limit)])[newNumber(11)][1];
        if(element[0]!="_image"){
            document.getElementById(element[0]).innerHTML=content;
        }else{
            document.getElementById(element[0]).src=element[1];
        }
    })

    function newNumber(lmt){
        return Math.floor(Math.random()*lmt)
    }

    timer = setTimeout(newPage,10000);
}







data = [
    { //0
        "_pageTitle" : "",
        "_intro" : "<i></i> <br>",
        "_p1Title" : "",
        "_p1" : "",
        "_p2Title" : "",
        "_p2" : "",
        "_p3Title" : "",
        "_p3" : "",
        "_boxHeading" : "",
        "_boxHeader":"",
        "_boxLabel":"",
        "_boxData":"",
        "_image": "images/"        
    },{ //1
        "_pageTitle" : "'I once played for Man Utd – now I look unrecognisable and sell luxury watches'",
        "_intro" : "<i>Kieran Richardson, who played for England, Manchester United, Aston Villa and Sunderland, now travels the world selling luxury watches for a living after hanging up his football boots</i> <br>You might not recognise Kieran Richardson these days.",
        "_p1Title" : "Kieran Richardson turns 40 on Monday",
        "_p1" : "Richardson, who turns 40 on Monday (October 21), once turned out for Manchester United, Aston Villa and Sunderland - but now he travels the world selling luxury watches for a living. The ex-England international decided to call time on his playing career at just 33-years-old - and he even refuses to use his footballing past to build rapport with clients.",
        "_p2Title" : "Former Manchester United star Kieran Richardson now sells luxury watches for a living",
        "_p2" : "“Whenever I meet someone new, I don't even say I was a footballer anymore, I just say I sell watches for a living,” Richardson told Ladbrokes Fanzone last October. <br> The places I go, in the business world, most people don't even really know about football. If I was to meet anyone now, and they asked me who I am or what I do, I'd just say I sell high value watches around the world. ",
        "_p3Title" : "I feel like my clients do really trust me, and so they should",
        "_p3" : "“Then, a lot of people will go on and check me out on Google, maybe, and they'd see my career in football, and then it goes on from there. The football career definitely helps, actually, because it gives people a sense of trust.”<br>But, obviously, you still need to be knowledgeable about the product, and know what you're talking about. Luckily enough, I've been doing watches for a long time now, so I'm quite savvy on them, even though I'm still trying to learn more every day. <br>Richardson was happy to slip out of football quietly and look to the future. He added: “I've never been the kind of guy to go and make a song and dance out of my retirement. I don't really care, to be honest. I had a great career, I enjoyed it, but I've moved onto other things now. “When I was a kid, I had hobbies, right? Football was always my number one, but my second was watches. I always loved watches. My father was into watches, I was into watches, and throughout my career I’d always be buying – and learning about – new watches. I just happen to have left one hobby, and gone into another one, that's how I see it. I still feel like I'm living the same life. It's crazy. I'm really, really blessed to be in a position where I don't call my work, my work. Even when I was a footballer, it never felt like work to me, it was something that I loved. It's probably why I didn't come out and say I'd retired, because I don't feel like I have retired. I'm still doing something that I love.",
        "_boxHeading" : "Kieran Richardson looks unrecognisable these days",
        "_boxHeader":"slip out of football quietly",
        "_boxLabel":"Watches",
        "_boxData":"My father was into watches",
        "_image": "images/0_KIERANRICHARDSON.webp"
    },{ //2
        "_pageTitle" : "'Dine and dash' couple use 'handbag trick' to flee restaurant without paying £80",
        "_intro" : "<i>A restaurant has revealed that a couple used a shady ‘handbag trick’ to pretend they were returning to the restaurant to pay their bill, when they were actually planning to ‘dine and dash’</i> <br>The pair, who left the restaurant without paying their £80 bill, have been reported to the police for theft",
        "_p1Title" : "A restaurant has exposed a couple",
        "_p1" : "A restaurant has exposed a couple, who fled their venue without paying their £80 bill, by sharing CCTV footage online. The Scottish eatery, called La Dolce Vita, revealed that the diners had tricked staff into thinking they were going to return to pay the bill by using a sneaky ‘handbag trick’. In the now viral CCTV clip, the couple can be seen sitting outside, before both walking off in separate directions.",
        "_p2Title" : "READ MORE: Brits targeted in new wave of 'anti-tourist' protests in Spain as locals chant 'go home'",
        "_p2" : "The restaurant has revealed that the pair had raked up a rather large bill, after ordering a starter each, three mains, and two desserts.<br> After they had finished their food, the couple told staff that they were going to ‘nip out for a cigarette’, with the woman leaving her handbag inside the restaurant as a sign they’d return to clear the bill.",
        "_p3Title" : "A couple, who 'dined and dashed' from a Scottish restaurant using a sneaky 'handbag trick'",
        "_p3" : "After they had finished their food, the couple told staff that they were going to ‘nip out for a cigarette’, with the woman leaving her handbag inside the restaurant as a sign they’d return to clear the bill.<br> However, instead of returning, the couple made a run for it, leaving the huge bill unpaid. When the team realised that the couple had been gone for longer than expected, they went to investigate, and quickly realised that the handbag was completely empty. A spokesperson for the restaurant said that they were ‘angry and annoyed’ by the situation. Once staff realised that the couple had left without paying, they contacted the police to report the theft. However, so far no arrests in relation to the crime have been made.",
        "_boxHeading" : "A spokesperson for Police Scotland said",
        "_boxHeader":"“Around 5.45pm on Sunday, October 20, police received",
        "_boxLabel":"report of a theft",
        "_boxData":"Main Street area of East Kilbride",
        "_image": "images/0_Couple-uses-handbag-trick-to-skip-£80-restaurant-bill.webp"
    },{ //3
        "_pageTitle" : "'Brit woman who posted naked photos of dad's lover on escort site learns her fate",
        "_intro" : "<i>Eleanor Brown, 24, was described as 'vengeful and vindictive' by the judge who sentenced her at Leeds Crown Court for posting naked pictures of her dad's lover on an escort site</i> <br>Geoff Brown  61, a retired police officer, had an extra-marital affair with the woman in the pictures more than a decade ago",
        "_p1Title" : "Eleanor Brown, 24, was sentenced to three years in prison on Monday",
        "_p1" : "A 'vindictive' woman who shared nude pictures of her father's lover on an escort site after finding out about his affair has learned her fate in court.<br>Eleanor Brown, 24, was sentenced to three years in prison on Monday after admitting to disclosing a private photo or film without consent. Leeds Crown Court previously heard that Geoff Brown, 61, a retired police officer, had an extra-marital affair with the woman in the pictures more than a decade ago. The mistress sent Geoff the pictures but his wife Sarah, 57, found them and sent them on to her daughter years later.<br>Eleanor Brown then uploaded the images of the woman, as well as a phone number for her husband, to an escort site called Beaver Street in 2022. The court heard Eleanor was encouraged by her sister Sophie Brown to share the pics. Sophie at the time was an officer with West Yorkshire Police but left her role before she could be sacked.",
        "_p2Title" : "Eleanor also posted abusive comments on a Facebook",
        "_p2" : "posted abusive comments on a Facebook business page belonging to the husband of the woman in 2022, dubbing her a home-wrecking s*** and a tramp. In addition, messages were also uploaded on the advertising platform Nextdoor and photos were sent to the victim's husband over WhatsApp.<br>Eleanor told police she was half guilty and attempted to justify her actions, despite denying the charges. She initially stood trial but soon changed her pleas to guilty throughout proceedings.<br>he woman said in a victim impact statement read to the court that she constantly feels nauseous and anxious, and that she felt violated and feared the pictures could emerge in the future – meaning she would have to live through this nightmare again.",
        "_p3Title" : "Judge Alex Menary ",
        "_p3" : "Harry Crowson, mitigating for Brown – who has no previous convictions – said learning about her father's affair had caused trauma, having found out when she was just a teenager. He told the court: She became a warrior in a war she ought not to have been fighting. She feels resentment that is perhaps attributed in the wrong places. She needs to stop fighting a battle that is not hers.<br>Judge Alex Menary said Brown's decisions and actions were persistent and called her vengeful and vindictive. He allowed her minimal credit having changed her pleas only after the victim had been forced to give evidence in court.",
        "_boxHeading" : "Brown's attitude after arrest displayed",
        "_boxHeader":"utterly, utterly unapologetic",
        "_boxLabel":"totally devoid of any moral compass whatsoever",
        "_boxData":"Brown was jailed",
        "_image": "images/0_Screenshot-2024-09-20-at-072140JPG.webp"
    },{ //4
        "_pageTitle" : "Kinahan crime boss plans to lead ‘honest life’ once released, sentence hearing told",
        "_intro" : "<i>Liam Byrne and fellow senior Kinahan crime group member Thomas ‘Bomber’ Kavanagh are before a court in London over weapons plot</i> <br>Senior Kinahan cartel members Liam Byrne (left) and Thomas 'Bomber' Kavanagh.",
        "_p1Title" : "leading member of the Kinahan organised crime group",
        "_p1" : "A lawyer for Liam Byrne (43), a leading member of the Kinahan organised crime group who has pleaded guilty to weapons charges in Britain, has urged a judge at the Old Bailey in London to be lenient with his client, whom he said intended to lead “a good and honest life when he is released”.<br>Byrne, originally from Crumlin in Dublin, and his fellow Dubliner and brother-in-law Thomas “Bomber” Kavanagh (57), will learn their sentences on Tuesday after admitting to orchestrating a ruse to secure a lighter sentence for Kavanagh in a separate drugs case.<br>At a sentencing hearing on Monday for the two Dubliners and Shaun Kent (38) from Liverpool, who had also admitted his role in the plot, the Old Bailey heard that Kavanagh masterminded the scheme from prison in Britain. All three have admitted weapons charges, while Kavanagh also admitted perverting the course of justice.",
        "_p2Title" : "Kavanagh directed Byrne, Kent and others in 2020 to procure firearms",
        "_p2" : "which the gang buried in a field near Newry in Co Down. Kavanagh, then in custody in Britain and facing a heavy sentence for cocaine and cannabis trafficking, pretended to be an informant.<br>In 2021 he tipped off Britain’s National Crime Agency (NCA) about the whereabouts of the cache of 11 high-powered guns and ammunition that the gang had amassed for this purpose, in the hope the find would make him appear co-operative and he might get a lesser sentence in his drugs case.<br>The plot was foiled, however, when French police breached the EncroChat secure messaging service – described in court as “WhatsApp for criminals” – that the gang had used. They then passed the messages to the British police, who withdrew co-operation with Kavanagh. Prosecutor Tom Forester KC on Monday led the judge, Philip Katz, through some of the 199 pages of EncroChat messages that police had linked to the defendants.<br>Byrne had used the EncroChat handle Thai Live, while others referred to him by the nickname Gargler. Kent, meanwhile, used the EncroChat handles Firm Cleaner and Marcos Cafu to pass on messages received through an intermediary from Kavanagh behind bars.",
        "_p3Title" : "Kavanagh was not on EncroChat",
        "_p3" : "Most of the messages were sent around April and May of 2020, when the gang complained Covid lockdowns were disrupting their operations. Kavanagh, described in court as the senior member at the “apex” of the scheme, passed messages to another man in prison, who passed them to Kent, who relayed instructions to the others via EncroChat.<br>The trail of messages revealed how Kent, Byrne and others tried to procure guns in the Republic, Northern Ireland, the Netherlands and in Manchester. They referred to weapons as “yokes”, “small ones and big ones”, “tools” and “stuff what makes a loud noise”. Ammunition were “sweets”.<br>Mr Forester said that while Kavanagh directed the plan, Kent and Byrne were “big cogs in the machine”. Other criminals who the gang engaged with in their hunt to build the cache were called Wiggo, Funny, Tabuki and The Jew",
        "_boxHeading" : "EncroChat was compromised in June 2020",
        "_boxHeader":"X marking the spot in a field near Newry",
        "_boxLabel":"officers found 11 guns",
        "_boxData":"men when the plot",
        "_image": "images/Screenshot 2024-10-21 221554.png"
    },{ //5
        "_pageTitle" : "Meloni’s government passes new law to save Albania migration transfer policy",
        "_intro" : "<i>Move by Italian PM overturns ruling by a Rome court that could have blocked deal to curb migrant arrivals</i> <br>The Italian coastguard patrol boat arrives at the port of Bari in Italy carrying the 12 asylum seekers from the repatriation centre in Gjadër after the Rome court’s ruling.",
        "_p1Title" : "Italy’s far-right government has passed a new law",
        "_p1" : "that risks blocking the country’s multimillion-dollar deal with Albania aimed at curbing migrant arrivals.<br>On Friday, a court in Rome ruled to transfer back to Italy the last 12 asylum seekers being held in the new Italian migration hub in Albania. The ruling has cast doubt on the feasibility and legality of plans by the EU to explore ways to establish migrant processing and detention centres outside the bloc as part of a new hardline approach to migration.<br>The group of individuals, who had arrived at the port of Shëngjin from Lampedusa onboard a military vessel last week, were among the 16 people transferred for the first time to the designated facility in Gjadër under the agreement between Italy’s prime minister, Giorgia Meloni, and the Albanian prime minister, Edi Rama, aimed at holding men who are intercepted in international waters while trying to cross from Africa to Europe.<br>Four of the 16 men were immediately sent back to Italy on Thursday, including two who were underage and two who were deemed as vulnerable.",
        "_p2Title" : "The remaining 12 individuals",
        "_p2" : "whom the Rome judges ordered be transferred back to Italy were returned via the port of Bari on Saturday in a blow to Meloni that risks turning the initiative into what aid workers and opposition groups have deemed a “complete failure” and a “financial disaster”.<br> Meloni’s party, the far-right Brothers of Italy, angrily condemned the decision on social media, blaming “politicised magistrates” who “would like to abolish Italy’s borders. We will not allow it.”<br> Italy’s justice minister, Carlo Nordio, attacked the judges, saying “the definition of a safe country cannot be up to the judiciary”.",
        "_p3Title" : "The dispute that has sparked the clash revolves around the definition of what constitutes “safe countries” of origin",
        "_p3" : "The 16 asylum seekers hailed from Egypt and Bangladesh, countries deemed safe by Italy, and therefore, according to the government, they should have been repatriated to their countries of origin.<br>However, the judges ordered their transfer to Italy, saying the men could be at risk of violence if repatriated, effectively upholding the 4 October ruling of the European court of justice that the Italian government appeared to have overlooked. As a general rule, EU law takes precedence over conflicting national laws.<br>The EU court made it clear that a country not entirely safe cannot be deemed safe, underlining that the condition of insecurity, even if limited to a specific part of the country, such as a certain region, could lead to the entire country being deemed unsafe.",
        "_boxHeading" : "The council of ministers approved the decree",
        "_boxHeader":"The aim of the new law is",
        "_boxLabel":"new list of safe countries",
        "_boxData":"Meloni’s government hopes",
        "_image": "images/3072.avif"
    },{ //6
        "_pageTitle" : "Middle East crisis live: child among four people killed in Israeli airstrike at hospital in south Beirut",
        "_intro" : "<i>Lebanese health ministry says more than 20 were wounded as spokesperson for hospital says entrance of hospital was hit</i> <br><i>17m ago</i> Four killed in Israeli strike near large Beirut hospital",
        "_p1Title" : "Smoke billows over Beirut's southern suburbs on Monday night. Photograph: Mohamed Abd El Ghany/Reuters",
        "_p1" : "Lebanon’s Ministry of Health has condemned what it said was “attacks on two of Lebanon’s largest hospitals” on Monday and was part of Israel’s “daily targeting of the Lebanese health sector.”<br>Israel has killed at least 115 healthcare workers and emergency responders since fighting started between Hezbollah and Israel a year prior.<br>It was the second night in a row that Beirut was heavily bombed, with Israel carrying out more than 15 airstrikes on Hezbollah-linked banking institutions the night before.<br>On Sunday night, Israel said that it would begin targeting a Hezbollah-affiliated bank, Al-Qard Al-Hassan, which provides interest free loans and banking services to hundreds of thousands of Lebanese – primarily Shia Muslims. It accused the bank of helping finance Hezbollah and said that its branches were used to store weapons.",
        "_p2Title" : "The announcement that Israel would start targeting the bank",
        "_p2" : "a part of Hezbollah’s civilian institutions, signified an expansion of the scope of Israel’s targets from just the group’s military wing. The institution had sanctions placed on it by the US in 2017 during the Trump administration for giving Hezbollah access to the international financial system, according to the US treasury.",
        "_p3Title" : "Despite the strike, the hospital continued operating",
        "_p3" : "Amid Israeli airstrikes on Beirut on Monday night, one hit just in front of the entrance of the Rafik Hariri University Hospital, the largest public hospital in Lebanon. At least four were killed, including a child, 24 were injured in the strike, and the hospital suffered “major damage” from the blast.",
        "_boxHeading" : "exercise maximum restraint",
        "_boxHeader":"urge Israel to ease civilian suffering",
        "_boxLabel":"Israeli airstrike hits hospital entrance",
        "_boxData":"the largest public hospital in Lebanon",
        "_image": "images/2681.avif"
    },{ //7
        "_pageTitle" : "Moldovans back joining the EU by razor-thin majority",
        "_intro" : "<i>Final result sees ‘yes’ vote scrape ahead by 13,000 votes, narrowly avoiding shock setback for pro-western president</i> <br>Moldova's president, Maia Sandu, casts her vote in the presidential election and EU referendum on Sunday.",
        "_p1Title" : "Razor-thin majority in favour of joining the EU",
        "_p1" : "Moldovans have voted by a razor-thin majority in favour of joining the EU after a pivotal referendum clouded by allegations of Russian interference.<br>On Sunday, Moldova held key votes in a presidential election and a referendum on EU membership, marking a critical moment in the continuing struggle between Russia and the west for control over the small, landlocked nation in eastern Europe, home to 2.5 million people.",
        "_p2Title" : "Votes Count",
        "_p2" : "After all the votes were counted in the referendum that asked voters to choose whether to enshrine in the country’s constitution a path toward the EU, the “yes” vote crept into first place with 50.46% of the nearly 1.5m ballots cast, according to the Central Electoral Commission.<br>The result meant that the pro-EU campaign won by just more than 13,000 votes, narrowly avoiding a shock setback for the pro-western president, Maia Sandu.",
        "_p3Title" : "Separate presidential election results",
        "_p3" : "The separate presidential election results showed Sandu topped the first round of the vote with 42%. She will face her closest competitor, Alexandr Stoianoglo, a former prosecutor backed by the pro-Russian Socialists, in the second round in two weeks. “Moldova has won the first difficult battle in the push to join the European Union,” Sandu said at a conference on Monday.<br>She also decried attempts by “foreign forces” to buy votes, describing it as an “attack on Moldovan sovereignty”. <br>The double vote in one of Europe’s poorest countries was seen as a crucial test of Sandu’s pro-European agenda. The result means a clause will be added to the constitution defining EU accession as a goal, though the country’s potential admission to the European bloc is still many years away.",
        "_boxHeading" : "The tight referendum",
        "_boxHeader":"disappoint Sandu’s",
        "_boxLabel":"Moldova officially began EU accession negotiations in June",
        "_boxData":"weakened Sandu could face a tricky second-round",
        "_image": "images/7000.avif"
    },{ //8
        "_pageTitle" : "'This is our land, we deserve it': Dozens of Israelis planning to cross border and settle in Gaza",
        "_intro" : "<i>When asked what should happen to the Palestinians currently living in the territory, one Israeli woman replied: We should kill them. Every last one of them.</i> <br>As the sun beats down on us near Kibbutz Be'eri in Israel, Avi looks out towards the place he really wants to live. It's only two miles away and it shimmers in the sunshine.",
        "_p1Title" : "It would be our privilege, ",
        "_p1" : "he says, looking at his wife and three small children. Their plan is to move to Gaza. <br>He's not sure when it will be possible, but he's hoping it will be soon, once it is safe to move in.<br>As if on cue, there is a boom as another shell is fired into Gaza from a nearby gun emplacement.<br>Avi is not alone.",
        "_p2Title" : "Around us are dozens and dozens of Israelis who are keen to get into Gaza and claim the land as their own.",
        "_p2" : "They have come to a conference on the resettlement of Gaza in Kibbutz Be'eri as a show of strength and determination. Many of them are couples with children.",
        "_p3Title" : "Follow latest: Middle East live updates",
        "_p3" : "There is a tent where the youngsters are being entertained, a stall handing out drinks and a stage with speeches and music. People are making small talk in the shade of a pagoda.<br>There are lots of guns here, and the atmosphere is rich with a sense of frustration, entitlement and even excitement. Reshit has come with her friends. She is the daughter of an Israeli soldier who spent months in Gaza and is now fighting in Lebanon. She is friendly, open, eloquent and utterly sure of herself.<br>So why would you want to live in Gaza?",
        "_boxHeading" : "Because it's our homeland,",
        "_boxHeader":"It says in the Torah",
        "_boxLabel":"Because it's our homeland",
        "_boxData":"We should kill them, every last one of them. And if the government won't do that then we should just kick them out. This is our land. And we deserve it.",
        "_image": "images/skynews-gaza-israel_6723657.jpg"
    },{ //9
        "_pageTitle" : "Paul Di'Anno: Iron Maiden 'deeply saddened' after death of former singer",
        "_intro" : "<i>Di'Anno sang with the British band between 1978 and 1981, featuring on songs such as Running Free, Sanctuary and Remember Tomorrow.</i> <br>Members of heavy metal band Iron Maiden have said they are deeply saddened following the death of former bandmate Paul Di'Anno",
        "_p1Title" : "Di'Anno sang with the British band between 1978 and 1981",
        "_p1" : "His death was announced by record label Conquest Records on behalf of his family on Monday.<br>He died at his home in Salisbury at the age of 66, it added. A statement posted on the Iron Maiden official X account said: We are all deeply saddened to learn about the passing of Paul Di'Anno earlier today. <br>Paul's contribution to Iron Maiden was immense and helped set us on the path we have been travelling as a band for almost five decades.",
        "_p2Title" : "His pioneering presence as a frontman and vocalist",
        "_p2" : "both on stage and on our first two albums, will be very fondly remembered not just by us, but by fans around the world. On behalf of the band, Rod and Andy, and the whole Iron Maiden team, we extend our deepest sympathies to Paul's family and close friends. Rest in peace Paul.<br> Steve Harris, bass player and founder of Iron Maiden, was quoted as saying: It's just so sad he's gone.<br>He said he spoke with Di'Anno recently, adding: At least he was still gigging until recently, it was something that kept him going, to be out there whenever he could.He will be missed by us all. Rest in peace mate.",
        "_p3Title" : "Di'Anno was known for his aggressive voice, which gave the band a more punk-style sound.",
        "_p3" : "He was forced to miss most of his debut Iron Maiden show after being arrested for carrying a knife.<br>In 1981 he was dismissed from the band due to his erratic behaviour and drug usage. He was replaced by Bruce Dickinson, the group's current singer, but continued to make guest appearances.",
        "_boxHeading" : "After leaving the band",
        "_boxHeader":"Di'Anno went on to record a number of solo albums",
        "_boxLabel":"performed as part of other bands",
        "_boxData":"Battlezone and Killers",
        "_image": "images/skynews-iron-maiden-paul-dianno_6723660.jpg"
    },{ //10
        "_pageTitle" : "How RIP.ie became an Irish cultural phenomenon",
        "_intro" : "<i>aside from publishing death notices and condolences, RIP.ie is also a rich source of significant personal, cultural and historical data</i> <br>",
        "_p1Title" : "Death notifications",
        "_p1" : "Given the time constraints of organising the traditional Irish funeral within three days, timely notification is critical to one's ability to participate. During the pandemic, RIP.ie transformed the way people are notified of a death in Ireland. This transformation occurred in part because all funeral directors in Ireland have access to RIP.ie and are able to enter death notices at no cost.<br>As a result, RIP.ie is a centralised source for death notifications, where an individual only needs to check one site to find out about deaths throughout the island. Notices include practical information on funeral arrangements, including links to live-streamed funerals and are generally posted within 24 to 48 hours of death, allowing loved ones to make arrangements to support the family and attend services.",
        "_p2Title" : "A cultural phenomenon",
        "_p2" : "RIP.ie became a cultural phenomenon and a part of everyday life, as evidenced by the site receiving more than 250,000 visitors each day and the rise in the average number of condolences per individual from six in 2019 to over 130 in 2020 . Digital mourning platforms like RIP.ie allow mourners to express themselves in novel and creative ways, moving beyond modern expectations of efficiency and rationality.<br>Condolences on RIP.ie range in length from a single emoji to over 300 words, and also include the use of poetry, song lyrics, scripture, anecdotes and witty remarks, and cultural references to sports, hobbies, food and drink, careers, music, religion, and family. The data included in RIP.ie includes very personal data, including names of close and distant relations, friends, neighbours, classmates, and colleagues; contact information such as current and former addresses, phone numbers, and emails; social history such as what church or school you attended, and places of work.<br>Currently, all notices placed on RIP.ie are archived and available to view at no cost. Notices can be found by searching for the surname, county, town or date of death and is a treasure trove for ancestry researchers. Unlike the National Archives, which typically provide records up to the mid-20th century, ancestry researchers can access data from 2006 onwards through RIP.ie helping them uncover modern connections.",
        "_p3Title" : "Statistics",
        "_p3" : "The Central Statistics Office’s decision to use data from RIP.ie to track mortality during the pandemic was in part due to the 24 to 48-hour turnaround, which far surpassed the normal process of registering a death, which can take several months. A Trinity College Dublin School of Law report highlighted that data from RIP.ie proved more timely and reliable than Ireland's official death register, underscoring the need for reform in the country's death registration process. Recently, a new law was passed requiring electronic death notifications to the General Register Office within five working days from the date of death allowing the Government to collect more timely mortality data.<br>",
        "_boxHeading" : "What if you had to pay to access RIP.ie?",
        "_boxHeader":"In 2009, death notices were charged by the word or by the line with costs in the range of €250 to €300",
        "_boxLabel":"While The Irish Times has stated that it will still be free to view death notices",
        "_boxData":". There is a concern among users that the site could become monetised with limited access in the future",
        "_image": "images/00212e51-800.webp"
    },{ //11
        "_pageTitle" : "Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!",
        "_intro" : "<i>Bacon ipsum dolor amet esse andouille occaecat do aliquip. Id kielbasa tongue boudin, ground round shoulder veniam buffalo pork belly kevin aliqua sed frankfurter laborum. Kielbasa ut in pancetta eu, fugiat ad dolore velit.</i> <br>Non consequat incididunt venison short ribs lorem chicken ground round alcatra. Mollit qui do, ut ipsum cillum porchetta corned beef. Pork chop pork belly pig beef ribs quis beef.",
        "_p1Title" : "In corned beef turducken cupim. ",
        "_p1" : "Picanha magna ut chislic, ut adipisicing lorem ham shoulder. Sunt biltong shankle, flank rump deserunt venison. Ground round tri-tip anim fatback sed nulla nisi capicola jerky laboris. Prosciutto ad cow eu laboris, incididunt in turducken ut picanha irure. Exercitation veniam fatback pancetta sunt, cillum lorem mollit. Adipisicing sausage shank, sirloin do alcatra nisi veniam consequat chislic id irure duis buffalo.",
        "_p2Title" : "Strip steak officia corned beef incididunt culpa filet mignon.",
        "_p2" : "Short loin pancetta kevin eu do frankfurter. Venison pork incididunt, dolore velit tri-tip minim do shoulder sunt chuck adipisicing sausage ipsum. Alcatra corned beef filet mignon, shankle prosciutto deserunt ribeye incididunt in sint ut. Jowl fatback pig laboris sirloin meatloaf.",
        "_p3Title" : "Irure eu tenderloin chislic mollit alcatra cillum id lorem deserunt non capicola ea.",
        "_p3" : "Tempor sint meatball pastrami. Est irure strip steak bacon, anim veniam cow ground round sint short ribs frankfurter. Ipsum eu magna esse strip steak velit burgdoggen beef ribs voluptate pork belly fugiat ullamco excepteur. Non officia nulla tempor est ad sausage kielbasa turducken burgdoggen. T-bone reprehenderit ad cow, minim pig est pork belly eu alcatra bresaola. Ham hock drumstick capicola, chislic leberkas fatback magna elit corned beef ground round tempor prosciutto. Cupim shank culpa spare ribs tri-tip ball tip excepteur aute pork belly ea sed sint.",
        "_boxHeading" : "POrk",
        "_boxHeader":"pork",
        "_boxLabel":"pork",
        "_boxData":"meat",
        "_image": "images/Schweinebauch-2.jpg"
    },{ //12
        "_pageTitle" : "Government party leaders agree on 2024 general election",
        "_intro" : "<i>The Coalition leaders have agreed the passage of the Finance Bill is the priority for the Government </i> <br>The leaders of the three Government parties have agreed that the general election will take place in 2024",
        "_p1Title" : "While no date has been announced, the leaders confirmed that polling will take place later this year.",
        "_p1" : "Most speculation has been focused on 29 November.<br>The leaders will be quizzed on their approach in the morning, as they head into a Cabinet meeting at Government Buildings. Speaking earlier today, Mr Harris said that Mr O'Gorman did not go behind his back when he suggested 29 November as a date for the election and had done so publicly.<br> He added that, without being prickly about it, it is the constitutional prerogative of the Taoiseach to announce an election on a specific date.",
        "_p2Title" : "Mr O'Gorman said he reserved the right as Green leader to hold a view on this.",
        "_p2" : "The Taoiseach said that Fine Gael would contest the election as a stand-alone party without a transfer pact with the coalition parties.<br>How people vote is a matter for them, he added, but it is possible that if people thought this Government's doing a good job, they may wish to vote in that manner.<br>I think this Government works well together, Mr Harris told reporters in Dublin.",
        "_p3Title" : "We are three different parties",
        "_p3" : "It's been built on mutual respect. It's been built on policy. I hope these are two things that can be maintained across the political divide throughout the election.",
        "_boxHeading" : "Mr Martin said",
        "_boxHeader":"that he has consistently said",
        "_boxLabel":"that it would be ideal",
        "_boxData":"if the Government ran its course until February",
        "_image": "images/00212c18-800.webp"
    },{ //13
        "_pageTitle" : "Almost all storm-related power outages restored, says ESB",
        "_intro" : "<i>ESB Networks said at the height of the storm, 53,000 customers were without power</i> <br>ESB Networks has said almost all storm-related outages are now resolved and supply has been restored to the majority of impacted customers around the country.",
        "_p1Title" : "A small number of homes and businesses in the west are still without power.",
        "_p1" : "The company says efforts are continuing tonight, to get as many of those reconnected connected as is possible. It said earlier that outages were generally confined to areas where a relatively small number of homes were impacted.<br>ESB Networks manager Brian Tapley said that at the height of the storm, 53,000 customers were without power but crews managed to restore power to around 37,000 homes and businesses last night. Mr Tapley said conditions were still hazardous in some areas, with a lot of debris still lying around.",
        "_p2Title" : "Waves crash against the Blackrock diving tower in Salthill, Galway, during the storm",
        "_p2" : "Dublin Airport was affected by delays this morning as a result of yesterday's disruption to flights. Media Relations Manager at daa, Graeme McQueen, said yesterday was a challenging day at Dublin Airport as winds associated with Storm Ashley made it difficult for some aircraft to land.<br>In total, 81 flights were cancelled yesterday while there was 39 go-arounds and 34 aircraft opted to divert to other airports. Winds have eased considerably this morning and our first wave of flights is moving very well, said Mr McQueen.<br>However, as a result of Sunday’s disruption at airports across Ireland, the UK and Europe, some knock-on delays today are inevitable as several airlines have aircraft out of position. A small number of flights have already been cancelled by airlines.",
        "_p3Title" : "Flights into and out of Shannon Airport operated to schedule this morning.",
        "_p3" : "A total of 13 flights were diverted there from other airports, over the course of yesterday. Seven of those were due to land in Cork, with the remaining six re-routed from Dublin. Ireland West Airport is also operating as normal.<br>A number of planes had to divert or return to their point of departure yesterday, as a result of high winds around the airport in Co Mayo.",
        "_boxHeading" : "Ryanair said a shortage",
        "_boxHeader":"number of passengers who were diverted to Shannon Airport yesterday",
        "_boxLabel":"'s efforts to lay on alternative transport",
        "_boxData":"The NDFEM said local authority",
        "_image": "images/00212f49-800.webp"
    },{ //14
        "_pageTitle" : "McDonald to issue apology to teen texted by ex senator",
        "_intro" : "<i>Sinn Féin leader Mary Lou McDonald has said she will making a full apology to the teenager who received inappropriate texts from the party's former senator, Niall Ó Donnghaile</i> <br>She said: He will be given a full unequivocal apology. For me he is a young person who deserved to be fully comfortable within Sinn Féin. What happened to him was wrong. Niall Ó Donnghaile's behaviour was unacceptable and utterly inappropriate. No young person should have experienced that.",
        "_p1Title" : "Ms McDonald also confirmed she will correct the Dáil record regarding her statement last week in which she said the teeanger was 17 when the incident occured",
        "_p1" : "The teenager said in yesterday's Sunday Independent that he was 16 at the time, not 17 as stated in the Dáil by the Sinn Féin leader. Ms McDonald said: It is very important that the record of the Dáil is accurate, so of course it will be corrected. <br>Minister for Justice Helen McEntee said the correction was entirely appropriate. I think it's really appropriate that she does correct the record, and obviously if there is any more information or anything else that needs to be corrected that that would be done...<br>Minister McEntee added that the last few weeks illustrated that Sinn Féin did not have the appropriate structures in place and was not fit for Government.",
        "_p2Title" : "O'Neill says records show teenager was 17 at time",
        "_p2" : "Sinn Féin deputy leader and Stormont's First Minister Michelle O'Neill said party records state that the teenager who was sent inappropriate texts by the former senator was 17 at the time. <br>Asked during Stormont questions this afternoon to clarify what age the boy was, Michelle O'Neill replied: I can confirm that according to our records the young person was in in fact 17. That's the records we have in our files in terms of membership. The First Minister also said she was deeply sorry and angry that the young boy had to endure any inappropriate or unacceptable behaviour and that Niall Ó Donnghaile had faced consequences for his actions.",
        "_p3Title" : "Ms O'Neill also again insisted that Sinn Féin had followed an child protection protocols and that the protection of a young person was our primary concern",
        "_p3" : "UP MLA for North Belfast Brian Kingston said the party expections to question Ms O'Neill at the scrutiny Committee for The Executive Office on Wednesday regarding all safeguarding and misconduct matters of public concern.<br>Taoiseach Simon Harris said he would like to know what Ms McDonald intends to do, while Tánaiste Micheál Martin said serious questions remain to be answered by Sinn Féin. Speaking in Dublin earlier, Taoiseach Simon Harris said that instead of addressing the teenager's request, Ms McDonald had spent the weekend demanding an apology over a media satire. <br>Because I thought from listening to her in the past, from listening to all of us in the past. I thought we now adopt a victim-centred approach to these issues, he said. Tánaiste Micheál Martin said more clarification was needed as to why Sinn Féin opted not to fully inform the Oireachtas as to the reasons behind Niall Ó Donnghaile's resignation.",
        "_boxHeading" : "Speaking in Cork, he said: ",
        "_boxHeader":" Niall Ó Donnghaile ",
        "_boxLabel":"was there a cover up in",
        "_boxData":"Oireachtas from knowing fully as to the reasons as to why he resigned",
        "_image": "images/Screenshot 2024-10-21 232541.png"
    },{ //15
        "_pageTitle" : "US missile carrier flew through Irish territory to Israel",
        "_intro" : "<i>A United States Air Force missile carrier</i> – used to transport missile systems, one of which the US controversially deployed to Israel last week – flew through Irish territory four days ago on its way to an Israeli air base.",
        "_p1Title" : "The military plane",
        "_p1" : "The military plane came from one of just two US mainland bases housing the missile system now being operated in Israel. The same plane, same registration number, was recently pictured being loaded with missile launchers at a US base.<br>Military aircraft require permission from the minister for foreign affairs to enter Irish sovereign airspace, under Irish air navigation law. The Department of Foreign Affairs wouldn't comment when asked if tánaiste Micheál Martin had permitted this aircraft to fly through Irish sovereign airspace.",
        "_p2Title" : "One of two bases for US missile system",
        "_p2" : "Last Wednesday, 16 October 2024, flight RCH700 left Fort Cavazos Military Reservation in Texas headed for Portsmouth International Airport, a civilian and military airport on the US east coast.The plane is a United States Air Force C-17 Globemaster with the registration number 04-4129.<br>The US air base it left, Fort Cavazos, is one of two US mainland bases for the THAAD missile system, according to a US Congress report published last week. The US recently deployed the system to Israel.",
        "_p3Title" : "through Irish territory",
        "_p3" : "The same plane that made this journey – through Irish territory – was pictured in April this year being loaded with a missile launcher at an air base in Washington. On this October trip the plane stayed six hours at Portsmouth International Airport – around 100 kilometres north of Boston – before heading across the Atlantic.<br>Shortly after midnight last Thursday, 17 October, the plane entered Irish sovereign airspace off the coast of county Cork – three days after footage emerged of children being burnt alive in Gaza after an Israeli bomb attack. ",
        "_boxHeading" : "Less than a day after arriving for a pitstop at Ramstein",
        "_boxHeader":" the plane",
        "_boxLabel":"which had been about 10 kilometres inside Irish sovereign airspace the morning before",
        "_boxData":" left for Israel",
        "_image": "images/Screenshot 2024-10-21 233543.png"
    },{ //16
        "_pageTitle" : "Irish banks can't confirm mica certs will qualify homes for future mortgages",
        "_intro" : "<i>The Banking & Payments Federation Ireland (BPFI) admitted it can’t confirm whether homes repaired under the state mica scheme will qualify for mortgages in the future. Affected homeowners say this uncertainty means future buyers may be deterred from purchasing a home rebuilt under the scheme.</i> <br>The organisation said,  in a document seen by The Ditch, that while homeowners can secure mortgages based on the certificates from the Defective Concrete Blocks Enhanced Grant Scheme, future buyers will likely need additional proof. ",
        "_p1Title" : "Assurances regarding the future mortgageability of properties",
        "_p1" : " remediated under the grant scheme cannot be given by the banking sector alone,” said a spokesperson for BPFI, which represents lenders such as AIB, Bank of Ireland, and PTSB.<br>The organisation said anyone wishing to buy a home repaired under the scheme will need to hire their own surveyors, engineers, valuers and other experts should they wish to apply for a mortgage – even if the previous owner was issued a certificate by government declaring the property is structurally sound. ",
        "_p2Title" : "Assurances cannot be given by the banking sector alone",
        "_p2" : "The Banking & Payments Federation Ireland last December said it cannot guarantee future mortgages on properties remediated under the €2.7 billion defective concrete blocks scheme.<br>Though BPFI members “have confirmed their willingness to lend based on the certification provided and the professional opinion provided by others in the conveyancing process”, this is no guarantee remediated properties will qualify for future mortgages. “Assurances regarding the future mortgageability of properties remediated under the grant scheme cannot be given by the banking sector alone,” the organisation wrote last December in a letter to an affected homeowner. <br>“Future mortgageability is dependent on the sign-off and certification by others of remediation works under the grant scheme. It requires assurances by engineers, valuers, surveyors, insurers, conveyancing solicitors and any other party involved in the conveyancing transaction process.” The BPFI has requested the Department of Housing to establish an oversight committee to address these issues. But it is unclear how the committee will resolve technical uncertainties surrounding remediated properties that have been outlined by members of Engineers Ireland.",
        "_p3Title" : "A letter sent by Damien Owens of Engineers Ireland",
        "_p3" : "o the Central Bank of Ireland explained these uncertainties around future assessments of remediated properties. Pre-purchase surveys on these homes are described as unpredictable, with outcomes difficult to accurately predict even years, or decades, into the future. The letter also noted significant issues with the current assessment standard for defective concrete blocks. Many engineers view it as no longer fit-for-purpose, prompting Engineers Ireland to call for a revision by the end of 2024. <br> “The completion of this review is both essential and urgent,” wrote Owens. A spokesperson for the Department of Housing told The Ditch that government has called for “a fair and consistent approach” to be taken by the banking sector with customers dealing with the effects of defective concrete blocks on their houses.",
        "_boxHeading" : "The Banking & Payments Federation",
        "_boxHeader":"under the Defective Concrete Blocks",
        "_boxLabel":"remediation is supplied",
        "_boxData":"will be treated in the same manner",
        "_image": "images/500.jpg"
    },{ //17
        "_pageTitle" : "Irish woman shares gruesome leg injury after hornet sting in viral video",
        "_intro" : "<i>Warning: Some of the pictures in this article may be distressing</i> <br>An Irish woman was left in excruciating pain after being stung by a giant hornet outside her home in London.",
        "_p1Title" : "In the video, she holds up a small glass tube where a huge hornet with distinctive stripes is still alive.",
        "_p1" : "The 22-year-old, who is originally from Ireland, wrote: “Does anyone in the UK know what this is? I got bitten and it doesn’t look good. Big wasp bite?” She shows the wound near her ankle and the skin around it which has turned purple. Many viewers were horrified and urged Hannah to rush to hospital.<br>One warned: “That’s a giant hornet, one of the most aggressive, dangerous, venomous insects out there.”<br>In an updated video, Hannah has gone to hospital where she is being treated for a bone fracture.<br>And she revealed the swelling got so bad that it “broke” a cast on her leg.",
        "_p2Title" : "Wasp Bite",
        "_p2" : "The victim, who would only give her name as Hannah, said she did not realise how bad the sting was until her leg “doubled in size”. <br> She turned to TikTok to ask if anyone could identify the insect for her. ",
        "_p3Title" : "Football response",
        "_p3" : "Hannah recalled the incident online: “I fell asleep outside and woke up to a sharp pain. I shouted and one of my housemates caught it.”<br>Two weeks after the incident Hannah revealed she is slowly recovering but still can’t put weight on the affected leg",
        "_boxHeading" : "The leg wound",
        "_boxHeader":"Injury",
        "_boxLabel":"Leg",
        "_boxData":"Swollen",
        "_image": "images/hornetAnkle.webp"
    },{ //18
        "_pageTitle" : "Can You Trust This News?",
        "_intro" : "<i>Can You Trust This News?</i> <br>Can You Trust This News?",
        "_p1Title" : "Can You Trust This News?",
        "_p1" : "Can You Trust This News?",
        "_p2Title" : "Can You Trust This News?",
        "_p2" : "Can You Trust This News?",
        "_p3Title" : "Can You Trust This News?",
        "_p3" : "Can You Trust This News?",
        "_boxHeading" : "Can You Trust This News?",
        "_boxHeader":"Can You Trust This News?",
        "_boxLabel":"Can You Trust This News?",
        "_boxData":"Can You Trust This News?",
        "_image": "images/"    
    }
];
