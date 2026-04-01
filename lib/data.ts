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
  web: "https://drive.google.com/file/d/1kVmWRXIMb2oG_mTEiIwtKkggNMUW5XD71LhQqiBpRjY/preview",
  ios: "https://drive.google.com/file/d/1wKx2PE6Y77FQwxmicYZ-2oEgdhgdhAU_M3tuKCQCszM/preview",
  python: "https://drive.google.com/file/d/1PSrzPj8RjmHbqKhoMlkv0zxP5NrfyKWl/preview",
  ml: "https://drive.google.com/file/d/1ecAhgwf9BN7o8eeL-pZ38jng3LNhhK3LjylCg781I58/preview",
  blockchain: "https://drive.google.com/file/d/1BFqzbfuYhbL37khra__rI8VjzY995nct/preview",
  design: "https://drive.google.com/file/d/1-TrPwnITh0-GLfqA55SMCjnigJeeP4RB/preview",
  motion_graphics:"https://drive.google.com/file/d/124_QshcN1Zi1-HJTQhHUnkwIbCvsBV9XsDlElV3RF-g/preview",
  management:"https://drive.google.com/file/d/1fljQDqyfvYztsNRU4E2SQTGOi0x0zL1CdDL6gCxMV8A/preview",
  pnm: "https://drive.google.com/file/d/1mvn3UrKsmDrc8QnqzYnOkTZI7_G5m5mJZzhw8yC2JZw/preview"
};

export const managementDomainToTagColorScheme: {
  [key in ManagementDomain]: string;
} = {
  management: "red",
  pnm: "green",
};