import { Typography, MenuList } from "@material-ui/core";
import "./styles.css";

/**
 * Default Service Blog
 */
export const DEFAULT_SERVICES = {
  id: "OUR_SERVICES",
  label: `Our Services`,
  title: `Our Services`,
  value: 10,
  color: "#002446",
  button_text: "Know More",
  text_color: "white",
  info: (
    <>
      <Typography variant={"body1"} className={` pieInfoList`}>
        We provide Best in class services belongs to all IT technologies If
        you’re searching for talented tech minds who are dedicated to their
        work, we are a perfect fit. We are a dynamic software development
        company based in USA.
      </Typography>
    </>
  ),
};

/**
 * Insight Services
 */
export const INSIGHT_DATA = {
  PROFESSIONAL_SERVICES: {
    id: "PROFESSIONAL_SERVICES",
    label: `Professional`,
    title: `Professional Services`,
    value: 10,
    color: "#002446",
    button_text: "Know More",
    text_color: "white",
    info: (
      <>
        <Typography variant={"body1"} className={` pieInfoList`}>
          Professional Services is the conductor you need to orchestrate the
          successful completion of your highest priorities. It takes vision,
          leadership, and execution to deliver world-class digital
          transformation even with the best people in the correct positions.
          <br />
          <br />
          Accelerate and de-risk your technology transformations with leading
          expertise. Quickly go from ideas to outcomes while maximizing the
          value of your IT investment. Optimize for today’s challenges in
          complex environments as we help you to validate, deploy, integrate,
          and drive the adoption of the latest technologies. Put your plan into
          action today.
        </Typography>
      </>
    ),
  },
  ADVISORY_CONSULTANCY: {
    id: "ADVISORY_CONSULTANCY",
    label: "Advisory & Consultancy",
    title: "Advisory & Consultancy Services",
    value: 10,
    color: "#41d946",
    button_text: "Know More",
    text_color: "white",
    info: (
      <>
        <Typography variant={"body1"} className={` pieInfoList`}>
          Our clients operate in some of the world's most complex, technically
          demanding and fast-paced industries. They rely on us for consulting
          and advisory services that bring clarity, set the correct agenda and
          ultimately deliver results.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our industry-renowned experts
          thoroughly assess your IT environment and business processes to carve
          an IT strategy capable of executing your business needs and furthering
          your company's vision. Even if you are looking for a custom solution
          for a one-off project or a temporary need, we will provide unlimited
          resources to upgrade your IT world. 
        </Typography>
      </>
    ),
  },
  MANAGED_SERVICES: {
    id: "MANAGED_SERVICES",
    label: "Managed",
    title: "Managed Services",
    value: 10,
    color: "#46b6e6",
    button_text: "Know More",
    text_color: "white",
    info: (
      <>
        <Typography variant={"body1"} className={` pieInfoList`}>
          Building a relationship with a trusted managed service provider (MSP)
          can make a difference in your ability to compete and innovate. Whether
          looking for a fully outsourced MSP solution or a consulting partner to
          guide your in-house team, GSV develops a plan to simplify and
          strengthen your approach to cloud, cybersecurity, governance, risk
          management, and compliance (GRC).
          <br />
          <br />
          GSV also delivers complete cloud infrastructure and application
          migration services—from design and implementation to management and
          24/7 support. With an eye on consulting, security and compliance,
          we’ll help you stay one step ahead, no matter where you are on your
          cloud adoption journey.
        </Typography>
      </>
    ),
  },

  TRANSFORMATION_SERVICES: {
    id: "TRANSFORMATION_SERVICES",
    label: "Transformation ",
    title: "Transformation Services ",
    value: 10,
    color: "#cfd4db",
    button_text: "Know More",
    text_color: "white",
    info: (
      <>
        <Typography variant={"body1"} className={` pieInfoList`}>
          Business demands keep changing, so your infrastructure must do more to
          stay ahead of the competitive curve. Today's customers want seamless,
          intuitive, personalized experiences while using products and services.
          <br />
          <br />
          The digital era is forcing companies like yours to transform through
          technology to stay relevant. Your business must be always-on, and your
          infrastructure must predict change before it happens to act fast and
          put a smile on users' faces. GSV is helping you prepare for the
          digital era with infrastructure services transforming enterprises'
          faces.
        </Typography>
      </>
    ),
  },

  STAFF_AUGMENTATION: {
    id: "STAFF_AUGMENTATION",
    title: "Staff Augmentation Services",
    label: "Staff Augmentation ",
    value: 10,
    color: "#9d0402",
    button_text: "Know More",
    text_color: "white",

    info: (
      <>
        <Typography variant={"body1"} className={` pieInfoList`}>
          As your implementation evolves over time, you’ll periodically
          encounter a situation where you’ve defined a strategic project but
          don’t have all of the staff resources available to execute the
          project. As most IT teams are managing multiple projects as a standard
          practice, it can be very easy to miss a critical opportunity simply
          because of a lack of workforce. Leverage our IT staff augmentation
          services to access certified IT professionals, including skilled
          Network Architects, Cloud Architects, DevOps Engineers, Business
          Analysts, Scrum Masters, and QA specialists. We can help you scale up
          on demand with the right pool of talented individuals without
          stretching your budget.
        </Typography>
      </>
    ),
  },

  DEVOPS: {
    id: "DEVOPS",
    label: `DevOps & DevSecOps`,
    title: "DevOps & DevSecOps Services",
    value: 10,
    color: "#3c454a",
    button_text: "Know More",
    text_color: "white",
    info: (
      <>
        <Typography variant={"body1"} className={` pieInfoList`}>
          Application delivery has shifted from large-scale, project-based
          implementations to continuous evolution. DevOps makes this possible by
          bringing business, development and operation teams together and
          applying automated processes to streamline IT.
          <br />
          <br />
          We automate your cloud infrastructure and procedures while ensuring
          continuous delivery and integration to get your product to the market
          quickly. Our industry-leading DevOps services and market-validated
          DevOps best practices bring a feature-rich product to the market in a
          lower time frame and cost.
        </Typography>
      </>
    ),
  },

  NOC: {
    id: "NOC",
    label: "   NOC/SOC    ",
    title: "NOC/SOC Services",
    value: 10,
    color: "#2b5879",
    button_text: "Know More",
    text_color: "white",
    info: (
      <>
        <Typography variant={"body1"} className={` pieInfoList`}>
          Accelerate Growth and Increase Profitability with NOC Services.
          Managed NOC & SOC are outsourced services designed to help
          organisations of all sizes improve their ability to detect and respond
          to bottlenecks and threats at a fraction of the price of building a
          SOC in-house. <br />
          <br /> Our ISO 27001:2013 certified SOC consists of security analysts,
          engineers, threat researchers and incident responders who work as a
          virtual extension of our customers’ in-house teams, managing and
          monitoring the latest detection technologies to hunt for and eliminate
          threats in their infancy, 24/7/365
        </Typography>
      </>
    ),
  },
};
