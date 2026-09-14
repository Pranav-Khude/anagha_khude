export interface ProjectSection {
  label: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  year: string;
  discipline: string[];
  shortDescription: string;
  overview: string;
  objectives: string[];
  approach: string;
  outcomes: string;
  coverImage: string;
  images: string[];
  featured?: boolean;
  sections?: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "fishermans-bend",
    title: "Reshaping Fishermans Bend as a Collaborative, Innovative and Inclusive Industrial District",
    location: "Fishermans Bend, Melbourne, Victoria",
    year: "2024",
    discipline: ["Strategic Planning", "Industrial Planning", "Urban Design"],
    shortDescription: "Fishermans Bend is undergoing significant economic and spatial transition, with established industrial activities increasingly interacting with emerging knowledge, education and innovation sectors.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    coverImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=900&fit=crop",
    images: [],
    featured: true,
    sections: [
      {
        label: "",
        content: "Fishermans Bend is undergoing significant economic and spatial transition, with established industrial activities increasingly interacting with emerging knowledge, education and innovation sectors. This project investigated how the precinct could accommodate this transition while retaining existing industries, employment and industrial capacity.\n\nThe proposal developed an integrated planning framework combining industrial retention, economic development, workforce planning, mobility, public realm and environmental strategies to support the long-term evolution of Fishermans Bend."
      },
      {
        label: "The Challenge",
        content: "Fishermans Bend's strategic location and economic importance are creating pressure for significant redevelopment. While this transition presents opportunities for new employment, education and innovation, it also creates a risk of displacing established industries and the workforce they support.\n\nThe project focused on five interconnected planning challenges:\n\n• Industrial Retention — Maintaining sufficient industrial capacity within a strategically located inner-city precinct.\n\n• Economic Transition — Accommodating emerging industries without replacing established businesses.\n\n• Workforce Resilience — Supporting existing workers while creating opportunities for new skills and employment pathways.\n\n• Movement & Public Realm — Managing the relationship between freight, heavy vehicles, pedestrians, cyclists and future public transport.\n\n• Environmental Performance — Reducing the environmental impacts of industrial activity through circular resource systems and improved infrastructure."
      },
      {
        label: "Planning Question",
        content: "How can Fishermans Bend transition towards innovation and new employment without displacing the industries, businesses and workers that already make the precinct productive?"
      },
      {
        label: "Approach",
        content: "RESEARCH → ANALYSIS → STRATEGY → SPATIAL RESPONSE → IMPLEMENTATION\n\nThe project began by establishing an understanding of Fishermans Bend's existing industrial and economic structure. Business activity, land use, employment, movement and environmental conditions were analysed to identify the pressures affecting the precinct and opportunities for intervention.\n\nThe analysis was then consolidated into an integrated framework across three dimensions:\n\nECONOMIC — Industry · Workforce · Innovation · Affordable Workspace\n\nSPATIAL — Accessibility · Public Transport · Active Transport · Public Space\n\nENVIRONMENTAL — Circular Economy · Industrial Symbiosis · Pollution Reduction · Green Infrastructure\n\nThese findings informed a series of strategic and spatial interventions aimed at supporting industrial continuity while enabling economic and urban change."
      },
      {
        label: "Context & Research",
        content: "An industrial precinct in transition\n\nFishermans Bend remains one of Melbourne's strategically located industrial and employment areas. Its proximity to the CBD has also increased its attractiveness for new investment, knowledge industries, education and innovation.\n\nThis creates a tension between development pressure and industrial retention.\n\nThe project therefore approached Fishermans Bend as an existing economic system that needs to evolve, rather than as an area to be redeveloped from the ground up.\n\nKey consideration:\n\nRetaining industrial capacity while creating opportunities for new economic activity."
      },
      {
        label: "01 — Existing Industrial Ecosystem",
        content: "Mapping what is already there\n\nBusiness and industry mapping identified a diverse mix of manufacturing, construction, logistics, services and emerging knowledge activities across Fishermans Bend.\n\nRather than viewing individual businesses in isolation, the analysis considered the relationships between businesses, workers, land and economic activity.\n\nFinding: The existing distribution of businesses provided opportunities to strengthen relationships between complementary industries through clustering and shared infrastructure."
      },
      {
        label: "02 — Land Use & Zoning",
        content: "Understanding the relationship between zoning and economic activity\n\nExisting zoning was compared with the distribution of businesses across the precinct.\n\nThe comparison identified differences between the formal planning framework and the actual economic geography of Fishermans Bend, with related activities often distributed across different areas.\n\nPlanning implication: Land-use planning could be used more strategically to strengthen relationships between complementary industries rather than simply separating activities by use."
      },
      {
        label: "03 — Employment & Workforce",
        content: "Industrial land supports an employment network\n\nThe analysis considered industrial land not only as a physical resource but as part of a wider employment system.\n\nExisting businesses support jobs, skills, supply chains and economic relationships. Maintaining industrial capacity therefore also contributes to maintaining the employment ecosystem associated with the precinct.\n\nPlanning implication: Industrial retention needs to be considered alongside workforce development and opportunities for workers to adapt to changing industries and technologies."
      },
      {
        label: "04 — Movement & Public Realm",
        content: "Balancing industrial movement with public activity\n\nTurner Street was identified as an important interface between existing industrial activity and the future civic and employment network.\n\nThe street needs to accommodate heavy vehicles and freight while also supporting pedestrians, cyclists and future public transport. The anticipated growth of education and employment activity increases the importance of resolving these competing movement requirements.\n\nPlanning implication: Public realm improvements need to be integrated with the operational requirements of industry rather than developed independently of them."
      },
      {
        label: "05 — Environmental Conditions",
        content: "Improving industrial environmental performance\n\nIndustrial activity contributes to environmental pressures through emissions, waste and resource consumption.\n\nThe analysis investigated opportunities to integrate circular economy principles and industrial symbiosis into the future industrial framework.\n\nPlanning implication: Environmental improvements can be used to support the long-term resilience and productivity of industry rather than treating sustainability solely as a development constraint."
      },
      {
        label: "Strategy",
        content: "An Integrated Industrial District Framework\n\nThe analysis established three interconnected areas of intervention:\n\nECONOMIC\n\n• Industry — Retain and strengthen industrial activity.\n• Workforce — Develop skills and employment pathways.\n• Innovation — Support emerging businesses and knowledge industries.\n• Affordable Workspace — Maintain opportunities for smaller and emerging businesses.\n\nSPATIAL\n\n• Accessibility — Improve connections across the precinct.\n• Movement — Balance freight and active transport requirements.\n• Public Realm — Improve the quality and usability of streets and public spaces.\n\nENVIRONMENTAL\n\n• Circular Economy — Reduce resource consumption and waste.\n• Industrial Symbiosis — Connect businesses through resource exchange.\n• Green Infrastructure — Improve environmental performance across the precinct."
      },
      {
        label: "Strategic Responses",
        content: "01 — Cluster Industries\n\nStrengthening relationships between businesses\n\nThe proposal identifies opportunities to cluster related industries and strengthen connections between complementary businesses.\n\nClustering can support shorter supply chains, shared infrastructure, knowledge exchange and stronger local business relationships.\n\nOutcome: A more connected industrial economy."
      },
      {
        label: "02 — Build the Workforce",
        content: "Connecting training with employment\n\nWorkforce development is integrated into the industrial strategy through training facilities and work-integrated learning.\n\nThe approach creates stronger connections between education, skills development and local employment while supporting businesses through access to a relevant workforce.\n\nOutcome: Education and training become part of the industrial ecosystem."
      },
      {
        label: "03 — Adaptive Reuse",
        content: "Retaining buildings while introducing new functions\n\nAdaptive reuse provides an opportunity to retain existing industrial buildings and elements of the precinct's industrial character while accommodating new functions.\n\nPotential uses include collaborative workspaces, training facilities and spaces for emerging businesses.\n\nOutcome: Existing industrial assets remain useful as the economy changes."
      },
      {
        label: "04 — Connect Education with Industry",
        content: "Integrating education with the employment network\n\nThe future University of Melbourne presence creates opportunities to strengthen relationships between research, education and industry.\n\nThe proposal connects university activities with training, work-integrated learning, research partnerships and employment pathways.\n\nOutcome: A stronger relationship between education, skills and industry."
      },
      {
        label: "05 — Support Affordable Collaboration",
        content: "Creating space for emerging businesses\n\nAffordable and collaborative workspaces can provide opportunities for start-ups, small businesses and emerging industries to establish and grow within the precinct.\n\nMaintaining access to these spaces supports economic diversity and reduces reliance on large-scale development alone.\n\nOutcome: A more diverse and adaptable business environment."
      },
      {
        label: "Final Outcome",
        content: "An industrial district designed for transition\n\nThe final proposal brings together economic, spatial and environmental strategies within a single planning framework.\n\nRather than replacing established industrial activity with new development, the framework provides opportunities for existing businesses, emerging industries, education and the workforce to operate as part of a connected precinct.\n\nThe strategy combines:\n\n• Industrial clustering — Strengthening relationships between complementary industries.\n• Workforce development — Connecting education, training and employment.\n• Adaptive reuse — Retaining existing buildings while introducing new functions.\n• Education–industry partnerships — Connecting research and learning with production and employment.\n• Affordable workspace — Supporting small businesses and emerging industries.\n• Industrial symbiosis — Creating opportunities for resource exchange and circular production.\n• Public realm and mobility — Improving streets and connections while maintaining industrial functionality."
      },
      {
        label: "Key Outcomes",
        content: "Industrial Retention — Developed a planning approach that supports existing industrial businesses and employment while accommodating economic transition.\n\nEconomic Diversification — Proposed clustering, affordable workspace and stronger business relationships to support emerging industries and local economic activity.\n\nWorkforce Development — Integrated education and training into the industrial framework to strengthen employment pathways and workforce adaptability.\n\nIntegrated Planning — Connected economic, spatial and environmental considerations within one strategic framework rather than treating them as separate planning issues."
      },
      {
        label: "Reflection",
        content: "This project strengthened my understanding of how strategic planning can respond to the complex relationship between industrial land, economic development, employment and urban change. My contribution focused on applying spatial analysis and planning principles to investigate the existing conditions of Fishermans Bend and develop strategies that supported industrial retention while accommodating future growth.\n\nWorking within a collaborative project also helped me understand how individual planning and design investigations contribute to a broader strategic framework. I developed a stronger appreciation for connecting research and analysis with practical spatial responses, particularly in relation to industrial clustering, workforce development, mobility and the public realm.\n\nA key learning from the project was the importance of considering implementation alongside strategic planning. Understanding the roles of government, industry, education providers and the workforce highlighted how successful precinct transformation depends not only on a strong spatial strategy, but also on the partnerships and mechanisms required to deliver it."
      },
      {
        label: "Project Documents",
        content: "Fishermans Bend — Project Report\nView PDF →"
      }
    ]
  },
  {
    id: "melton-housing",
    title: "50 Families a Week: Affordable Housing Strategy for Melton",
    location: "Melton, Victoria",
    year: "2024",
    discipline: ["Strategic Housing Planning", "Housing Policy", "Urban Planning"],
    shortDescription: "Melton is experiencing significant growth, creating increasing demand for housing, infrastructure and community services.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    coverImage: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=900&fit=crop",
    images: [],
    featured: true,
    sections: [
      {
        label: "",
        content: "Melton is experiencing significant growth, creating increasing demand for housing, infrastructure and community services.\n\nThis project explored how housing growth could deliver greater affordability and choice while considering the relationship between housing, land, transport, employment and access to services.\n\nThe strategy approaches affordable housing as a planning and spatial issue, bringing together housing diversity, land regeneration, connectivity, policy and partnerships to support more inclusive communities."
      },
      {
        label: "The Challenge",
        content: "Melton's continued growth is increasing housing demand while creating pressure to deliver infrastructure, transport, employment opportunities and community services alongside new residential development.\n\nThe project examined how housing growth could provide greater affordability and choice rather than simply increasing the number of dwellings.\n\n• Housing affordability — addressing affordability within a growing suburban context\n\n• Housing diversity — responding to different household structures, incomes and stages of life\n\n• Land availability — identifying opportunities to use land more effectively\n\n• Connectivity — improving relationships between housing, transport, employment and services\n\n• Planning policy — understanding the mechanisms that can influence housing outcomes\n\n• Delivery — considering the role of partnerships in delivering affordable housing"
      },
      {
        label: "Planning Question",
        content: "How can housing growth create affordability and choice rather than simply increasing the number of dwellings?"
      },
      {
        label: "Approach",
        content: "POLICY → LAND → HOUSING → CONNECTIVITY → DELIVERY\n\nThe project began by examining the planning and policy framework that shapes housing development in Melton.\n\nThis was followed by analysis of land availability, development opportunities, accessibility and connectivity to understand where housing outcomes could be improved.\n\nThe findings informed a strategy focused on affordable housing, housing diversity, land regeneration and connected neighbourhoods, supported by partnerships between government, developers, housing providers and communities."
      },
      {
        label: "Context & Research",
        content: "The Growth-Area Challenge\n\nHousing affordability in a growth area cannot be considered independently from the wider urban environment.\n\nNew residential development can increase housing supply, but the location and structure of that development influence residents' access to employment, education, transport, community facilities and everyday services.\n\nThe project therefore considered affordability as a spatial and planning issue, rather than simply a question of dwelling cost.\n\nKey Consideration\n\nHousing growth needs to be planned alongside the infrastructure and services that support it."
      },
      {
        label: "01 — Affordability Is Not Just About the Dwelling",
        content: "A dwelling can be relatively affordable while still creating high household costs if residents depend heavily on private vehicles, travel long distances to employment or have limited access to essential services.\n\nThe project therefore considered housing affordability alongside accessibility, connectivity and the location of community infrastructure.\n\nKey Finding\n\nAffordable housing needs an affordable urban environment."
      },
      {
        label: "02 — Where Housing Meets Land",
        content: "Land availability is an important factor in housing delivery and affordability.\n\nThe project examined opportunities to use land more efficiently and considered how underutilised or suitable sites could contribute to additional housing supply.\n\nThis established a strategic connection between land regeneration and housing affordability.\n\nKey Finding\n\nLand availability shapes housing opportunity."
      },
      {
        label: "03 — The Question of Who Delivers",
        content: "Affordable housing cannot rely on a single organisation or sector.\n\nThe project considered the roles of government, developers, community organisations, housing providers and residents in creating the conditions for affordable housing delivery.\n\nPlanning policy can establish the framework, but successful delivery also depends on coordination between different stakeholders.\n\nKey Consideration\n\nAffordability requires shared responsibility."
      },
      {
        label: "04 — Connecting Homes to Everyday Life",
        content: "Housing works within a wider network of transport, employment, services, open space and community infrastructure.\n\nThe project considered how stronger connections between residential areas and everyday destinations could improve access to opportunities and reduce isolation.\n\nConnectivity was therefore treated as an important component of housing outcomes."
      },
      {
        label: "Strategy",
        content: "From Affordability to Inclusion\n\nThe strategy brings together four key components:\n\nPLANNING POLICY\nUse the planning framework to create opportunities for affordable and diverse housing.\n\nLAND STRATEGY\nIdentify opportunities for land regeneration and more efficient use of suitable sites.\n\nHOUSING DEVELOPMENT\nSupport greater housing affordability and diversity.\n\nCONNECTED NEIGHBOURHOODS\nConnect housing with transport, employment, services, open space and community infrastructure.\n\nTogether, these elements establish a broader approach to affordable housing and inclusive growth."
      },
      {
        label: "Strategic Responses",
        content: "01 — Regenerate Land\n\nLand regeneration provides opportunities to increase housing supply through more efficient use of suitable and underutilised land.\n\nThe strategy connects these opportunities with housing delivery while considering the importance of infrastructure and connectivity.\n\nKey Principle\n\nBefore consuming more land, ask what existing land can do better."
      },
      {
        label: "02 — Design the Connected Neighbourhood",
        content: "Housing development needs to be considered alongside the infrastructure and services that support everyday life.\n\nThe strategy connects residential areas with movement networks, employment, community facilities, open space and local services.\n\nThe objective is to create neighbourhoods where housing is part of a connected community rather than an isolated residential development."
      },
      {
        label: "Final Outcome",
        content: "From Development Sites to Communities\n\nThe final strategy brings together housing affordability, housing diversity, land regeneration, connectivity, planning policy and partnerships.\n\nThe project frames affordable housing as part of a broader planning objective: creating neighbourhoods where people with different incomes and household structures can access housing, infrastructure and opportunities.\n\nThis approach shifts the focus from simply delivering more dwellings towards creating more affordable and inclusive places to live."
      },
      {
        label: "Key Outcomes",
        content: "Affordable Housing — Developed a strategic approach that considers housing affordability alongside land, transport, services and the wider urban environment.\n\nHousing Diversity — Positioned housing choice as an important component of affordability and inclusive growth.\n\nLand Regeneration — Explored how existing and underutilised land could contribute to housing supply and more efficient land use.\n\nConnected Communities — Connected housing outcomes with transport, employment, services and community infrastructure."
      },
      {
        label: "Reflection",
        content: "This project strengthened my understanding of affordable housing as a planning issue that extends beyond the cost and supply of individual dwellings. My contribution focused on understanding the relationship between housing, land use, accessibility and the wider urban environment, and using these considerations to inform the housing strategy.\n\nThe project also strengthened my understanding of how planning policy and spatial planning work together. Examining the policy framework alongside land opportunities, housing diversity and connectivity helped me understand how planning decisions can influence housing outcomes and the way new communities are structured.\n\nA key learning was the importance of considering housing delivery alongside strategy. Affordable housing requires more than identifying demand; it also depends on suitable land, planning mechanisms, infrastructure and collaboration between government, developers, housing providers and communities. This reinforced my understanding of the role strategic planning can play in creating more affordable and inclusive places to live."
      },
      {
        label: "Project Documents",
        content: "50 Families a Week — Affordable Housing Strategy for Melton\nView PDF →"
      }
    ]
  },
  {
    id: "asparagus-town",
    title: "Asparagus Town",
    location: "Koo Wee Rup, Victoria",
    year: "2024",
    discipline: ["Agropolitan Planning", "Rural–Urban Planning", "Urban Design"],
    shortDescription: "Koo Wee Rup is located within the fertile agricultural landscape of the former Koo Wee Rup Swamp and has a strong association with asparagus production.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=900&fit=crop",
    images: [],
    featured: true,
    sections: [
      {
        label: "",
        content: "Koo Wee Rup is located within the fertile agricultural landscape of the former Koo Wee Rup Swamp and has a strong association with asparagus production.\n\nThis individual project explored how the town's agricultural identity could inform its future planning, public realm and connections to the surrounding landscape.\n\nThe proposal developed a 5 km landscape framework connecting agriculture, ecology, mobility and community activity, supported by targeted interventions along Manks Road."
      },
      {
        label: "The Challenge",
        content: "Koo Wee Rup's agricultural landscape is an important part of its economic and local identity, but this relationship is not always reflected in the experience of the town itself.\n\nThe project examined how agricultural production, ecological systems and everyday movement could be better connected to the town.\n\nKey challenges included:\n\n• Understanding the relationship between agricultural production and the wider landscape\n\n• Connecting the agricultural hinterland with the town\n\n• Improving walking and cycling conditions\n\n• Addressing vehicle speeds and movement along Manks Road\n\n• Integrating ecological systems into the landscape framework\n\n• Creating opportunities for local agriculture to become more visible within the town\n\n• Maintaining the productive and ecological functions of the surrounding landscape"
      },
      {
        label: "Planning Question",
        content: "How can Koo Wee Rup's agricultural landscape become a more visible and connected part of everyday town life?"
      },
      {
        label: "Approach",
        content: "TERRITORY → LANDSCAPE → ANALYSIS → STRATEGY → LOCAL INTERVENTIONS\n\nThe project began at the territorial scale by mapping asparagus farms, soil conditions, waterways and surrounding landscape systems.\n\nThis established a 5 km area of interest for the development of a connected agricultural and ecological framework. The analysis was then brought down to the town and street scales, with Manks Road identified as a key location where the relationship between movement, public space and the agricultural landscape could be improved.\n\nThe final strategy combined landscape connectivity, active transport, ecological links and public-realm interventions."
      },
      {
        label: "Context & Research",
        content: "A Town Defined by Its Soil\n\nKoo Wee Rup's agricultural character is closely associated with asparagus production and the fertile soils of the former Koo Wee Rup Swamp.\n\nMapping the distribution of asparagus farms against peat and dark clay soils established a clear relationship between agricultural production and the underlying landscape.\n\nThis provided the starting point for the project: understanding the agricultural territory as an important part of the town's identity rather than simply as land surrounding the settlement.\n\nKey Finding\n\nAgricultural production follows the landscape, and the landscape can help shape the town."
      },
      {
        label: "01 — The Productive Landscape",
        content: "The investigation expanded beyond the town centre to understand the wider agricultural territory supporting Koo Wee Rup.\n\nMapping farms, waterways and landscape systems established the broader context for the proposal and identified a 5 km area of interest.\n\nThe project therefore operated across several scales:\n\nAgricultural hinterland → 5 km landscape network → town → street → public-realm intervention\n\nPlanning Principle\n\nUnderstand the territory before designing the town."
      },
      {
        label: "02 — Agriculture & Workforce",
        content: "Agricultural production is also dependent on the people who work within the industry.\n\nResearch into asparagus production considered the role of seasonal workers and the wider network of growers, labour, logistics and accommodation supporting agricultural activity.\n\nThis broadened the project beyond the physical landscape to consider the social and economic systems associated with agriculture.\n\nKey Finding\n\nA productive landscape depends on people."
      },
      {
        label: "03 — Finding the Break in the System",
        content: "Manks Road was identified as a key location for intervention because of its position within the agricultural landscape and its role in connecting the town.\n\nExisting conditions prioritised vehicle movement, while walking and cycling infrastructure was limited.\n\nThis created a disconnect between Koo Wee Rup's agricultural identity and the way people experience and move through the town.\n\nKey Finding\n\nThe landscape is productive, but the connection between the town and the landscape is weak."
      },
      {
        label: "04 — When the Road Becomes the Barrier",
        content: "Manks Road's existing speed environment and limited pedestrian and cycling infrastructure create barriers to movement through the town.\n\nThe project reconsidered the role of the road as more than a vehicle corridor, exploring how it could become a stronger connection between people, the town and the agricultural landscape.\n\nPlanning Opportunity\n\nRebalance the street so that movement through the town can also provide an opportunity to experience the landscape."
      },
      {
        label: "Strategy",
        content: "Make the Agricultural Landscape Part of Everyday Life\n\nThe proposal focused on two complementary directions:\n\n01 — Improve movement through the town\n\nReduce vehicle speeds and improve walking and cycling connections.\n\n02 — Bring local agriculture into the public realm\n\nIntroduce opportunities for residents and visitors to engage with locally produced food and the agricultural identity of Koo Wee Rup.\n\nTogether, these strategies connect the physical landscape with everyday movement and public activity."
      },
      {
        label: "Final Outcome",
        content: "The 5 km Agricultural Network\n\nThe proposed 5 km framework connects agricultural land with walking and cycling routes, bio-links, activity points, parking and areas of ecological habitat.\n\nRather than relying on a single large intervention, the proposal establishes a network of smaller connections that allow the agricultural landscape to become more accessible and visible while maintaining its productive and ecological functions.\n\nKey Components\n\nAgriculture\n\nAsparagus farms and productive landscapes.\n\nMovement\n\nWalking and cycling connections.\n\nEcology\n\nPriority and future bio-links and habitat.\n\nPublic Activity\n\nFresh vegetable stalls and activity points."
      },
      {
        label: "01 — Slow the Road, Open the Town",
        content: "Rebalancing Manks Road\n\nThe proposal establishes a 40 km/h reduced-speed zone along Manks Road, supported by dedicated walking and cycling infrastructure.\n\nThe intervention aims to create a calmer and more accessible street environment while strengthening the relationship between the road and the surrounding agricultural landscape.\n\nThe intention is not simply to reduce vehicle speeds, but to change how the road functions within the town."
      },
      {
        label: "02 — Bring the Farm to the Street",
        content: "Fresh Vegetable Stalls\n\nFresh vegetable stalls are introduced as small activity points within the agricultural network.\n\nThe stalls provide opportunities for local produce to become part of everyday town life while creating points of interaction between growers, residents and visitors.\n\nThe intervention supports local farmers while contributing to a more active public realm.\n\nPlanning Outcome\n\nConnecting agricultural production with community activity."
      },
      {
        label: "03 — Follow the Water",
        content: "Ecology as a Connector\n\nThe proposal incorporates priority and future bio-links into the wider 5 km landscape framework.\n\nThese connections strengthen relationships between waterways, habitat, agricultural land and movement networks.\n\nRather than treating ecological corridors as isolated areas, the strategy integrates them into the broader landscape structure.\n\nKey Principle\n\nThe ecological network becomes part of the wider landscape framework."
      },
      {
        label: "04 — Design Around Habitat",
        content: "Connecting People Without Disconnecting Ecology\n\nImproved access through the landscape needs to be balanced with ecological protection.\n\nThe proposal identifies Southern Brown Bandicoot habitat alongside the agricultural and movement networks, recognising that not every landscape should be made accessible for human activity.\n\nThe framework therefore considers where connections can be introduced while maintaining important habitat areas."
      },
      {
        label: "Integrated Outcome",
        content: "A Town That Celebrates What It Produces\n\nThe individual interventions create a stronger relationship between Koo Wee Rup's agricultural economy and its public realm.\n\nSlower streets improve the experience of moving through the town. Walking and cycling infrastructure strengthens connections. Fresh vegetable stalls make local production visible, while bio-links reinforce ecological systems.\n\nTogether, these interventions reinforce Koo Wee Rup's existing agricultural identity rather than replacing it.\n\nAgriculture + Mobility + Ecology + Community"
      },
      {
        label: "Key Outcomes",
        content: "Agricultural Landscape Framework — Developed a 5 km framework connecting agricultural production, ecological systems, movement and public activity.\n\nImproved Local Mobility — Proposed a reduced-speed environment and walking and cycling infrastructure along Manks Road to improve local accessibility.\n\nAgriculture in the Public Realm — Introduced fresh vegetable stalls as small-scale interventions connecting local production with community activity.\n\nIntegrated Ecology — Incorporated bio-links and habitat considerations into the landscape strategy to balance improved connectivity with ecological protection."
      },
      {
        label: "Reflection",
        content: "This individual project strengthened my understanding of how agricultural landscapes can influence the planning and identity of rural towns. My approach brought together territorial analysis, mobility planning, ecological considerations and public-realm design to develop a strategy that responded to Koo Wee Rup's existing agricultural character.\n\nWorking across multiple scales from the agricultural hinterland and 5 km landscape framework to Manks Road and individual public-realm interventions—helped me understand the importance of connecting broader planning conditions with specific, implementable design responses.\n\nA key learning was that local identity does not always require large-scale intervention. In this project, relatively targeted changes to movement, public space and landscape connections could strengthen the relationship between agricultural production and everyday town life. The project also reinforced the importance of considering ecological systems alongside human movement when improving access through productive landscapes."
      },
      {
        label: "Project Documents",
        content: "Asparagus Town — Project Report\nView PDF →"
      }
    ]
  },
  {
    id: "sunshine-north",
    title: "Sunshine North: Industry Interconnectors",
    location: "Sunshine North, Victoria",
    year: "2024",
    discipline: ["Mobility Planning", "Urban Design", "Active Transport Planning"],
    shortDescription: "Sunshine North is an established industrial and employment area supported by major roads, public transport infrastructure, education facilities and the Sunshine health precinct.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=900&fit=crop",
    images: [],
    featured: true,
    sections: [
      {
        label: "",
        content: "Sunshine North is an established industrial and employment area supported by major roads, public transport infrastructure, education facilities and the Sunshine health precinct.\n\nHowever, the existing movement network is strongly oriented towards private vehicles, with gaps in walking, cycling and micromobility connections.\n\nThis project investigated how the existing network could be better connected to support industry, employment, education and health services while providing more equitable and practical alternatives to car-based travel."
      },
      {
        label: "The Challenge",
        content: "Sunshine North has strong road and industrial infrastructure, but the benefits of this network are not experienced equally by all users.\n\nThe project examined how the movement network could better support workers, students, residents and businesses while maintaining the role of existing industrial areas.\n\nKey challenges included:\n\n• Strong dependence on private vehicles\n\n• Gaps in walking, cycling and micromobility infrastructure\n\n• Limited connections between industrial, education and health precincts\n\n• Conflicts between vehicle movement and active transport\n\n• Road safety concerns along high-volume corridors\n\n• Interfaces between industrial, commercial and residential areas\n\n• Limited accessibility for people who do not rely on private vehicles"
      },
      {
        label: "Planning Question",
        content: "How can mobility infrastructure connect Sunshine North's economic activity without making the suburb dependent on the car?"
      },
      {
        label: "Approach",
        content: "CONTEXT → SPATIAL ANALYSIS → MOBILITY ANALYSIS → NETWORK STRATEGY → STREET INTERVENTIONS\n\nThe project began by understanding Sunshine North at multiple scales, from the wider suburb to individual precincts and streets.\n\nThe analysis identified four major precincts — Sunshine Health and Wellbeing, Northern Industrial, Education and Southern Industrial — and examined how they were connected through Furlong Road, Ballarat Road, McIntyre Road and the M80.\n\nThis was followed by analysis of travel behaviour, vehicle ownership, journey times, traffic movement, crash locations, cycling infrastructure and land-use relationships.\n\nThe findings informed a connected mobility strategy supported by targeted street and precinct interventions."
      },
      {
        label: "Context & Research",
        content: "Four Precincts · One Network\n\nSunshine North contains a combination of industrial employment, education and health infrastructure that creates the foundation for a broader employment and skills network.\n\nThe project identified four key precincts:\n\nSunshine Health and Wellbeing Precinct\n\nSunshine Hospital, Joan Kirner Women's and Children's Hospital and associated health services.\n\nNorthern Industrial Precinct\n\nEstablished industrial and employment activities.\n\nEducation Precinct\n\nVictoria University Sunshine Campus, Sunshine College North Campus and Braybrook College.\n\nSouthern Industrial Precinct\n\nIndustrial employment and supporting businesses.\n\nThese precincts are connected by major movement corridors, creating an opportunity to strengthen the relationships between existing destinations rather than treating them as isolated areas.\n\nKey Finding\n\nIndustry needs workers. Workers need access."
      },
      {
        label: "01 — Industry & Employment",
        content: "Understanding the economy behind the roads\n\nThe industrial areas of Sunshine North depend on reliable movement between workplaces, suppliers, customers and surrounding employment areas.\n\nThe analysis therefore considered mobility as part of the economic system supporting industrial activity rather than simply as a means of moving people from one location to another.\n\nPlanning Implication\n\nMobility infrastructure is also economic infrastructure."
      },
      {
        label: "02 — Travel Behaviour",
        content: "Car dependence\n\nAnalysis of travel behaviour identified a strong reliance on private vehicles, with approximately 66% of surveyed Sunshine North residents travelling to work by car.\n\nVehicle ownership was also relatively high, reinforcing the role of the car within the existing transport network.\n\nThis highlighted a key planning issue: strong road infrastructure can reinforce car dependence when alternative modes are less connected or convenient."
      },
      {
        label: "03 — Journey Accessibility",
        content: "Distance does not always mean accessibility\n\nJourney analysis demonstrated that short-distance trips can become disproportionately long when public transport connections are indirect or infrequent.\n\nThis shifted the assessment from simply mapping where infrastructure exists towards considering travel time, convenience and choice.\n\nPlanning Implication\n\nAccessibility needs to be measured by how a journey is experienced, not simply by geographical distance."
      },
      {
        label: "04 — Traffic & Road Safety",
        content: "Where movement becomes conflict\n\nTraffic flow analysis was compared with crash locations to understand the relationship between movement intensity and road safety.\n\nHigh-volume corridors were identified as important points of conflict between vehicle movement and other road users.\n\nThe analysis reinforced the need to consider how road space is allocated between vehicles, cyclists and pedestrians rather than treating safety and mobility as separate issues."
      },
      {
        label: "05 — Existing Network Gaps",
        content: "The network exists. The connection doesn't.\n\nSunshine North already has cycling infrastructure, public transport, railway connections and major roads.\n\nThe analysis identified gaps in the connections between these existing systems, creating journeys that may be technically possible but are less practical or comfortable for people walking, cycling or using micromobility.\n\nKey Finding\n\nConnect what already exists."
      },
      {
        label: "Strategy",
        content: "From Car Networks to People Networks\n\nThe strategy shifts the focus from a transport network primarily organised around vehicle movement towards a network that provides meaningful choices between modes.\n\nFour principles guided the proposed network:\n\nSUSTAINABLE\n\nSupport lower-emission and active modes.\n\nSAFE\n\nImprove conditions for pedestrians and cyclists.\n\nEQUITABLE\n\nProvide practical mobility options for people with different travel needs.\n\nREIMAGINED\n\nAdapt the existing network rather than relying on entirely new infrastructure.\n\nActive transport and micromobility were positioned as additional layers within the existing network, allowing the strategy to respond to the needs of industry, workers, students, residents and visitors."
      },
      {
        label: "Final Outcome",
        content: "The Reimagined Network\n\nThe proposed network connects the Northern Industrial, Southern Industrial, Education and Sunshine Health and Wellbeing precincts through strengthened cycling and micromobility connections and targeted street interventions.\n\nThe strategy works with Sunshine North's existing movement structure rather than creating a completely new transport network.\n\nStrategic Direction\n\nConnect existing precincts → strengthen missing links → improve street conditions → increase transport choice"
      },
      {
        label: "01 — Slow the Street",
        content: "Designing for people at street level.\n\nThe streetscape strategy introduces lower vehicle speeds, dedicated micromobility lanes, pedestrian space and landscape buffers.\n\nThe intervention considers the street as more than a movement corridor, with opportunities for landscape, public activity and improved connections to surrounding businesses.\n\nKey Design Principle\n\nThe street becomes infrastructure for movement, landscape and activity."
      },
      {
        label: "02 — Integrate Land-Use Edges",
        content: "Moving beyond hard boundaries.\n\nThe project explored opportunities for selected industrial, commercial and residential areas to transition towards more compatible relationships.\n\nThe objective was not to remove industrial activity, but to distinguish between uses that can coexist and those that require greater separation.\n\nThis approach provides opportunities for more active streets while retaining productive employment land."
      },
      {
        label: "03 — Berkshire Road Transition Zone",
        content: "A graduated relationship between uses.\n\nBerkshire Road was developed as a local example of how the transition between heavy industry, light industry, commercial activity and residential areas could be managed.\n\nThe proposal combines a more graduated land-use relationship with improved streetscape and micromobility infrastructure.\n\nPlanning Outcome\n\nA more integrated interface between industry, commerce and residential activity."
      },
      {
        label: "Strategic Outcome",
        content: "Industry as the Connector\n\nAcross the proposed interventions, mobility becomes a mechanism for strengthening connections between Sunshine North's economic activity and everyday destinations.\n\nImproved connections can support:\n\n• Workers accessing employment\n\n• Students accessing education\n\n• Businesses connecting across industrial areas\n\n• Residents accessing health and local services\n\n• Short-distance journeys without exclusive reliance on private vehicles\n\nThe project therefore positions mobility as a component of both economic development and everyday accessibility."
      },
      {
        label: "Stakeholders",
        content: "Planning for Different Users\n\nThe project considered the different requirements of workers, students, residents, businesses, public transport users and other community members.\n\nStakeholders identified through the project included planners, transport engineers, businesses, students, residents, operators, researchers and community groups.\n\nConsidering these different users helped frame mobility as both a network planning and equity issue."
      },
      {
        label: "Final Vision",
        content: "From Network to Place\n\nThe final strategy extends beyond transport infrastructure to consider the quality of the spaces created around it.\n\nGreen buffers, pedestrian improvements, micromobility infrastructure, public spaces and activated edges allow movement corridors to contribute to the wider urban environment.\n\nThe objective is a Sunshine North where mobility infrastructure supports movement, safety, accessibility and place quality."
      },
      {
        label: "Key Outcomes",
        content: "Connected Industrial Precincts — Strengthened connections between industrial, education and health precincts using the existing movement network as the foundation.\n\nImproved Transport Choice — Introduced active transport and micromobility connections to provide practical alternatives to car-based travel.\n\nMultimodal Street Design — Developed street-level interventions that balance freight, vehicle movement, cycling, walking, landscape and public activity.\n\nIntegrated Land Use & Mobility — Explored how movement infrastructure and land-use relationships can work together to support employment, accessibility and urban quality."
      },
      {
        label: "Reflection",
        content: "This project strengthened my understanding of how street design and land-use planning can work together to improve the relationship between industrial activity and the surrounding urban environment. My contribution focused on developing spatial responses that addressed street safety, movement, land-use interfaces and the transition between different urban uses.\n\nWorking across the street and precinct scales helped me understand that industrial areas do not need to be separated from surrounding communities through rigid boundaries. Through the street design and Berkshire Road transition zone, I explored how changes to road space, pedestrian and micromobility infrastructure, landscape and land-use relationships can create more gradual and functional interfaces while maintaining the role of industry.\n\nA key learning from the project was the importance of designing for coexistence rather than separation. It reinforced how urban design can be used as a practical planning tool to manage competing requirements, improve the experience of streets and create stronger connections between employment areas, businesses and surrounding communities."
      },
      {
        label: "Project Documents",
        content: "Sunshine North: Industry Interconnectors — Project Report\nView PDF →"
      }
    ]
  },
  {
    id: "public-library",
    title: "Can a library be an infrastructure?",
    subtitle: "Rethinking the role of public libraries in a growing city.",
    location: "City of Melton, Victoria",
    year: "2024",
    discipline: ["Research", "Urban design"],
    shortDescription: "Rethinking the role of public libraries in a growing city.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    sections: [
      {
        label: "",
        content: "The original report is structured around the City of Melton's demographic context, literature on libraries and community/social infrastructure, and a findings and conclusion section.\n\nWhen we talk about infrastructure in a growing city, the conversation usually focuses on housing, roads, transport, utilities and other physical systems.\n\nBut a city also needs infrastructure that supports learning, connection, participation and community life.\n\nThis raises a different question:\nCan a public library be understood as essential community infrastructure rather than simply a place for books?\n\nMy research into public libraries in the City of Melton explored this question by looking at the municipality's demographic characteristics and examining research into libraries, community building, social capital, social infrastructure, inclusion and cultural connection."
      },
      {
        label: "A city that is changing: Understanding Melton before understanding its libraries",
        content: "The City of Melton is located approximately 36 kilometres west of Melbourne's CBD and forms part of Melbourne's western growth area. The municipality is experiencing significant growth and has a relatively young population. According to the 2021 Census data used in the research, Melton had a population of 178,960, with a median age of 33 years. The population profile includes parents and home builders, a young workforce and primary-school-aged children. This demographic profile is important when considering community infrastructure. A growing and relatively young population creates demand for places that support education, learning, social interaction, children's activities and access to information. At the same time, the municipality is culturally diverse.\n\nIn 2021, 35.7% of Melton's population was born overseas, with India, the Philippines, New Zealand, Vietnam and England identified among the leading countries of birth. Punjabi, Vietnamese, Arabic, Hindi and Tagalog were among the most commonly spoken languages at home other than English.\n\nThe library therefore exists within a community that is not only growing, but also young and culturally diverse."
      },
      {
        label: "More than a place for books: The role of the public library is broader than its traditional image",
        content: "The traditional understanding of a library is relatively straightforward: a place where people access books, information and reading resources. The research suggests a much broader role. The literature review examined libraries as community spaces, their role in building communities, their contribution to social capital, their function as social infrastructure, their ability to provide a place for everyone, and their potential to bridge cultural divides. This changes how the library can be understood.\n\nA library can provide:\n\n• Information — Access to knowledge and resources.\n• Learning — Opportunities for education and lifelong learning.\n• Social connection — A place where people can interact with others.\n• Community programs — Activities that bring different groups together.\n• Digital access — Access to technology and digital resources.\n• Cultural connection — Opportunities for people from different backgrounds to participate and interact.\n\nThe building is therefore only one part of the library's value. Its wider role comes from the relationships and opportunities it creates within the community."
      },
      {
        label: "Libraries and social capital: Building relationships through everyday interaction",
        content: "One of the key ideas explored in the research is the relationship between libraries and social capital. Social capital refers broadly to the relationships, networks and connections that allow people to participate in community life. Libraries can contribute to this by providing accessible places where people with different backgrounds can meet, participate in programs and access shared resources. This is particularly relevant in a diverse municipality such as Melton.\n\nA library does not require people to share the same background, occupation, income or culture in order to use the space. Its public nature creates the potential for interaction between people who may otherwise have limited opportunities to meet. This makes the library significant not only as an information service, but as a social space within the city."
      },
      {
        label: "A place for everyone: Public access is part of the value",
        content: "One of the ideas that emerged from the literature review was the importance of libraries as inclusive spaces. Unlike many commercial environments, access to a public library is not fundamentally dependent on purchasing something. People can enter to read, study, use resources, attend programs, access technology, participate in community activities or simply spend time in a public environment. This makes libraries particularly relevant to people who may have limited access to private or commercial spaces.\n\nFor a growing municipality, this raises an important planning consideration:\nCommunity infrastructure should provide spaces that are accessible to different groups, not only facilities designed around specific users or services."
      },
      {
        label: "Bridging cultural divides: Community infrastructure can also support cultural understanding",
        content: "Melton's cultural diversity makes the social role of libraries particularly relevant. With more than a third of the population born overseas and multiple languages spoken throughout the municipality, community infrastructure needs to respond to a population with diverse cultural experiences and needs. The research examined literature on how libraries can contribute to cultural inclusion and help bridge cultural divides.\n\nThis can happen through:\ninclusive community events\ncultural programs\nshared learning opportunities\naccess to information\nspaces for interaction\nprograms that encourage participation across different groups\n\nThe significance of these activities extends beyond the library itself. They can contribute to a stronger sense of belonging and community connection."
      },
      {
        label: "The library as social infrastructure: A building that supports the city around it",
        content: "The concept of social infrastructure became one of the central ideas of the research. Social infrastructure refers to the physical places and institutions that support social interaction and community relationships. From this perspective, a library is comparable to other forms of community infrastructure because its value comes partly from the interactions it enables.\n\nThis changes the planning question.\n\nInstead of asking only:\nHow many libraries does Melton need?\n\nwe can ask:\nWhat role should libraries play within the social infrastructure network of a growing municipality?\n\nThat question is more useful because it considers not only the number of facilities, but also their community function and contribution."
      },
      {
        label: "Growth changes the infrastructure question: Planning ahead rather than catching up",
        content: "For a rapidly growing municipality, community infrastructure needs to be considered alongside population growth. If new suburbs are developed without sufficient community infrastructure, residents may have access to housing without having equivalent access to spaces for learning, participation and social connection. The research therefore argues that libraries should be considered during the planning of new suburbs rather than treated as an additional service to be delivered later. This is particularly important in growth areas because infrastructure decisions can shape how communities develop over time."
      },
      {
        label: "From facility to network: Libraries should not be planned in isolation",
        content: "A library is only one component of a much larger community infrastructure system.\n\nIt can interact with:\nSchools — for education and learning.\nCommunity organisations — for programs and local participation.\nBusinesses — for partnerships and community initiatives.\nCultural organisations — for cultural programs and inclusion.\nLocal government — for planning, funding and service delivery.\n\nThe research therefore identifies partnerships as an important way for libraries to expand their reach and strengthen their contribution to the community. The important shift is from thinking about the library as a standalone building towards understanding it as part of a community network."
      },
      {
        label: "Libraries and social isolation: The value of simply having somewhere to belong",
        content: "The research also identifies loneliness and social isolation as important social challenges that libraries can help address. This is particularly relevant for groups that may be more vulnerable to isolation, including older people and migrant communities.\n\nPrograms such as social lunches, skill-sharing activities and technology courses can provide opportunities for people to participate and build connections. This illustrates an important characteristic of community infrastructure. Its value cannot always be measured through physical output alone.\n\nA library may provide a building, but the deeper outcome can be the relationships, confidence, knowledge and participation that happen within it."
      },
      {
        label: "What should future libraries do?",
        content: "The research suggests several directions for strengthening the role of libraries in Melton.\n\n01 Plan libraries as core infrastructure\nNew suburbs should incorporate libraries into broader community-infrastructure planning rather than treating them as optional additions.\n\n02 Build partnerships\nLibraries can work with educational institutions, local businesses and cultural organisations to expand their programs and reach.\n\n03 Support inclusion\nPrograms should respond to the needs of diverse communities and create opportunities for people from different backgrounds to interact.\n\n04 Address social isolation\nPrograms targeting loneliness, digital exclusion and social connection can strengthen the library's community role.\n\n05 Measure community impact\nLibrary usage, participation in community events and contributions to lifelong learning can be used to demonstrate the wider value of library infrastructure."
      },
      {
        label: "A facility should not be evaluated only by its size, capacity or physical presence. Its value also comes from what it enables.",
        content: "For a public library, that can mean:\nlearning\n→ participation\n→ interaction\n→ inclusion\n→ community resilience\n\nThe physical building provides the setting, but the social relationships and opportunities created within it are what give the infrastructure its broader value."
      },
      {
        label: "Learnings",
        content: "A library is not just a building that stores knowledge. It is infrastructure that helps a community create, share and connect knowledge.\n\nFor a growing city, the library is part of the urban structure, not an afterthought."
      },
      {
        label: "Reflection",
        content: "What I found most interesting about this research was the shift from thinking about infrastructure as something that simply serves a population to thinking about infrastructure as something that can actively shape community life.\n\nMelton's growth and cultural diversity make this particularly relevant.\n\nA library cannot solve every social challenge facing a growing municipality. But it can provide a publicly accessible place where information, learning, technology, culture and social interaction come together. That makes it a much more significant component of urban infrastructure than its traditional image suggests."
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=900&fit=crop",
    images: [],
    featured: true
  },
  {
    id: "rethinking-the-city",
    title: "What happens when the city becomes your neighbourhood?",
    subtitle: "Compact cities, nature, public space and the lessons of COVID-19",
    location: "Melbourne, Australia",
    year: "2024",
    discipline: ["Research", "Urban planning"],
    shortDescription: "Compact cities, nature, public space and the lessons of COVID-19.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    sections: [
      {
        label: "",
        content: "The original paper identifies the 15-minute city, nature, urban spaces and COVID-19 as its central themes and explicitly frames the research around their relationship to future city planning."
      },
      {
        label: "What is a city when people can no longer move freely through it?",
        content: "Cities are generally understood through movement.\n\nPeople travel to work, commute to education, visit shops, access healthcare, meet friends and move between different parts of the metropolitan area. The city works because these activities are connected through networks of roads, public transport, pedestrian routes and public spaces.\n\nThe COVID-19 pandemic disrupted this model almost overnight.\n\nLockdowns, social distancing and restrictions on movement changed how people experienced their neighbourhoods and cities. Activities that normally depended on metropolitan mobility were suddenly compressed into a much smaller geographic area. Your original essay identifies this disruption as a catalyst for rethinking urban planning and architecture, particularly around neighbourhoods, mobility, public space and the emerging idea of the 15-minute city.\n\nThis raised a question that became the starting point for my research:\n\nIf everyday life can suddenly become local, are our neighbourhoods actually equipped to support it?"
      },
      {
        label: "The city before the pandemic: Urban life depends on connection",
        content: "Cities are complex socio-spatial systems.\n\nThey bring together people, buildings, infrastructure, economic activity, politics, culture and environmental systems. My research begins from the understanding that the built environment is closely connected to the way people interact with and experience their city.\n\nThis means that urban planning is not simply about arranging buildings. It is also about creating the conditions through which people can:\n\n• live\n• work\n• learn\n• shop\n• socialise\n• access healthcare\n• move\n• interact with nature\n\nThe pandemic made these relationships much more visible. When movement was restricted, the quality of the immediate neighbourhood suddenly mattered far more."
      },
      {
        label: "When the neighbourhood became the city: The 5-kilometre experience",
        content: "During Melbourne's lockdowns, restrictions on movement meant that people's everyday lives became significantly more localised. The normal metropolitan network of destinations was replaced, for many people, by a much smaller area around home. This exposed differences between neighbourhoods.\n\nSome people lived close to:\n\n• parks;\n• shops;\n• healthcare;\n• schools;\n• public transport;\n• walking routes;\n• cycling infrastructure.\n\nOthers had fewer accessible amenities nearby. The pandemic therefore demonstrated that proximity is not simply a matter of convenience. It can influence people's ability to maintain everyday life during disruption. The research argues that if neighbourhoods had been structured around the principles of the 15-minute city, access to essential activities could have been maintained more effectively during lockdown."
      },
      {
        label: "The 15-minute city: A city organised around everyday needs",
        content: "The 15-minute city emerged as an important concept in this discussion.\n\nThe model is based on the idea that people should be able to access six essential urban functions within approximately a 15-minute walk or bicycle trip from their home:\n\nLiving — Housing and everyday residential needs.\n\nWorking — Employment and economic activity.\n\nCommerce — Shops and everyday services.\n\nHealthcare — Access to health and wellbeing services.\n\nEducation — Schools, learning and knowledge.\n\nEntertainment — Culture, recreation and social activities.\n\nThe significance of the model is not simply that everything needs to be literally 15 minutes away. The more important planning principle is proximity. The closer essential activities are to where people live, the less dependent everyday life becomes on long-distance travel."
      },
      {
        label: "From mobility to accessibility: Being able to move is not the same as being able to access",
        content: "This distinction became important in my thinking. A city can have extensive transport infrastructure and still create unequal access to opportunities. Someone may technically be able to reach a job, healthcare facility or university, but if the journey requires a long commute, multiple transfers or private vehicle ownership, that opportunity is not equally accessible to everyone. The 15-minute city therefore reframes urban mobility.\n\nInstead of asking:\nHow quickly can people travel across the city?\n\nit asks:\nHow much can people access within their everyday neighbourhood?"
      },
      {
        label: "But is density the problem? The pandemic complicated the compact-city debate",
        content: "One of the most interesting aspects of the research was the tension surrounding compact urban development.\n\nAt the beginning of the pandemic, densely populated and highly connected places were often viewed as potentially more vulnerable because of greater levels of face-to-face contact. However, the research identifies that evidence linking density itself to COVID-19 transmission was conflicting and ambiguous.\n\nThe lesson cannot simply be:\nDensity is bad.\n\nNor can it be:\nDensity is always good.\n\nThe more useful question is:\nWhat kind of density creates a healthy and resilient urban environment?\n\nDensity needs to be considered alongside: housing conditions; public space; access to nature; mobility; infrastructure; socioeconomic conditions; community facilities.\n\nThis is where the discussion moves beyond a simple debate about compact versus dispersed cities."
      },
      {
        label: "A compact city still needs space to breathe: Density without public space is not enough",
        content: "As cities become denser, pressure on infrastructure and services increases.\n\nMy research argues that cities also need urban open spaces and natural elements to prevent urban environments from becoming monotonous and disconnected from nature.\n\nThis creates an important tension:\n\nCompactness\nversus\nOpen space\n\nBut these don't necessarily have to be opposites.\n\nA well-planned compact neighbourhood can have:\n\n• parks;\n• tree-lined streets;\n• public plazas;\n• gardens;\n• green corridors;\n• waterways;\n• accessible recreation spaces.\n\nThe challenge is therefore not choosing between density and nature. It is integrating them."
      },
      {
        label: "Nature is not an extra: It is part of urban infrastructure",
        content: "One of the arguments I developed through the research was that nature is often treated as something added to the city after the main planning decisions have already been made.\n\nBut cities depend on natural systems. They rely on land, water, vegetation and ecological processes while simultaneously transforming them through urbanisation.\n\nThe research draws on the idea that the city and nature are closely intertwined, with nature influencing urban social structures and the quality of urban life. This changed the way I understood green space.\n\nA park isn't simply an empty piece of land between buildings.\n\nIt can provide:\n\n• recreation;\n• social interaction;\n• mental wellbeing;\n• ecological value;\n• shade;\n• cooling;\n• landscape identity;\n• community space.\n\nThat makes it part of the functioning city."
      },
      {
        label: "Public space and community: What happens when people lose places to meet?",
        content: "The pandemic also exposed the importance of social connection. When public gatherings and face-to-face interaction were restricted, neighbourhood relationships changed.\n\nThe research identifies the loss of community connection as an important issue during lockdown and highlights the role of urban spaces in supporting interaction and participation.\n\nThis led to another question:\nCan public space be understood as social infrastructure?\n\nA public space does more than accommodate movement.\n\nIt can allow people to:\n\n• meet;\n• observe;\n• interact;\n• participate;\n• rest;\n• play;\n• gather.\n\nThis is particularly important in compact urban environments, where private space may be limited and the quality of shared space becomes increasingly significant."
      },
      {
        label: "The local economy: A neighbourhood can also be an economic system",
        content: "Another implication of the 15-minute city is the relationship between proximity and local economic activity. When everyday needs can be met locally, neighbourhood businesses become part of the everyday urban system. The research identifies the potential for the 15-minute approach to support local businesses and reduce dependence on large commercial centres.\n\nThis means that planning for proximity isn't simply about reducing travel.\n\nIt can also influence:\n\n• local commerce;\n• employment;\n• street activity;\n• community interaction;\n• neighbourhood identity."
      },
      {
        label: "The role of active transport: If destinations are close, how do people reach them?",
        content: "The 15-minute city depends heavily on walking and cycling.\n\nThe pandemic changed travel behaviour, while concerns around crowded public transport also influenced people's movement patterns and contributed to increased reliance on private road-based transport in some contexts.\n\nThis creates another planning relationship:\n\nLand Use\n↓\nProximity\n↓\nWalking + Cycling\n↓\nAccessibility\n↓\nLower Car Dependence\n\nThe lesson is that active transport cannot be planned separately from land use. If destinations are too far apart, walking and cycling become less practical. If destinations are close but streets are unsafe or uncomfortable, proximity alone is not enough. The urban structure and movement network have to work together."
      },
      {
        label: "What the pandemic revealed: The crisis exposed existing inequalities",
        content: "One of the strongest lessons from the research is that the pandemic did not affect every neighbourhood equally.\n\nUrban environments differ in:\n\n• access to open space;\n• housing conditions;\n• services;\n• transport;\n• employment;\n• infrastructure;\n• social resources.\n\nThis means that resilience cannot simply be measured at the city level. It has to be considered at the neighbourhood level as well. A resilient city needs resilient neighbourhoods. And resilient neighbourhoods require more than buildings. They require accessible services, public space, mobility, nature and social connection."
      },
      {
        label: "From pandemic response to long-term planning",
        content: "The value of the 15-minute city is therefore not limited to pandemic response. COVID-19 acted as a stress test. It revealed what happens when conventional mobility patterns are disrupted. But the planning lessons extend beyond pandemics.\n\nThe same neighbourhood characteristics can contribute to:\n\n• lower car dependence;\n• healthier lifestyles;\n• stronger local economies;\n• better social interaction;\n• accessible services;\n• more resilient communities.\n\nThe research concludes that lessons from COVID-19 should be incorporated into future planning, while recognising that policy responses also need to avoid unintended consequences.\n\nA different way of thinking about density.\n\nThe research ultimately moved my thinking away from the simple question:\n\nShould cities be dense or less dense?\n\ntowards:\n\nWhat should density be accompanied by?\n\nA compact urban environment needs:\n\n• access;\n• public space;\n• nature;\n• services;\n• mobility;\n• community.\n\nWithout these supporting systems, density can increase pressure on infrastructure and services. With them, compact development can support a more connected and efficient urban environment."
      },
      {
        label: "The planning idea",
        content: "The central idea emerging from the research can be expressed as:\n\nProximity — People should be able to access everyday needs locally.\n↓\nMobility — Walking and cycling should provide realistic alternatives for short trips.\n↓\nPublic Space — Neighbourhoods need places for social interaction and recreation.\n↓\nNature — Green and natural systems need to be integrated into urban structure.\n↓\nCommunity — These systems together can support stronger neighbourhood life."
      },
      {
        label: "The big idea",
        content: "A CITY'S RESILIENCE IS EXPERIENCED AT THE SCALE OF EVERYDAY LIFE.\n\nThe pandemic made this visible. When metropolitan movement stopped, the neighbourhood became the primary environment through which people experienced work, recreation, shopping, nature and community. The lesson for planning is therefore not simply to build more compact cities. It is to create compact, connected and liveable neighbourhoods where density is supported by accessibility, public space and nature."
      },
      {
        label: "Learnings",
        content: "This research changed how I think about the scale at which planning problems should be understood. Before thinking about the metropolitan city, it is useful to understand the neighbourhood. Before thinking about transport infrastructure, it is useful to understand what people need to access. Before thinking about density, it is useful to understand what supports that density. And before treating nature as a separate environmental issue, it is useful to recognise that it is part of the urban system.\n\n01 Proximity matters — The location of everyday services can influence how resilient and accessible a neighbourhood is.\n\n02 Density needs supporting systems — Compact development needs adequate public space, infrastructure, mobility and community facilities.\n\n03 Nature belongs inside the urban system — Green space should be considered part of urban structure rather than an afterthought.\n\n04 Mobility begins with land use — Walking and cycling become more viable when everyday destinations are located close to where people live.\n\n05 Resilience is local — City-wide resilience depends partly on the ability of individual neighbourhoods to support everyday life during disruption.\n\nA resilient neighbourhood is one where people can reach what they need, move comfortably, access nature, use public space and remain connected to their community. COVID-19 exposed the consequences of getting these relationships wrong. It also provided an opportunity to reconsider what we expect from the neighbourhood and what we should expect from planning."
      },
      {
        label: "Reflection",
        content: "The most important takeaway for me is that resilience is not created by one intervention. A cycle lane alone does not create a resilient neighbourhood. A park alone does not create a resilient neighbourhood. Higher density alone does not create a resilient neighbourhood. A public transport station alone does not create a resilient neighbourhood. Resilience comes from the relationship between these systems.\n\nA neighbourhood becomes stronger when people can live close to essential services, move without relying entirely on cars, access nature, use public spaces and maintain social connections. That is what I find most valuable about the 15-minute city as a planning idea. It is ultimately less about a number and more about proximity, accessibility and everyday life.\n\nThe question is not simply how compact our cities should become. The more important question is what kind of neighbourhoods we create within them."
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=900&fit=crop",
    images: [],
    featured: true
  },
  {
    id: "economy-and-city",
    title: "What does a region's economy tell us about how its city should grow?",
    subtitle: "Understanding Western Melbourne through industry, employment and spatial advantage.",
    location: "Melbourne, Australia",
    year: "2023",
    discipline: ["Research", "Economic development"],
    shortDescription: "Understanding Western Melbourne through industry, employment and spatial advantage.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    sections: [
      {
        label: "",
        content: "Cities are often discussed through their physical form.\n\nBefore planning where a city should grow, we need to understand what makes the place economically distinctive. We talk about housing growth, transport infrastructure, activity centres, industrial precincts and new development. But behind each of these spatial decisions is an economic system that determines where people work, what industries need land, where investment is attracted and which infrastructure becomes important.\n\nThis research started from a simple relationship:\n\nEconomic development influences urban development, while planning and urban development in turn shape economic development.\n\nMy objective was to understand this relationship through the Western Metropolitan region of Melbourne. Rather than looking at the region only as a collection of suburbs, I approached it as a labour market and economic system.\n\nThe research examined its industrial and occupational structure, identified areas of competitive advantage and considered what these patterns could mean for future economic and spatial planning."
      },
      {
        label: "Why Western Metro Melbourne?",
        content: "A region undergoing structural change.\n\nWestern Metro Melbourne has a long-standing economic identity associated with transport, logistics and manufacturing. It also contains substantial areas of industrial land, including the Western industrial precincts, and is positioned to benefit from major infrastructure investments such as the Metro Tunnel, West Gate Tunnel, Melbourne Airport Rail and Suburban Rail Loop. At the same time, the region is changing.\n\nThe future of Western Metro Melbourne is increasingly connected to:\n\n• metropolitan activity centres;\n• health and education precincts;\n• industrial precincts;\n• employment clusters;\n• transport infrastructure;\n• emerging economic sectors.\n\nThis creates an interesting planning challenge:\n\nHow can an established industrial economy adapt while continuing to generate employment and economic opportunity?"
      },
      {
        label: "Looking beyond the map",
        content: "The first step was to understand the labour market. I used employment data rather than beginning with a conventional land-use analysis. The research compared the Western Metro region with Greater Melbourne and Australia, using Place of Work employment data from the 2011 and 2021 Census.\n\nThis allowed me to examine two things simultaneously:\n\nWhat is already important? Which industries are concentrated in Western Metro Melbourne?\n\nWhat is changing? Which industries are growing, declining or becoming more significant?\n\nThis distinction is important because an industry can be large without necessarily being particularly specialised within a region."
      },
      {
        label: "The analytical framework: From employment numbers to regional advantage",
        content: "To move beyond simple employment statistics, I used three analytical approaches:\n\nLocation Quotient — To understand industry concentration.\n\nShift-Share Analysis — To examine employment change and understand regional performance.\n\nCluster Theory — To interpret relationships between specialised industries, employment and economic activity.\n\nThe analysis was conducted using ABS data at different geographic and industry levels, beginning with broad ANZSIC industry divisions and then examining more detailed industry patterns.\n\nThis gave the research a progression:\n\nData → Concentration → Change → Specialisation → Planning Implication"
      },
      {
        label: "The first signal: transport and logistics",
        content: "The region's economic geography starts to become visible. One of the clearest findings was the strength of Transport, Postal and Warehousing. The analysis identified this as a strongly concentrated industry in Western Metro Melbourne, with a Location Quotient of 2.20.\n\nThat number became more meaningful when considered spatially. The region is not simply home to logistics businesses by chance.\n\nIts economic position is connected to:\n\n• major transport infrastructure;\n• industrial land;\n• freight movement;\n• proximity to Melbourne Airport;\n• metropolitan connections;\n• warehousing and distribution;\n• established manufacturing activity.\n\nThe economic data therefore reinforces what the physical geography of the region already suggests:\n\nWestern Metro Melbourne has a distinctive role within Melbourne's metropolitan economy."
      },
      {
        label: "What does a location quotient actually tell us?",
        content: "The value of the Location Quotient in this research was not simply producing a number.\n\nIt allowed me to ask:\n\nWhich industries are disproportionately important to this region compared with the broader economy?\n\nThe analysis showed strong concentration not only in Transport, Postal and Warehousing, but also in Manufacturing and Wholesale Trade. This suggests that these industries are not just large employers. They are part of the economic identity and competitive structure of the region. That distinction matters for planning. If an industry is structurally important to a region, losing the land, infrastructure or connectivity that supports it can have consequences well beyond an individual business. The economic landscape is also a land-use landscape. Industry needs space. This was one of the strongest connections I drew from the research. Economic sectors don't exist independently of the physical city.\n\nA logistics economy requires:\n\nwarehouses\n↓\nindustrial land\n↓\nfreight routes\n↓\nroad and rail connections\n↓\ndistribution networks\n\nSimilarly, manufacturing requires:\n\nindustrial sites\n↓\nspecialised infrastructure\n↓\nworkers\n↓\nsupply chains\n↓\nmarket access\n\nThis means that economic planning and land-use planning cannot be separated. Protecting productive employment land can therefore be an economic development decision as much as a planning decision."
      },
      {
        label: "The people behind the industries: An industry is also a labour market",
        content: "The research also examined occupations within the major industries. Within Transport, Postal and Warehousing, Machinery Operators and Drivers, together with Clerical and Administrative Workers, were identified as prominent occupational groups. Other major industries included occupations such as managers, labourers, sales workers, technicians and trade workers. This added another dimension to the analysis.\n\nA region does not simply need jobs, it needs the people, skills and training systems capable of filling those jobs.\n\nThis creates a relationship between:\n\nIndustry\n↓\nOccupations\n↓\nSkills\n↓\nEducation + Training\n↓\nEmployment\n↓\nRegional Development"
      },
      {
        label: "Brimbank as a case study",
        content: "Zooming into the region. To understand these economic patterns at a more local level, the research focused on Brimbank City Council.\n\nBrimbank contains a combination of assets that make it particularly important within Western Melbourne:\n\n• Sunshine Metropolitan Activity Centre;\n• Victoria University;\n• Sunshine Hospital;\n• state and regional industrial precincts;\n• Sunshine National Employment and Innovation Cluster;\n• Sunshine Health, Wellbeing and Education Precinct.\n\nThis makes Brimbank an interesting example of how different economic functions can coexist within the same municipality. It isn't simply an industrial area. It is becoming a place where:\n\n• industry\n• health\n• education\n• transport\n• business\n• employment\n\nincreasingly intersect."
      },
      {
        label: "Sunshine: Where systems start to connect",
        content: "From industrial economy to employment and innovation cluster.\n\nSunshine occupies an important position between Melbourne's CBD and the western growth areas. Its existing assets are reinforced by major transport investment, including the planned transformation of Sunshine Station and connections associated with Melbourne Airport Rail. This creates a significant strategic opportunity.\n\nThe question is no longer simply:\n\nHow can Sunshine accommodate more development?\n\nIt becomes:\n\nHow can infrastructure investment strengthen the economic role of Sunshine?\n\nThat shift from development capacity to economic function is central to the research."
      },
      {
        label: "From industrial strength to economic diversification",
        content: "The future does not have to replace the past. Manufacturing remains particularly important within Brimbank.\n\nThe research identifies food manufacturing as a major employment component and highlights competitive manufacturing niches including:\n\n• metal manufacturing;\n• textile and clothing manufacturing;\n• polymer and rubber products.\n\nAt the same time, healthcare and social assistance is identified as the second-largest industry by employment and the fastest-growing sector in the analysis. This creates an interesting opportunity. Rather than treating traditional industry and emerging sectors as competing futures, they can potentially reinforce each other.\n\nFor example:\n\nHEALTHCARE\n↓\nmedical equipment\n↓\nadvanced manufacturing\n↓\nresearch\n↓\neducation\n↓\nspecialised employment\n\nThis is where the idea of an economic cluster becomes useful."
      },
      {
        label: "The airport effect: Connectivity creates economic possibilities",
        content: "Melbourne Airport's proximity introduces another layer of opportunity.\n\nThe research identifies potential connections between the airport and sectors including:\n\n• manufacturing;\n• tourism;\n• transport;\n• logistics;\n• construction;\n• wholesale;\n• warehousing;\n• distribution.\n\nThese industries can benefit from proximity to major transport infrastructure and supply chains.\n\nThe planning implication is therefore not simply:\n\nBuild better transport.\n\nIt is:\n\nUse transport investment to strengthen the economic relationships already present in the region. Infrastructure becomes an economic development tool."
      },
      {
        label: "The role of health and education: A different kind of economic infrastructure",
        content: "The Sunshine Health, Wellbeing and Education Precinct adds another dimension to the regional economy. Healthcare, education and research can generate a different form of economic activity — one based less on the movement of goods and more on:\n\n• knowledge\n• skills\n• services\n• research\n• innovation\n• employment\n\nThe research identifies the potential for this precinct to develop as a cluster supporting healthcare, education and other foundational services. This creates the possibility of a more diversified economic structure.\n\nInstead of Western Melbourne being defined primarily by:\n\nindustry + logistics\n\nits future could increasingly involve:\n\nindustry + logistics + health + education + innovation"
      },
      {
        label: "But growth creates a planning tension: Economic success can also create pressure",
        content: "Economic development is not automatically sustainable. More employment and investment can create pressure on:\n\n• transport networks;\n• industrial land;\n• housing;\n• infrastructure;\n• environmental systems;\n• skills availability;\n• local communities.\n\nThe research therefore considers economic resilience alongside climate change and environmental pressures. The Brimbank Economic Development Strategy identifies priorities including business development, investment attraction, skills and job readiness, infrastructure and precinct development, industrial areas, climate change, circular economy and green industries. This broadens the definition of economic development.\n\nIt is no longer simply:\n\nHow do we grow?\n\nIt becomes:\n\nHow do we grow without creating new vulnerabilities?"
      },
      {
        label: "The shift towards a circular economy: Industrial land can become part of the sustainability transition",
        content: "One of the ideas I found particularly relevant was the relationship between existing industry and the circular economy. Industrial areas are often discussed primarily in terms of employment and productivity.\n\nBut they can also become spaces for:\n\n• resource efficiency;\n• reuse;\n• recycling;\n• cleaner production;\n• green technologies;\n• industrial innovation.\n\nThe research proposes stronger engagement with existing local industries to support sustainability transitions and the development of green industries. This creates a different way of thinking about industrial planning. Instead of seeing industrial precincts as fixed land-use categories, they can be understood as platforms for economic transformation."
      },
      {
        label: "Building back better: Economic recovery cannot simply return to business as usual",
        content: "The research was undertaken in the context of post-pandemic economic change. COVID-19 exposed vulnerabilities in employment, supply chains and local economies. But the research argues that recovery should not simply reproduce the same patterns of development.\n\nA resilient economy needs to consider:\n\n• climate resilience\n• supply-chain resilience\n• circularity\n• innovation\n• biodiversity\n• inclusion\n• people's wellbeing\n\nThe report connects this with the idea of \"Building Back Better\", where recovery becomes an opportunity to address longer-term environmental and social vulnerabilities."
      },
      {
        label: "What the data revealed",
        content: "After bringing the different layers together, several characteristics of Western Melbourne became clear.\n\n01 A strong industrial base — Manufacturing remains a major economic strength, particularly within Brimbank.\n\n02 A specialised logistics economy — Transport, Postal and Warehousing has a particularly strong regional concentration, with an LQ of 2.20.\n\n03 Strategic infrastructure matters — Major rail, road and airport investments have the potential to reinforce existing economic advantages.\n\n04 The economy is diversifying — Healthcare, education and other knowledge-based activities create opportunities beyond the traditional industrial base.\n\n05 Land remains an economic asset — Industrial and commercial land needs to be considered in relation to long-term employment and economic capacity.\n\n06 Growth needs resilience — Climate change, environmental pressures and economic shocks need to be incorporated into future economic strategies."
      },
      {
        label: "So what does an economic profile actually allow a planner to do?",
        content: "The most important outcome of the research was understanding that economic analysis can inform spatial decisions.\n\nIf an industry is highly concentrated: → its land requirements matter.\n\nIf employment is growing: → infrastructure and accessibility matter.\n\nIf occupations are changing: → skills and education matter.\n\nIf a cluster is emerging: → proximity between businesses, institutions and infrastructure matters.\n\nIf climate risks are increasing: → future investment needs to be more resilient.\n\nThe economic profile therefore becomes more than a collection of statistics. It becomes a planning evidence base."
      },
      {
        label: "The planning system",
        content: "The research also examined how government planning frameworks respond to these economic conditions. The Melbourne Industrial and Commercial Land Use Plan provides a metropolitan framework for future industrial and commercial land requirements, including maintaining adequate long-term land supply, recognising the employment contribution of industrial areas and supporting innovation and growth. At the local level, Brimbank's Economic Development Strategy provides a more place-specific response.\n\nTogether, these demonstrate an important planning relationship:\n\nstate strategy\n↓\nregional economic structure\n↓\nlocal economic strategy\n↓\nprecinct\n↓\nland + infrastructure\n↓\njobs"
      },
      {
        label: "The strategic opportunity",
        content: "The research ultimately points toward a Western Melbourne economy that builds on what already exists rather than abandoning it.\n\nThe opportunity is to connect:\n\n• Industry: Manufacturing and industrial capability\n• Logistics: Transport, warehousing and distribution\n• Health: Sunshine Hospital and healthcare services\n• Education: Victoria University and skills development\n• Innovation: Emerging technologies and knowledge-based industries\n• Infrastructure: Rail, road and airport connectivity\n\n↓\n\nA More Diverse Regional Economy"
      },
      {
        label: "Takeaway",
        content: "01 Economic data can become spatial evidence — Employment patterns can reveal why particular areas develop particular land-use and infrastructure characteristics.\n\n02 Industry concentration matters — Understanding which sectors are regionally specialised helps identify what economic assets planning should protect and strengthen.\n\n03 Infrastructure can shape economic opportunity — Transport investment becomes more valuable when it connects existing economic strengths with emerging opportunities.\n\n04 Economic diversifying should build on existing strengths — The future economy does not necessarily need to replace traditional industries; it can connect them with health, education and innovation.\n\n05 Resilience has to be built into economic planning — Economic growth needs to be considered alongside climate change, environmental pressures, skills and long-term infrastructure vulnerability."
      },
      {
        label: "The big idea",
        content: "A REGION'S ECONOMY LEAVES A SPATIAL FOOTPRINT.\n\nIndustries need land. Workers need access. Businesses need infrastructure. Clusters need proximity. Communities need employment. And future economic growth needs a planning system capable of protecting productive assets while creating space for change.\n\nWestern Metro Melbourne's economic future therefore isn't simply about attracting more investment. It is about understanding what the region already does well, identifying where those strengths can evolve, and ensuring that land, infrastructure, skills and policy work together to support that transition.\n\nBefore deciding what a place should become, we should understand what already makes it valuable.\n\nThe Western Metro region demonstrates how economic history, industrial land, transport infrastructure, employment and emerging knowledge sectors can combine to shape the future of a metropolitan region. For me, the most valuable lesson was learning to read the economy not as something separate from planning, but as one of the forces that physically shapes the city."
      },
      {
        label: "Reflection",
        content: "This project changed the way I think about economic development in planning. Economic data can initially appear disconnected from urban design. A Location Quotient is just a number. Employment statistics are just tables. Industry classifications are just categories. But once they are connected to geography, they begin to tell a much bigger story.\n\nA high concentration of logistics tells us something about land. A growing healthcare sector tells us something about skills and institutions. Manufacturing employment tells us something about industrial land and infrastructure. Major transport investment tells us something about future economic connectivity. The role of a planner is therefore not just to read the numbers.\n\nIt is to ask:\n\nWhat do these numbers mean for the physical and economic development of a place?"
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=900&fit=crop",
    images: [],
    featured: true
  },
  {
    id: "elsternwick",
    title: "How do you grow an established place without losing its identity?",
    subtitle: "Reading Elsternwick through movement, public space and urban character.",
    location: "Elsternwick, Melbourne",
    year: "2023",
    discipline: ["Research", "Case study"],
    shortDescription: "Reading Elsternwick through movement, public space and urban character.",
    overview: "",
    objectives: [],
    approach: "",
    outcomes: "",
    sections: [
      {
        label: "",
        content: "Established activity centres are already complex places.\n\nThey have shops, streets, transport, parks, laneways, heritage buildings, residential areas and established patterns of movement.\n\nWhen growth is introduced, the challenge is therefore different from planning a new suburb.\n\nThe question becomes:\n\nHow can an established activity centre accommodate change while strengthening the qualities that already make it work?\n\nOur Elsternwick Activity Centre Case Study examined the centre through its urban structure, public spaces, transport network, walking and cycling connections, landscape and relationship with surrounding neighbourhoods. The report was completed as a collaborative project with Natsumi Maeda and Phillip Mai."
      },
      {
        label: "Starting with the existing city: Elsternwick is already a connected place",
        content: "The first thing that stood out in the analysis was the number of different urban elements operating within a relatively compact area.\n\nStreets | Plazas | Parks | Laneways | Pedestrian links | Public transport | Commercial activity\n\nThese elements are not independent. They overlap to create the everyday experience of the activity centre.\n\nThe research found that these components are already relatively seamlessly connected within Elsternwick's public-space network. This became an important starting point. Rather than thinking about the activity centre as a collection of individual sites, I began to see it as a network of connected public spaces and movement systems."
      },
      {
        label: "The centre needs places to pause",
        content: "Movement alone doesn't create a good activity centre. Elsternwick has strong movement infrastructure, but movement is only one part of an activity centre.\n\nPeople also need places to stop.\n\nTo sit. To meet. To spend time. To participate.\n\nThe research identified Elsternwick Plaza as the sole public open space within the activity centre, with Hopetoun Gardens to the east and Elsternwick Park to the west providing larger green spaces outside the core.\n\nThis raised an interesting question:\n\nDoes a highly connected activity centre also have enough places for people to actually stay?"
      },
      {
        label: "Public space as social infrastructure",
        content: "The space between destinations matters. Public space can often be treated as leftover land between buildings. In an activity centre, I think it should be understood differently. A plaza or public space can provide the point where different parts of the urban system come together.\n\nPeople arriving by tram. People walking from nearby homes. People visiting shops. People working locally. People meeting friends.\n\nThe public realm gives these different users somewhere to share the same urban environment.\n\nThe Elsternwick Structure Plan identified opportunities for additional public open spaces within the activity centre, with the intention of providing more gathering areas and recreational opportunities."
      },
      {
        label: "The transport network",
        content: "Accessibility is one of Elsternwick's strengths. The analysis examined Elsternwick's public transport and road network, including its train and tram connections. This transport infrastructure is one of the reasons the centre functions as an important activity destination.\n\nBut accessibility isn't simply about having a train station or tram line.\n\nThe more important question is:\n\nHow effectively do these transport nodes connect with the rest of the activity centre?\n\nA person arriving at a station needs to be able to move comfortably from the station to shops, public spaces, services and surrounding neighbourhoods. This means the quality of the connections between transport and the public realm matters as much as the transport infrastructure itself."
      },
      {
        label: "The walkable centre",
        content: "What can people reach on foot? The project analysed walking accessibility through an 800-metre walking isochrone, alongside the cycling network.\n\nThe 800-metre radius is useful because it shifts the analysis from simply asking where infrastructure exists to asking:\n\nWhat can a person realistically access within a walkable distance?\n\nThis is a much more human way of reading an activity centre. Instead of looking at the map as a collection of roads and parcels, the map becomes a representation of everyday access."
      },
      {
        label: "Cycling is part of the same network",
        content: "Walking and cycling should not be considered separately from public transport.\n\nA person may:\n\ncycle → train → walk\n\nor:\n\nwalk → tram → walk\n\nThe journey is often a combination of modes. The cycling-network analysis therefore added another layer to the understanding of Elsternwick's accessibility.\n\nThis reinforces an important planning idea:\n\nA connected activity centre is one where different modes work together rather than operate as separate networks."
      },
      {
        label: "Landscape is part of the urban structure",
        content: "Green space is not only recreational space.\n\nThe analysis examined Elsternwick's open-space and landscape network as well as tree cover. This highlighted the relationship between public space, landscape and urban comfort.\n\nTrees contribute to the character of streets. Parks provide recreation. Green spaces create places to gather. Landscape can soften built form. Vegetation can improve the experience of walking.\n\nThese functions become particularly important as established activity centres become more intensive."
      },
      {
        label: "Growth and character: The difficult balance",
        content: "This is where the central planning tension emerges.\n\nActivity centres need to accommodate growth.\n\nMore people can support:\n\n• more businesses;\n• more services;\n• more public transport use;\n• more local activity\n\nBut growth can also create pressure on:\n\n• street character;\n• public space;\n• heritage;\n• traffic;\n• landscape;\n• amenity\n\nThe challenge isn't to stop change. It is to determine where change can occur and how it should respond to the existing place."
      },
      {
        label: "Why context matters",
        content: "A development does not exist independently from its surroundings.\n\nA new building affects:\n\n• the street;\n• the footpath;\n• the skyline;\n• adjacent buildings;\n• public space;\n• movement;\n• views;\n• activity\n\nTherefore, understanding an activity centre requires looking beyond individual development sites. The urban structure around the site is part of the development context.\n\nThis is one of the reasons I find activity-centre planning particularly interesting: small changes can have effects beyond the individual site."
      },
      {
        label: "From site analysis to place analysis",
        content: "The project strengthened my understanding of the difference between analysing a site and analysing a place.\n\nA site can be described through:\n\nBoundaries; dimensions; zoning; built form; access; constraints\n\nA place requires additional questions:\n\nWho uses it? How do people move through it? Where do people gather? What gives it identity? What spaces are missing? What relationships already work? What could change without disrupting those relationships?\n\nThis distinction has become increasingly important in how I approach urban planning."
      },
      {
        label: "The bigger idea",
        content: "The Elsternwick case study made me think about activity centres as living urban systems. Their success isn't determined by one building or one street. It comes from the interaction between:\n\nMovement | Commerce | Public Space | Landscape | Community | Built Form\n\nThe role of planning is to manage these relationships as the centre changes."
      },
      {
        label: "Learnings",
        content: "A SUCCESSFUL ACTIVITY CENTRE IS NOT JUST A PLACE WHERE PEOPLE GO. IT IS A PLACE WHERE DIFFERENT SYSTEMS COME TOGETHER.\n\nTransport brings people in. Streets move them through. Shops and services give them reasons to visit. Public spaces give them reasons to stay. Landscape makes the environment more comfortable. And the existing character gives the centre its identity.\n\n01 Start with the existing urban structure. — Before proposing change, understand the relationships that already make the place function.\n\n02 Measure accessibility from the user's perspective. — Walking and cycling analysis can reveal relationships that aren't obvious from conventional road or land-use maps.\n\n03 Public space needs to be planned as a network. — A single plaza can provide an important gathering space, but a stronger activity centre needs multiple connected opportunities for people to stop, meet and participate.\n\n04 Growth should strengthen a place rather than erase it. — Development and character are not automatically opposites. The challenge is finding ways for new development to contribute to the existing urban system."
      },
      {
        label: "Reflection",
        content: "What I found most valuable about studying Elsternwick was seeing how much planning information can be revealed through mapping relationships.\n\nThe transport map tells one story. The walking map tells another. The cycling network adds another. The open-space map adds another. Tree cover adds another.\n\nBut when these layers are placed together, a much clearer picture of the activity centre emerges. That reinforced an approach I now use across my planning work:\n\nDon't analyse layers independently. Look for the relationships between them.\n\nGROWTH SHOULD ADD TO THE LIFE OF A PLACE, NOT REPLACE WHAT ALREADY MAKES IT WORK."
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=900&fit=crop",
    images: [],
    featured: true
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  const order = ['fishermans-bend', 'sunshine-north', 'asparagus-town', 'melton-housing'];
  const featured = projects.filter(p => p.featured && !['public-library', 'rethinking-the-city', 'economy-and-city', 'elsternwick'].includes(p.id));
  return featured.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
};
