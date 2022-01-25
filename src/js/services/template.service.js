// *** WAP Templates *** //
import { wapTemplate_1 } from '../templates/wap/wap-template-1';
import { wapTemplate_2 } from '../templates/wap/wap-template-2';
import { wapTemplate_3 } from '../templates/wap/wap-template-3';

// Headers
import { wapHeader_1 } from '../templates/header/wap-header-1';
import { wapHeader_2 } from '../templates/header/wap-header-2';
import { wapHeader_3 } from '../templates/header/wap-header-3';
// Heros
import { wapHero_1 } from '../templates/hero/wap-hero-1';
import { wapHero_2 } from '../templates/hero/wap-hero-2';
// Cards
import { wapCard_1 } from '../templates/card/wap-card-1';
import { wapCard_1_2 } from '../templates/card/wap-card-1-2';
import { wapCard_2 } from '../templates/card/wap-card-2';
import { wapCard_2_2 } from '../templates/card/wap-card-2-2';
// Galleries
import { wapGallery_1 } from '../templates/gallery/wap-gallery-1';
// Texts
import { wapTxt_2 } from '../templates/txt/wap-txt-2';
// Footers
import { wapFooter_1 } from '../templates/footer/wap-footer-1';
import { wapFooter_2 } from '../templates/footer/wap-footer-2';


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
]

const sectionsCategories = ['wap-header', 'wap-hero', 'wap-text', 'wap-card', 'wap-gallery', 'wap-footer']//map, video,form 'wap-form','wap-section',

const templateSections = [
   wapHeader_1,
   wapHeader_2,
   // wapHeader_3,
   wapHero_1,
   wapHero_2,
   wapCard_1,
   wapCard_1_2,
   wapCard_2,
   wapCard_2_2,
   wapGallery_1,
   wapTxt_2,
   wapFooter_1,
   wapFooter_2
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