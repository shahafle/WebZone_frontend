// *** WAP Templates *** //
import { wapTemplate_1 } from '../templates/wap/wap-template-1';
import { wapTemplate_2 } from '../templates/wap/wap-template-2';
import { wapTemplate_3 } from '../templates/wap/wap-template-3';
import { wapTemplate_4 } from '../templates/wap/wap-template-4';
import { wapTemplate_5 } from '../templates/wap/wap-template-5';
import { wapTemplate_6 } from '../templates/wap/wap-template-6';
import { wapTemplate_7 } from '../templates/wap/wap-template-7';


// Cards
import { wapCard_1 } from '../templates/card/wap-card-1';
import { wapCard_1_2 } from '../templates/card/wap-card-1-2';
import { wapCard_2 } from '../templates/card/wap-card-2';
import { wapCard_2_2 } from '../templates/card/wap-card-2-2';
import { wapCard_6 } from '../templates/card/wap-card-6';
import { wapCard_7 } from '../templates/card/wap-card-7';
import { wapCard_7_2 } from '../templates/card/wap-card-7-2';
// Footers
import { wapFooter_1 } from '../templates/footer/wap-footer-1';
import { wapFooter_2 } from '../templates/footer/wap-footer-2';
import { wapFooter_4 } from '../templates/footer/wap-footer-4';
// Forms
import { wapForm_3 } from '../templates/form/wap-form-3';
import { wapForm_6 } from '../templates/form/wap-form-6';
// Galleries
import { wapGallery_1 } from '../templates/gallery/wap-gallery-1';
import { wapGallery_3 } from '../templates/gallery/wap-gallery-3';
// Headers
import { wapHeader_1 } from '../templates/header/wap-header-1';
import { wapHeader_2 } from '../templates/header/wap-header-2';
import { wapHeader_7 } from '../templates/header/wap-header-7';
// Heros
import { wapHero_1 } from '../templates/hero/wap-hero-1';
import { wapHero_2 } from '../templates/hero/wap-hero-2';
import { wapHero_3 } from '../templates/hero/wap-hero-3';
import { wapHero_4 } from '../templates/hero/wap-hero-4';
import { wapHero_5 } from '../templates/hero/wap-hero-5';
import { wapHero_6 } from '../templates/hero/wap-hero-6';
import { wapHero_7 } from '../templates/hero/wap-hero-7';
// Sections
import { wapSection_3 } from '../templates/section/wap-section-3';
import { wapSection_4 } from '../templates/section/wap-section-4';
import { wapSection_4_2 } from '../templates/section/wap-section-4-2';
import { wapSection_4_3 } from '../templates/section/wap-section-4-3';
import { wapSection_4_4 } from '../templates/section/wap-section-4-4';
import { wapSection_7 } from '../templates/section/wap-section-7';
// Texts
import { wapTxt_2 } from '../templates/txt/wap-txt-2';
import { wapTxt_7 } from '../templates/txt/wap-txt-7';





export const templateService = {
   getSectionsCategories,
   getWapTemplates,
   getWapTemplateById,
   getTemplateSections,
   getTemplateSectionById
}

const wapTemplates = [
   wapTemplate_1,
   wapTemplate_2,
   wapTemplate_3,
   wapTemplate_4,
   // wapTemplate_5,
   wapTemplate_6,
   wapTemplate_7,
]

const sectionsCategories = ['wap-header', 'wap-hero', 'wap-section', 'wap-text', 'wap-card', 'wap-gallery', 'wap-form', 'wap-footer']//map, video,form 'wap-form','wap-section',

const templateSections = [
   // Cards
   wapCard_1,
   wapCard_1_2,
   wapCard_2,
   wapCard_2_2,
   wapCard_6,
   wapCard_7,
   wapCard_7_2,
   // Footers
   wapFooter_1,
   wapFooter_2,
   wapFooter_4,
   // Form
   wapForm_3,
   wapForm_6,
   // Galleries
   wapGallery_1,
   wapGallery_3,
   // Headers
   wapHeader_1,
   wapHeader_2,
   wapHeader_7,
   // Heros
   wapHero_1,
   wapHero_2,
   wapHero_3,
   wapHero_4,
   wapHero_5,
   wapHero_6,
   wapHero_7,
   // Sections
   wapSection_3,
   wapSection_4,
   wapSection_4_2,
   wapSection_4_3,
   wapSection_4_4,
   wapSection_7,
   // Texts
   wapTxt_2,
   wapTxt_7,
]

function getWapTemplates() {
   return wapTemplates;
}

function getWapTemplateById(wapTemplateId) {
   return wapTemplates.find(wapTemplate => wapTemplate._id === wapTemplateId);
}

function getTemplateSections() {
   return templateSections;
}

function getTemplateSectionById(templateSectionId) {
   return templateSections.find(templateSection => templateSection.id === templateSectionId);
}

function getSectionsCategories() {
   return sectionsCategories;
}