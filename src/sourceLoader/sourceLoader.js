import { files } from './files'; 

class SourceLoader {

    async loadScript(file) {
        return new Promise(resolve => {
            const s = document.createElement("script");
            s.src = file;
            s.onload = resolve;
            document.head.appendChild(s);
        });
    }
    
    async loadScriptsSynchronously() {
        for (const file of files) {
            await this.loadScript(file);
        }
    }

}

export default SourceLoader;
