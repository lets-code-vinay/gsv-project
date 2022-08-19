import SASE from "../../Assets/Images/SASE-lock.png";
import SDWAN from "../../Assets/Images/SDWAN.png";
import HYPER_CONVERGED from "../../Assets/Images/hyper-convergent.webp";
import WIFI6 from "../../Assets/Images/wifi6.svg";
import NETWORK_AUTOMATION from "../../Assets/Images/network-automation.svg";

export const TRENDING_CONFIGS = Object.freeze({
  SASE: {
    label: "SASE",
    value: "SASE",
    title: "What Is Secure Access Service Edge (SASE)?",
    subtitle: `
      SASE refers to the whole framework, not a specific technology.Gartner,
      in its 2019 report "The Future of Network Security is in the Cloud,"      defined the SASE framework as a cloud -
      based cybersecurity solution that offers "comprehensive WAN capabilities with comprehensive network  security functions
        (such as SWG, CASB, FWaaS, and ZTNA) to support the dynamic secure access needs of digital enterprises. #ENTER#
        SASE is one of the most broadly accepted phrases, and we at GSV have implemented
        the SASE solution for multiple Enterprise Customers & Datacenters to ensure secure connectivity over the Public Internet.
    `,
    icon: SASE,
    link: "/sase",
    button: "",
  },
  SDWAN: {
    label: "SDWAN",
    value: "SDWAN",
    title: "What Is SDWAN-as-a-Service?",
    subtitle: `
      Post- COVID, SD - WAN has become far more critical as businesses shut down offices, driving either a hybrid work environment or a complete work - from - home(WFH) strategy.WFH went from temporary to permanent for many companies, which redefined the network edge #ENTER# #ENTER#
      VPNs, often the point - to - point solution for remote workers, gave way to always - on SD - WAN appliances for many tasks as the network edge extended into employees' homes. With businesses becoming more distributed, they have accelerated their migration plans to SD-WAN because of the improved experience and security for their WFH workforce.
    `,
    icon: SDWAN,
    link: "sdwan",
    button: "",
  },
  WIFI_6: {
    label: "Wi-Fi 6",
    value: "WIFI_6",
    title: "What Is WI FI 6?",
    subtitle: `
      5G is the talk of the town, with all the ISPs starting to support 5G. Some may believe that the next-generation wireless networks in the enterprise will revolve primarily around 5G, but equally important is the 802.11ax wireless standard, commonly known as Wi-Fi 6. #ENTER#
      WiFi6 delivers four times higher capacity and 75 percent lower latency, much better than earlier versions and operates in the 6 GHz band. At the same time, the 6E version also works in the same band with better design to process more data and support new technologies such as augmented/virtual reality cloud computing and telepresence.
    `,
    icon: WIFI6,
    link: "wifi-6",
    button: "",
  },
  HYPER_CONVERGED: {
    label: "Hyper Converged",
    value: "HYPER_CONVERGED",
    title: "What Is Hyper Converged Infrastructure?",
    subtitle: `
      Hyper converged infrastructure (HCI) is a software-defined, unified system that combines a traditional data center's elements (Storage, Compute, Networking & Management) to increase efficiency and enable central management.  #ENTER#
      Using this technology, we at GSV can help you with one-click automation, one-click upgrades and one management interface for your entire infrastructure. Implementation of HCI will dramatically reduce your time & effort for deploying & maintaining infrastructure, enabling IT teams to focus on needle-moving initiatives.
    `,
    icon: HYPER_CONVERGED,
    link: "hyper-converged",
    button: "",
  },
  NETWORK_AUTOMATION: {
    label: "NETWORK AUTOMATION ",
    value: "NETWORK_AUTOMATION ",
    title: "What Is NETWORK AUTOMATION ?",
    subtitle: `
      Network automation is planning, deploying, configuring, orchestrating, and assuring networks and services using the software. Network automation is increasingly required to manage modern, dynamic network complexities and orchestrate services efficiently and effectively. The end goal of network automation is to create" zero-touch" or autonomous networks.  #ENTER#
      At GSV, we use Network Automation to help our customers to improve efficiency, reduce human error and lower operating expenses (Opex).
    `,
    icon: NETWORK_AUTOMATION,
    link: "network-automation",
    button: "",
  },
});
