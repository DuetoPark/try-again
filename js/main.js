const ITEM_COUNT_LIMIT = 5;

import Modal from './_modals.js';
import Drawer from './_drawers.js';
import Scroll from './_scroll.js';
import History from './_search-history.js';
import * as tab from './_tab.js';

const modal = new Modal();

const sidebarMenu = new Drawer('sidebar-nav');
const productInquiry = new Drawer('product-inquiry');
const productShipment = new Drawer('product-shipment');

const pageNavigation = new Scroll('product-tab-list');
pageNavigation.setClickListenr((selectedTab) => {
  tab.inactiveAll(pageNavigation.tabItems);
  tab.highlight(selectedTab);
});

const gnbSearch = new History('gnb-search', ITEM_COUNT_LIMIT);
gnbSearch.count || gnbSearch.showPlaceHolder();

const searchModal = new History('search-modal', ITEM_COUNT_LIMIT);
searchModal.count || searchModal.showPlaceHolder();
