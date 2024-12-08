import { initShopAnalyzer } from './shopAnalyzer.behavior.js';
import { initEventHandlers } from './eventHandlers.behavior.js';
import { initUIRenderer } from './uiRenderer.behavior.js';
import { initChartManager } from './chartManager.behavior.js';

class MainBehavior {
    constructor() {
        this.shopAnalyzer = initShopAnalyzer();
        this.eventHandlers = initEventHandlers();
        this.uiRenderer = initUIRenderer();
        this.chartManager = initChartManager();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.eventHandlers.setupEventListeners();
            this.uiRenderer.initializeUI();
        });
    }
}

export const mainBehavior = new MainBehavior();
mainBehavior.init();
