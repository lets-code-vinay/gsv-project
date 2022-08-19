import {
  Typography,
  MenuList,
} from "@material-ui/core";
import './styles.css';


/**
 * Default Service Blog
 */
export const DEFAULT_SERVICES = {
  id: "OUR_SERVICES",
  label: `Our Services`,
  value: 10,
  color: "#002446",
  button_text: 'Know More',
  text_color: "white",
  info: (<>
    <Typography
      variant={"body1"}
      className={` pieInfoList`}
    >
      We provide Best in class services  belongs to all IT technologies If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA.
    </Typography>
  </>)
};

/**
    * Insight Services
    */
export const INSIGHT_DATA = {
  NETWORK: {
    id: "NETWORK",
    // label: `Network (Wired & Wireless)`, // old label
    label: `Network`,
    value: 10,
    color: "#002446",
    button_text: "Know More",
    text_color: "white",
    info: (<>
      <Typography
        variant={"body1"}
        className={` pieInfoList`}
      >
        Since the network is core to any Enterprise or Internet service provider business, utmost importance is given to network planning, design, and engineering functions. The key drivers for this function are
        <MenuList className={` pieInfoMenu`}>•	optimum utilisation of network resources,</MenuList>
        <MenuList className={` pieInfoMenu`}>•	alignment of network strategy to business strategy,</MenuList>
        <MenuList className={` pieInfoMenu`}>•	OPEX and CAPEX efficiency, and</MenuList>
        <MenuList className={` pieInfoMenu`}>•	technology readiness for competitive products and services.</MenuList>
        GSV supports engineering across wired and wireless technology domains supporting multiple equipment and platforms. Our network engineering function comprises Planning, Design, and Implementation services based on understanding an Enterprise or Service provider's network requirements.
      </Typography>
    </>)
  },

  CYBERSECURITY: {
    id: "CYBERSECURITY",
    label: "Cybersecurity",
    value: 10,
    color: "#46b6e6",
    button_text: 'Know More',
    text_color: "white",
    info: (<>
      <Typography
        variant={"body1"}
        className={` pieInfoList`}
      >
        Wherever your business goes, whomever it works with, you need cybersecurity that covers it all. Network threats are a reality; you cannot protect your business by just doing a formality. It would be best if you had a lot of experience and expertise in dealing with threats & vulnerabilities; this is where we make ourselves count.
        We create cybersecurity solutions tailored to your specific business needs. We defend against cyberattacks with proactive, focused, industry-relevant threat intelligence to give you the confidence from knowing your business is secure.
      </Typography>
    </>)
  },

  DATA_CENTER: {
    id: "DATA_CENTER",
    // label: "Data Center Virtualization", // old label
    label: "Data Center",
    value: 10,
    color: "#3c454a",
    button_text: 'Know More',
    text_color: "white",
    info: (<>
      <Typography
        variant={"body1"}
        className={` pieInfoList`}
      >
        GSV Systems Data Centers deployment specialists are experts in logistics, procurement, quality control, scheduling and best safety practices. We customize our deployment services size, scope and specifics to your preferences.
        For example:
        <MenuList className={` pieInfoMenu`} >•	We'll happily take on an entire data centre migration and deployment or handle part of the project. </MenuList>
        <MenuList className={` pieInfoMenu`} >•	Based on your specifications, we can utilize your chosen vendors or provide recommendations from our ecosystem of best-of-breed partners.  </MenuList>
        <MenuList className={` pieInfoMenu`} >•	You can choose from flexible billing options, including an open-book, cost-plus model.  </MenuList>
      </Typography >
    </>)
  },
  COLLABORATION: {
    id: "COLLABORATION",
    label: "Collaboration",
    value: 10,
    color: "#41d946",
    button_text: 'Know More',
    text_color: "white",
    info: (<>
      <Typography
        variant={"body1"}
        className={` pieInfoList`}
      >
        Our end-to-end UC solutions help modernize your communication environment, starting with a consulting assessment. From there, we can help you maximize investments in Cisco & Microsoft platforms – ensuring successful sharing, no matter where or
        when your employees work. You can learn about leveraging mobility, presence and contact capabilities to offer employees anytime, anywhere, any device access to UCC applications needed for their day-to-day duties.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If you’re ready to modernize communications, we can help. Our experts work with you to devise an apt strategy and roadmap aligned to your business objectives by seamlessly integrating all your contacts and collaboration platforms into one unified solution.
      </Typography >
    </>)
  },
  CLOUD_COMP: {
    id: "CLOUD_COMP",
    label: "Cloud & Computing",
    value: 10,
    color: "#9d0402",
    button_text: 'Know More',
    text_color: "white",

    info: (<>
      <Typography
        variant={"body1"}
        className={` pieInfoList`}
      >
        GSV helps organizations transform their IT environment with cost-effective Cloud services. Our team of experts delivers cutting-edge Cloud computing consulting services that help companies boost their productivity to new heights.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Cloud managed services enable organizations to reduce their overheads and improve productivity, lowering costs and reducing time-to-market.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We assist customers with our on-demand enterprise Cloud solutions, tools, and applications such as servers, storage, databases, networking, software, and apps.
      </Typography >
    </>)
  },
  IOT: {
    id: "IOT",
    label: "Internet of Things",
    value: 10,
    color: "#cfd4db",
    button_text: 'Know More',
    text_color: "white",
    info: (<>
      <Typography
        variant={"body1"}
        className={` pieInfoList`}
      >
        Experts at GSV help industrial companies improve with collecting and analyzing data. IoT solutions provide data that can be utilized by Enterprise Resource Planning (ERP), Manufacturing Execution Systems (MES), and Supplier Relationship Management
        (SRM) systems to discover previously unknown data and trends that can be evaluated to create more efficient operations.
      </Typography >
    </>)
  },

  NOC: {
    id: "NOC",
    label: "NOC/SOC",
    value: 10,
    color: "#2b5879",
    button_text: 'Know More',
    text_color: "white",
    info: (<>
      <Typography
        variant={"body1"}
        className={` pieInfoList`}
      >
        Managed NOC & SOC are outsourced services designed to help organisations of all sizes improve their ability to detect and respond to bottlenecks and threats at a fraction of the price of building a SOC in-house.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our ISO 27001:2013 certified SOC consists of security analysts, engineers, threat researchers and incident responders who work as a virtual extension of our customers’ in-house teams, managing and monitoring the latest detection technologies to hunt for and eliminate threats in their infancy, 24/7/365.
      </Typography >
    </>)
  },
};
