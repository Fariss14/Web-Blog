export interface Itinerary {
  title: string
  image: string
  description: string
  trivia?: string // Add optional trivia field
}

export interface DayData {
  number: number
  title: string
  date: string
  location: string
  image: string
  description: string
  tourGuide?: string
  itineraries: Itinerary[]
  reflection?: string
  isAdvanceParty?: boolean
}

export const tripData: DayData[] = [
  {
    number: 1,
    title: "City Tour",
    date: "Monday, April 7, 2025",
    location: "Manila",
    image: "/public/day-1-images/Arrival.png",
    description: `
      <p>Our first day in Manila set the tone for the enriching experiences that lay ahead, beginning with an immersive journey into the country’s colonial past at the historic district of Intramuros. Known as the “Walled City,” Intramuros stands as a living testament to the Spanish colonial era that profoundly shaped the Philippines’ cultural, architectural, and religious identity. As we passed through its stone gates and onto cobblestone streets lined with preserved 16th-century structures, we felt as though we were stepping back in time.</p>
      
      <p>The ambiance of Intramuros was both serene and powerful. Horse-drawn carriages—locally known as kalesas—moved gracefully along narrow lanes, while uniformed guards in traditional attire stood at designated posts, adding a theatrical yet educational flair to the surroundings. Our first major stop was the Manila Cathedral, a majestic Romanesque structure that has stood in various incarnations since the 1500s. Inside, its vaulted ceilings, stained glass windows, and tranquil atmosphere offered a glimpse into the deep religious roots that continue to influence Filipino society. Not far from there, we visited San Agustin Church, the oldest stone church in the country and a UNESCO World Heritage Site. The church’s intricate baroque details, ancient wooden doors, and adjacent museum provided a rich perspective on the fusion of faith, art, and resilience through centuries of colonial rule and natural disasters.</p>
      
      <p>Perhaps the most emotionally resonant part of our tour was Fort Santiago, located at the edge of the Pasig River within Intramuros’ western wall. Originally built by Spanish conquistador Miguel López de Legazpi as a military defense fortress, Fort Santiago has stood through centuries of battles, revolts, occupations, and change. As we explored its stone ramparts and shaded courtyards, we were struck by the fort’s somber significance. It was here that Dr. José Rizal, the Philippines’ national hero, was imprisoned before his execution in 1896. Walking through the preserved prison cell and tracing his final footsteps etched into the pavement leading to the execution site evoked a deep sense of reverence and reflection.</p>

      <p>The museum within Fort Santiago, dedicated to Rizal’s life and works, deepened our understanding of his ideals, literary contributions, and the sacrifice he made in the pursuit of Philippine independence. Through interactive exhibits, personal belongings, and historical documents, we witnessed how one man's vision helped ignite a nation’s call for freedom.</p>

      <p>More than just a tourist attraction, Intramuros offered us a vivid narrative of the Philippines’ colonial journey, its resistance, and its enduring cultural identity. It was a day filled with historical learning, emotional introspection, and newfound appreciation for the rich tapestry of events that shaped the Philippines into the country it is today. As our first official destination, Intramuros anchored our trip in historical context and provided a meaningful foundation for the experiences that followed.</p>
      `,
  
    tourGuide: "Ate Veron & Kuya Enan",
    itineraries: [
      {
        title: "Departure from Zamboanga",
        image: "/public/day-1-images/Departure.png",
        description:
          "We departed from Zamboanga City early in the morning, excited to begin our educational field trip. The flight to Manila gave us time to review our itinerary and prepare for the busy days ahead.",
        trivia:
          "Zamboanga City is known as 'Asia's Latin City' because of its Spanish-influenced Chavacano language, which is the only Spanish-based creole language in Asia.",
      },
      {
        title: "First Stop: Intramuros",
        image: "/public/day-1-images/Intramuros.png",
        description:
          "Intramuros, known as the 'Walled City', is the historic core of Manila. Built during the Spanish colonial period, this 0.67 square kilometer stone citadel contains numerous historic sites including churches, plazas, and government buildings that showcase the Spanish colonial architecture and influence.",
        trivia:
          "The walls of Intramuros were built by Filipino forced laborers and Chinese craftsmen between 1590 and 1872. At their peak, these defensive walls were 22 feet high and 3 kilometers in circumference.",
      },
      {
        title: "Second Stop: Fort Santiago",
        image: "/public/day-1-images/FortSantiago.png",
        description:
          "Fort Santiago is a citadel built by Spanish conquistador Miguel López de Legazpi for the newly established city of Manila. The defense fortress is part of the structures of Intramuros, and is one of the most important historical sites in Manila. It was the prison of national hero José Rizal before his execution in 1896.",
        trivia:
          "The bronze footprints embedded in the ground at Fort Santiago trace José Rizal's final walk from his cell to the site of his execution at Bagumbayan (now Rizal Park).",
      },
      {
        title: "Third Stop: Rizal Park",
        image: "/public/day-1-images/RizalPark.png",
        description:
          "Rizal Park, also known as Luneta Park, is one of the largest urban parks in Asia. It is located in the heart of Manila and is named after the Philippine national hero, Dr. José Rizal. The park features gardens, historical markers, and the Rizal Monument, which contains the remains of José Rizal.",
        trivia:
          "The Rizal Monument contains the remains of José Rizal, but interestingly, the monument faces exactly 23 degrees northeast, and the exact reason for this specific orientation remains a mystery to historians.",
      },
      {
        title: "Last Stop: Mall of Asia",
        image: "/public/day-1-images/MOA.png",
        description:
          "SM Mall of Asia is one of the largest shopping malls in the Philippines and the world. Located in Bay City, Pasay, the mall features various shopping, dining, and entertainment options, including an IMAX theater, ice skating rink, and a science discovery center.",
        trivia:
          "When it opened in 2006, SM Mall of Asia was the third largest shopping mall in the world. Its seaside promenade offers a spectacular view of Manila Bay's famous sunset.",
      },
    ],
    reflection:
      "Our first day was filled with rich historical insights and cultural experiences. Walking through Intramuros and Fort Santiago gave us a deeper appreciation for Philippine history and the struggles for independence. The contrast between these historical sites and the modern Mall of Asia highlighted the country's journey from colonial past to contemporary development.",
  },
  {
    number: 2,
    title: "Subic Bay, Olongapo",
    date: "Tuesday, April 8, 2025",
    location: "Subic Bay, Olongapo",
    image: "/public/day-2-images/SBMA-Law.png",
    description: `
      <p>We began with an informative session at the SBMA Law Enforcement Department – Communication Branch. Here, we were introduced to the systems that ensure order and safety throughout the Freeport Zone. Through detailed briefings and live demonstrations, we learned how radio communications, surveillance networks, and incident response protocols are coordinated through advanced IT platforms. Officers explained how real-time data transmission, GPS tracking, and emergency dispatch systems are used daily to respond swiftly and efficiently to any security concerns. It was fascinating to see how a formerly military-controlled space has been adapted to meet the demands of civilian enforcement and commercial security, using cutting-edge technology to uphold safety and public trust.</p>
      
      <p>Our next stop took us to the SBMA Seaport Department, where we explored the Vessel Traffic Management System (VTMS)—the technological heart of Subic’s maritime operations. Here, we observed how maritime traffic is monitored and managed with remarkable precision. The VTMS uses a combination of radar, satellite navigation, radio communications, and computerized tracking to ensure the safe and efficient movement of vessels in and out of the port. The system’s real-time data analysis allows port authorities to manage everything from docking schedules to collision avoidance, even in challenging weather conditions. We were impressed by how seamlessly information technology enables both regulatory oversight and operational fluidity in such a complex maritime environment.</p>
      
      <p>These visits provided us with a clear view of how essential digital infrastructure has become in regulating and securing modern trade routes. We also learned about international compliance standards, coordination with the Philippine Coast Guard, and the constant vigilance required to prevent smuggling, piracy, and environmental violations. The day highlighted how information systems are not only tools for efficiency but also critical safeguards in national economic and security operations.</p>

      <p>To cap off our visit to Subic, we made a quick but enjoyable stop at Royal Duty-Free Mall for a 30-minute shopping break. The mall offered a welcome chance to relax, browse international and local products, and enjoy a taste of Subic’s commercial life. Some of us picked up snacks and souvenirs, while others explored the range of imported goods that reflect Subic's global connections. Though brief, the experience added a light-hearted contrast to the more technical aspects of our itinerary and reminded us of the vibrant economic activity that fuels the region.</p>

      <p>Overall, Day 2 offered a compelling mix of learning and leisure. The visit to SBMA underscored how essential communication and maritime technologies are in maintaining the smooth operation of a global trade hub, while also giving us a glimpse into how a historic military base has evolved into a forward-looking model of economic and technological progress. The insights we gained will undoubtedly shape our understanding of national infrastructure and the critical role IT plays in supporting it.</p>
    `,
    itineraries: [
      {
        title: "SBMA Law Enforcement Department - Communication Branch",
        image: "/public/day-2-images/SBMA-Law.png",
        description:
          "We visited the SBMA Law Enforcement Department's Communication Branch to learn about their advanced communication systems and protocols. The department demonstrated how they coordinate security operations across the Subic Bay Freeport Zone using integrated communication networks.",
          },
      {
        title: "SBMA Seaport Department (Vessel Traffic Management System)",
        image: "/public/day-2-images/SBMA-Seaport.png",
        description:
          "At the SBMA Seaport Department, we were introduced to the Vessel Traffic Management System (VTMS). This sophisticated system monitors and manages maritime traffic in Subic Bay, ensuring safe navigation and efficient port operations. We observed how operators use radar, AIS (Automatic Identification System), and other technologies to track vessel movements in real-time.",
         },
      {
        title: "Subic Bay Exhibition and Convention Center",
        image: "/public/day-2-images/SUBECC.png",
        description:
          "We visited the Subic Bay Exhibition and Convention Center (SBECC), a modern facility that hosts various events, conferences, and exhibitions. We learned about the technology infrastructure that supports these events, including audio-visual systems, networking capabilities, and digital signage.",
        },
      {
        title: "Subic Bay Mall",
        image: "/public/day-2-images/SubicMall.png",
        description:
          "We ended our day with a visit to Subic Bay Mall, where we had time for shopping and dinner. The mall provided a relaxing environment after a day of educational visits, and we had the opportunity to observe retail technologies in action, from point-of-sale systems to inventory management.",
      },
    ],
    reflection:
      "Day 2 provided valuable insights into maritime security and communication systems. The visit to the SBMA facilities demonstrated practical applications of the technologies we've studied in our IT courses, particularly in the areas of network communications and security systems. Seeing how these systems operate in a real-world environment enhanced our understanding of their importance in maintaining safety and security in maritime operations.",
  },
  {
    number: 3,
    title: "Museums Day",
    date: "Wednesday, April 9, 2025",
    location: "Manila",
    image: "/public/day-3-images/Museo-Manuel.png",
    description: `
      <p>Our third day was a journey into the heart of the Filipino identity, as we explored the nation’s storied past and rich natural heritage through immersive visits to two significant cultural institutions: Museo ni Manuel L. Quezon and the National Museum of Natural History. These visits provided us with a profound appreciation of the many dimensions that shape the Philippines—from its political legacy to its extraordinary biodiversity.</p>
      
      <p>Our first stop was the Museo ni Manuel L. Quezon, located within the historic Quezon Memorial Circle. The museum pays tribute to one of the most influential figures in Philippine history, President Manuel L. Quezon, whose leadership helped steer the country toward self-governance during the Commonwealth period. Through thoughtfully curated exhibits, we gained a deeper understanding of Quezon’s contributions, including the establishment of a national language and his strong stance on social justice and democratic values. Personal artifacts, interactive displays, and archival footage offered us a window into the era, making history feel both tangible and emotionally resonant. The museum did not merely present facts—it told a story of vision, struggle, and progress, encouraging us to reflect on the role of leadership in shaping a nation’s destiny.</p>
      
      <p>In the afternoon, we made our way to the National Museum of Natural History, a striking institution dedicated to celebrating the natural wonders of the Philippines. From the moment we entered its iconic Tree of Life atrium, we were captivated by the museum’s modern design and expansive galleries. Inside, we encountered a rich tapestry of exhibits that highlighted the country's ecological diversity, from rare flora and fauna to fascinating geological formations. We were particularly amazed by the preserved specimens of endangered species, the stunning dioramas of native habitats, and the stories of conservation efforts that are crucial in protecting the Philippines' environmental legacy.</p>

      <p>What stood out across both institutions was the innovative use of technology to enhance learning. Digital touchscreens, multimedia presentations, augmented reality features, and interactive timelines brought history and science to life in ways that traditional displays could not. These modern tools made the experience more engaging, accessible, and relevant—especially for our generation, which is so deeply immersed in digital media. Through these technologies, abstract concepts were made clear, and complex narratives became easier to grasp and connect with emotionally.</p>

      <p>In the afternoon, we made our way to the National Museum of Natural History, a striking institution dedicated to celebrating the natural wonders of the Philippines. From the moment we entered its iconic Tree of Life atrium, we were captivated by the museum’s modern design and expansive galleries. Inside, we encountered a rich tapestry of exhibits that highlighted the country's ecological diversity, from rare flora and fauna to fascinating geological formations. We were particularly amazed by the preserved specimens of endangered species, the stunning dioramas of native habitats, and the stories of conservation efforts that are crucial in protecting the Philippines' environmental legacy.</p>
    `,
    itineraries: [
      {
        title: "Museo ni Manuel L. Quezon",
        image: "/public/day-3-images/Museo-Manuel.png",
        description:
          "We visited the Museo ni Manuel L. Quezon, dedicated to the life and legacy of the second President of the Philippines. The museum houses personal memorabilia, photographs, and documents that chronicle Quezon's contributions to Philippine independence and governance. The exhibits provided insights into a crucial period of Philippine history and the leadership that shaped the nation.",
        trivia:
          "President Manuel L. Quezon is known for creating the Filipino National Language and for his open-door policy that saved over 1,300 Jewish refugees from the Holocaust by providing them sanctuary in the Philippines.",
      },

      {
        title: "National Museum of Natural History",
        image: "/public/day-3-images/National-Museum.png",
        description:
          "Our afternoon was spent at the National Museum of Natural History, which showcases the Philippines' rich biodiversity and natural heritage. The museum features impressive exhibits on Philippine flora and fauna, geological formations, and ecological systems. The centerpiece 'Tree of Life' structure symbolizes the interconnectedness of all living things and serves as both an architectural marvel and a thematic guide to the museum's collections.",
        trivia:
          "The building housing the National Museum of Natural History was originally constructed in 1940 as the Agriculture and Commerce Building. Its conversion into a museum preserved the neoclassical architecture while incorporating modern sustainable design elements, including the dramatic glass and steel dome of the 'Tree of Life.'",
      },
    ],
    reflection:
      "Day 3 offered a deeper connection to our national identity through history and natural heritage. The Quezon Museum highlighted the importance of visionary leadership in nation-building, while the Natural History Museum reminded us of the Philippines' incredible biodiversity and the need for conservation efforts. As IT students, we were particularly interested in how technology is being used in museum curation and interactive displays to enhance visitor experiences.",
  },
  {
    number: 4,
    title: "Finance and Technology Day",
    date: "Thursday, April 10, 2025",
    location: "Manila",
    image: "/public/day-4-images/BSP.png",
    description: `
      <p>Our fourth day was dedicated to exploring the dynamic intersection of finance, technology, and infrastructure—three foundational pillars that support the modern economy. The day’s itinerary was designed to provide us with an in-depth understanding of how information technology plays a vital role in ensuring the stability, efficiency, and resilience of financial systems and critical infrastructure in the Philippines. Through a series of highly engaging visits, we saw firsthand how technological innovation and robust infrastructure form the backbone of national development.</p>
      
      <p>We began our day at the Bangko Sentral ng Pilipinas (BSP), the central bank of the Philippines and one of the most critical institutions in the country’s financial ecosystem. Our visit offered a rare behind-the-scenes look at the sophisticated IT systems and protocols that underpin the BSP’s mission of maintaining monetary and financial stability. Through guided tours and insightful briefings, we learned how technology is seamlessly integrated into various aspects of the bank’s operations—from currency issuance and management to real-time economic monitoring and financial regulation. The use of advanced analytics, cybersecurity measures, and digital platforms allows the BSP to safeguard the integrity of the financial system, detect fraudulent activity, and make informed policy decisions that affect the entire nation.</p>
      
      <p>What struck us most was the complexity and precision required to manage such a massive flow of sensitive data. We explored how secure data centers, automated financial reporting systems, and digital payment infrastructures all come together to support a banking environment that is increasingly reliant on real-time, accurate information. It was a powerful reminder of how crucial information technology has become not only in private financial institutions, but also in ensuring trust and stability in the public financial sector.</p>

      <p>In the afternoon, we shifted our focus to infrastructure with a visit to Hytec Power, a leading provider of uninterrupted power supply (UPS) systems. This visit complemented our earlier experience by highlighting the importance of electrical continuity and protection for IT infrastructure, especially in mission-critical environments like banks, hospitals, and data centers. At Hytec, we were introduced to the technical specifications, design considerations, and maintenance protocols of modern UPS systems. We learned how even momentary power interruptions can lead to data loss, operational failure, or security vulnerabilities—making backup power solutions an essential part of any comprehensive IT strategy.</p>

      <p>The presentations and demonstrations at Hytec Power underscored how tightly interconnected power and IT systems have become. We gained insight into how UPS systems are designed to work in harmony with servers, routers, and data centers to ensure that essential services remain online regardless of grid fluctuations or emergencies. This experience deepened our understanding of the invisible yet indispensable role infrastructure plays in supporting digital operations.</p>
    `,
    itineraries: [
      {
        title: "Bangko Sentral ng Pilipinas",
        image: "/public/day-4-images/BSP.png",
        description:
          "Our morning was spent at the Bangko Sentral ng Pilipinas (BSP), the Philippines' central bank. We learned about the country's monetary policy, financial system stability measures, and the technologies used in currency production and counterfeit prevention. The tour included visits to the Money Museum and presentations on the BSP's digital transformation initiatives, including their research on central bank digital currencies.",
        trivia:
          "The BSP's Security Plant Complex, which prints Philippine currency, uses specialized security features including invisible ultraviolet ink, microprinting, and serialized holograms that are among the most advanced anti-counterfeiting measures in Southeast Asia.",
      },
      {
        title: "Hytec Power Inc.",
        image: "/public/day-4-images/Hytec.png",
        description:
          "At Hytec Power Inc., we were introduced to modern power solutions and technologies. The company specializes in uninterruptible power supplies (UPS), power conditioning, and renewable energy systems. We observed how these technologies are crucial for data centers and IT infrastructure, ensuring continuous operation even during power disruptions. The engineers demonstrated various power management systems and explained their importance in protecting sensitive electronic equipment.",
        trivia:
          "A single millisecond of power disruption can cause critical data systems to crash. The UPS systems demonstrated at Hytec can detect power anomalies in less than 2 milliseconds and switch to backup power in under 4 milliseconds—faster than most electronic devices can even register the disruption.",
      },
      {
        title: "Trinoma Mall",
        image: "/public/day-4-images/Trinoma.png",
        description:
          "We concluded the day with some leisure time at Trinoma Mall, one of Metro Manila's premier shopping destinations. Beyond shopping and dining, we observed various technological implementations in retail environments, including digital payment systems, automated customer service kiosks, and smart building management systems.",
        trivia:
          "The name 'Trinoma' stands for 'Triangle North of Manila', referring to the mall's triangular lot and its location in the northern part of Metro Manila. The mall's smart building management system reduces energy consumption by up to 30% compared to conventional shopping centers of similar size.",
      },
    ],
    reflection:
      "Day 4 provided valuable insights into the intersection of finance, technology, and infrastructure. The BSP visit highlighted how financial systems are increasingly reliant on advanced technologies for security and efficiency. At Hytec Power, we gained practical knowledge about power management solutions that are essential for IT operations. Even our mall visit offered observations about retail technologies that enhance customer experiences and operational efficiency.",
  },
  {
    number: 5,
    title: "Transportation and Traffic Management",
    date: "Friday, April 11, 2025",
    location: "Manila",
    image: "/public/day-5-images/LRTA-Line2.png",
    description: `
      <p>Our fifth day was a deep dive into the complex world of urban mobility and the vital role information technology plays in managing transportation systems in Metro Manila—one of Southeast Asia’s most densely populated and traffic-congested urban centers. With millions of commuters navigating the city's roads and railways daily, the challenge of maintaining efficient, safe, and responsive transportation is immense. On this day, we had the opportunity to observe firsthand how modern digital solutions are being harnessed to address these ongoing urban challenges.</p>
      
      <p>Our exploration began with a visit to the Light Rail Transit Authority (LRTA), where we were introduced to the critical role IT systems play in ensuring the safe and efficient operation of Manila’s railway network. Through presentations and facility tours, we saw how centralized monitoring systems track train schedules, manage station activities, and respond to any operational issues in real time. The use of automated signaling, passenger information systems, and predictive maintenance software demonstrated how the integration of technology enhances both reliability and passenger experience. We gained insights into how data is collected from various points across the rail network and how this information is used to optimize scheduling, reduce delays, and improve overall system performance.</p>
      
      <p>Following this, we proceeded to the Metropolitan Manila Development Authority (MMDA), where we were introduced to their advanced traffic management and monitoring infrastructure. Within the MMDA Command Center, we observed massive display walls filled with real-time footage from hundreds of CCTV cameras strategically placed across the city. These visuals, combined with live traffic data and GPS tracking, form the backbone of MMDA’s capacity to respond rapidly to congestion, accidents, and road closures. We learned about the use of Geographic Information Systems (GIS), artificial intelligence, and mobile apps in providing timely information to both traffic enforcers and the commuting public. These tools help improve coordination during peak hours and emergencies, ultimately reducing travel time and enhancing public safety.</p>

      <p>The experience also prompted thoughtful discussions about the challenges of implementing such systems, including issues of infrastructure funding, data privacy, public cooperation, and technological limitations. However, it was equally inspiring to see the commitment of these institutions to continuous improvement and innovation. Despite the scale and complexity of Manila’s traffic woes, there is clear evidence of progress and adaptation through the strategic use of information and communication technologies.</p>

      `,
    itineraries: [
      {
        title: "Light Rail Transit Authority - Line 2",
        image: "/public/day-5-images/LRTA-Line2.png",
        description:
          "We visited the Light Rail Transit Authority (LRTA) facilities for Line 2, where we learned about the operations, maintenance, and technology behind Manila's elevated rail system. The tour included the control center, where operators monitor train movements and station conditions using advanced computer systems. We also learned about the automated fare collection system, signaling technology, and how the LRTA uses data analytics to optimize service schedules and manage passenger flow.",
        trivia:
          "LRT Line 2's control center uses a SCADA (Supervisory Control and Data Acquisition) system that processes over 10,000 data points per second from trains, stations, and power systems. The entire 13.8 kilometer line can be operated by just 7 personnel in the central control room.",
      },
      {
        title: "Traffic Engineering Center - MMDA",
        image: "/public/day-5-images/MMDA.png",
        description:
          "At the Metropolitan Manila Development Authority's (MMDA) Traffic Engineering Center, we observed how technology is used to manage Metro Manila's complex traffic situation. The center features a sophisticated traffic monitoring system with CCTV cameras throughout the metro area, allowing operators to identify and respond to traffic incidents quickly. We learned about the implementation of intelligent transportation systems, including synchronized traffic signals, electronic road signs, and the MMDA's mobile app that provides real-time traffic updates to commuters.",
        trivia:
          "The MMDA's Metrobase monitors over 500 CCTV cameras across Metro Manila. Their intelligent traffic light system at key intersections uses AI algorithms that can reduce average waiting times by up to 25% during peak hours by adapting signal timing based on actual traffic conditions.",
      },
    ],
    reflection:
      "Day 5 demonstrated how information technology plays a crucial role in modern urban transportation systems. The integration of various technologies at both the LRT and MMDA facilities showed how data collection, analysis, and communication systems can improve efficiency and safety in public transportation and traffic management. As future IT professionals, we gained valuable insights into how our skills could contribute to solving urban mobility challenges through technological solutions.",
  },
  {
    number: 6,
    title: "Baguio City Tour",
    date: "Saturday, April 12, 2025",
    location: "Baguio City",
    image: "/public/day-6-images/PMA.png",
    description: `
      <p>Baguio, affectionately dubbed the "City of Pines," embraced us with its refreshingly cool, crisp mountain air and sweeping views of forested hillsides that seemed to stretch endlessly into the horizon. Located more than 1,500 meters above sea level, Baguio offered a dramatic shift in atmosphere from the tropical heat of the lowlands. From the moment we arrived, the city exuded a sense of calm and charm—its winding roads, blooming gardens, and colonial architecture painting a picturesque scene that felt both nostalgic and alive with cultural vibrancy.</p>
      
      <p>This day in Baguio was a harmonious blend of adventure, discovery, and reflection. With nature as our backdrop, we embarked on a journey that connected us to the land and its people in profound ways. We began our exploration by visiting local farms nestled among the hills, where we were introduced to the sustainable agricultural practices that many Baguio residents rely on. Rows of fresh vegetables, terraced gardens, and flower fields created a stunning mosaic of colors and textures, and we learned how these farms not only feed the city but also preserve its traditions of self-reliance and environmental stewardship. The experience was hands-on and engaging, offering us the rare chance to connect directly with the farmers and understand their daily lives.</p>
      
      <p>As the day unfolded, we visited several of Baguio’s renowned parks and open spaces, each offering its own unique charm. At Burnham Park, we enjoyed a leisurely stroll around the man-made lake, watching families paddle across the water and locals selling snacks and handmade crafts. The gentle hum of activity blended with the rustle of pine trees and the distant call of birds, creating a peaceful ambiance. At the Botanical Garden, we marveled at the carefully curated collection of native flora, while displays of traditional Cordilleran huts gave us a glimpse into the architectural ingenuity of the region’s indigenous communities. These green spaces not only showcased Baguio’s natural beauty but also its deep-rooted respect for cultural heritage and environmental harmony.</p>

      <p>Beyond nature, the day was also rich in historical and cultural exploration. We visited heritage sites and landmarks that told the story of Baguio’s multifaceted identity—from its development during the American colonial period to its role as a haven for Filipino artists and indigenous peoples. We learned about the city’s resilience in the face of natural disasters, its evolution into a center for education and creativity, and its efforts to balance modern growth with the preservation of tradition. Museums and monuments gave voice to the people who shaped Baguio’s past, while vibrant murals and local crafts reminded us that its story is still being written today.</p>

      <p>What made this experience even more meaningful was the way it encouraged us to slow down and truly absorb the essence of the city. We weren’t simply ticking off tourist destinations—we were actively engaging with the place, observing, asking questions, and reflecting. Some of us spent quiet moments journaling or sketching, while others struck up conversations with locals, gaining insights that no textbook or guidebook could provide. It was in these moments—unhurried and genuine—that the spirit of Baguio really came alive for us.</p>

      <p>By the end of the day, we found ourselves not just appreciating Baguio’s beauty, but feeling connected to it. The serene landscapes, the rich cultural tapestry, and the warmth of the community had left a lasting impression. Baguio offered more than just a day of sightseeing—it gave us an experience of stillness, learning, and deep appreciation for the harmony between nature and humanity. It was a chapter of our journey that reminded us of the value of slowing down, looking closer, and being present in the moment.</p>
    `,
  
    itineraries: [
      {
        title: "Strawberry Farm",
        image: "/public/day-6-images/Strawberry.png",
        description:
          "Our Baguio adventure began at the famous La Trinidad Strawberry Farm, where we learned about strawberry cultivation in the cool climate of the Cordilleras. We had the opportunity to pick fresh strawberries and sample various strawberry products, from jams to ice cream. The farm also showcased how modern agricultural techniques are being integrated with traditional farming practices.",
      },
      {
        title: "Chinese Bell Church",
        image: "/public/day-6-images/ChineseBell.png",
        description:
          "We visited the Chinese Bell Church, a unique cultural and religious landmark that represents the Chinese influence in Baguio City. The temple complex features traditional Chinese architecture, gardens, and a meditation area. The peaceful atmosphere provided a moment of reflection amidst our busy itinerary.",
      },
      {
        title: "Philippine Military Academy",
        image: "/public/day-6-images/PMA.png",
        description:
          "At the Philippine Military Academy (PMA), we toured the campus of the country's premier military institution. We observed the cadets' disciplined lifestyle, visited the museum that chronicles the PMA's history, and watched a demonstration of military drills. The academy's use of technology in training and administration was particularly interesting from an IT perspective.",
      },
      {
        title: "Mines View Park",
        image: "/public/day-6-images/MinesView.png",
        description:
          "Mines View Park offered breathtaking panoramic views of the Cordillera mountains and the abandoned mining town of Itogon. The observation deck provided excellent photo opportunities, and the surrounding market area featured local crafts and souvenirs. We learned about Baguio's mining history and its transition to a tourism-centered economy.",
      },
      {
        title: "Mansion House",
        image: "/public/day-6-images/Mansion.png",
        description:
          "We visited The Mansion, the official summer residence of the Philippine President. Though the main building is not open to the public, we admired its impressive architecture from the gates and explored the botanical garden across the street. The museum inside provided historical context about the building's significance since the American colonial period.",
      },
      {
        title: "Burnham Park",
        image: "/public/day-6-images/Burnham.png",
        description:
          "Our day concluded at Burnham Park, the heart of Baguio City. We enjoyed boating on the man-made lake, explored the various themed gardens, and experienced the vibrant atmosphere of this central public space. The park, designed by American architect Daniel Burnham, remains a beloved recreational area for both tourists and locals.",
      },
    ],
    reflection:
      "Day 6 offered a welcome change of pace as we explored Baguio's natural beauty and cultural attractions. The cool climate and pine-scented air provided a refreshing contrast to Manila's urban environment. Beyond the tourist experience, we observed how Baguio balances preservation of natural resources with tourism development, and how technology is increasingly being used to enhance visitor experiences and manage environmental impacts.",
  },
  {
    number: 7,
    title: "Baguio City - Free Day",
    date: "Sunday, April 13, 2025",
    location: "Baguio City",
    image: "/public/day-7-images/free1.png",
    description: `
    <p>After six consecutive days filled with structured activities, guided tours, and immersive educational experiences, our seventh day served as a much-needed pause—a day set aside for personal exploration, reflection, and self-directed learning. This unstructured time provided students with the freedom to chart their own course, allowing them to engage with Baguio City in a manner that resonated with their individual interests and curiosities. Whether it was visiting additional cultural or historical attractions, exploring the vibrant local markets, shopping for unique souvenirs, or simply strolling through the cool pine-scented air of Baguio’s scenic parks, each student embraced the day in their own way.</p>
      
    <p>This period of open-ended discovery proved invaluable, as it allowed everyone to mentally and emotionally process the wealth of experiences accumulated over the previous days. For some students, the day was an opportunity to return to places that had particularly piqued their interest earlier in the trip, allowing for a deeper appreciation and understanding beyond what was covered during our official itinerary. Others took this chance to discover sites that were not included in our scheduled visits, thereby expanding their personal learning beyond the boundaries of the program.</p>
    
    <p>Moreover, the relaxed pace of the day naturally encouraged more informal interactions among students and faculty members. Without the time constraints of a rigid schedule, conversations flowed more freely—giving rise to spontaneous reflections, meaningful exchanges of ideas, and thoughtful discussions about the insights gained throughout the trip. These moments of unstructured dialogue often revealed perspectives that might not have surfaced during more structured group activities, adding another layer of richness to the overall learning experience.</p>

    <p>In essence, the seventh day was not simply a break from the program’s schedule; it was a crucial component of the journey itself. It offered a space for introspection, connection, and independent discovery—allowing each participant to internalize their experiences in a deeply personal and memorable way.</p>
  `,
    itineraries: [
      {
        title: "Morning Exploration",
        image: "/public/day-7-images/free1.png",
        description:
          "Many students chose to visit additional attractions like BenCab Museum, Camp John Hay, or Tam-Awan Village. The freedom to explore at our own pace allowed us to delve deeper into areas of personal interest.",
        trivia:
          "The BenCab Museum houses the extensive art collection of National Artist Benedicto Cabrera (BenCab), with over 1,000 artworks and installations. The museum is built into a hillside with eco-friendly design elements that maintain a natural temperature regulation system.",
      },
      {
        title: "Souvenir Shopping",
        image: "/public/day-7-images/free2.png",
        description:
          "The Baguio City Market was a popular destination for souvenir shopping. We found a wide variety of local products, from woven textiles and wood carvings to strawberry preserves and ube jam.",
        trivia:
          "Baguio's famous 'ukay-ukay' or thrift shops originated after the 1990 earthquake when relief goods from other countries included second-hand clothing. Today, these shops are a cultural institution with over 500 establishments throughout the city.",
      },
      {
        title: "Local Cuisine Experience",
        image: "/public/day-7-images/free3.png",
        description:
          "Many of us took the opportunity to sample Baguio's local cuisine at various restaurants and food stalls. From strawberry taho to traditional Cordilleran dishes, the culinary exploration was a highlight of our free day.",
        trivia:
          "Baguio's signature dessert, strawberry taho, is a unique variation of the traditional Filipino sweet silken tofu snack. It uses fresh strawberry syrup instead of the usual caramel syrup, a culinary innovation that began around 2010 and has become emblematic of Baguio food culture.",
      },
      {
        title: "Evening Gathering",
        image: "/public/day-7-images/free4.png",
        description:
          "In the evening, we gathered to share our experiences and prepare for our return journey. This informal session allowed us to reflect on what we had learned throughout the trip and discuss how we would apply these insights to our studies.",
        trivia:
          "The traditional Cordilleran practice of 'tongtongan' (community gathering) influenced modern Filipino meeting practices. These gatherings emphasize that everyone has a voice and should be heard before group decisions are made—a principle that's increasingly recognized in modern collaborative work environments.",
      },
    ],
    reflection:
      "Our final day in Baguio allowed for personal reflection on the entire educational trip. Having the freedom to explore individually or in small groups gave us the chance to process all we had learned throughout the week. The educational field trip provided valuable insights into various applications of information technology across different sectors – from transportation and security to tourism and urban management. As we prepare to return to our regular academic routine, we carry with us not just memories of beautiful places, but practical knowledge that connects our classroom learning to real-world applications.",
  },
]

// Helper function to get all images from the trip data
export function getAllImages() {
  const images: { src: string; alt: string; day: number; location: string }[] = []

  tripData.forEach((day) => {
    // Add main day image
    images.push({
      src: day.image,
      alt: `${day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`}: ${day.title}`,
      day: day.number,
      location: day.location,
    })

    // Add all itinerary images
    day.itineraries.forEach((itinerary) => {
      images.push({
        src: itinerary.image,
        alt: itinerary.title,
        day: day.number,
        location: day.location,
      })
    })
  })

  // Remove duplicate images based on src
  const uniqueImages = images.filter((image, index, self) => index === self.findIndex((t) => t.src === image.src))

  return uniqueImages
}
