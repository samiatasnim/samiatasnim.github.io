export type PublicationItem = {
  title: string;
  authors?: string;
  details: string;
  link?: string;
  pdfFile?: string;
};

export type PresentationItem = {
  title: string;
  details: string[];
  link?: string;
  pdfFile?: string;
};

export const publications = {
  intro:
    "Selected scholarly contributions in IoT security, mobile crowdsensing, data mining, edge computing, and intelligent sensing applications.",
  pdfFolder: "/publications/pdfs",
  refereed: [
    {
      authors: "Tasnimul Hasan, and Samia Tasnim",
      title:
        "Real-time explainable IoT security with machine learning and CTGAN-enhanced detection for resource-constrained devices",
      details:
        "Ad Hoc Networks Journal, November 2025. DOI: 10.1016/j.adhoc.2025. (Impact Factor: 4.8).",
      link: "https://www.sciencedirect.com/science/article/pii/S1570870525001854",
    },
    {
      authors: "Samia Tasnim, Niki Pissinou, S. S. Iyengar, Kianoosh Boroojeni, and Kishwar Ahmed",
      title: "RCoD: Reputation-Based Context-Aware Data Fusion for Mobile IoT",
      details:
        "In Sensors Journal, Feb 2025. DOI: 10.3390/s25041171. (IF: 3.5).",
      link: "https://www.mdpi.com/1424-8220/25/4/1171",
    },
    {
      authors: "Tasnimul Hasan, and Samia Tasnim",
      title: "Generalizable Intrusion Detection for IoT: A Cost-Sensitive Multimodal Approach",
      details:
        "2025 21st International Conference on Distributed Computing in Smart Systems and the Internet of Things (DCOSS-IoT), Lucca, Italy, June 09, 2025. DOI: 10.1109/DCOSSIoT65416.2025.00029. (Acceptance rate: 23.6%).",
      link: "https://ieeexplore.ieee.org/abstract/document/11096242",
    },
    {
      authors: "Nowshin A, Tasnim S, Tasnim S",
      title: "Physics-Informed Data Denoising for Enhanced IoT-based Water Quality Monitoring",
      details:
        "2025 IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC), Toronto, Canada, July 08, 2025. (Acceptance rate: 27.45%).",
      link: "https://ieeexplore.ieee.org/abstract/document/11126788",
    },
    {
      authors: "Samia Tasnim",
      title: "Intrusion Detection in the Internet of Things (IoT)",
      details:
        "In Ohio Celebration of Women in Computing Conference (OCWiC), Huron, OH, February 21, 2025.",
    },
    {
      authors: "Ananya Singh, Samia Tasnim, Tasnimul Hasan, and Imtiaz Ahmed",
      title: "Optimizing Edge-Based Solutions for Wildfire Detection Using UAVs (Poster)",
      details:
        "In Ohio Celebration of Women in Computing Conference (OCWiC), Huron, OH, February 22, 2025.",
    },
    {
      authors: "Tasnimul Hasan, and Samia Tasnim",
      title:
        "Multidimensional Feature Learning Enhancement in IoT Intrusion Detection: An Adaptive Cost-Sensitive Autoencoder and Weighted Ensemble Approach",
      details:
        "In the proceedings of 2024 IEEE 10th World Forum on Internet of Things (WF-IoT) (WF-IoT 2024).",
      link: "https://ieeexplore.ieee.org/abstract/document/10811174",
    },
    {
      authors: "Samia Tasnim, Ananya Singh, Tasnimul Hasan, and Imtiaz Ahmed",
      title: "UAV-Based Efficient and Reliable Wildfire Detection on the Edge",
      details:
        "In the proceedings of 2024 IEEE 10th World Forum on Internet of Things (WF-IoT) (WF-IoT 2024).",
      link: "https://ieeexplore.ieee.org/abstract/document/10811358",
    },
    {
      authors:
        "Sarah Tanzina, Imtiaz Ahmed, Md Sahabul Alam, Lutfa Akter, Kamrul Hasan, and Samia Tasnim",
      title: "CSI Acquisition for Aerial IRS Supported Cell-Free Communication Systems",
      details: "In 2024 IEEE 100th Vehicular Technology Conference (VTC2024-Fall).",
    },
    {
      authors: "Samia Tasnim",
      title: "Teaching Internet of Things (IoT) - A Remote Approach (accepted)",
      details: "In ASEE Annual Conference and Expo, Maryland, June 2023.",
    },
    {
      authors:
        "Cody Beck, Mohammed Hammoud, Dawson Kirkland, Spencer Kleparek, Samia Tasnim (all equal contribution)",
      title: "IoT-based Child Safety Alert System",
      details:
        "In 8th ACM/IEEE Conference on Internet of Things Design and Implementation (IoTDI 2023), San Antonio, Texas, May 2023.",
    },
    {
      authors: "Kishwar Ahmed, Samia Tasnim, and Kazutomo Yoshii",
      title: "Simulation of Auction Mechanism Model for Energy-Efficient High Performance Computing",
      details:
        "In Proceedings of 2020 ACM SIGSIM Conference on Principles of Advanced Discrete Simulation.",
      link: "https://dl.acm.org/doi/10.1145/3384441.3395991",
    },
    {
      authors:
        "Samia Tasnim, Ahmon Ferguson, Brooke Gordon, Chad Gordon, Kishwar Ahmed, Idongesit Mkpong-Ruffin",
      title: "A Smart Environment Monitoring Application for Mobile Internet of Things",
      details: "In 27th International Conference on Systems Engineering, USA, Dec 2020.",
    },
    {
      authors: "Kishwar Ahmed, Kazutomo Yoshii, and Samia Tasnim",
      title: "Thermal-Aware Power Capping Allocation Model for High Performance Computing Systems",
      details:
        "In Proceedings of International Conference on Computation Science and Computational Intelligence.",
      link: "https://americancse.org/events/csci2019",
    },
    {
      authors:
        "Samia Tasnim, Niki Pissinou, S. S. Iyengar, K. G. Boroojeni, and K. Ahmed",
      title:
        "RCoD: Reputation-based Context-aware Real-time Data Fusion in Mobile Crowdsensing for the Internet of Things (IoT) (In Preparation)",
      details: "In Elsevier Internet of Things, 2020.",
    },
    {
      authors: "Samia Tasnim, Yujian Charles Tang, Niki Pissinou, S. S. Iyengar",
      title: "Correlated Sensor-based Data Fusion in Mobile Crowdsensing",
      details:
        "In Grace Hopper Celebration of Women in Computing Conference, Orlando, Florida, Oct 2019.",
    },
    {
      authors:
        "Samia Tasnim*, Yujian 'Charles' Tang*, Niki Pissinou, S. S. Iyengar, and Abdur Shahid",
      title:
        "Reputation-Aware Data Fusion and Malicious Participant Detection in Mobile Crowdsensing",
      details:
        "In proceedings of 2018 IEEE International Conference on Big Data, Seattle, Washington, Dec 2018 (*-equal contribution).",
      pdfFile: "reputation-aware-data-fusion-2018.pdf",
    },
    {
      authors: "Samia Tasnim, Juan Caldas, Niki Pissinou, S. S. Iyengar, and Ziqian Ding",
      title: "SemanticAware Clustering-based Approach of Trajectory Data Stream Mining",
      details:
        "In proceedings of 2018 International Conference on Computing, Networking and Communications, Maui, Hawaii, Mar 2018.",
      pdfFile: "semantic-aware-clustering-2018.pdf",
    },
    {
      authors: "Samia Tasnim, Niki Pissinou, and S. S. Iyengar",
      title: "Real-time Identification of Movement Similarity - a Semantic-aware Approach",
      details:
        "In Grace Hopper Celebration of Women in Computing, Houston, Texas, Sept 2018.",
    },
    {
      authors: "Samia Tasnim, Niki Pissinou, and S. S. Iyengar",
      title: "A Novel Cleaning Approach of Environmental Sensing Data Streams",
      details:
        "In proceedings of 14th Annual IEEE Consumer Communications & Networking Conference (CCNC 2017), Las Vegas, Nevada, Jan 2017.",
      pdfFile: "environmental-sensing-data-streams-2017.pdf",
    },
    {
      authors: "Samia Tasnim, Kishwar Ahmed, Niki Pissinou, and S. S. Iyengar",
      title: "Offloading Code Efficiently on Mobile Cloud",
      details:
        "In Grace Hopper Celebration of Women in Computing, Houston, Texas, Oct 2015.",
      pdfFile: "offloading-code-mobile-cloud-2015.pdf",
    },
    {
      authors:
        "Samia Tasnim, Mohammad Ataur Rahman Chowdhury, Kishwar Ahmed, Niki Pissinou, and S. S. Iyengar",
      title: "Location-Aware Code Offloading on Mobile Cloud with QoS Constraint",
      details:
        "In proceedings of 11th Annual IEEE Consumer Communications & Networking Conference (CCNC 2014), Las Vegas, Nevada, Jan 2014.",
      pdfFile: "location-aware-code-offloading-2014.pdf",
    },
    {
      authors: "Nurjahan Begum, Samia Tasnim, and Mahmuda Naznin",
      title:
        "Optimal queries processing in a heterogeneous sensor network using multicommodity network flow method",
      details:
        "2010 IEEE 17th International Conference on Industrial Engineering and Engineering Management.",
      pdfFile: "optimal-queries-processing-2010.pdf",
    },
  ] satisfies PublicationItem[],
  presentations: [
    {
      title: "Data Mining in the Internet of Things (IoT)",
      details: ["In Ohio Celebration of Women in Computing Conference, February 2023."],
    },
    {
      title: "A Smart Environment Monitoring Application for Mobile Internet of Things",
      details: ["In 27th International Conference on Systems Engineering, Dec 2020."],
    },
    {
      title: "Correlated Sensor-based Data Fusion in Mobile Crowdsensing",
      details: ["In Grace Hopper Celebration of Women in Computing Conference, October 2019."],
    },
    {
      title: "Reputation-aware Fusion of Mobile Crowdsensing Data Streams",
      details: ["2019 Graduate Student Scholarly Forum (GSAW 2019), FIU.", "April 2019."],
    },
    {
      title: "Real-time Identification of Movement Similarity",
      details: [
        "Statewide Graduate Student Research Symposium (Invited top 2 graduate students), Tallahassee, April 2018.",
        "2018 Graduate Student Scholarly Forum (GSAW 2018), FIU (Best Poster Presentation), March 2018.",
      ],
    },
    {
      title: "Semantic-Aware Clustering-based Approach of Trajectory Data Stream Mining",
      details: [
        "2018 International Conference on Computing, Networking and Communications (ICNC).",
        "March 2018.",
      ],
    },
    {
      title: "Data Stream Cleaning in Mobile Wireless Sensor Networks",
      details: ["2017 Graduate Student Scholarly Forum (GSAW 2017), FIU, March 2017."],
    },
    {
      title: "A Novel Cleaning Approach of Environmental Sensing Data Streams",
      details: [
        "14th Annual IEEE Consumer Communications & Networking Conference (CCNC 2017).",
        "January 2017.",
      ],
    },
    {
      title: "Offloading Code Efficiently on Mobile Cloud",
      details: ["Grace Hopper Celebration of Women in Computing, October 2015."],
    },
    {
      title: "Location Aware Code Offloading on Mobile Cloud with QoS Constraint",
      details: [
        "11th Annual IEEE Consumer Communications & Networking Conference (CCNC 2014).",
        "January 2014.",
      ],
    },
  ] satisfies PresentationItem[],
};
