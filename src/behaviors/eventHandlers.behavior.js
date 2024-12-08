import { shopAnalyzer } from './shopAnalyzer.behavior.js';
import { uiRenderer } from './uiRenderer.behavior.js';

class EventHandlersBehavior {
    constructor() {
        this.analyzeBtn = null;
        this.resetBtn = null;
        this.vintedDataInput = null;
    }

    setupEventListeners() {
        this.analyzeBtn = document.getElementById('analyzeBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.vintedDataInput = document.getElementById('vintedData');

        this.analyzeBtn.addEventListener('click', () => this.handleAnalyzeClick());
        this.resetBtn.addEventListener('click', () => this.handleResetClick());
        this.vintedDataInput.addEventListener('paste', (e) => this.handleDataPaste(e));
    }

    handleAnalyzeClick() {
        const text = this.vintedDataInput.value.trim();
        if (!text) {
            alert('Veuillez coller le contenu de votre profil Vinted');
            return;
        }

        const analysisData = shopAnalyzer.analyzeVintedData(text);
        uiRenderer.renderResults(analysisData);
    }

    handleResetClick() {
        this.vintedDataInput.value = '';
        uiRenderer.resetUI();
    }

    handleDataPaste(event) {
        // Optional: Add specific paste handling logic
        console.log('Data pasted');
    }
}

export const initEventHandlers = () => new EventHandlersBehavior();
