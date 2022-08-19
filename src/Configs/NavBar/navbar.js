import { THEME_COLOR } from "../Theme";
import NETWORK_IMAGE from "../../Assets/Images/Menu-images/network-1.jpg";
import LAN_ICON from "../../Assets/Icons/lan.svg";
import WAN_ICON from "../../Assets/Icons/wan.svg";
import WAM_ICON from "../../Assets/Icons/wireless.svg";
import MISC_ICON from "../../Assets/Icons/misc.svg";
import POPULAR_ICON from "../../Assets/Icons/popular.svg";

import SECURITY_MAIN_IMAGE from "../../Assets/Images/Menu-images/security.jpg";
import DATA_CENTER_SECURITY_IMAGE from "../../Assets/Images/Menu-images/data-center-security.jpg";

import MOBILE_SECURITY_IMAGE from "../../Assets/Images/Menu-images/mobile-cyber-security.png";
import MOBILE_DATA_SECURITY_IMAGE from "../../Assets/Images/Menu-images/mobile-data-security.jpg";
import MOBILE_NETWORK from "../../Assets/Images/Menu-images/mobile-network.jpg";

export const NAVBAR_MENUS = {
  IT_INFRASTRUCTURE: {
    label: "IT Infrastructure",
    value: "IT_INFRASTRUCTURE",
    isMore: false,
    menus: {
      NETWORKING: {
        label: "NETWORKING",
        value: "NETWORKING",
        menus: {
          image: NETWORK_IMAGE,
          test: "TEST-b",
          mobile_image: MOBILE_NETWORK,
          title: "NETWORK",
          color: THEME_COLOR.color_4,
          subtitle: `Implement enterprise-class connectivity for wired and wireless.Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --LAN --
            LAN: {
              label: "LAN",
              value: "LAN",
              test: "TEST-a",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                ROUTING: {
                  label: "Routing",
                  value: "ROUTING",
                  path: "/lan/routing",
                  test: "TEST-as",
                },
                SWITCHING: {
                  label: "Switching",
                  value: "SWITCHING",
                  path: "/lan/switching",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/lan/software-denied-networking",
                },
                CMN: {
                  label: "Cloud Managed Network",
                  value: "CMN",
                  path: "/lan/Cloud-Managed-Network",
                },
                IBN: {
                  label: "Intent-based Networking",
                  value: "IBN",
                  path: "/lan/Intent-based-Networking",
                },
                AI: {
                  label: "Artificial Intelligence for IT Operations",
                  value: "AI",
                  path: "/lan/Cloud-Managed-Network",
                },
                IoT: {
                  label: "Internet of Things (IoT)",
                  value: "IoT",
                  path: "/lan/Cloud-Managed-Network",
                },
              },
            },
            // --Wan--
            WAN: {
              label: "WAN",
              value: "WAN",
              shaded: false,
              icon: WAN_ICON,
              image: WAN_ICON,
              mobile_image: "",
              menus: {
                SD_WAN: {
                  label: "SD-WAN",
                  value: "SD_WAN",
                  path: "/wan/sd-wan",
                },
                SASE: {
                  label: "SASE",
                  value: "SASE",
                  path: "/wan/SASE",
                },
                VPN: {
                  label: "Virtual Private Network",
                  value: "VPN",
                  path: "/wan/virtual-private-network",
                },
              },
            },

            //--Wireless and mobility --
            WAM: {
              label: "Wireless & Mobility",
              value: "WAM",
              shaded: false,
              icon: WAM_ICON,
              image: WAM_ICON,
              mobile_image: "",
              menus: {
                WI_FI_6: {
                  label: "Wi-Fi-6",
                  value: "WI_FI_6",
                  path: "/wireless-and-mobility/wi-fi-6",
                },
                UNIFIED_WIRELESS: {
                  label: "Unified Wireless",
                  value: "UNIFIED_WIRELESS",
                  path: "/wireless-and-mobility/Unified-Wireless",
                },
                ENTERPRISE_MOBILITY: {
                  label: "Enterprise Mobility",
                  value: "ENTERPRISE_MOBILITY",
                  path: "/wireless-and-mobility/Enterprise-mobility",
                },
                LBS: {
                  label: "Location Based Services",
                  value: "LBS",
                  path: "/wireless-and-mobility/Location-Based-Services",
                },
                CMW: {
                  label: "Cloud Managed wireless",
                  value: "CMW",
                  path: "/wireless-and-mobility/Cloud-Managed-wireless",
                },
              },
            },

            // Service Provider
            SERVICE_PROVIDER: {
              label: "Service Provider",
              value: "SERVICE_PROVIDER",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMW: {
                  label: "Cloud Managed Wireless",
                  value: "CMW",
                  path: "/Service-Provider/cloud-managed-wireless",
                },
              },
            },

            // Empty block to balance
            EMPTY_BLOCK: {
              label: "",
              value: "EMPTY_BLOCK",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                OOB_MANAGEMENT: {
                  label: "OOB Management",
                  value: "OOB_MANAGEMENT",
                  path: "/miscellaneous/OOB-Management",
                },
                AMH: {
                  label: "Automated Monitoring & Helpdesk",
                  value: "AMH",
                  path: "/miscellaneous/Automated-Monitoring-Helpdesk",
                },

                OA: {
                  label: "Orchestration and Automation",
                  value: "OA",
                  path: "/miscellaneous/Orchestration-and-Automation",
                },
                SD_WAN_SAAS: {
                  label: "SD-WAN as a Service",
                  value: "SD_WAN_SAAS",
                  path: "/miscellaneous/SD-WAN-as-a-service",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // -- Cisco DNA
                CLOUD_GENIX: {
                  label: "CloudGenix",
                  value: "CLOUD_GENIX",
                  path: "/CloudGenix",
                },
                // -- Cisco SD WAN
                PRISMA_SD_WAN: {
                  label: "Prisma SD-WAN",
                  value: "PRISMA_SD_WAN",
                  path: "/Prisma-SD-WAN",
                },
              },
            },
          },
        },
      },

      /**
       * Security and cyber Security
       */
      SECURITY: {
        label: "SECURITY",
        value: "SECURITY",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                ENDPOINT_SECURITY: {
                  label: "Endpoint Security",
                  value: "ENDPOINT_SECURITY",
                  path: "/security/endpoint-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                VCISCOS: {
                  label: "Virtual CISCO Services",
                  value: "VCISCOS",
                  path: "/cybersecurity/virtual-cisco-services",
                },
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },
            // Emply block to balance
            EMPTY_BLOCK: {
              label: "",
              value: "EMPTY_BLOCK",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE)",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                OA: {
                  label: "Orchestration and Automation",
                  value: "OA",
                  path: "/miscellaneous/orchestraion-automation",
                },
                CSS: {
                  label: "Centralized Security Solution",
                  value: "CSS",
                  path: "/miscellaneous/Centralized-Security-Solution",
                },
                SAAS_N: {
                  label: "Security-as-a-Service for Networks",
                  value: "SAAS_N",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Umbrella
                CISCO_SECURE_DDOS: {
                  label: "Cisco Secure DDOS",
                  value: "CISCO_SECURE_DDOS",
                  path: "/Cisco-Secure_ddos",
                },

                // --Cisco Identity Service Engine(ISE
                CISE: {
                  label: "Cisco Identity Service Engine(ISE)",
                  value: "CISE",
                  path: "/Cisco-Identity-Service-Engine",
                },
                // --Cisco Secure Network Analytics: {
                CSNA: {
                  label: "Cisco Secure Network Analytics",
                  value: "CSNA",
                  path: "/Cisco-Secure-Network-Analytics",
                },
                // --Palo Alto Panorama
                PAP: {
                  label: "Palo Alto Panorama",
                  value: "PAP",
                  path: "/Palo-Alto-Panorama",
                },
                // --Palo Alto Cortex
                PAC: {
                  label: "Palo Alto Cortex",
                  value: "PAC",
                  path: "/Palo-Alto-Cortex",
                },

                // Checkpoint
                CHECKPOINT: {
                  label: "Checkpoint",
                  value: "CHECKPOINT",
                  path: "/Checkpoint",
                },
                // -- Forti
                FORTI: {
                  label: "Forti",
                  value: "FORTI",
                  path: "/Forti",
                },
                // -- other vendor
                OTHER_VENDER: {
                  label: "other vender hot items",
                  value: "OTHER_VENDER",
                  path: "/other-vender-hot-items",
                },
              },
            },
          },
        },
      },

      /**
       * DATA CENTER
       */
      DATA_CENTER: {
        label: "DATA CENTER ",
        value: "DATA_CENTER",
        color: THEME_COLOR.data_green,
        menus: {
          image: DATA_CENTER_SECURITY_IMAGE,
          mobile_image: MOBILE_DATA_SECURITY_IMAGE,
          title: "Data Center Security",
          color: THEME_COLOR.data_center_security,
          subtitle: `Data Center Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --DATA_CENTER --
            DATA_CENTER: {
              label: "Data Center",
              value: "DATA_CENTER",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                ASSURANCE_INSIGHT: {
                  label: "Assurance & Insight",
                  value: "ASSURANCE_INSIGHT",
                  path: "/data-center/assurance-insight",
                },
                HCI: {
                  label: "Hyper Coverged infrastructure",
                  value: "HCI",
                  path: "/data-center/Hyper-Coverged-infrastructure",
                },
                WO: {
                  label: "Worklaod Optimization",
                  value: "WO",
                  path: "/data-center/Worklaod-Optimization",
                },
                IAAS: {
                  label: "IaaS",
                  value: "IAAS",
                  path: "/data-center/IaaS",
                },
                APM: {
                  label: "Application Performance Monitoring",
                  value: "APM",
                  path: "/data-center/Application-Performance-Monitoring",
                },
                DS: {
                  label: "Data-Storage",
                  value: "DS",
                  path: "/data-center/Data-Storage",
                },
                DCM: {
                  label: "Data Center Moderenization",
                  value: "DCM",
                  path: "/data-center/Data-Center-Moderenization",
                },
                TA: {
                  label: "Telemetry & Analytics",
                  value: "TA",
                  path: "/data-center/Telemetry & Analytics",
                },
                VMWARE_CLOUD: {
                  label: "VMware Cloud",
                  value: "VMWARE_CLOUD",
                  path: "/data-center/VMware-Cloud",
                },
                VMWARE_TANZU: {
                  label: "VMware Tanzu",
                  value: "VMWARE_TANZU",
                  path: "/data-center/VMware-Tanzu",
                },
              },
            },

            VIRTUALIZATION: {
              label: "Virtualization",
              value: "VIRTUALIZATION",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                OMC: {
                  label: "Operate Multi Cloud",
                  value: "OMC",
                  path: "/virtualization/operate-multi-cloud",
                },
                VM_CLOUD_ON_AWS: {
                  label: "VMware Cloud on AWS",
                  value: "VM_CLOUD_ON_AWS",
                  path: "/virtualization/VMware-Cloud-on-AWS",
                },
                VM_CLOUD_ON_AZURE: {
                  label: "VMware Cloud on Azure",
                  value: "VM_CLOUD_ON_AZURE",
                  path: "/virtualization/VMware-Cloud-on-Azure",
                },
                GCVME: {
                  label: "Google Cloud VMware Engine",
                  value: "GCVME",
                  path: "/virtualization/Google-Cloud-VMware-Engine ",
                },
                OCVMS: {
                  label: "Oracle Cloud VMware Solution",
                  value: "OCVMS",
                  path: "/virtualization/Google-Cloud-VMware-Solution ",
                },
              },
            },

            // Emply block to balance
            EMPTY_BLOCK: {
              label: "",
              value: "EMPTY_BLOCK",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CK: {
                  label: "Containers & Kubernetes",
                  value: "CK",
                  path: "/miscellaneous/Containers-Kubernetes",
                },
                BAM: {
                  label: "Build Apps & Microservices",
                  value: "BAM",
                  path: "/miscellaneous/Build-Apps-Microservices",
                },
                MBaaS: {
                  label: "Managed-Backup-as-a-Service",
                  value: "MBaaS",
                  path: "/miscellaneous/Managed-Backup-as-a-Service",
                },
                MCS: {
                  label: "Managed Cloud Services",
                  value: "MCS",
                  path: "/miscellaneous/Managed-Cloud-Services",
                },
                CDTS: {
                  label: "Cloud Data Tiering Services",
                  value: "CDTS",
                  path: "/miscellaneous/Cloud-Data-Tiering-Services",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ACI
                CISCO_ACI: {
                  label: "Cisco ACI",
                  value: "CISCO_ACI",
                  path: "/Cisco-ACI",
                },
                // -- Cisco Hyperflex
                CISCO_HYPERFLEX: {
                  label: "Cisco Hyperflex",
                  value: "CISCO_HYPERFLEX",
                  path: "/Cisco-Hyperflex",
                },
                // -- Cisco DCNM
                CISCO_DCNM: {
                  label: "Cisco DCNM",
                  value: "CISCO_DCNM",
                  path: "/Cisco-DCNM",
                },
                // -- Cisco Nexus
                CN: {
                  label: "Cisco Nexus",
                  value: "CN",
                  path: "/Cisco-Nexus",
                },
                // -- Cisco UCS
                CISCO_UCS: {
                  label: "Cisco UCS",
                  value: "CISCO_UCS",
                  path: "/Cisco-UCS",
                },
                // -- Cisco Insight Services
                CIS: {
                  label: "Cisco Insight Services",
                  value: "CIS",
                  path: "/Cisco-Insight-Services",
                },
                // -- Cisco Flexpod
                CISCO_FLEXPOD: {
                  label: "Cisco Flexpod",
                  value: "CISCO_FLEXPOD",
                  path: "/Cisco-Flexpod",
                },
                // -- Cisco AppDynamics
                CISCO_APPDYNAMICS: {
                  label: "Cisco AppDynamics",
                  value: "CISCO_APPDYNAMICS",
                  path: "/Cisco-AppDynamics",
                },
                // --Cisco Secure Networking
                CSN: {
                  label: "Cisco Secure Networking",
                  value: "CSN",
                  path: "/Cisco-Secure-Networking",
                },
                // --Arista Cloud Networking
                ACN: {
                  label: "Arista Cloud Networking",
                  value: "ACN",
                  path: "/Arista-Cloud-Networking",
                },
                // --Arista EOS
                A_EOS: {
                  label: "Arista EOS",
                  value: "A_EOS",
                  path: "/Arista-EOS",
                },

                // --NSX Advanced Load Balancer
                ALB: {
                  label: "NSX Advanced Load Balancer",
                  value: "ALB",
                  path: "/NSX-Advanced-Load-Balancer",
                },
                // --NSX Data Center
                DC: {
                  label: "NSX Data Center",
                  value: "DC",
                  path: "/NSX-Data-Center",
                },
                // --NSX Cloud
                CLOUD: {
                  label: "NSX Cloud",
                  value: "CLOUD",
                  path: "/NSX-Cloud",
                },
                // --NSX Distributed Firewell
                DF: {
                  label: "NSX Distributed Firewell",
                  value: "DF",
                  path: "/NSX-Distributed Firewell",
                },
                // --NSX Sandbox
                SANDBOX: {
                  label: "NSX Sandbox",
                  value: "SANDBOX",
                  path: "/NSX-Sandbox",
                },
                // --NSX Network Detection & Response
                NDR: {
                  label: "NSX Network Detection & Response",
                  value: "NDR",
                  path: "/NSX-Network-Detection-Response",
                },
                // --NSX Distributed IDS/IPS
                DISTRIBUTED_IDP_IPS: {
                  label: "NSX Distributed IDS/IPS",
                  value: "DISTRIBUTED_IDP_IPS",
                  path: "/NSX-Distributed",
                },
                // --VMware VeloCloud
                VM_VC: {
                  label: "VMware VeloCloud",
                  value: "VM_VC",
                  path: "/VMware-VeloCloud",
                },
                // --VMware Secure Access
                VM_SA: {
                  label: "VMware Secure Access",
                  value: "VM_SA",
                  path: "/VMware-Secure-Access",
                },
                // --DANZ Monitoring Fabric
                DANZ: {
                  label: "DANZ Monitoring Fabric",
                  value: "DANZ",
                  path: "/DANZ-Monitoring-Fabric",
                },
              },
            },
          },
        },
      },

      /**
       * COLLABORATION
       */
      COLLABORATION: {
        label: "COLLABORATION ",
        value: "COLLABORATION",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            COLLAB_WITHOUT_TITLE: {
              label: "",
              value: "COLLAB_WITHOUT_TITLE",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                CONFERENCING: {
                  label: "Conferencing",
                  value: "CONFERENCING",
                  path: "/collaboration/Conferencing",
                },
                CONTACT_CENTER: {
                  label: "Contact Center",
                  value: "CONTACT_CENTER",
                  path: "/collaboration/Contact-Center",
                },
                CC: {
                  label: "Cloud Calling",
                  value: "CC",
                  path: "/collaboration/Cloud-Calling",
                },
                OPCC: {
                  label: "On-Premise Call Control",
                  value: "OPCC",
                  path: "/collaboration/On-Premise-Call-Control",
                },
                WORK_STREAM_COLLAB: {
                  label: "Workstream Collabrotion",
                  value: "WORK_STREAM_COLLAB",
                  path: "/collaboration/Workstream Collabrotion",
                },
                CaM: {
                  label: "Calling-&-Messaging",
                  value: "CaM",
                  path: "/collaboration/Calling-Messaging",
                },
                VDO: {
                  label: "Video",
                  value: "VDO",
                  path: "/collaboration/Video",
                },
                WEBEX_TEAMS: {
                  label: "Webex Teams",
                  value: "WEBEX_TEAMS",
                  path: "/collaboration/Webex-Teams",
                },
                MICROSOFT_TEAMS: {
                  label: "Microsoft Teams",
                  value: "MICROSOFT_TEAMS",
                  path: "/collaboration/Microsoft-Teams",
                },
                OFFICE_365: {
                  label: "Office 365",
                  value: "OFFICE_365",
                  path: "/collaboration/Office-365",
                },
                ZOOM: {
                  label: "Zoom Meetings",
                  value: "ZOOM",
                  path: "/collaboration/Zoom-Meetings",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                PS: {
                  label: "Professional Services",
                  value: "PS",
                  path: "/miscellaneous/Professional-Services",
                },
                MS: {
                  label: "Managed Services",
                  value: "MS",
                  path: "/miscellaneous/Managed-Services",
                },
                SS: {
                  label: "Support Services",
                  value: "SS",
                  path: "/miscellaneous/Support-Services",
                },
                LS: {
                  label: "Learning Services",
                  value: "LS",
                  path: "/miscellaneous/Learning-Services",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Desk Camera
                DESK_CAMERA: {
                  label: "Desk Camera",
                  value: "DESK_CAMERA",
                  path: "/Desk-Camera",
                },
                // -- Noise Cancellation Mic
                NCM: {
                  label: "Noise Cancellation Mic",
                  value: "NCM",
                  path: "/Noise-Cancellation-Mic",
                },
                // -- Webex Cloud Connected UC
                WCCU: {
                  label: "Webex Cloud Connected UC",
                  value: "WCCU",
                  path: "/Webex-Cloud-Connected-UC",
                },
                // -- Webex Desk Pro
                WDP: {
                  label: "Webex Desk Pro",
                  value: "WDP",
                  path: "/Webex-Desk-Pro",
                },
                // -- Webex Room Panorama
                WRP: {
                  label: "Webex Room Panorama",
                  value: "WRP",
                  path: "/Webex-Room-Panorama",
                },
                // -- Webex Contatc Center Enterprise
                WCCE: {
                  label: "Webex Contatc Center Enterprise",
                  value: "WCCE",
                  path: "/Webex-Contatc-Center-Enterprise",
                },
                // -- Skype for Business
                SFB: {
                  label: "Skype for Business",
                  value: "SFB",
                  path: "/Skype-for-Business",
                },
              },
            },
          },
        },
      },

      /**
       * CLOUD AND COMPUTING
       */
      CAC: {
        label: "CLOUD AND COMPUTING ",
        value: "CAC",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            CAndC1: {
              label: "",
              value: "CAndC1",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                CLOUD_CONSULTING: {
                  label: "Cloud-Consulting",
                  value: "CLOUD_CONSULTING",
                  path: "/cloud-and-computing/Cloud-Consulting",
                },
                CLOUD_ENGINEERING: {
                  label: "Cloud-Engineering",
                  value: "CLOUD_ENGINEERING",
                  path: "/cloud-and-computing/Cloud-Engineering",
                },
                CLOUD_OPTIMIZATION: {
                  label: "Cloud-Optimization",
                  value: "CLOUD_OPTIMIZATION",
                  path: "/cloud-and-computing/Cloud-Optimization",
                },
                AWS_CM: {
                  label: "AWS Cloud Migration",
                  value: "AWS_CM",
                  path: "/cloud-and-computing/AWS Cloud Migration",
                },
              },
            },
            CAndC2: {
              label: "",
              value: "CAndC2",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                HC: {
                  label: "Hybrid Cloud",
                  value: "HC",
                  path: "/cloud-and-computing/Hybrid-Cloud",
                },
                CM: {
                  label: "Cloud Migration",
                  value: "CM",
                  path: "/cloud-and-computing/Cloud-Migration",
                },
                CS: {
                  label: "Cloud Strategy",
                  value: "CS",
                  path: "/cloud-and-computing/Cloud-Strategy ",
                },
                DM: {
                  label: "Data Migration",
                  value: "DM",
                  path: "/cloud-and-computing/Data-Migration ",
                },
                EC: {
                  label: "Hybrid Cloud Management",
                  value: "EC",
                  path: "/cloud-and-computing/Hybrid-Cloud-Management ",
                },
                SAAS: {
                  label: "Sass Integration",
                  value: "SAAS",
                  path: "/cloud-and-computing/Sass-Integration ",
                },
              },
            },

            CAndC3: {
              label: "",
              value: "CAndC3",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                HC: {
                  label: "Hybrid Cloud",
                  value: "HC",
                  path: "/cloud-and-computing/Hybrid-Cloud",
                },
                CM: {
                  label: "Cloud Migration",
                  value: "CM",
                  path: "/cloud-and-computing/Cloud-Migration",
                },
                CS: {
                  label: "Cloud Strategy",
                  value: "CS",
                  path: "/cloud-and-computing/Cloud-Strategy ",
                },
                DM: {
                  label: "Data Migration",
                  value: "DM",
                  path: "/cloud-and-computing/Data-Migration ",
                },
                EC: {
                  label: "Hybrid Cloud Management",
                  value: "EC",
                  path: "/cloud-and-computing/Hybrid-Cloud-Management ",
                },
                SAAS: {
                  label: "Sass Integration",
                  value: "SAAS",
                  path: "/cloud-and-computing/Sass-Integration ",
                },
              },
            },
          },
        },
      },
      /**
       * INTERNET OF THINGS
       */
      IOT: {
        label: "INTERNET OF THINGS (IoT) ",
        value: "IOT",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            IOT1: {
              label: "Internet of Things",
              value: "IOT1",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                INDUSTRIAL_NETWORKING: {
                  label: "Industiral Networking",
                  value: "INDUSTRIAL_NETWORKING",
                  path: "/IoT/Industiral-Networking",
                },
                IRS: {
                  label: "Industrial Routes & Switches",
                  value: "IRS",
                  path: "/IoT/Industrial-Routes-Switches",
                },
                IDS: {
                  label: "Indutrial Data Security`",
                  value: "IDS",
                  path: "/IoT/Indutrial-Data-Security`",
                },
                IWAP: {
                  label: "Industrial Wireless Access Points",
                  value: "IWAP",
                  path: "/IoT/Industrial Wireless Access Points",
                },
                IC: {
                  label: "Industrial-Connectivity",
                  value: "IC",
                  path: "/IoT/Industrial-Connectivity",
                },
                SCS: {
                  label: "Smart City Sensors",
                  value: "SCS",
                  path: "/IoT/Smart-City-Sensors",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                CISCO_C_IR_S_R: {
                  label: "Cisco Catalyst IR Series Routers",
                  value: "CISCO_C_IR_S_R",
                  path: "/Cisco-Catalyst-IR-Series-Routers",
                },
                CISCO_CGR: {
                  label: "Cisco Connected Grid Routers",
                  value: "CISCO_CGR",
                  path: "/Cisco-Connected-Grid-Routers",
                },
                CISCO_C_IE_S_S: {
                  label: "Cisco Catalyst IE Series Switches",
                  value: "CISCO_C_IE_S_S",
                  path: "/Cisco-Catalyst-IE-Series-Switches",
                },
                TI: {
                  label: "Threat Intelligence",
                  value: "TI",
                  path: "/Threat Intelligence",
                },
                I_WiFi: {
                  label: "Industrial Wi-Fi",
                  value: "I_WiFi",
                  path: "/Industrial-Wi-Fi",
                },
              },
            },
          },
        },
      },
    },
  },

  // ---------------------------
  DND: {
    label: "DevOps & Deployment ",
    value: "DND",
    isMore: false,
    menus: {
      NETWORKING: {
        label: "NETWORK WIRED AND WIRELESS",
        value: "NETWORKING",
        menus: {
          image: NETWORK_IMAGE,
          mobile_image: MOBILE_NETWORK,
          title: "NETWORK",
          color: THEME_COLOR.color_4,
          subtitle: `Implement enterprise-class connectivity for wired and wireless.Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --LAN --
            LAN: {
              label: "LAN",
              value: "LAN",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                ROUTING: {
                  label: "Routing",
                  value: "ROUTING",
                  path: "/lan/routing",
                },
                SWITCHING: {
                  label: "Switching",
                  value: "SWITCHING",
                  path: "/lan/switching",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/lan/software-denied-networking",
                },
                CMN: {
                  label: "Cloud Managed Network",
                  value: "CMN",
                  path: "/lan/Cloud-Managed-Network",
                },
                IBN: {
                  label: "Intent-based Networking",
                  value: "IBN",
                  path: "/lan/Intent-based-Networking",
                },
                AI: {
                  label: "Artificial Intelligence for IT Operations",
                  value: "AI",
                  path: "/lan/Cloud-Managed-Network",
                },
              },
            },
            // --Wan--
            WAN: {
              label: "WAN",
              value: "WAN",
              shaded: false,
              icon: WAN_ICON,
              image: WAN_ICON,
              mobile_image: "",
              menus: {
                SD_WAN: {
                  label: "SD WAN",
                  value: "SD_WAN",
                  path: "/wan/sd-wan",
                },
                SASE: {
                  label: "SASE",
                  value: "SASE",
                  path: "/wan/SASE",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/wan/software-denied-networking",
                },
                VPN: {
                  label: "Virtual Private Network",
                  value: "VPN",
                  path: "/wan/virtual-private-network",
                },
              },
            },

            //--Wireless and mobility --
            WAM: {
              label: "Wireless & Mobility",
              value: "WAM",
              shaded: false,
              icon: WAM_ICON,
              image: WAM_ICON,
              mobile_image: "",
              menus: {
                WI_FI_6: {
                  label: "Wi-Fi-6",
                  value: "WI_FI_6",
                  path: "/wireless-and-mobility/wi-fi-6",
                },
                UNIFIED_WIRELESS: {
                  label: "Unified Wireless",
                  value: "UNIFIED_WIRELESS",
                  path: "/wireless-and-mobility/Unified-Wireless",
                },
                ENTERPRISE_WIRELESS: {
                  label: "Enterprise Wireless",
                  value: "ENTERPRISE_WIRELESS",
                  path: "/wireless-and-mobility/Enterprise-Wireless",
                },
                LBS: {
                  label: "Location Based Services",
                  value: "LBS",
                  path: "/wireless-and-mobility/Location-Based-Services",
                },
                CMW: {
                  label: "Cloud Managed wireless",
                  value: "CMW",
                  path: "/wireless-and-mobility/Cloud-Managed-wireless",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                OOB_MANAGEMENT: {
                  label: "OOB Management",
                  value: "OOB_MANAGEMENT",
                  path: "/miscellaneous/OOB-Management",
                },
                AMH: {
                  label: "Automated Monitoring & Helpdesk",
                  value: "AMH",
                  path: "/miscellaneous/Automated-Monitoring-Helpdesk",
                },
                TELEMETRY: {
                  label: "Telemetry",
                  value: "TELEMETRY",
                  path: "/miscellaneous/Telemetry",
                },
                OA: {
                  label: "Orchestration and Automation",
                  value: "OA",
                  path: "/miscellaneous/Orchestration-and-Automation",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
                // -- Cisco DNA
                CISCO_DNA_2: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA_2",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN_2: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN_2",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI_2: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI_2",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS_2: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS_2",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS_2: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS_2",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL_2: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL_2",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC_2",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
              },
            },
          },
        },
      },

      /**
       * Security and cyber Security
       */
      SECURITY: {
        label: "SECURITY AND CYBERSECURITY",
        value: "SECURITY",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * DATA CENTER AND VIRTUALIZATION
       */
      DATA_CENTER: {
        label: "DATA CENTER AND VIRTUALIZATION",
        value: "DATA_CENTER",
        menus: {
          image: DATA_CENTER_SECURITY_IMAGE,
          mobile_image: MOBILE_DATA_SECURITY_IMAGE,
          title: "Data Center Security",
          color: THEME_COLOR.data_center_security,
          subtitle: `Data Center Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },

            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * COLLABORATION AND PRODUCTIVITY
       */
      COLLABORATION: {
        label: "COLLABORATION AND PRODUCTIVITY",
        value: "COLLABORATION",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * SERVICE PROVIDER
       */
      SP: {
        label: "SERVICE PROVIDER",
        value: "SP",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * CLOUD AND COMPUTING
       */
      CAC: {
        label: "CLOUD AND COMPUTING",
        value: "CAC",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * INTERNET OF THINGS
       */
      IOT: {
        label: "INTERNET OF THINGS (IoT)",
        value: "IOT",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
    },
  },
  SERVICES: {
    label: "Services",
    value: "SERVICES",
    isMore: false,
    menus: {
      NETWORKING: {
        label: "NETWORK WIRED AND WIRELESS-ser",
        value: "NETWORKING",
        menus: {
          image: NETWORK_IMAGE,
          mobile_image: MOBILE_NETWORK,
          title: "NETWORK",
          color: THEME_COLOR.color_4,
          subtitle: `Implement enterprise-class connectivity for wired and wireless.Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --LAN --
            LAN: {
              label: "LAN",
              value: "LAN",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                ROUTING: {
                  label: "Routing",
                  value: "ROUTING",
                  path: "/lan/routing",
                },
                SWITCHING: {
                  label: "Switching",
                  value: "SWITCHING",
                  path: "/lan/switching",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/lan/software-denied-networking",
                },
                CMN: {
                  label: "Cloud Managed Network",
                  value: "CMN",
                  path: "/lan/Cloud-Managed-Network",
                },
                IBN: {
                  label: "Intent-based Networking",
                  value: "IBN",
                  path: "/lan/Intent-based-Networking",
                },
                AI: {
                  label: "Artificial Intelligence for IT Operations",
                  value: "AI",
                  path: "/lan/Cloud-Managed-Network",
                },
              },
            },
            // --Wan--
            WAN: {
              label: "WAN",
              value: "WAN",
              shaded: false,
              icon: WAN_ICON,
              image: WAN_ICON,
              mobile_image: "",
              menus: {
                SD_WAN: {
                  label: "SD WAN",
                  value: "SD_WAN",
                  path: "/wan/sd-wan",
                },
                SASE: {
                  label: "SASE",
                  value: "SASE",
                  path: "/wan/SASE",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/wan/software-denied-networking",
                },
                VPN: {
                  label: "Virtual Private Network",
                  value: "VPN",
                  path: "/wan/virtual-private-network",
                },
              },
            },

            //--Wireless and mobility --
            WAM: {
              label: "Wireless & Mobility",
              value: "WAM",
              shaded: false,
              icon: WAM_ICON,
              image: WAM_ICON,
              mobile_image: "",
              menus: {
                WI_FI_6: {
                  label: "Wi-Fi-6",
                  value: "WI_FI_6",
                  path: "/wireless-and-mobility/wi-fi-6",
                },
                UNIFIED_WIRELESS: {
                  label: "Unified Wireless",
                  value: "UNIFIED_WIRELESS",
                  path: "/wireless-and-mobility/Unified-Wireless",
                },
                ENTERPRISE_WIRELESS: {
                  label: "Enterprise Wireless",
                  value: "ENTERPRISE_WIRELESS",
                  path: "/wireless-and-mobility/Enterprise-Wireless",
                },
                LBS: {
                  label: "Location Based Services",
                  value: "LBS",
                  path: "/wireless-and-mobility/Location-Based-Services",
                },
                CMW: {
                  label: "Cloud Managed wireless",
                  value: "CMW",
                  path: "/wireless-and-mobility/Cloud-Managed-wireless",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                OOB_MANAGEMENT: {
                  label: "OOB Management",
                  value: "OOB_MANAGEMENT",
                  path: "/miscellaneous/OOB-Management",
                },
                AMH: {
                  label: "Automated Monitoring & Helpdesk",
                  value: "AMH",
                  path: "/miscellaneous/Automated-Monitoring-Helpdesk",
                },
                TELEMETRY: {
                  label: "Telemetry",
                  value: "TELEMETRY",
                  path: "/miscellaneous/Telemetry",
                },
                OA: {
                  label: "Orchestration and Automation",
                  value: "OA",
                  path: "/miscellaneous/Orchestration-and-Automation",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
                // -- Cisco DNA
                CISCO_DNA_2: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA_2",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN_2: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN_2",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI_2: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI_2",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS_2: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS_2",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS_2: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS_2",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL_2: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL_2",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC_2",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
              },
            },
          },
        },
      },

      /**
       * Security and cyber Security
       */
      SECURITY: {
        label: "SECURITY AND CYBERSECURITY-ser",
        value: "SECURITY",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * DATA CENTER AND VIRTUALIZATION
       */
      DATA_CENTER: {
        label: "DATA CENTER AND VIRTUALIZATION-ser",
        value: "DATA_CENTER",
        menus: {
          image: DATA_CENTER_SECURITY_IMAGE,
          mobile_image: MOBILE_DATA_SECURITY_IMAGE,
          title: "Data Center Security",
          color: THEME_COLOR.data_center_security,
          subtitle: `Data Center Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },

            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * COLLABORATION AND PRODUCTIVITY
       */
      COLLABORATION: {
        label: "COLLABORATION AND PRODUCTIVITY-ser ",
        value: "COLLABORATION",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * SERVICE PROVIDER
       */
      SP: {
        label: "SERVICE PROVIDER -ser",
        value: "SP",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * CLOUD AND COMPUTING
       */
      CAC: {
        label: "CLOUD AND COMPUTING-ser ",
        value: "CAC",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * INTERNET OF THINGS
       */
      IOT: {
        label: "INTERNET OF THINGS (IoT)-ser ",
        value: "IOT",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          mobile_image: MOBILE_SECURITY_IMAGE,
          title: "SECURITY",
          color: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              mobile_image: "",
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              mobile_image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              mobile_image: "",
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              mobile_image: "",
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
    },
  },
  More: {
    label: "More ",
    value: "More",
    isMore: true,
    sideBarMenus: {
      AboutUs: {
        label: "About Us",
        value: "AboutUs",
      },
      WhyChooseUs: {
        label: "Why Choose Us",
        value: "WhyChooseUs",
      },
      Industries: {
        label: "Industries",
        value: "Industries",
      },
      OurPresence: {
        label: "Our Presence",
        value: "OurPresence",
      },
      Testimonials: {
        label: "Our Customers",
        value: "Testimonials",
      },
      Blog: {
        label: "Blog",
        value: "Blog",
      },
      Career: {
        label: "Career",
        value: "Career",
      },
      ContactUs: {
        label: "ContactUs",
        value: "Contact Us",
      },
    },
  },
};

export const ABOUT_US = {
  title: "About Us",
  image: "",
  mobile_image: "",
  subtitle: `
        We are growing as a leading information and communication service provider and 
        we help organizations in developing next generation infrastructure which keeps them operational without any disruption.
        ${(<br />)}${(<br />)}
        We Design, Deliver & Manage Services that helps our customers in improving their customer experience,
        empower their people, create competitive edge and immediately respond to changing scenario.
        ${(<br />)}${(<br />)}
        We Design, Deliver & Manage Services that helps our customers in improving their customer experience,
        empower their people, create competitive edge and immediately respond to changing scenario.
        `,
};

export const CONTACT_US = {
  title: "Contact Us",
  image: "",
  mobile_image: "",
  subtitle: `
  We are growing as a leading information and communication service 
  provider and we help organizations in developing next generation infrastructure which keeps them operational without any disruption.
  ${(<br />)}${(<br />)}
  We Design, Deliver & Manage Services that helps our customers in improving their customer experience,
   empower their people, create competitive edge and immediately respond to changing scenario.
        `,
  Technology: {
    value: "Technology",
    title: "Technology Expense Management & Lifecycle Solutions",
    list: [
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
    ],
  },
};
