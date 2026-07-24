
        const App = (() => {
            // Private State
            let state = {
                active: false
            };

            // UI Cache
            const elements = {
                status: document.getElementById('js-status'),
                btn: document.getElementById('action-btn')
            };

            // Private Logic
            const updateUI = () => {
                state.active = !state.active;
                elements.status.textContent = `Current State: ${state.active ? 'ACTIVE' : 'IDLE'}`;
                elements.status.style.color = state.active ? 'var(--primary)' : 'var(--text-muted)';
                elements.btn.textContent = state.active ? 'Reset State' : 'Trigger Mutation';
            };

            // Public API
            return {
                init: () => {
                    elements.btn.addEventListener('click', updateUI);
                    console.log('Modern App Initialized');
                }
            };
        })();

        document.addEventListener('DOMContentLoaded', App.init);