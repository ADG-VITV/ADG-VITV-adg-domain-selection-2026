import { Domain, ManagementDomain } from "./types";

export const domainToName: { [key in Domain]: string } = {
  web: "Web",
  ios: "iOS",
  python: "Python",
  ml: "Machine Learning",
  blockchain: "Blockchain",
  design: "Design",
  motion_graphics: "Motion Graphics",
  management:'Management',
  pnm:'Publicity and Marketing',
};

export const domainToTaskLink: { [key in Domain]: string } = {
  web: "/pdfs/Web.pdf",
  ios: "/pdfs/iOS.pdf",
  python: "/pdfs/Python.pdf",
  ml: "/pdfs/Ml.pdf",
  blockchain: "/pdfs/Blockchain.pdf",
  design: "/pdfs/Design.pdf",
  motion_graphics: "/pdfs/Motion.pdf",
  management: "/pdfs/Management.pdf",
  pnm: "/pdfs/pnm.pdf",
};

export const managementDomainToTagColorScheme: {
  [key in ManagementDomain]: string;
} = {
  management: "red",
  pnm: "green",
};