import { wapHeader_1 } from '../../templates/header/wap-header-1';
import { wapHeader_2 } from '../../templates/header/wap-header-2';
import { wapHeader_3 } from '../../templates/header/wap-header-3';
import { wapHero_1 } from '../../templates/hero/wap-hero-1';
import { wapHero_2 } from '../../templates/hero/wap-hero-2';
import { wapCard_1 } from '../../templates/card/wap-card-1';
import { wapCard_1_2 } from '../../templates/card/wap-card-1-2';
import { wapCard_2 } from '../../templates/card/wap-card-2';
import { wapCard_2_2 } from '../../templates/card/wap-card-2-2';
import { wapGallery_1 } from '../../templates/gallery/wap-gallery-1';
import { wapTxt_2 } from '../../templates/txt/wap-txt-2';
import { wapFooter_1 } from '../../templates/footer/wap-footer-1';
import { wapFooter_2 } from '../../templates/footer/wap-footer-2';
// import { };


export const templateService = {
   getSectionsCategories,
   getTemplateSections,
   getById
}



const sectionsCategories = ['wap-header', 'wap-section', 'wap-hero', 'wap-txt', 'wap-card', 'wap-gallery', 'wap-form', 'wap-footer']//map, video,form

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

function getSectionsCategories() {
   return sectionsCategories
}

function getTemplateSections() {
   return templateSections
}

function getById(templateId) {
   return templateSections.find(t => t.id === templateId)
}