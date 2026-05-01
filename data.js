const accounts = [
  {
    id: 1,
    title: "Red Scarf Girl: A Memoir of the Cultural Revolution",
    author: "Ji-li Jiang",
    description: "A 12-year-old girl from Shanghai documents her family's persecution during the Cultural Revolution. She witnesses her family's persecution and faces the dilemma of choosing loyalty to family or to the Communist Party. Her younger siblings are separated from her, and her father is imprisoned.",
    yearPublished: 1997,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 2,
    title: "The Cowshed: Memories of the Chinese Cultural Revolution",
    author: "Ji Xianlin",
    description: "A renowned Peking University professor imprisoned for nine months in a \"cowshed\" (detention center on campus). Documents torture, forced labor, and struggle sessions. The professor is persecuted by his own students and colleagues.",
    yearPublished: 1998,
    country: "China / United States",
    category: "Memoir",
    url: null
  },
  {
    id: 3,
    title: "Life and Death in Shanghai",
    author: "Nien Cheng",
    description: "A 51-year-old woman imprisoned in solitary confinement for 6.5 years. Arrested as an alleged 'foreign spy' for her education in London and work for Shell Oil. Her daughter was killed by Red Guards for refusing to denounce her mother.",
    yearPublished: 1986,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 4,
    title: "Red Azalea: A Memoir",
    author: "Anchee Min",
    description: "Born 1957 in Shanghai, Min was a Little Red Guard at age 5–6. At age 17, sent to a labor collective, then selected for Madame Mao's propaganda film studio as an actress. Details indoctrination of children and forced participation in propaganda.",
    yearPublished: 1994,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 5,
    title: "Red Sorrow: A Memoir of the Cultural Revolution",
    author: "Nanchu",
    description: "At age 13, witnesses Red Guards arrest and torture her parents. Left to care for younger brother while outcast from society in Shanghai. Sent to military-labor camp on the Sino-Soviet border. Describes the experience of an entire generation.",
    yearPublished: null,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 6,
    title: "The Secret Piano: From Mao's Labor Camps to Bach's Goldberg Variations",
    author: "Zhu Xiao-Mei",
    description: "A pianist imprisoned in Cultural Revolution labor camps. Documents how music and art served as resistance and survival.",
    yearPublished: 2003,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 7,
    title: "Wild Swans: Three Daughters of China",
    author: "Jung Chang",
    description: "A multigenerational family memoir spanning grandmother (concubine), mother (Communist revolutionary), and author through the CR period. Shows the impact across generations and changing political contexts.",
    yearPublished: 1991,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 8,
    title: "Forbidden Memory: Tibet during the Cultural Revolution",
    author: "Tsering Woeser",
    description: "First-hand account of the Cultural Revolution's impact specifically on Tibetan intellectuals and religious figures, documenting persecution of Tibetan cultural and religious leaders.",
    yearPublished: 2006,
    country: "United States / Tibet",
    category: "Memoir",
    url: null
  },
  {
    id: 9,
    title: "Really Enough: A True Story of Tyranny, Courage and Comedy",
    author: "Wenguang Huang",
    description: "A family memoir showing how one family attempted to practice traditional funeral rites despite Communist bans during the CR. Documents resistance to state control over private and family life.",
    yearPublished: 2010,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 10,
    title: "Chinese Cinderella: The True Story of an Unwanted Daughter",
    author: "Adeline Yen Mah",
    description: "Primarily about early life, this memoir includes accounts of the author's experiences during the Cultural Revolution in China. Documents family persecution.",
    yearPublished: 1997,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 11,
    title: "China's Red Years: The Great Leap Forward and the Cultural Revolution",
    author: "Jan Wong",
    description: "A Canadian-Chinese journalist's account of living through the CR as a Western-educated woman. Documents struggle sessions, labor assignments, and gradual disillusionment leading to journalism.",
    yearPublished: 1996,
    country: "United States / Canada",
    category: "Memoir",
    url: null
  },
  {
    id: 12,
    title: "Bend, Not Break: A Life in Two Worlds",
    author: "Ping Fu",
    description: "Childhood during the CR, separation from family, experiences in exile and labor camps. Eventually escaped to the United States and founded a tech company.",
    yearPublished: 2012,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 13,
    title: "The Execution of Mayor Yin and Other Stories from the Great Proletarian Cultural Revolution",
    author: "Ah Cheng",
    description: "Fictionalized accounts based on the author's lived experiences during the CR and experiences of people known to the author. Published as a story collection.",
    yearPublished: null,
    country: "United States",
    category: "Literary Fiction",
    url: null
  },
  {
    id: 14,
    title: "Confessions: An Innocent Man's Account of his Arrest, Interrogation and Imprisonment in Communist China",
    author: "Kang Zhengguo",
    description: "Attempted to obtain a copy of Doctor Zhivago during the CR. Arrested and sentenced to a rural labor reeducation camp. Documents the severity of persecution for minor acts of intellectual curiosity.",
    yearPublished: 1988,
    country: "United States",
    category: "Memoir",
    url: null
  },
  {
    id: 15,
    title: "The Good Women of China: Hidden Voices",
    author: "Xinran (with Esther Tyldesley)",
    description: "A collection of interviews and testimonies from Chinese women about their CR experiences. Xinran, herself a CR survivor, documents female perspectives on persecution and survival.",
    yearPublished: 2002,
    country: "United States",
    category: "Oral History",
    url: null
  },
  {
    id: 16,
    title: "CR/10 Project (Cultural Revolution: 10)",
    author: "University of Pittsburgh East Asian Library",
    description: "Oral history project initiated 2015. Contains 300+ video interviews of 10 minutes each with individuals who experienced the CR. Interviews conducted in Chinese with English subtitles, collected in USA, China, Canada, and other countries. Each interviewee was asked: \"What was most memorable about your experience during the CR?\" Ongoing project.",
    yearPublished: 2015,
    country: "United States",
    category: "Video / Oral History Collection",
    url: "https://digital.library.pitt.edu/collection/chinas-cultural-revolution-memories-the-CR10-project"
  },
  {
    id: 17,
    title: "Down to the Countryside Movement Collection",
    author: "Dartmouth Library (curators: Nien Lin Xie, Ding Ye)",
    description: "Dartmouth Library collection of primary sources from 17 million 'sent-down youth' or 'rusticated youth' relocated 1968–1978 to remote villages. Contains diaries, letters, photographs, manuscripts, and artifacts. Nearly 300,000 digitized items.",
    yearPublished: 2016,
    country: "United States",
    category: "Archival Collection",
    url: "https://www.library.dartmouth.edu/digital/digital-collections/down-countryside-movement"
  },
  {
    id: 18,
    title: "\"Life Starts at Sixteen\" Memoir by Liu Ping",
    author: "Liu Ping",
    description: "Liu Ping was sent to Inner Mongolia in 1969 at age 16. Manuscript written in 1994 describing 5 years (1969–1974) as rusticated youth. Her father committed suicide during CR persecution; she was labeled 'child who could be educated and transformed.' Details physical labor, hardship, constant surveillance. Diaries from 1969–1972 are also preserved.",
    yearPublished: 1994,
    country: "China / United States",
    category: "Memoir",
    url: "https://collections.dartmouth.edu/teitexts/rusticated-youth-tei/diplomatic/Life_starts_at_Sixteen-diplomatic.html"
  },
  {
    id: 19,
    title: "The Revolution They Remember (Documentary Film)",
    author: "University of Pittsburgh East Asian Library & Dartmouth College Library",
    description: "Feature-length documentary (produced 2019–2020) featuring interviews from the CR/10 Project and Dartmouth's Down to the Countryside Movement collection. Includes archival footage, photographs, and scholarly commentary. Free online streaming.",
    yearPublished: 2020,
    country: "United States",
    category: "Documentary",
    url: "https://culturalrevolution.pitt.edu/"
  },
  {
    id: 20,
    title: "CR/10 Project – Individual Video Interviews",
    author: "Various Witnesses (CR/10 Project)",
    description: "Sample interview: a woman from Guangdong describing life 'far outside government control' and listening to Voice of America during the CR. Each interview is approximately 10 minutes with English subtitles. 300+ individual interviews archived and openly accessible.",
    yearPublished: 2015,
    country: "United States",
    category: "Video / Oral History Collection",
    url: "https://digital.library.pitt.edu/islandora/object/pitt:7198590/viewer"
  },
  {
    id: 21,
    title: "Chinese Cultural Revolution Database (中国文化大革命文库)",
    author: "Various",
    description: "Contains 10,000+ items: Central Party documents, speeches by Communist leaders, official newspapers from the 1960s–1970s, Red Guard texts, and hard-to-reach archives from diverse newspapers. Updated annually. Accessible through academic institutions.",
    yearPublished: null,
    country: "China / United States",
    category: "Archival Collection",
    url: null
  },
  {
    id: 22,
    title: "Morning Sun: A Film and Website about the Cultural Revolution",
    author: "Long Bow Group",
    description: "Documentary film with accompanying website featuring personal histories, narratives, and events related to the CR. Includes interviews and first-hand accounts.",
    yearPublished: null,
    country: "United States",
    category: "Documentary",
    url: null
  },
  {
    id: 23,
    title: "Ten Years of Madness: Oral Histories of China's Cultural Revolution",
    author: "Feng Jicai (compiler)",
    description: "A collection of oral histories expertly conducted and arranged by renowned Chinese writer Feng Jicai. Features a diverse cross-section of individuals: intellectuals, workers, and peasants. Originally published in China in 1991.",
    yearPublished: 1991,
    country: "United States",
    category: "Oral History",
    url: null
  },
  {
    id: 24,
    title: "Victims of the Cultural Revolution: Testimonies of China's Tragedy",
    author: "Wang Youqin",
    description: "Based on decades of research (started 2004), this work documents deaths and testimonies of 600+ CR victims. Wang Youqin, Senior Instructional Professor at the University of Chicago, maintains a memorial website with victim testimonies.",
    yearPublished: 2008,
    country: "United States",
    category: "Oral History",
    url: null
  },
  {
    id: 25,
    title: "Cultural Revolution: Testimonies of 14 Witnesses from Nanjing University",
    author: "Dong Guoqiang (compiler)",
    description: "An oral history project documenting 14 witnesses who were at Nanjing University during the Cultural Revolution. Published through Modern China Studies.",
    yearPublished: null,
    country: "United States",
    category: "Oral History",
    url: null
  },
  {
    id: 26,
    title: "Mao's Lost Children: Stories of the Rusticated Youth of China's Cultural Revolution",
    author: "Ou Nianzhong and Liang Yongkang (eds.), trans. Laura Maynard",
    description: "A collection of memoirs from sent-down youth, including accounts from a Hainan Island state farm. Participants describe feelings of defiance and resistance.",
    yearPublished: null,
    country: "United States",
    category: "Oral History",
    url: null
  },
  {
    id: 27,
    title: "The Cultural Revolution as History",
    author: "Joseph W. Esherick, Paul G. Pickowicz, Andrew G. Walder (eds.)",
    description: "A collection of research essays by graduate students who conducted extensive fieldwork, interviews, and archival research. Includes detailed grassroots accounts of CR violence and lived experience.",
    yearPublished: 2006,
    country: "United States",
    category: "Academic Collection",
    url: null
  },
  {
    id: 28,
    title: "Proletarian Power: Shanghai in the Cultural Revolution",
    author: "Elizabeth L. Perry and Li Xun",
    description: "Based on extensive archival access and interviews, this work reveals Shanghai's exceptional experience during the CR compared to other cities. First-hand accounts are integrated throughout.",
    yearPublished: null,
    country: "United States",
    category: "Academic Collection",
    url: null
  },
  {
    id: 29,
    title: "The Killing Wind: A Chinese County's Descent Into Madness During the Cultural Revolution",
    author: "Yang Jisheng",
    description: "A detailed account of violence at the county level based on interviews and archival research. Documents local persecution and chaos.",
    yearPublished: null,
    country: "China / United States",
    category: "Academic Collection",
    url: null
  },
  {
    id: 30,
    title: "Inner Mongolia During the Cultural Revolution: A Pogrom and Its Aftermath",
    author: "Cheng Tiejun, Uradyn E. Bulag, Mark Selden",
    description: "Cheng Tiejun provides first-person recollections of being a Red Guard in Inner Mongolia. Documents persecution of Mongol intellectuals and leaders, resulting in 16,000+ deaths.",
    yearPublished: 2023,
    country: "United States",
    category: "Academic Collection",
    url: null
  },
  {
    id: 31,
    title: "Balzac and the Little Chinese Seamstress",
    author: "Dai Sijie",
    description: "A novel based on the author's personal experiences as sent-down youth during the CR. Two youths are relocated to a remote mountain village for 're-education.' Originally written in French.",
    yearPublished: 2000,
    country: "United States / France",
    category: "Literary Fiction",
    url: null
  },
  {
    id: 32,
    title: "Waiting",
    author: "Ha Jin",
    description: "A National Book Award–winning novel drawing on the author's lived experience and observations during the CR era in China. The first-hand narrative is grounded in actual experiences.",
    yearPublished: 1999,
    country: "United States",
    category: "Literary Fiction",
    url: null
  },
  {
    id: 33,
    title: "Do Not Say We Have Nothing",
    author: "Madeleine Thien",
    description: "A novel with significant portions set during the Cultural Revolution. Incorporates the author's family experiences during the period. Finalist for the Man Booker Prize.",
    yearPublished: 2016,
    country: "Canada / United States",
    category: "Literary Fiction",
    url: null
  },
  {
    id: 34,
    title: "\"My Uncle Was a Red Guard in China's Cultural Revolution. He Isn't Sorry.\"",
    author: "Foreign Policy Magazine",
    description: "First-person family interviews with an uncle nicknamed Lishui who was 18 during the CR. He expressed no regret for his actions 50 years later. Includes accounts of struggle sessions, forced confessions of grandfather, and a perpetrator's perspective.",
    yearPublished: 2016,
    country: "United States",
    category: "Journalism",
    url: "https://foreignpolicy.com/2016/05/16/my-uncle-was-a-red-guard-in-chinas-cultural-revolution-he-isnt-sorry/"
  },
  {
    id: 35,
    title: "\"A Survivor's Account of the Cultural Revolution\" (Video)",
    author: "Min Zhou (interviewed by Kristie Lu Stout)",
    description: "Min Zhou shares her experiences on camera. Her parents were sent to a labor camp when she was age 10. First-person video testimony.",
    yearPublished: 2016,
    country: "United States",
    category: "Video / Oral History Collection",
    url: "https://www.youtube.com/watch?v=rieA7USjDio"
  },
  {
    id: 36,
    title: "\"Surviving China's Cultural Revolution\"",
    author: "Qijian Wang (Asian American Writers' Workshop)",
    description: "Interview with Qijian Wang, an acupuncturist in Flushing, NY. Sent to remote Da Ba Mountain village at age 16 in 1968. Documents rural labor camp experience, family separation, brother's death in camp, and denial of college admission due to father's 'traitor' status.",
    yearPublished: 2016,
    country: "United States",
    category: "Journalism",
    url: "https://aaww.org/surviving-chinas-cultural-revolution/"
  },
  {
    id: 37,
    title: "\"Confessions of a Red Guard, 50 Years after China's Cultural Revolution\"",
    author: "Anonymous Red Guard",
    description: "First-person confession from a person who became a Red Guard as a junior high school student (age 13 when CR began). Participated in violence and denunciations. Now describes guilt and personal responsibility.",
    yearPublished: 2016,
    country: "United States",
    category: "Journalism",
    url: "https://gantnews.com/2016/05/15/confessions-of-a-red-guard-50-years-after-chinas-cultural-revolution/"
  },
  {
    id: 38,
    title: "CR/10 Project – North Carolina Interviews",
    author: "Various Witnesses (UNC Library)",
    description: "UNC Library contributed interviews with CR witnesses and family members from North Carolina. Three audio/video interviews conducted in person in Cary and Chapel Hill. Some interviewees requested anonymity with still photos instead of video.",
    yearPublished: 2015,
    country: "United States",
    category: "Video / Oral History Collection",
    url: "https://guides.lib.unc.edu/cul_revolution/primary"
  },
  {
    id: 39,
    title: "CR/10 Project – Woman from Anhui",
    author: "Anonymous (CR/10 Project)",
    description: "Individual video interview from the CR/10 Project. Witness: a woman from Anhui, born in the 1960s, from a military family background, a student during the CR. Part of the 300+ interview archive.",
    yearPublished: 2015,
    country: "United States",
    category: "Video / Oral History Collection",
    url: "https://digital.library.pitt.edu/collection/chinas-cultural-revolution-memories-the-CR10-project"
  },
  {
    id: 40,
    title: "CR/10 Project – Man from Beijing",
    author: "Anonymous (CR/10 Project)",
    description: "Individual video interview from the CR/10 Project. Witness: a man from Beijing, born in the 1960s, from an intellectual family background, with graduate education, a student during the CR. Part of the 300+ interview archive.",
    yearPublished: 2015,
    country: "United States",
    category: "Video / Oral History Collection",
    url: "https://digital.library.pitt.edu/collection/chinas-cultural-revolution-memories-the-CR10-project"
  },
  {
    id: 41,
    title: "CR/10 Project – Woman from Guangdong",
    author: "Anonymous (CR/10 Project)",
    description: "Individual video interview from the CR/10 Project. Witness: a woman from Guangdong who describes life 'far outside government control' and secretly listening to Voice of America during the Cultural Revolution. Part of the 300+ interview archive.",
    yearPublished: 2015,
    country: "United States",
    category: "Video / Oral History Collection",
    url: "https://digital.library.pitt.edu/collection/chinas-cultural-revolution-memories-the-CR10-project"
  },
  {
    id: 42,
    title: "Mao's Last Revolution: The Political Evolution of Mao Zedong",
    author: "Roderick MacFarquhar and Michael Schoenhals",
    description: "A comprehensive account incorporating extensive interviews, memoirs, and newly available documents. First-hand testimonies are integrated throughout to document Mao's political machinations and CR experiences from multiple perspectives.",
    yearPublished: 2006,
    country: "United States",
    category: "Academic Collection",
    url: null
  }
];

const categories = [
  "All",
  "Memoir",
  "Oral History",
  "Video / Oral History Collection",
  "Archival Collection",
  "Documentary",
  "Academic Collection",
  "Literary Fiction",
  "Journalism"
];
