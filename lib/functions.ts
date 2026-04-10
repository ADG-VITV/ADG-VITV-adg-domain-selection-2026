import { User } from "firebase/auth";
import { database } from "./firebase/config";
import {
  Domain,
  IMCQ,
  IResponseMCQ,
  IResponseSub,
  ISubjective,
  ITestStatus,
  ManagementDomain,
} from "./types";
import { child, ref, get, set } from "firebase/database";

const dbRef = ref(database);

export async function getDataFromDatabase<T>(path: string): Promise<T | null> {
  try {
    const dataSnap = await get(child(dbRef, path));
    return dataSnap.exists() ? (dataSnap.val() as T) : null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function isTestOpen(): Promise<boolean> {
  try {
    const config = await getDataFromDatabase<{ testOpen: boolean }>("config");
    return config?.testOpen ?? false;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function writeDataToDatabase<T>(
  path: string,
  data: T
): Promise<boolean> {
  try {
    await set(ref(database, path), data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function checkPathExistsInDatabase(
  path: string
): Promise<boolean> {
  try {
    const dataSnap = await get(child(dbRef, path));
    return dataSnap.exists();
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function isSubmissionOpen(): Promise<boolean> {
  try {
    const config = await getDataFromDatabase<{ submissionOpen: boolean }>("config");
    return config?.submissionOpen ?? false;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function submitAssignmentLink(
  user: User,
  domain: Domain,
  link: string
): Promise<boolean> {
  try {
    const allowed = await isSubmissionOpen();

    if (!allowed) {
      console.log("Submission blocked: deadline passed");
      return false;
    }

    await writeDataToDatabase(
      `users/${user.uid}/responses/technicalDomain/${domain}/assignmentLink`,
      link
    );

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

/* =========================
   EXISTING FUNCTIONS
   ========================= */

export async function checkTechnicalDomainSubmission(
  user: User,
  domain: Domain
): Promise<boolean> {
  return checkPathExistsInDatabase(
    `users/${user.uid}/responses/technicalDomain/${domain}/assignmentLink`
  );
}

export async function getSubmittedTechnicalDomains(
  user: User
): Promise<Domain[]> {
  const submittedDomains: Domain[] = [];

  const promises = Object.values(Domain).map(async (domain) => {
    const hasSubmitted = await checkTechnicalDomainSubmission(user, domain);
    if (hasSubmitted) submittedDomains.push(domain);
  });

  await Promise.all(promises);
  return submittedDomains;
}

export async function checkManagementDomainSubmission(
  user: User,
  domain: Domain
): Promise<boolean> {
  return checkPathExistsInDatabase(
    `users/${user.uid}/responses/managementDomain/${domain}/assignmentLink`
  );
}

export async function getSubmittedManagementDomains(
  user: User
): Promise<Domain[]> {
  const submittedDomains: Domain[] = [];
  const managementDomains = ["editorial", "events", "finance"];

  const promises = managementDomains.map(async (domain) => {
    const hasSubmitted = await checkManagementDomainSubmission(
      user,
      domain as Domain
    );
    if (hasSubmitted) submittedDomains.push(domain as Domain);
  });

  await Promise.all(promises);
  return submittedDomains;
}

export function getShuffledRandomQuestions(
  questions: (IMCQ | ISubjective)[]
): (IMCQ | ISubjective)[] {
  const general = questions.filter(
    (q) => q.domain === ManagementDomain.management
  );
  const others = questions.filter(
    (q) => q.domain !== ManagementDomain.management
  );

  const randomOthers = others.sort(() => 0.5 - Math.random()).slice(0, 5);

  return [...general, ...randomOthers].sort(() => 0.5 - Math.random());
}

export function getTimeDifferenceInMinutes(
  epoch1: number,
  epoch2: number
): number {
  return Math.abs(epoch1 - epoch2) / (1000 * 60);
}

export function getTimeRemainingInTest(testStatus: ITestStatus) {
  return 45 - getTimeDifferenceInMinutes(testStatus.testStartEpoch, Date.now());
}

export async function saveResponse(
  user: User,
  response: IResponseMCQ | IResponseSub
) {
  try {
    await writeDataToDatabase(
      `users/${user.uid}/responses/managementDomain/${response.questionId}`,
      response
    );
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function updateTestStatus(user: User, testStatus: ITestStatus) {
  try {
    await writeDataToDatabase(
      `users/${user.uid}/testStatus`,
      testStatus
    );
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}