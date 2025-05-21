import { useRef } from "react";
import './fileBrowsing.css';

export default function FileBrowser() {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        const files = e.target.files;
        console.log('Selected files: ', files)
    }

    return (
        <div onClick={handleClick} className="file-container">
            Click to Browse files

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    );
}