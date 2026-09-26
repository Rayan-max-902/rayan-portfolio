/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'fr' | 'en' | 'ar' | 'es';

export interface Translation {
  mainName: string;
  title: string;
  profileTitle: string;
  profileText: string;
  educationTitle: string;
  edu1Title: string;
  edu1Text: string;
  edu2Title: string;
  edu2Text: string;
  edu3Title: string;
  edu3Text: string;
  edu4Title: string;
  edu4Text: string;
  edu5Title: string;
  edu5Text: string;
  experienceTitle: string;
  exp1Title: string;
  exp1Text: string;
  exp2Title: string;
  exp2Text: string;
  exp3Title: string;
  exp3Text: string;
  exp4Title: string;
  exp4Text: string;
  exp5Title: string;
  exp5Text: string;
  exp6Title: string;
  exp6Text: string;
  exp7Title: string;
  exp7Text: string;
  exp8Title: string;
  exp8Text: string;
  skillsTitle: string;
  skillsList: string[];
  languagesTitle: string;
  languagesList: string[];
  contactTitle: string;
  contactPhone: string;
  contactEmail: string;
  contactLocation: string;
  commentsTitle: string;
  namePlaceholder: string;
  commentPlaceholder: string;
  publishButton: string;
  instagramLabel: string;
  linkedinLabel: string;
  footer: string;
}

export interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}
