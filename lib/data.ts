import { Domain, ManagementDomain } from "./types";

export const domainToName: { [key in Domain]: string } = {
  web: "Web",
  ios: "iOS",
  python: "Python",
  ml: "Machine Learning",
  blockchain: "Blockchain",
  design: "Design",
  motiongraphics: "Motion Graphics",
  management:'Management',
  PnM:'Publicity and Marketing',
};

export const domainToTaskLink: { [key in Domain]: string } = {
  web: "https://drive.google.com/file/d/1hb0fmWeW7xdfug7sGC5uvMaHLnLXfGxV/preview",
  ios: "https://drive.google.com/file/d/1WKBRFT09UdXiT94ZrbDYJA6sglgLtWZySeqNfWlF-5g/preview",
  python: "https://drive.google.com/file/d/1PSrzPj8RjmHbqKhoMlkv0zxP5NrfyKWl/preview",
  ml: "https://drive.google.com/file/d/1st9vnzs1_yln9bqEaeRT-Hd91k7Mrqw7/preview",
  blockchain: "https://drive.google.com/file/d/1BFqzbfuYhbL37khra__rI8VjzY995nct/preview",
  design: "https://drive.google.com/file/d/1-TrPwnITh0-GLfqA55SMCjnigJeeP4RB/preview",
  motiongraphics:"https://drive.google.com/file/d/1dMWWD1tP4NTmlruwA_OKlDP2JJRW4I6E/preview",
  management:"https://drive.google.com/file/d/1wUtjMgah3WcR_-H3fRGV9x8pKS4favHs/preview",
  PnM: "https://drive.google.com/file/d/1ps2EO9Qcu2IFG3Z0NW0kcX6732-9D-Ui/preview"
};

export const managementDomainToTagColorScheme: {
  [key in ManagementDomain]: string;
} = {
  management: "red",
  PnM: "green",
};